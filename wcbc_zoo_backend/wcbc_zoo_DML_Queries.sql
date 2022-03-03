-- Note that the colon : character will be used throughout to denote variables that will have data
-- from the backend programming language

-- Query for adding a new animal
INSERT INTO Animals (exhibit_id, animal_type, origin_country, birthdate, gender)
VALUES (:exhibit_idInput, :animal_typeInput, :origin_countryInput, :birthdateInput, :genderInput);

-- Query for updating an animal
UPDATE Animals 
SET exhibit_id = :exhibit_idInput, animal_type = :animal_typeInput, origin_country = :origin_countryInput, birthdate = :birthdateInput, gender = :genderInput
WHERE animal_id = :animal_idInput;

-- Query for deleting an animal
DELETE FROM Animals
WHERE animal_id = :animal_idInput;

-- Query for selecting animals
SELECT * FROM Animals;

-- Search for animal by animal type
SELECT * FROM Animals where animal_type = :animal_typeInput


-- Query for adding a new exhibit
INSERT INTO Exhibits (type, size, animal_capacity)
VALUES (:typeInput, :sizeInput, :animal_capacityInput);

--Query for updating an exhibit
UPDATE Exhibits
SET type = :typeInput, size = :sizeInput, capacity = :capacityInput
WHERE exhibit_id = :exhibit_idInput;

-- Query for deleting an exhibit
DELETE FROM Exhibits
WHERE exhibit_id = :exhibit_idInput;

-- Query for selecting exhibits
SELECT * FROM Exhibits;


-- Query for adding a new animal service
INSERT INTO Animal_Services (animal_id, type_of_care, date, time)
VALUES (:animal_idInput, :type_of_careInput, :dateInput, :timeInput);

-- Query for updating an animal service
UPDATE Animal_Services
SET animal_id = :animal_idInput, type_of_care = :type_of_careInput, date = :dateInput, time = :timeInput
WHERE animal_services_id = :animal_services_idINPUT;

-- Query for deleting an animal service
DELETE FROM Animal_Services
WHERE animal_services_id = :animal_services_idINPUT;

-- Query for selecting animal_services
SELECT * FROM Animal_Services;


-- Query for adding an employee
INSERT INTO Employees (fname, lname, phone, email, job_title)
VALUES (:fnameInput, :lnameInput, :phoneInput, :emailInput, :job_titleInput);

-- Query for updating an employee
UPDATE Employees
SET fname = :fnameInput, lname = :lnameInput, phone = :phoneInput, email = :emailInput, job_title = :job_titleInput
WHERE employee_id = :employee_idInput;

-- Query for deleting an employee
DELETE FROM Employees
WHERE employee_id = :employee_idInput;

-- Query for selecting employees
SELECT * FROM Employees;


-- Query for inserting an animal_employee_services
INSERT INTO Animal_Employee_Services (animal_services_id, employee_id)
VALUES (:animal_services_idINPUT, :employee_idInput);

-- Query for updating animal_employee_services
UPDATE Animal_Employee_Services
SET animal_services_id = :animal_services_idINPUT, employee_id = :employee_idInput
WHERE animal_services_id = :animal_services_idINPUT AND employee_id = :employee_idInput;

-- Query for deleting an animal_employee_services
DELETE FROM Animal_Employee_Services
WHERE animal_services_id = :animal_services_idINPUT AND employee_id = :employee_idInput;

-- Query for selecting animal_employee_services
SELECT * FROM Animal_Employee_Services;
