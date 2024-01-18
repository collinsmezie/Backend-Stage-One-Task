require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');
const cors = require('cors');
const authRoute = require('./routes/auth');
const connectDB = require('./utils/dbConnect');
require('./authentication/auth')
const { render } = require('ejs');
const passport = require('passport');
const session = require('express-session');
const connectEnsureLogin = require('connect-ensure-login');
const userModel = require('./models/users');


// Connect to database
connectDB();

// Middleware to allow cross-origin requests
app.use(cors());


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(userModel.createStrategy());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

app.set('views', 'views');
app.set('view engine', 'ejs');

//secure the books route
app.use('/api', connectEnsureLogin.ensureLoggedIn(), booksRouter);


// //render the home page
// app.get('/', (req, res) => {
//   res.render('index', { user: req.user });
// });

//render the login page
app.get('/login', (req, res) => {
  res.render('login');
});

//render the signup page
app.get('/signup', (req, res) => {
  res.render('signup');
});


//handle the signup request for new users
app.post('/signup', (req, res) => {
  const user = req.body;
  console.log("USER HERE", user);
  userModel.register(
    new userModel({ username: user.username }), user.password, (err) => {
      if (err) {
        console.log('error while user register!', err);
        res.status(500).send(err);

      } else {
        passport.authenticate('local')(req, res, () => {
          res.redirect('https://chimesbookstore.netlify.app/');
        });
      }
    }
  );
});

//handle the login request for existing users
app.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
  res.redirect('https://chimesbookstore.netlify.app/');
});

//handle the logout request
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});



// Middleware for authentication
// app.use('/', authRoute);
// app.use('/api', passport.authenticate('jwt', { session: false }), booksRouter);


// Middleware for error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


