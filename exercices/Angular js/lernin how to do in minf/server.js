var express = require('express');
var app = express();
app.use('/', express.static(__dirname));
app.listen(8080);
console.log('the server is running at port 8080')