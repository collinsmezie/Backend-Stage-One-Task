const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// const userSchema = new mongoose.Schema({
    
//     username: {
//         type: String,
//         required: [true, 'Please enter an email address'],
//         unique: true,
//         lowercase: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: [true, 'Please enter a password'],
//         minlength: [6, 'Minimum password length is 6 characters'],
//         trim: true
//     }
// });


userSchema.plugin(passportLocalMongoose);




// // Hash password before saving to database
// userSchema.pre('save', async function(next) {
//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// // validate password
// userSchema.methods.isValidPassword = async function(password) {
//     const user = this;
//     const compare = await bcrypt.compare(password, user.password);
//     return compare;
// };

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;