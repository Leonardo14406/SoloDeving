const express = require('express');
const dotenv = require('dotenv')
const app = express();
dotenv.config();

console.log("Hello World");

const absolutePath = __dirname + `/views/index.html`;

const response = "Hello json".toUpperCase();
app.use("/public", express.static(__dirname + "/public"));

app.get('/json', function(req, res) {
   if (process.env.MESSAGE_STYLE  === "uppercase") {
        res.json({ "message": response });
   } else {
    res.json("Hello json");
   }
  })
 




































 module.exports = app;
