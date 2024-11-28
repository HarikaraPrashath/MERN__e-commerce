const { imageUploadUtils } = require("../../helper/cloudinary");
const Product = require("../../models/Product.js");



const handleImageUpload = async (req, res) => {
    try {
        const b64 = Buffer.from(req.file.buffer).toString('base64'); 
        const url = `data:${req.file.mimetype};base64,${b64}`; // Correct format
        console.log("Generated URL:", url);

        const result = await imageUploadUtils(url);

        res.json({
            success: true,
            result,
        });
    } catch (e) {
        console.error('Image upload error:', e.message);
        res.status(500).json({
            success: false,
            message: 'Error occurred during image upload',
        });
    }
};

//add new product
const addProduct =  async(req,res)=>{
    try{
        const {image,title,description,category,brand,price,salePrice,totalStock}=req.body

        const newlyCreatedProduct = new Product({
            image,title,description,category,brand,price,salePrice,totalStock
        })
        await newlyCreatedProduct.save();
        res.status(201).json({
            success:true,
            data:newlyCreatedProduct
        })
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:'Error happened'
        })
    }
}



//fetch all the product
const fetchProduct =  async(req,res)=>{
    try{
        const listOfProducts = await Product.find({})
        res.status(200).json({
            success:true,
            data:listOfProducts
        })
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:'Error happened'
        })
    }
}

//edit product
const editProduct =  async(req,res)=>{
    try{
        const{id} = req.params;
        const {image,title,description,category,brand,price,salePrice,totalStock}=req.body

        const findProduct = await Product.findById(id)
        if(!findProduct) return res.status(404).json({
            success:false,
            message:'Not get data'
        })

        Product.title = title || findProduct.title
        Product.description = description || findProduct.description
        Product.category = category || findProduct.category
        Product.brand = brand || findProduct.brand
        Product.price = price || findProduct.price
        Product.salePrice = salePrice || findProduct.salePrice
        Product.totalStock = totalStock || findProduct.totalStock
        Product.image = image || findProduct.image

        await findProduct.save();
        res.status(200).json({
            success:true,
            data:findProduct
        })


    }
    catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:'Error happened'
        })
    }
}

//delete product
const deleteProduct =  async(req,res)=>{
    try{
        const{id} = req.params;
        const product = await Product.findByIdAndDelete(id)

        if(!product) return res.status(404).json({
            success:false,
            message:'Not got the Product'
        })

        res.status(200).json({
            success:true,
            message:'Product deleted successfully'
        })

    }
    catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:'Error happened'
        })
    }
}

module.exports = { handleImageUpload,addProduct,deleteProduct,editProduct,fetchProduct };
