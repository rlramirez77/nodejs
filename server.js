var http = require('http')
var port = process.env.port || 80;
http.createServer(function(req, res) {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello Azure\n');
}).listen(port);