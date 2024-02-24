const router=require('express').Router();
const StudentController=require('../controllers/studentsController');
const studentController=new StudentController();



router.route('/').get(studentController.getStudentByStudentId).post(studentController.createStudent);

router.post('/login',studentController.login)

module.exports=router;