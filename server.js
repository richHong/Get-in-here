var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

//Initialize socket on connection
io.on('connection', function(socket){

  //Event handler to emit message when chat message comes in
  socket.on('chat message', function(message){
    io.emit('chat message', message);
  });

});

http.listen(port, function(){
  console.log('listening on *:'+port);
});