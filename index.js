'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 8082;

const app = express();
app.use(cors()); //чтобы можно было посылать запросы с браузера
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler); // последний middleware

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
  res.status(200).json({message: 'HEllo world'})
});

start();