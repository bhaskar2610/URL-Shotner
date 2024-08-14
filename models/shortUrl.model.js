const mongoose = require('mongoose');
const { type } = require('os');


const shortUrlSchema = new mongoose.Schema({

    long_url: {
        type: String,
        required: true
    },
    short_code: {
        type: String,
        required: true
    },
    short_url:{
        type: String,
        required:true
    }
})


const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);
module.exports = { ShortUrl };

