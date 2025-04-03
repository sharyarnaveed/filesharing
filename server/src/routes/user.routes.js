const {Router}=require("express");
const { Savefile } = require("../controllers/save.controller.js");
const { upload } = require("../middlewares/multer.middleware.js");
const { recieve } = require("../controllers/recievefile.controller.js");

const router=Router();

router.route('/save').post( upload.single('file') ,Savefile)
router.route('/recieve').post(recieve)



module.exports=router;