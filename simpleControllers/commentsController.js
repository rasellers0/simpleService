'use strict';


var mongoose = require('mongoose'),
User = mongoose.model('Users'),
Comment = mongoose.model('Comments');

exports.loadAll = function(req, res) {
  Comment.find(req.params.contentRef, function(err, comments){
    if (err) res.send(err);
    res.json(comments);
  });
}

exports.loadComment = function(req, res){
  Comment.findById(req.params.commentKey, function(err, comment) {
    if (err) res.send(err);
    res.json(comment);
  });
}

exports.saveComment = function(req, res){
  Comment.save(function(){
    if(err) res.send(err);
    return this;
  });
}

exports.deleteComment = function(req, res){
  Comment.deleteOne(req.param.commentKey, function(err){
    if(err) res.send(err);
    return this;
  });
}
