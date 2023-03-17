const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    name: {
        type :  String,
        required : true,
    },
    file: {
        type :  String,
        required : true,
        trim : true
    },
    email : {
        type: String
    }
})

const fileModel = mongoose.model("allfile",fileSchema)

module.exports = fileModel