const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const morgan = require("morgan")

//database connection
require("./mongo")

//Models
require("./model/Post");

//Middleware
app.use(bodyParser.json())
    .use(morgan());  
    
//Routes
app.use("/posts", require("./routes/posts"))

app.listen(3001, function () {
    console.log("Server is running on port 3001");
})
