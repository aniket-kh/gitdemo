const mongoose = require('mongoose');

const PublisherSchema = new mongoose.Schema( {
    Name :String,
    headQuarter :String

} , { timestamps: true });

module.exports = mongoose.model('Publisher' , PublisherSchema)