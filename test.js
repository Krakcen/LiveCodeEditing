var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res)
{
	res.render('index.ejs', {test: 'okay'});

	fs.readFile('./livecode/live.html', 'utf8', function(err, data)
	{
		if (err)
			return (console.log(err));
		console.log(data);
		
		data += "mdmd<br/>";
		
		fs.writeFile('./livecode/live.html', data, function(err, data)
		{
			if (err)
				return (console.log(err));
			
			console.log("File saved !");
		});
	});
});

app.listen(8888);