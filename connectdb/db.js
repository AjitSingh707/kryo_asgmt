const mongoose = require("mongoose")

const connectdb = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/fileupload")
        console.log("database connected ...", mongoose.connection.host)
    } catch (error) {
        console.log("db error: ",error)
    }
}
module.exports = connectdb