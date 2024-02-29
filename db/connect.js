const mongoose = require("mongoose");
const connectDB = (uri) =>{
    console.log("yes Mongo DB is also running")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};
module.exports = connectDB;