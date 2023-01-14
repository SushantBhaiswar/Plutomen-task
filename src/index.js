const express = require("express")
const mongoose = require("mongoose")
const app = express()
const Router = require("./route")

require('dotenv').config()

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB)
    .then(() => {
        console.log("mongodb is connected")
    })
    .catch((err) => {
        console.log(err.message);
    })

app.use(express.json())
app.use("/", Router)

app.listen(process.env.PORT || 3001, () => {
    console.log(`Express app is running on port ${process.env.PORT || 3001}`);
})