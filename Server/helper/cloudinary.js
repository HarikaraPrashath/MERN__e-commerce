const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name: 'dgwapjtbp',
    api_key: '976424464932446',
    api_secret: '_Wr7ONrD2FVXTFp8P5WlWPXj6h4',
});

const storage = multer.memoryStorage();

async function imageUploadUtils(file) {
    try {
        const result = await cloudinary.uploader.upload(file, {
            resource_type: 'auto',
        });
        return result;
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw new Error('Cloudinary upload failed');
    }
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtils };
