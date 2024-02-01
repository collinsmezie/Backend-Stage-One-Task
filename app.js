require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');
const cors = require('cors');
const connectDB = require('./utils/dbConnect');
const rateLimit = require('express-rate-limit')
const logger = require('./middlewares/Logger/logger');
const auth0Middleware = require('./middlewares/Authentication/auth0');
const { requiresAuth } = require('express-openid-connect');
const testbooksRouter = require('./routes/testbooks');
const port = process.env.PORT || 4000;


const app = express();

// Connect to database
connectDB();

// Middleware to handle authentication
// app.use(auth0Middleware);

const limiter = rateLimit({
  windowMs: 0.2 * 60 * 1000, // 15 minutes
  max: 4, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false
})

// Middleware to allow cross-origin requests
app.use(cors());

//  apply to all requests
app.use(limiter)

// Middleware to parse request body
app.use(bodyParser.json());

// Middleware to handle routes
// app.use('/api', requiresAuth(), booksRouter, authorsRouter, testbooksRouter);
app.use('/api', booksRouter, authorsRouter, testbooksRouter);


app.get('/', (req, res) => {
  res.send('Welcome to the BookStore API');
});

// Middleware to handle errors
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});


