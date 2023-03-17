const multer = require('multer')
// configure how file will be stored
const storage = multer.diskStorage({
destination : (req,file,cb)=>{
    // where to store the file
    cb(null,"./uploads")
},
filename : (req,file,cb)=>{
    cb(null,Date.now() + file.originalname)
}
})

const fileFilter = (req,file,cb)=>{
if(file.mimetype === 'image/jpeg'){
    cb(null,true)
}else{
    cb(null,false)
}
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024*1024*5
    }
})

module.exports = upload




