var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserModel = require('./../models/Users');

//connect mongodb

mongoose.connect('mongodb://localhost:27017/test');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Denzel' });
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



router.get('/login', (req, res, next) => {
  UserModel.find({}, (err, docs) => {
    if (err) {
      res.send({
        status: '1',
        msg: err
      });
    } else {
      res.send({
        status: '0',
        msg: '',
        result: docs
      });
    }
  })
});
router.post('/addUser', (req, res, next) => {
  var user = req.body.user;
  if (!user) {
    res.send({
      status: '1',
      msg: '请输入小伙伴儿哦'
    });
  }
  var content = {
    name: user,
    uid: Math.floor(Math.random() * 100)
  }
  var model = new UserModel(content, false);
  console.log('model', model, typeof model);
  model.save((err) => {
    console.log(err);
    if (err) {
      console.log(err);
      res.send({
        status: '1',
        msg: err
      });
    } else {
      res.send({
        status: '0',
        msg: ''
      });
    }
  });
});
module.exports = router;
