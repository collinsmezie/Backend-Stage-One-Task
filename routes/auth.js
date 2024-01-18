const express = require('express');
const authRouter = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();


authRouter.post('/signup', passport.authenticate('signup', { session: false }), async (req, res, next) => {
    console.log("IN AUTH ROUTE SIGNUP")
    res.json({
        message: 'Signup successful',
        user: req.user
    });
});



// Login route for users with valid credentials using passport
authRouter.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            console.log("IN AUTH ROUTE LOGIN")
            if (err || !user) {
                const error = new Error('An error occurred.');
                return next(error);
            }
            req.login(user, { session: false }, async (error) => {
                if (error) return next(error);
                console.log("IN ROUTE LOGIN")

                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, process.env.JWT_SECRET);
                return res.json({ token });
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});


module.exports = authRouter;
