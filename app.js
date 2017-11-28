var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

var indexRouter = require('./routes/indexRouter');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./public'));

// Catch all bucket, must be last!
app.use('/', indexRouter);
app.listen(port);