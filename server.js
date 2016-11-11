var express = require('express');

// Create our app 
var app = express();
// use process.env to get the environment variable 'port' that Heroku will pass us
const PORT = process.env.PORT || 3000;

// app.use lets you add functionality to your application

// redirect all https traffic to http because openweathermap only operates on http
// this is a common pattern for express middleware
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

// express.static tells us the name of the folder that will expose to the server
app.use(express.static('public'));

//start the server with app.listen - takes the port and function
app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});