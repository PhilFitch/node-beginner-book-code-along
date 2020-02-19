const http = require('http');

/*
http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hello World");
  res.end();
}).listen(8888);”
*/

function onRequest(req, res) {
  console.log('Request received.');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();
}

http.createServer(onRequest).listen(8888);

console.log('Server has started.');
