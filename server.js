var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){

   socket.on('chat message', function(message){
    io.emit('chat message', message);
  });

});

http.listen(8080, function(){
  console.log('listening on *:8080');
});