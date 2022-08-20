const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema( {
    authorName :String,
    age :Number,
    adderess: String,
    rating :Number
} , { timestamps: true});

module.exports = mongoose.model('Author' , authorSchema)