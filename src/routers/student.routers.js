const {Router} = require ("express")
const router = Router();
const studentsCtrl = require("../controller/student.controller")

router.get("/students", studentsCtrl.getStudents);       
router.post("/students", studentsCtrl.postStudents);
router.put("/students", studentsCtrl.putStudents);       
router.delete("/students", studentsCtrl.deleteStudents); 

module.exports = router;