const mongoose = require('mongoose');
const user = require('./users');
const CommentSchema = mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    name: {
        type:user.name,
        required:true
    }
});

let Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment