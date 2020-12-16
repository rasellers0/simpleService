'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    userKey: {
        type: Number
    },
    firstName: {
        type: String,
        required: 'You must enter a value for First Name'
    },
    middleName: {
        type: String,
        required: 'You must enter a value for Middle Name'
    },
    lastName: {
        type: String,
        required: 'You must enter a value for Last Name'
    },
    bio: {
        type: String
    },
    comments: {
        type: Array
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', TaskSchema);