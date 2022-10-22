const multer = require("multer");
const uuid = require("uuid").v4;

const uploadObject = multer({
    storage: multer.diskStorage({
        destination: "product-data/images",
        filename: function(req, file, cb) {
            cb(null, uuid() + "-" + file.originalname)
        }
    }),
});

const multerMiddleware = uploadObject.single("photo");

module.exports = multerMiddleware;