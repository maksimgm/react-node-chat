var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
  console.log('we have a connection');
  socket.on('new-message', function(msg){
    console.log(msg);
    io.emit('receive-message', msg);
  });
  socket.on("test",function(){
    console.log('Mounted');
  });
});



app.get('/', function (req, res) {
  res.render('public/index.html', {});
});

http.listen('3000', function(){
  console.log('we are connected');
});
