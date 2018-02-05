var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    uid: Number
});

module.exports = UserSchema;