const SchedualeServices = require("../services/schedualeServices");
const schedualeServices = new SchedualeServices();
const { Student } = require("../models/Student");

module.exports = class {
  async getScheduale(req, res, next) {
    try {
      const result = await schedualeServices.findScheduale();

      res.json(result);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async updateSchedualeScheme(req, res, next) {
    try {
      const result = await schedualeServices.updateSchedualeScheme();
      res.send("sucess");
    } catch (e) {
      console.log(e);
    }
  }
  async registerStudent(req, res, next) {
    const { slot, student_id } = req.body;
    console.log('this is student_id',student_id,req.body)
    console.log(slot, "this is slot");

    try {
      const regSlot = await schedualeServices.registerStudent(slot, student_id);
      res.status(200).json(regSlot);
    } catch (e) {
      next(e);
    }
  }
  async findStudentBooking(req, res, next) {
    const { id } = req.params;
    console.log(id);

    try {
      const result = await schedualeServices.findStudentBooking(id);
      console.log(result);

      res.json(result);
    } catch (e) {
      console.log(e);
    }
  }

  async changeStudentTime(req, res, next) {
    const { id } = req.params;
    const { week, student_id } = req.query;

    try {
      const slot = await schedualeServices.registerStudent2(
        id,
        week,
        student_id
      );
      res.json(slot);
    } catch (e) {
      console.log(e);
    }
  }

  async deleteBooking(req, res, next) {
    const { student_id, week, id } = req.query;

    try {
      await schedualeServices.deleteBooking(student_id, week, id);
      res.send(true);
    } catch (e) {
      console.log(e);
      res.send(false);
    }
  }

  async checkStudentBooking(req,res,next){
    const {student_id}=req.query
    console.log('i,m here')
    try{

      const isBooked=await schedualeServices.checkStudentBooking(student_id)
      res.json(isBooked)
      
    }catch(e){
      console.log(e)

    }
  }
  async emptyScheduale(req,res,next){

    try{

await schedualeServices.emptyScheduale();
res.send('done');

    }catch(e){
      console.log(e);
      next(e);
    }
  }

};
