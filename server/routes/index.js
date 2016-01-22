var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(request, response){
  var JoinedPath = path.join(__dirname, '../public/views/index.html');

  response.sendFile(JoinedPath);
});

router.get('/*', function(request, response){
  response.redirect('/');
});

module.exports = router;
