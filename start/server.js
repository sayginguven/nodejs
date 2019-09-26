const http = require('http');

let server = http.createServer(function (request, response) {
	console.log(`request from : ${request.url}`);
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('server message...');
});

server.listen(3030, '127.0.0.2');
console.log(`listening 127.0.0.2:3030`);