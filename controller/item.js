const fileModel = require('../model/fileModel')
const path = require('path')

const getItems = async(req,res)=>{
    const {email} = req.body
    try {
        const files = await fileModel.find({email:email})
        res.send(files)
    } catch (error) {
        console.log("getItems: ",error)
    }
}

const addFiles = async(req,res)=>{
const {name,email} = req.body
const file = req.file.path
try {
    const data = await fileModel.create({name,file,email})
    res.json(data)
} catch (error) {
    res.send(error)
}
}

const downLoadFile = async(req,res)=>{
    const {id} = req.params
    try {
        const item = await fileModel.findById(id)
        if(! item){
            res.status(200).send("file not found")
        }
        const file = item.file
        const filepath = path.join(__dirname,`../${file}`)
        res.sendfile(filepath)
    } catch (error) {
        console.log("download error: ",error)
    }
}


module.exports = {getItems,addFiles,downLoadFile}
