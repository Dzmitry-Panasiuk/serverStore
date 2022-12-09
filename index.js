'use strict';

require('dotenv').config();
const express = require('express');
const sequelize = require('./db')

const PORT = process.env.PORT || 8082;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT,  
      () => console.log(`Running on ${PORT}`)
    );
  } catch {
    console.log(e);
  }
}

app.get('/', (req, res) => {
  res.send('Hello World2');
});

start();