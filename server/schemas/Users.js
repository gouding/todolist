var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    addTime: Date.now(),
    updateTime:Date.now(),
    content: String
});

module.exports = UserSchema;