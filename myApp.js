const express = require('express');
const dotenv = require('dotenv')
const app = express();
dotenv.config();

console.log("Hello World");

const absolutePath = __dirname + `/views/index.html`;


app.use("/public", express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.sendFile(absolutePath);
})

app.get('/json', function(req, res) {
    const response = "Hello json"
   if (process.env.MESSAGE_STYLE  === "uppercase") {
        res.json({ "message": response.toUpperCase() });
   } else {
    res.json({ "message": response });
   }
  })
 




































 module.exports = app;
