const mongoose = require('mongoose');
const User = require('./users')
const PostSchema = mongoose.Schema({
    UserName: {
        type: User.name,
        required: true
    },
    Body: {
        type: String,
        required:true
    },
    Comments: {
        type: String,
        required: true
    }
});

module.exports = PostSchema;