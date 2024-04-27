const express = require("express");
const app = express();
const mysql = require('mysql2');
const db = require('./dataBase/dataBase');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer  = require('multer');
const path = require('path');

const PORT = process.env.PORT || 5002;

//Using middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//Configuring cors
var corsOptions = {
        origin: "http://localhost:3000",
        methods: "GET,HEAD,PUT,POST,DELETE",
        optionsSuccessStatus: 200,
        credentials: true
  }
  app.use(cors(corsOptions));


//CONNECTING ROUTES
app.use('/user', require('./routes/authRoute'));


// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

 

app.listen(PORT, ()=>{
    console.log(`Application listening on port ${PORT}`);
})




