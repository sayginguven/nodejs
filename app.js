const express = require('express');
const http = require('http');

const app = express();
app.set(`view engine`, `ejs`);

app.get('/', (req, res) => {
	res.sendFile(__dirname + `/index.html`);
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname + `/contact.html`);
});

app.get('/profile/:id', (req, res) => {
	let query = {age:36, job:'web developer'};
	res.render('profile',{person:req.params.id, data:query});
	//res.send(`profile page with the id of ${req.params.id}`);
});

app.listen(3000);

// http.createServer((request,response) => {
// 	response.writeHead(200, `text/plain`);
// 	response.end(`server is ok`);
// }).listen(`3002`,`127.0.0.1`);

// console.log(`listening port 3002 from ip:127.0.0.1`);
//
