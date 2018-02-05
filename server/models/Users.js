var mongoose = require('mongoose');
var UserSechma = require('./../models/Users');

module.exports = mongoose.model('User', UserSechma);