const express = require("express")
const upload = require("../middleware/multer")
const router = express.Router()
const {getItems,addFiles,downLoadFile} = require('../controller/item')

router.route('/getitems').post(getItems)
router.route('/items').post(upload.single("file"),addFiles)
router.route('/download/:id').get(downLoadFile)

module.exports = router