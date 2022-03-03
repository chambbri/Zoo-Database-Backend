var express = require('express');
var mysql = require('./dbcon.js')
var bodyParser = require("body-parser")


var app = express();
var PORT = 22131;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.set("port", PORT);
app.set("mysql", mysql);
app.use("/Exhibits", require("./exhibit_methods"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});