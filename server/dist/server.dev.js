"use strict";

var express = require('express');

var mongoose = require('mongoose');

var cors = require('cors');

var bodyParse = require('body-parser');

require('dotenv').config();

var getAllBooksRoute = require('./routes/getAllBooks.js'); // const {searchBook} = require('./controllers/controllers.js')


var app = express();
mongoose.connect('mongodb://localhost:27017/BookDirectory').then(function () {
  console.log("Database connected");
})["catch"](function (err) {
  console.log("Error while connecting Database", err);
});
app.use(cors());
app.use(express.json());
app.use(bodyParse.urlencoded({
  extended: false
})); //API's

app.use('/api/books', getAllBooksRoute);
app.listen(process.env.PORT, function () {
  console.log("Server is running on ".concat(process.env.PORT));
});
//# sourceMappingURL=server.dev.js.map
