var connect = require('connect'),
serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("./testingapp"));
app.listen(5001);