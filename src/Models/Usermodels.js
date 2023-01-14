const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
        enum: ["Research", 'Devlopment', "Production", "Testing", "Sales", "Marketing"]
    }
});

module.exports = mongoose.model("User", userSchema)