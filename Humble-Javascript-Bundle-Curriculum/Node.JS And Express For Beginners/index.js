require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/main')
const passwordRoutes = require('./routes/password')

// Update express settings
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({credentials: true, origin: process.env.CORS_ORIGIN}))

//Require Passort Auth
require('./auth/auth')

// Setup routes
app.use('/', routes);
app.use('/', passwordRoutes);

// Catch not found Routes
app.use((request, response) => {
    response.status(404).json({ message: '404 - Not Found', status: 404 })
  })

  // Handle errors
app.use((error, request, response, next) => {
    console.log(error)
    response
      .status(error.status || 500)
      .json({ error: error.message, status: 500 })
  })

app.listen(port, ()=>{
    console.log(`This is port ${port}`)
})  