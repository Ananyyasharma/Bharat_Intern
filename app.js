const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Create User Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Handle GET request to show the registration form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle POST request to register a new user
app.post('/register', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save((err) => {
        if (err) {
            res.send('There was an error registering the user.');
        } else {
            res.send('User registered successfully!');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

