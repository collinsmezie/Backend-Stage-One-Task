require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const { requiresAuth } = require('express-openid-connect');
const connectDB = require('./utils/dbConnect');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to allow cross-origin requests
app.use(cors());

const auth0Middleware = require('./auth/auth0');

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));

app.use(auth0Middleware);


app.get('/', requiresAuth(), (req, res) => {
  res.redirect('https://chimesbookstore.netlify.app/');
});


//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


