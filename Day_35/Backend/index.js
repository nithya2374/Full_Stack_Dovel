const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
app.use(express.json());
require('dotenv').config(); 

// Load env variables
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

//connect to db
const ConnectDB = require('./config/db');
ConnectDB();

//Routes
app.use('/api/user',require('./routes/userRoutes'));
app.use('/api/admin',require('./routes/adminRoutes'));

app.get('/',(req,res) =>{
    res.send("E-commerce API is running");
});

app.listen(3000, () => {
    console.log(`server is running at http://${HOST}:${PORT}`);
});