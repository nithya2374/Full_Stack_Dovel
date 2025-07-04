const mongoose = require('mongoose');

const userschema = new mongoose.Schema(
    {
        name:String,
        email: String,
        Wallet : {
            type: Number,
            default:0
        }
    }
);

module.exports = mongoose.model('User',userschema);