/* Drop tables */
DROP TABLE IF EXISTS animals;
DROP TABLE IF EXISTS exhibits;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS animal_services;
DROP TABLE IF EXISTS animal_employee_services;

/* CREATE EXHIBITS TABLE */
CREATE TABLE exhibits (
    exhibit_id INT(11) AUTO_INCREMENT UNIQUE NOT NULL,
    type VARCHAR(255) NOT NULL,
    size INT(11) NOT NULL,
    animal_capacity INT(11) NOT NULL,
    PRIMARY KEY(exhibit_id)
 ) engine=innodb;

/* CREATE ANIMAL TABLE */
CREATE TABLE animals (
    animal_id INT(11) AUTO_INCREMENT UNIQUE NOT NULL,
    exhibit_id INT(11),
    animal_type VARCHAR(255) NOT NULL,
    origin_country VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    PRIMARY KEY(animal_id),
    FOREIGN KEY(exhibit_id) REFERENCES exhibits(exhibit_id)
 ) engine=innodb;

/* CREATE EMPLOYEES TABLE */
CREATE TABLE employees (
    employee_id INT(11) AUTO_INCREMENT UNIQUE NOT NULL,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    phone CHAR(13) NOT NULL,
    email VARCHAR(255) NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    PRIMARY KEY(employee_id)
 ) engine=innodb;

/* CREATE ANIMAL_SERVICE TABLE */
CREATE TABLE animal_services (
    animal_services_id INT(11) AUTO_INCREMENT UNIQUE NOT NULL,
    animal_id INT(11) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    type_of_care VARCHAR(255) NOT NULL,
    PRIMARY KEY(animal_services_id),
    FOREIGN KEY(animal_id) REFERENCES animal(animal_id)
 ) engine=innodb;

/* CREATE ANIMAL_EMPLOYEE_SERVICES TABLE */
CREATE TABLE animal_employee_services (
    animal_services_id INT(11) NOT NULL
    employee_id INT(11) NOT NULL,
    PRIMARY KEY (animal_services_id, employee_id),
    FOREIGN KEY(animal_services_id) REFERENCES animal_services(animal_services_id)
    ON DELETE CASCADE,
    FOREIGN KEY(employee_id) REFERENCES employees(employee_id)
    ON DELETE CASCADE
 ) engine=innodb;

/* INSERT INTO ANIMAL TABLE */
INSERT INTO animal (exhibit_id, animal_type, origin_country, birthdate, gender) VALUES
    (1, "Lion", "South Africa", "2012-05-12", "Male"),
    (2, "Elephants", "China", "2018-06-25", "Female");

/* INSERT INTO EXHIBITS TABLE */
INSERT INTO exhibits(type, size, animal_capacity) VALUES 
    ("Lion's Lair", "1000", "10"),
    ("Elephant's Dome", "1250", "8"),
    ("Bored Monkeys", "800", "7");

/* INSERT INTO EMPLOYEES TABLE */
INSERT INTO employees(fname, lname, phone, email, job_title) VALUES
    ("Justin", "Herbert", "555-555-5555", "jherb@chargers.com", "trainer"),
    ("Kai", "Mac", "619-619-6191", "kaimac@gmail.com", "cleaner"),
    ("Smokey", "Bear", "333-234-3213", "smokeybear@aol.com", "Vetinarian");

/* INSERT INTO ANIMAL_SERVICE TABLE */
INSERT INTO animal_services(animal_id, date, time, type_of_care) VALUES
    (1, "2020-01-01", "11:00am", "Feeding"),
    (1, "2020-01-26", "2:00pm", "Check-up"),
    (2, "2020-02-28", "2:00pm", "Bath Time!");

/* INSERT INTO ANMAL_EMPLOYEE_SERVICES TABLE */
INSERT INTO animal_employee_services(animal_services_id, employee_id) VALUES 
    (1, 1),
    (2, 3),
    (3, 1);



