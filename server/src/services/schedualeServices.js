const Scheduale = require("../models/Scheduale");
const { Student } = require("../models/Student");
const { ObjectId } = require("mongodb");
module.exports = class {
  async findScheduale() {
    return await Scheduale.find().sort({ week: 1 });
  }
  async updateSchedualeScheme() {
    return await Scheduale.updateMany(
      {},
      { $set: { "slots.$.full": false } },
      { multi: true }
    );
  }

  async registerStudent(slot, student_id) {
    const isBooked=await this.checkStudentBooking(student_id);
    if(isBooked)throw new Error ('you are already registerd');
    const sched = await Scheduale.findOne({ week: slot.week });
    const student=await Student.findOne({student_id});
    console.log(student,"this is student",student_id);

    const avilSlot = [...sched.slots].find((el) => el.id === slot.id);
    
    if (avilSlot.students.length >= 5)
      throw new Error("this Time is already full please selects another time ");
    if (avilSlot.students.length === 4)
      return await Scheduale.findOneAndUpdate(
        {
          week: slot.week,
          "slots.id": slot.id,
        },
        {
          $push: { "slots.$.students": { ...student } },
          $set: { "slots.$.full": true },
        }
      );


    return await Scheduale.findOneAndUpdate(
      {
        week: slot.week,
        "slots.id": slot.id,
      },
      { $push: { "slots.$.students": { ...student } } }
    );
  }

  async deleteBooking(student_id, week, id) {
    return await Scheduale.findOneAndUpdate(
      { week, "slots.id": id },
      { $pull: { "slots.$.students": { student_id } }, $set: { "slots.$.full": false }}
    );
  }

  async findStudentBooking(id) {
    // const student=  await Student.find({
    //   student_id:id
    // });
   

    const scheduale = await Scheduale.findOne(
      {
        "slots.students.student_id": id,
      },
      { "slots.$": 1, week: 1, start_date: 1 }
    );
    // if (!scheduale) throw new Erorr("your already booked ");
    // const slots = [...scheduale.slots].filter((el) => {
    //   el.students.some((e, i) => {if(e.)});
    // });

    if (!scheduale) throw new Error("student not Found please book ");
    return { scheduale };
  }

  // async registerStudent2(id, week, student_id) {
  //   const isBooked=await this.checkStudentBooking(student_id);
  //   if(isbooked)throw new Error('you are already booked')
  //   const student = await Student.findOne({ student_id });
  //   const sched = await Scheduale.findOne({ week });

  //   const avilSlot = [...sched.slots].find((el) => el.id == id);
  //   console.log(avilSlot);

  //   if (avilSlot.students.length >= 5)
  //     throw new Error("this Time is already full please selects another time ");
  //   if (avilSlot.students.length === 4)
  //     return await Scheduale.findOneAndUpdate(
  //       {
  //         week: week,
  //         "slots.id": id,
  //       },
  //       {
  //         $push: { "slots.$.students": { ...student } },
  //         $set: { "slots.$.full": true },
  //       }
  //     );

  //   return await Scheduale.findOneAndUpdate(
  //     {
  //       week: week,
  //       "slots.id": id,
  //     },
  //     { $push: { "slots.$.students": { ...student } } }
  //   );
  // }
async checkStudentBooking(student_id){


  const sched= await Scheduale.find({"slots.students.student_id":student_id});
  if(sched.length===0)return false
  return true

  
}

async emptyScheduale(){


  return await Scheduale.updateMany({},{slots:{$set:{students:[],full:false}}},{multi:true});
}

};
