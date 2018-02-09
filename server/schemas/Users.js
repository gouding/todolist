var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    uid: String,
    name: String,
    addTime: { type: Date, default: Date.now() },
    content: String
});

module.exports = UserSchema;