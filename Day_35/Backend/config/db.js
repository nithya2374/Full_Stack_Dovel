const mongoose = require ('mongoose');
require('dotenv').config(); 

const ConnectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected sucessfully");
    }
    catch(error)
    {
      console.error("disconnected mongodb: ",error);
      process.exit(1);
    }
    
};

module.exports = ConnectDB;