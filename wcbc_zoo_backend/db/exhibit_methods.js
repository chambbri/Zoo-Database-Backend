import express from "express";
const router = express.Router();

router.use(express.json());

const createExhibit = async(values) => {
    const createExhibitQuery = `INSERT INTO Exhibits (type, size, animal_capacity) VALUES (?, ?, ?, ?)`
    const result = await 
}
