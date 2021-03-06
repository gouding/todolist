var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var _ = require('underscore');
var UserModel = require('./../models/Users');

//connect mongodb

mongoose.connect('mongodb://localhost:27017/test');

//查询 
router.get('/query', (req, res, next) => {
  var word = req.query.word || '';
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
  console.log(req.body);
  console.log(req.query);
  var user = req.body.user;
  var content = req.body.content;
  if (!user) {
    res.send({
      status: -1,
      msg: '请输入小伙伴儿哦'
    });
    return;
  }
  var content = {
    name: user,
    content: content,
    addTime: Date.now(),
    uid: Math.floor(Math.random() * 100)
  }
  var model = new UserModel(content, false);
  model.save((err) => {
    console.log(err);
    if (err) {
      console.log(err);
      res.send({
        status: -1,
        msg: err
      });
    } else {
      res.send({
        status: 1,
        msg: ''
      });
    }
  });
});

router.post('/edit', (req, res, next) => {
  var id = req.body.id;
  console.log(id);
  var sid = mongoose.Types.ObjectId(id);
  UserModel.find({ '_id': sid }).then((docs) => {
    res.send({
      status: 1,
      result: docs || '',
      msg: ''
    });
  });
});

router.post('/save', (req, res, next) => {
  var data = req.body.data;
  var _model = {
    uid: data.uid,
    name: data.name,
    content: data.content,
    addTime: Date.now()
  };
  if (data._id) {
    //update
    var id = mongoose.Types.ObjectId(data._id);
    UserModel.find({ _id: id }).then(ret => {
      console.log(ret);
      var obj = _.extend(ret[0], _model);
      obj.save().then(rets => {
        console.log('rets', rets);
      });
    });
    // UserModel.update({ _id: id }, _model, { multi: true }, (err, data) => {
    //   console.log(err, data, typeof data._id);
    // });
  } else {
    //create
    var model = new UserModel(_model, false);
    model.save().then(ret => {
      console.log(ret);
    });
  }
  res.send({
    status: 1,
    msg: ''
  });
});
module.exports = router;
