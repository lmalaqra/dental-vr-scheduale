const StudentServices = require("../services/studentServices");
const studentServices = new StudentServices();

module.exports = class {
  async login(req, res, next) {
    const { student_id } = req.body;
    try {
      const student = await studentServices.findStudentByStudentID(student_id);
      console.log(student)

      if (student) {throw new Error("You are already registered")};

      const updatedStudent = await studentServices.createStudent(req.body);
      res.status(200).json(updatedStudent);
    } catch (e) {
      next(e);
    }
  }
  async createStudent(req, res, next) {
    try {
      const result = await studentServices.createStudent(req.body);
      res.json(result);
    } catch (e) {
      console.log(e);
      next(e)
    }
  }
  async getStudentByStudentId(req, res, next) {
    try {
      const st = await studentServices.findStudentByStudentID(
        req.query.student_id
      );
      res.json(st);
    } catch (e) {
      console.log(e);
      next(e)
    }
  }
};
