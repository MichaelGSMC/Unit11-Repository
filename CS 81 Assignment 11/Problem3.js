var http = require('http');

var server = http.createServer(function(req,res){
  res.writeHead(200, {'Content-type': 'text/plain' });
  res.end('Hello World, my name is Michael');
});

server.listen(8001, '127.0.0.1');
