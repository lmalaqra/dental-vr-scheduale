const { Student } = require("../models/Student");

module.exports = class {
  async findStudentByStudentID(student_id) {
    return await Student.findOne({ student_id });
  }
  async updateStudent(student) {
   return await Student.findOneAndUpdate(
      { student_id: student.student_id },
      { ...student, registered: true },{new:true}
    );
  }
  async createStudent(student) {
    return await Student.create(student);
  }
};
