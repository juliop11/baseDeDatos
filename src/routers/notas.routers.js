const {Router} = require ("express")
const router = Router();
const studentsCtrl = require("../controller/notas.controller")

router.get("/studentsMedia", studentsCtrl.getMedia);       
router.get("/studentsApuntadas", studentsCtrl.getApuntadas);
router.get("/studentsImpartidas", studentsCtrl.getImpartidas);       
 

module.exports = router;