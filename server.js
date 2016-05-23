var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){

  socket.on('chat message', function(message){
    io.emit('chat message', message);
  });

});

http.listen(port, function(){
  console.log('listening on *:8080');
});