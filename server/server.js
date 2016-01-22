var express = require('express');
var path = require('path');
var index = require('./routes/index');

var app = express();

app.use(express.static('server/public'));

app.use('/', index);

var server = app.listen(5000, function(){
  var port = server.address().port;
  console.log('Server listening on port', port);
});
