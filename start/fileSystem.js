let fs = require('fs');

// let poem = fs.readFileSync('poem.txt', 'utf8');
// console.log(poem);

// fs.writeFileSync('secret.txt', poem, 'utf8', function (err) {
// 	if (err) throw err;
// 	console.log('file saved');
// });


function writeThisData(data) {
	//create a foler
	fs.mkdir('data', function () {
		//create a file
		fs.writeFile('./data/secret.txt', data, 'utf8', function (err) {
			if (err) throw err;
			console.log(`	file saved`);
			//delete file 
			if( fs.existsSync('./data/secret.txt') ) {
				console.log(`	secret.txt exist`);
				//delete a file
				fs.unlink('./data/secret.txt', function (err) {
					if(err) throw err;
					console.log('file deleted');
					fs.rmdir('data',function (err) {
						if(err) throw err;
						console.log(`	folder deleted`);
					});
				});

			}
		});
	});
}

fs.readFile('./poem.txt', 'utf8', function (err, data) {
	if (err) throw err;
	writeThisData(data);
	console.log(data);
});







