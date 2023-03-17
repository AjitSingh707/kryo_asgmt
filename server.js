const express = require('express')
const connectdb = require("./connectdb/db")
connectdb()

const app = express()

app.use(express.json())

app.use('/api/v1',require("./routes/itemRoutes"))

app.listen(8001,()=>{
    console.log("listening.........")
})