'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users');

  exports.loadAll = function(req, res) {
    User.find({}, function(err, user){
      if (err) res.send(err);
      res.json(user);
    });
  }

  exports.loadUser = function(req, res){
    User.findById(req.params.userKey, function(err, user) {
      if (err) res.send(err);
      res.json(user);
    });
  }

  