'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users');

  exports.loadAll = function(req, res) {
    console.log(User);
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

  exports.createNewProfile = function(req, res){
    User.save(function(){
      if(err) res.send(err);
      return this;
    });
  }

  exports.updateUserProfile = function(req, res){
    User.save(function(err){
      if(err) res.send(err);
      return this;
    });
  }