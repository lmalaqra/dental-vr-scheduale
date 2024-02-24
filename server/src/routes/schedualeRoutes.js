const SchedualeController = require("../controllers/schedualeController");
const schedualeController = new SchedualeController();

const router = require("express").Router();

router
  .route("/")
  .get(schedualeController.getScheduale)
  .patch(schedualeController.updateSchedualeScheme)
  .post(schedualeController.registerStudent);

router.get("/:id",schedualeController.isStudentedBooked)

module.exports = router;
