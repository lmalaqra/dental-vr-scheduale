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

  async registerStudent(slot, student) {
    const sched = await Scheduale.findOne({ week: slot.week });

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

  async isStudenedBooked(id) {
    // const student=  await Student.find({
    //   student_id:id
    // });
    const obj = {
      week: "",
      slot: { id: "", students: [] },
    };

    const scheduale = await Scheduale.findOne(
      {
        "slots.students.student_id": id,
      },
      { "slots.$": 1, week: 1,start_date:1 }  
    );
    // if (!scheduale) throw new Erorr("your already booked ");
    // const slots = [...scheduale.slots].filter((el) => {
    //   el.students.some((e, i) => {if(e.)});
    // });

    if (!scheduale) throw new Error("student not Found please book ");
    return { scheduale };
  }
};
