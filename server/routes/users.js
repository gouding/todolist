var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserModel = require('./../models/Users');

//connect mongodb

mongoose.connect('mongodb://localhost:27017/test');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//查询 
router.get('/query', (req, res, next) => {
  var word = req.query.word;
  var _filter = {
    $or: [  //多字段同时模糊查询
      { name: { $regex: word, $options: '$i' } }, //$options:'$i' 不区分大小写
      { content: { $regex: word, $options: '$i' } }
    ]
  };
  UserModel.find(_filter)
    .sort({ '_id': -1 })
    .exec((err, doc) => {
      if (err) {
        res.send({
          status: -1,
          msg: err
        });
      } else {
        res.send({
          status: 1,
          msg: '',
          result: doc
        });
      }
    });
});



module.exports = router;
