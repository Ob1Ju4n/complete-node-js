var express = require('express');
var middleware = require('./middleware.js');
var app = express();


const PORT = process.env.PORT || 3000;

// Middleware def goes first:
// app.use(middleware.requireAuthentication);
app.use(middleware.logger); // application level middleware

// Routes configuration:
app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('About us...');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT + ' ...');
});



