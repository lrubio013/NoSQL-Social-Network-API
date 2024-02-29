const mongoose = require("mongoose");

//Connection to mongoose server
mongoose.connect("mongodb://127.0.0.1:27017/socialnetwork")

module.exports = mongoose.connection;