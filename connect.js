const mongoose = require('mongoose');

exports.connect = () => {
    try{
        mongoose.connect('mongodb://localhost:27017/project;', {useNewUrlParser : true, useUnifiedTopology:true})
       console.log("Connection Successful")
    } catch(err) {
        console.log(err);
        process.exit();
    }
} 