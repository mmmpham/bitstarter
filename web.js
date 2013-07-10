var express = require('express');
var fs = require('fs');

var index = 'index.html';
var content = fs.readFileSync(index);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
