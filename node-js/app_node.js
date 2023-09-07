const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    else if(req.url === '/about'){
        res.writeHead(200, { 'Content-type': 'text/html'});
        fs.createReadStream(__dirname+'/about.html').pipe(res);
    }
    else{
        res.writeHead(200, { 'Content-type': 'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
 
})

server.listen(3000, '127.0.0.1');

/* ******************** 

const events = require('events');
const util = require("util");

const teams = function(name){
    this.name = name;
}

util.inherits(teams, events.EventEmitter); // inherit from superConstructor(2-nd arg)

const Arenal = new teams("Arenal");
const Juventus = new teams("Juventus");
const Galatasaray = new teams("Galatasaray");

const teamArray = [ Arenal, Juventus, Galatasaray ];

teamArray.forEach((team) => {
    team.on('nation', (nation) => { // event name; event listener
        console.log(team.name + ' is ' + nation + ' football team!');
    })
})

Arenal.emit('nation', 'English');
Juventus.emit('nation', 'Italian');
Galatasaray.emit('nation', 'Turkish');

 ******************** */


/* ******************** 

const events = require('events');
const myEmitter = new events.EventEmitter;

myEmitter.on('test', function(arg){
    console.log(arg);
});

myEmitter.emit('test', 'hello world');

 ******************** */

// const helper = require('./helper');

// console.log(helper);
// console.log(helper.user("Alex"));
// console.log(helper.id("my id"));

// console.log("hello world");

// let count = 0;

// const timer = setInterval(() => {
//     count = count + 2;
//     console.log(`${count}`);
//     if(count > 10){
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// function orange() {
//     console.log("hello");
// }

// orange();

// let red = function() {
//     console.log("hi there");
// }

// red();

// function callbackFunc(func){
//     console.log(func);
//     func();
// }

// callbackFunc(red);