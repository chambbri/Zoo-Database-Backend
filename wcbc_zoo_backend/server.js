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

//Search for an animal
app.get("/animals/:animal_type", (req, res) => {
  const animal_type_search = req.params.animal_type;
  const selectAnimal = "SELECT animal_id, exhibit_id, animal_type, origin_country, birthdate, gender FROM Animals WHERE animal_type = ?"
  mysql.pool.query(selectAnimal, animal_type_search, (err, result) => {
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

//Insert an exhibit
app.post("/exhibits", (req, res) => {
  const type = req.body.type;
  const size = req.body.size;
  const animal_capacity = req.body.animal_capacity;
  const insertExhibits = "INSERT INTO Exhibits (type, size, animal_capacity) VALUES (?, ?, ?)";
  mysql.pool.query(insertExhibits, [type, size, animal_capacity], (err, result) => {
    console.log(err);
  });
});

//Insert an animal
app.post("/animals", (req, res) => {
  const exhibit_id = req.body.exhibit_id;
  const animal_type = req.body.animal_type;
  const origin_country = req.body.origin_country;
  const birthdate = req.body.birthdate;
  const gender = req.body.gender;
  const insertAnimals = "INSERT INTO Animals (exhibit_id, animal_type, origin_country, birthdate, gender) VALUES (?, ?, ?, ?, ?)";
  mysql.pool.query(insertAnimals, [exhibit_id, animal_type, origin_country, birthdate, gender], (err, result) => {
    console.log(err);
  });
});

//Insert employees
app.post("/employees", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const phone = req.body.phone;
  const email = req.body.email;
  const job_title = req.body.job_title;
  const insertEmployees = "INSERT INTO Employees (fname, lname, phone, email, job_title) VALUES (?, ?, ?, ?, ?)";
  mysql.pool.query(insertEmployees, [fname, lname, phone, email, job_title], (err, result) => {
    console.log(err);
  });
});

//Insert animal services
app.post("/animalservices", (req, res) => {
  const animal_id = req.body.animal_id;
  const date = req.body.date;
  const time = req.body.time;
  const type_of_care = req.body.type_of_care;
  const insertAnimalServices = "INSERT INTO Animal_Services (animal_id, date, time, type_of_care) VALUES (?, ?, ?, ?)";
  mysql.pool.query(insertAnimalServices, [animal_id, date, time, type_of_care], (err, result) => {
    console.log(err);
  });
});

//Insert animal employee services
app.post("/animalemployeeservices", (req, res) => {
  const animal_services_id = req.body.animal_services_id;
  const employee_id = req.body.employee_id;
  const insertAnimalEmployeeServices = "INSERT INTO Animal_Employee_Services (animal_services_id, employee_id) VALUES (?, ?)";
  mysql.pool.query(insertAnimalEmployeeServices, [animal_services_id, employee_id], (err, result) => {
    console.log(err);
  });
});

//Delete an exhibit
app.delete("/exhibits/:exhibit_id", (req, res)=> {
  const exhibit_id = req.params.exhibit_id;
  const deleteExhibit = "DELETE FROM Exhibits WHERE exhibit_id = ?";
  mysql.pool.query(deleteExhibit, exhibit_id, (err, result) => {
    console.log(err)
  })
})

//Delete an animal
app.delete("/animals/:animal_id", (req, res)=> {
  const animal_id = req.params.animal_id;
  const deleteAnimal = "DELETE FROM Animals WHERE animal_id = ?";
  mysql.pool.query(deleteAnimal, animal_id, (err, result) => {
    console.log(err)
  })
})

//Delete an employee
app.delete("/employees/:employee_id", (req, res)=> {
  const employee_id = req.params.employee_id;
  const deleteEmployee = "DELETE FROM Employees WHERE employee_id = ?";
  mysql.pool.query(deleteEmployee, employee_id, (err, result) => {
    console.log(err)
  })
})

//Delete an animal service
app.delete("/animalservices/:animal_services_id", (req, res)=> {
  const animal_services_id = req.params.animal_services_id;
  const deleteAnimalService = "DELETE FROM Animal_Services WHERE animal_services_id = ?";
  mysql.pool.query(deleteAnimalService, animal_services_id, (err, result) => {
    console.log(err)
  })
})

//Delete an animal employee service
app.delete("/animalemployeeservices/:animal_services_id/:employee_id", (req, res)=> {
  const animal_services_id = req.params.animal_services_id;
  const employee_id = req.params.employee_id;
  const deleteAnimalEmployeeService = "DELETE FROM Animal_Employee_Services WHERE animal_services_id = ? AND employee_id =?";
  mysql.pool.query(deleteAnimalEmployeeService, [animal_services_id, employee_id], (err, result) => {
    console.log(err)
  })
})

//Update an exhbit
app.put("/exhibits/:exhibit_id", (req, res) => {
  const exhibit_id = req.params.exhibit_id;
  const type = req.body.type;
  const size = req.body.size;
  const animal_capacity = req.body.animal_capacity;
  const updateExhibit = "UPDATE Exhibits SET type = ?, size = ?, animal_capacity = ? WHERE exhibit_id = ?";
  mysql.pool.query(updateExhibit, [type, size, animal_capacity, exhibit_id], (err, result) => {
    console.log(err)
  })
})

//Update an animal
app.put("/animals/:animal_id", (req, res) => {
  const animal_id = req.params.animal_id;
  const exhibit_id = req.body.exhibit_id;
  const animal_type = req.body.animal_type;
  const origin_country = req.body.origin_country;
  const birthdate = req.body.birthdate;
  const gender = req.body.gender;
  const updateAnimal = "UPDATE Animals SET exhibit_id = ?, animal_type = ?, origin_country = ?, birthdate = ?, gender = ? WHERE animal_id = ?";
  mysql.pool.query(updateAnimal, [exhibit_id, animal_type, origin_country, birthdate, gender, animal_id], (err, result) => {
    console.log(err)
  })
})

//Update an employee
app.put("/employees/:employee_id", (req, res) => {
  const employee_id = req.params.employee_id;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const phone = req.body.phone;
  const email = req.body.email;
  const job_title = req.body.job_title;
  const updateEmployee = "UPDATE Employees SET fname = ?, lname = ?, phone = ?, email = ?, job_title = ? WHERE employee_id = ?";
  mysql.pool.query(updateEmployee, [fname, lname, phone, email, job_title, employee_id], (err, result) => {
    console.log(err)
  })
})

//Update an animal service
app.put("/animalservices/:animal_services_id", (req, res) => {
  const animal_services_id = req.params.animal_services_id;
  const animal_id = req.body.animal_id;
  const date = req.body.date;
  const time = req.body.time;
  const type_of_care = req.body.type_of_care;
  const updateAnimalService = "UPDATE Animal_Services SET animal_id = ?, date = ?, time = ?, type_of_care = ? WHERE animal_services_id = ?";
  mysql.pool.query(updateAnimalService, [animal_id, date, time, type_of_care, animal_services_id], (err, result) => {
    console.log(err)
  })
})

//Update an animal employee service
app.put("/animalemployeeservices/:animal_services_id/:employee_id", (req, res) => {
  const animal_services_id = req.params.animal_services_id;
  const employee_id = req.params.employee_id;
  const new_animal_services_id = req.body.animal_services_id
  const new_employee_id = req.body.employee_id;
  const updateAnimalEmployeeService = "UPDATE Animal_Employee_Services SET animal_services_id = ?, employee_id = ? WHERE animal_services_id = ? AND employee_id = ?";
  mysql.pool.query(updateAnimalEmployeeService, [new_animal_services_id, new_employee_id, animal_services_id, employee_id], (err, result) => {
    console.log(err)
  })
})


app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});