const express = require('express');
const app = express();

console.log("Hello World");

const absolutePath = __dirname + `/views/index.html`;


app.use("/public", express.static(__dirname + "/public"));

app.get('/json', function(req, res) {
    res.json({"message": "Hello json"});
  })
 




































 module.exports = app;
