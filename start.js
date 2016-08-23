var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

app.listen(8888);

app.use(express.static(path.join(__dirname, 'res')));
app.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname, '.', 'index.html'));
});

io.on('connection', function (socket)
{
	console.log('Un client est connecté !');
});