const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParse = require('body-parser')
require('dotenv').config()
const getAllBooksRoute = require('./routes/getAllBooks.js');
// const {searchBook} = require('./controllers/controllers.js')
const app = express()

mongoose.connect('mongodb://localhost:27017/BookDirectory')
.then(()=>{
    console.log("Database connected")
})
.catch((err)=>{
    console.log("Error while connecting Database", err)
})
app.use(cors())
app.use(express.json())
app.use(bodyParse.urlencoded({extended:false}))

//API's
app.use('/api/books',getAllBooksRoute)




app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})