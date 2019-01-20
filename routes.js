const express = require('express');
const routs = express();
const bodyParser = require("body-parser");
routs.use(bodyParser.urlencoded({ extended: false }));
routs.use(bodyParser.json());

routs.set("view engine", "ejs");
routs.use('/', express.static('styles'));

// quering data
let data = require('./assests/data');
let posts = data.Posts;
let Comments = data.Comments;
let books = data.Books
let categories = data.types
books.forEach(item => {

routs.get(item.url, (req, res) => {
        res.sendFile(__dirname + '/assests' + item.url);
});
});

routs.get("/", (req, res) => {
     res.render('stream', { posts: posts, comments: Comments});
});

categories.forEach(category => {
    category = category.trim()
    routs.get(`/${escape(category)}`,(req,res)=>{
        items = []
        books.forEach(book => {
            if (book.Category == category) items.push(book)
        })
        if(items.length === 0) res.render('404')
        res.render('books',{books:items})
    })
})


routs.get(`/search`,(req,res)=>{
res.send(categories)
})

routs.post('/', (req, res) => {
    if (req.body.comment) Comments.push(req.body.comment)
    res.render('stream', { posts: posts, comments: Comments })
});

routs.get("/lib", (req, res) => {
    res.render('lib', { books: books });
});

routs.get("/abt", (req, res) => {
    res.render('abt')
});

routs.get("/login",(req,res)=>{
    res.render('log');
});

routs.get("/register",(req,res)=>{
    res.render('register');
});

routs.post("/login",(req,res)=>{
    res.redirect("/");
});

routs.post("/register",(req,res)=>{
    res.render('register');
});

module.exports = routs;
