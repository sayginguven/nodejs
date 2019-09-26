const http = require('http');
const fs = require('fs');

// let readStream = fs.createReadStream(__dirname + '/poem.txt',{encoding:'utf8'});
// let writeStream = fs.WriteStream(__dirname + '/copyPoem.txt');

// //read and write to another file
// // readStream.on('data', function (data) {
// // 	console.log(`data loading`);
// // 	writeStream.write(data);
// // });
// readStream.pipe(writeStream);


let server = http.createServer(function (request, response) {

	console.log(`request from : ${request.url}`);
	response.writeHead(200, {'Content-Type' : 'text/html'});

	let readStream = fs.createReadStream(__dirname + '/index.html',{encoding:'utf8'});
	readStream.pipe(response);

});

server.listen(3030, '127.0.0.1');
console.log(`listening 127.0.0.1:3030`);