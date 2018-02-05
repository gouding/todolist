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
    name: user
  }
  var model = new UserModel(content);
  model.name = 'aaa';
  model.uid = 20;
  console.log('model',model,typeof model);
  model.save((err) => {
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
