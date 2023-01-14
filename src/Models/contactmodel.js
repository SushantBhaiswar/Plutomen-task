const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    role: {
        type: String,
        required: true,
    },
    UserId: {
        type: ObjectId,
        required: true,
    },

});

module.exports = mongoose.model("Contacts", userSchema)