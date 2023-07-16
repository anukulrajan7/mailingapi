const router = require("express").Router();
const{ signup,getbil} = require("../controller/appcontroler.js")

router.post("/user/signup",signup);
router.post('/product/getbil',getbil);



module.exports = router;
