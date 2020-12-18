'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var commentSchema = new Schema({
    commentKey: {
        type: Number
    },
    PosterKey: {
        type: Number
    },
    ProfileKey: {
      type: Number  
    },
    contentRef: {
        type: Number
    },
    content: {
        type: String
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Comment', CommentSchema);