var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("Under Construction! \n https://github.com/c0dezer0/manishkumar.git");
})

app.use(express.static(__dirname+'/public'));

app.listen(process.env.PORT || 3000, function(){
	console.log("server running on port : "+(process.env.PORT || 3000));
})