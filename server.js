const express = require('express');
const app = express();

app.listen(3030, function(){
    console.log('Listening');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});