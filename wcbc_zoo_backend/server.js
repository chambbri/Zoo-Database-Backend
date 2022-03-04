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

// Get exhibits
app.get("/exhibits", (req, res) => {
  const selectExhibits = "SELECT exhibit_id, type, size, animal_capacity FROM Exhibits"
  mysql.pool.query(selectExhibits, (err, result) => {
    res.send(result);
  });
});

//Get animals
app.get("/animals", (req, res) => {
  const selectAnimals = "SELECT animal_id, exhibit_id, animal_type, origin_country, birthdate, gender FROM Animals";
  mysql.pool.query(selectAnimals, (err, result) => {
    res.send(result);
  });
});

//Get employees
app.get("/employees", (req, res) => {
  const selectEmployees = "SELECT employee_id, fname, lname, phone, email, job_title FROM Employees";
  mysql.pool.query(selectEmployees, (err, result) => {
    res.send(result);
  });
});

//Get animal services
app.get("/animalservices", (req, res) => {
  const selectAnimalServices = "SELECT animal_services_id, animal_id, date, time, type_of_care FROM Animal_Services";
  mysql.pool.query(selectAnimalServices, (err, result) => {
    res.send(result);
  });
});

//Get animal employee services
app.get("/animalemployeeservices", (req, res) => {
  const selectAnimalEmployeeServices = "SELECT animal_services_id, employee_id FROM Animal_Employee_Services";
  mysql.pool.query(selectAnimalEmployeeServices, (err, result) => {
    res.send(result);
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});