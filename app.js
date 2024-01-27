require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');
const cors = require('cors');
const connectDB = require('./utils/dbConnect');
const logger = require('./logger/logger');
const httpLogger = require('./logger/httpLogger');
const port = process.env.PORT || 4000;


// Connect to database
connectDB();

// Middleware to log HTTP requests
app.use(httpLogger);

// Middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse request body
app.use(bodyParser.json());

// Middleware to handle routes
app.use('/api', booksRouter);

app.get('/', (req, res) => {
  logger.info('The home page was requested');
  res.end('Welcome to the home page!');
});

//throw error to simulate server error
app.get('/error', (req, res) => {
  throw new Error('An error occurred');
});

// Middleware to handle errors
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).send('Something went wrong');
});



app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});


