const multer = require('multer');
const path = require('path');

exports.fileMiddleware = async (req, res, next) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    });

    req.upload = multer({ storage: storage });
    next()
}