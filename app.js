require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');
const cors = require('cors');
const connectDB = require('./utils/dbConnect');
const rateLimit = require('express-rate-limit')
const port = process.env.PORT || 4000;


// Connect to database
connectDB();

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
app.use('/api', booksRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


