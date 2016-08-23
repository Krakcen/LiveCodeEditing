var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res)
{
	fs.readFile('./livecode/live.html', 'utf8', function(err, data)
	{
		if (err)
			return (console.log(err));
		
		res.render('index.ejs', {data: data});
	});
});

app.listen(8888);

/*
fs.writeFile('./livecode/live.html', data, function(err, data)
{
	if (err)
		return (console.log(err));
	
	console.log("File saved !");
});
*/
/*
$(function() {
    alert( $('textarea').val() );
});
*/