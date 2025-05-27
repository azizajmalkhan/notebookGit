const mongoose = require('mongoose');

//const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"


const mongoURI = 'mongodb+srv://admin:Khan%40123@cluster0.4xnxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;