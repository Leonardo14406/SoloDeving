require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

const absolutePath = __dirname + `/views/index.html`;

// Serve static files
app.use("/public", express.static(__dirname + "/public"));
//Serve html file
app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})
//serve json file
app.get('/json', (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE;
    const response = "Hello json";
   if (messageStyle === "uppercase") {
        res.json({"message": response.toUpperCase()});
   } else {
    res.json({"message": response});
   }
  })
  module.exports = app;
 




































 module.exports = app;
