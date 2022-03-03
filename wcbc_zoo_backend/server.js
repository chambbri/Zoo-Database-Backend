'use strict';

import exhibits from './db/exhibit_methods.js'

const express = require('express');
const app = express();
const PORT = 22131;
const mysql = require('./dbcon.js')

const db = createPool({
  host
})

app.use(exhibits)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});