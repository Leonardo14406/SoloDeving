const express = require('express');
const dotenv = require('dotenv')
const app = express();
dotenv.config();

console.log("Hello World");

const absolutePath = __dirname + `/views/index.html`;


app.use("/public", express.static(__dirname + "/public"));

app.get('/json', function(req, res) {
    const greeting = "Hello json";
    res.json({"message": process.env.MESSAGE_STYLE === "uppercase" ? greeting.toUpperCase() : greeting});
  })
 




































 module.exports = app;
