const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});


userSchema.plugin(passportLocalMongoose);



const userModel = mongoose.model('BasicAuthUser', userSchema);

module.exports = userModel;