const express = require('express');
const routs = require('./routes');
const mongoose = require('mongoose');
// const socket = require('socket.io');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routs);

const path = require('path')
const PORT = process.env.PORT || 5000
// mongoose.connect('mongodb://Mustafa:safiahmed10777@ds247619.mlab.com:47619/komwledge_stream');
// // let db = mongoose.connections
// let schema = mongoose.Schema({
//     item:String
// });
// let item = mongoose.model('test',schema)
app
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.use('/', express.static('assests'));

app.listen(PORT);