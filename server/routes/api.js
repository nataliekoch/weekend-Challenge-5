var express = require('express');
var pg = require('pg');
var router = express.Router();
var connectionString = 'postgres://localhost:5432/angular_db';

router.get('/users', function (request, response){
  pg.connect(connectionString, function (error, client){
    if (error) {
      console.log(error);
    }

    var query = client.query("SELECT * FROM users");

    var results = queryToArray(query);

    query.on('end', function(){
      client.end();
      return response.json(results);
    });
  });
});

router.get('/getAddresses/:id', function(request,response){
    pg.connect(connectionString, function(err, client){
        if(err) {
            console.log(err);
        }

        var query = client.query("SELECT * FROM addresses WHERE user_id = $1", [request.params.id]);

        var results = queryToArray(query);

        query.on('end', function() {
            client.end();
            return response.json(results);
        });
    });
});

function queryToArray(query) {
    var results = [];
    query.on('row', function(row) {
        results.push(row);
    });
    return results;
}

module.exports = router;
