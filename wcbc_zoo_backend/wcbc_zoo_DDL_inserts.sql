/* Drop tables */
DROP TABLE IF EXISTS Animals;
DROP TABLE IF EXISTS Exhibits;
DROP TABLE IF EXISTS Employees;
DROP TABLE IF EXISTS Animal_Services;
DROP TABLE IF EXISTS Animal_Employee_Services;

/* CREATE EXHIBITS TABLE */
CREATE TABLE Exhibits (
    exhibit_id INT(11) AUTO_INCREMENT UNIQUE NOT NULL,
    type VARCHAR(255) NOT NULL,
    size INT(11) NOT NULL,
    animal_capacity INT(11) NOT NULL,
    PRIMARY KEY(exhibit_id)
 ) engine=innodb;

/* CREATE ANIMAL TABLE */
CREATE TABLE Animals (
    animal_id INT(11) AUTO_INCREMENT UNIQUE NOT NULL,
    exhibit_id INT(11),
    animal_type VARCHAR(255) NOT NULL,
    origin_country VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    PRIMARY KEY(animal_id),
    FOREIGN KEY (exhibit_id) REFERENCES Exhibits(exhibit_id)
 ) engine=innodb;

/* CREATE EMPLOYEES TABLE */
CREATE TABLE Employees (
    employee_id INT(11) AUTO_INCREMENT UNIQUE NOT NULL,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    phone CHAR(13) NOT NULL,
    email VARCHAR(255) NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    PRIMARY KEY(employee_id)
 ) engine=innodb;

/* CREATE ANIMAL_SERVICE TABLE */
CREATE TABLE Animal_Services (
    animal_services_id INT(11) AUTO_INCREMENT UNIQUE NOT NULL,
    animal_id INT(11) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    type_of_care VARCHAR(255) NOT NULL,
    PRIMARY KEY(animal_services_id),
    FOREIGN KEY(animal_id) REFERENCES Animals(animal_id)
 ) engine=innodb;

/* CREATE ANIMAL_EMPLOYEE_SERVICES TABLE */
CREATE TABLE Animal_Employee_Services (
    animal_services_id INT(11) NOT NULL,
    employee_id INT(11) NOT NULL,
    PRIMARY KEY (animal_services_id, employee_id),
    FOREIGN KEY(animal_services_id) REFERENCES Animal_Services(animal_services_id)
    ON DELETE CASCADE,
    FOREIGN KEY(employee_id) REFERENCES Employees(employee_id)
    ON DELETE CASCADE
 ) engine=innodb;

/* INSERT INTO ANIMAL TABLE */
INSERT INTO Animal (exhibit_id, animal_type, origin_country, birthdate, gender) VALUES
    (1, "Lion", "South Africa", "2012-05-12", "Male"),
    (2, "Elephants", "China", "2018-06-25", "Female");

/* INSERT INTO EXHIBITS TABLE */
INSERT INTO Exhibits(type, size, animal_capacity) VALUES 
    ("Lion's Lair", "1000", "10"),
    ("Elephant's Dome", "1250", "8"),
    ("Bored Monkeys", "800", "7");

/* INSERT INTO EMPLOYEES TABLE */
INSERT INTO Employees(fname, lname, phone, email, job_title) VALUES
    ("Justin", "Herbert", "555-555-5555", "jherb@chargers.com", "trainer"),
    ("Kai", "Mac", "619-619-6191", "kaimac@gmail.com", "cleaner"),
    ("Smokey", "Bear", "333-234-3213", "smokeybear@aol.com", "Vetinarian");

/* INSERT INTO ANIMAL_SERVICE TABLE */
INSERT INTO Animal_Services(animal_id, date, time, type_of_care) VALUES
    (1, "2020-01-01", "11:00am", "Feeding"),
    (1, "2020-01-26", "2:00pm", "Check-up"),
    (2, "2020-02-28", "2:00pm", "Bath Time!");

/* INSERT INTO ANMAL_EMPLOYEE_SERVICES TABLE */
INSERT INTO Animal_Employee_Services(animal_services_id, employee_id) VALUES 
    (1, 1),
    (2, 3),
    (3, 1);



