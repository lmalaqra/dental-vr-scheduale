const SchedualeServices = require("../services/schedualeServices");
const schedualeServices = new SchedualeServices();

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
    const { slot, student } = req.body;
    console.log(slot, "this is slot");

    try {
      const regSlot = await schedualeServices.registerStudent(slot, student);
      res.status(200).json(regSlot);
    } catch (e) {
      next(e);
    }
  }
  async isStudentedBooked(req, res, next) {
    const { id } = req.params;
    console.log(id)

    try {
      const result = await schedualeServices.isStudenedBooked(id);
      console.log(result);

      res.json(result);
    } catch (e) {
      console.log(e);
    }
  }
};
