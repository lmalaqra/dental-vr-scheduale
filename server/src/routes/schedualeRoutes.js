const SchedualeController = require("../controllers/schedualeController");
const schedualeController = new SchedualeController();

const router = require("express").Router();

router
  .route("/")
  .get(schedualeController.getScheduale)
  .patch(schedualeController.updateSchedualeScheme)
  .post(schedualeController.registerStudent)
  .delete(schedualeController.deleteBooking);

  router.get("/verify", schedualeController.checkStudentBooking);
  router.delete("/all",schedualeController.emptyScheduale);


router
  .route("/:id")
  .get(schedualeController.findStudentBooking)
  .put(schedualeController.changeStudentTime);

module.exports = router;
