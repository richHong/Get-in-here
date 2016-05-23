var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

//Sets variable to store number of users
var connectCounter = 0;

//Initialize socket on connection
io.on('connection', function(socket){

  //Increase counter on connection and sends to client
  io.emit('connectCounter', ++connectCounter);

  //Event handler to emit message when chat message comes in
  socket.on('chat message', function(message){
    io.emit('chat message', message);
  });

  //Event handler that reduces count when disconnected
  socket.on('disconnect', function(){
    io.emit('connectCounter', --connectCounter);
  });
});

http.listen(port, function(){
  console.log('listening on *:'+port);
});