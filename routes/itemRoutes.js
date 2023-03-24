const express = require("express")
const router = express.Router()
const {getItems,addFiles,downLoadFile} = require('../controller/item')

const upload = require("../middleware/multer")



router.route('/getitems').post(getItems)
router.route('/items').post(upload.single("file"),addFiles)
router.route('/download/:id').get(downLoadFile)

module.exports = router