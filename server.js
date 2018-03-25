
// --------------------------------------------------------

// app.js
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static(__dirname + '/node_module/'));
app.use(express.static(__dirname + '/client/'));
app.use(express.static('public'));

var functionNls = function(data) {
  console.log("functionNls : " + data);
};

io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('test', function(data){
      var namePage = 'index';
      functionNls(namePage);
    });

    // Index
    client.on('pageindex', function(data){
      var namePage = 'index';
      if (data === 'fr' || data === 'en')
      {
        var path = 'public/' + namePage + '/' + namePage + '_' + data + '.json';
        console.log('Path ' + path);
        var dataJSON = fs.readFileSync('public/' + namePage + '_' + data + '.json');
        client.emit('pageindexres', JSON.parse(dataJSON));
      }
      else
      {
        console.warn("Pas de lang : " + data);
      }
    });

});
server.listen(8080);
