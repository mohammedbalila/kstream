let Posts =
[
    {"name":"John Doh","Post":"this artical is about development"},
    {"name":"Jane Doh","Post":"this artical is about web security"}
]

let Comments = 
[
{"name":"Jane Doh","comment":"very nice!"}
]

let Books = 
[
    {"name":"C language programming","img":"/imgs/js.jpg","url":"/books/Introduction-to-C-Programming-and-Graphics.pdf","Category":"Programming"},
    {"name":"Node.js zero to hero","img":"/imgs/js.jpg","url":"/books/nodejs_tutorial.pdf","Category":"web development"},
    {"name":"python mastering ML","img":"/imgs/js.jpg","url":"/books/python_tutorial.pdf","Category":"Programming"}
]
let types = ["Programming","web development","Game developent","Networks"]

const exp = require('express');
const router = exp();
// module.exports.href = Books.
module.exports.Posts = Posts
module.exports.Comments = Comments
module.exports.Books = Books
module.exports.types = types