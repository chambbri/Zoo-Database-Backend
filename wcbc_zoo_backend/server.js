var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require("body-parser");
var cors = require('cors')


var app = express();
var PORT = 22131;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {

  res.send("Hello World!!!");;
  
});

app.get("/exhibits", (req, res) => {
  const selectExhibits = "SELECT exhibit_id, type, size, animal_capacity FROM Exhibits"
  mysql.pool.query(selectExhibits, (err, result) => {
    res.send(result);
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});