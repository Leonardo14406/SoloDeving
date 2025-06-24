const express = require('express');
const app = express();

console.log("Hello World");

const absolutePath = __dirname + `/views/index.html`;


app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.sendFile(absolutePath);
  })
 




































 module.exports = app;
