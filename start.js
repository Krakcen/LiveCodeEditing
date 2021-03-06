var express = require('express');
var http = require('http');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var dataOnConnect = "";

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res)
{
	res.sendFile(__dirname + '/public/index.html');
});
/*
.get('/:id', function(req, res)
{
	res.sendFile(__dirname + '/public/room.html?id=' + req.params.id);
});*/

io.on('connection', function (socket)
{
	console.log('Un client est connecté !');
	
	socket.emit('data', dataOnConnect);
	
	socket.on('data', function (data)
	{
		dataOnConnect = data;
		io.sockets.emit('data', data);
	});
});



server.listen(8888);