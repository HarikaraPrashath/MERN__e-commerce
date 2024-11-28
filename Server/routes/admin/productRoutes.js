const express = require('express')
const {handleImageUpload,addProduct,editProduct,deleteProduct,fetchProduct}=  require('../../controller/admin/productsController.js')
const {upload} = require('../../helper/cloudinary.js')

const router = express.Router();

router.post("/upload-image",upload.single('my_file'),handleImageUpload)
router.post("/add",addProduct)
router.put("/edit/:id",editProduct)
router.delete("/delete/:id",deleteProduct)
router.get("/get",fetchProduct)
 

module.exports = router;