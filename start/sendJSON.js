let http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
	
	console.log("requested data from " + request.url);

	if(request.url === '/home' || request.url === '/'){
		response.writeHead(200, {'Content-Type' : 'text/html'});
	} else if (request.url === '/contact-us'){
		fs.createReadStream(__dirname + '/index.html').pipe(response);
		response.writeHead(200, {'Content-Type' : 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(response);
	} else if (request.url === '/api') {
		let obj = [{name:"saygin", age:36}, {name:"simon", age:34}]; 
		response.writeHead(200, {'Content-Type' : 'application/json'});
		response.end(JSON.stringify(obj));
	} else {
		response.writeHead(404, {'Content-Type' : 'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(response);
	}

}).listen(3001, '127.0.0.1');

console.log('listening port 127.0.0.1:3001');
 