const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const product = require("../controllers/product");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    /* cb(null, path.extname(file.originalname).indexOf("jpg") != -1 ? path.resolve(__dirname, "../../public/uploads", "products") : path.resolve(__dirname, "../../public/uploads", "users") ) */
    cb(null, path.join(__dirname, '../../public/uploads/products'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + path.extname(file.originalname))
    /* cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`) */
  }
})

const upload = multer({storage: storage});

router.get("/", product.list);      
router.get("/create", product.create);
router.get("/cart", product.cart);
router.get("/:id", product.detail);
router.get("/edit/:id", product.edit);

/* router.post("/save", (req, res)=> {
  console.log(req.body.name)
}); */
router.post("/save", upload.single("image"), product.save);
router.put("/update/:id", product.update);
router.delete("/:id", product.delete);


module.exports = router;



   
  