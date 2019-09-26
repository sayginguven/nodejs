const theEvents = require('events');
const theUtil = require('util');

//custom event
let anEvent = new theEvents.EventEmitter();

anEvent.on('superclick', function (message) {
	console.log(`${message}`);
});
anEvent.emit('superclick', "hey super click is emited");

//Student object
class Student{
	constructor (name) {
		this.name = name;
	}
}
//Person
let People = function (name) {
	this.name = name;
};

theUtil.inherits(Student, theEvents.EventEmitter);

let jose = new Student('jose'); 
let mariana = new Student('mariana'); 
let sina = new Student('sina'); 

let students = [jose, mariana, sina];

students.forEach(function (student) {
	student.on('speak', function (message) {
		console.log(student.name + " says " + message );
	});
});

jose.emit('speak', "yo yo c#");
mariana.emit('speak', "php is fun !");
sina.emit('speak', "I hate c++");