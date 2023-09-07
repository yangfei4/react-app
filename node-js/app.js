const express = require("express");
const { nextTick } = require("process");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded( { extended: false });

const app = express();

app.set("view engine", "ejs");

app.use("/assets", express.static('assets'));

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about", {qs: req.query});
});

app.post('/about', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render("about-success", { data: req.body});
})

app.get('/profile/:name', (req, res) => {
    const data = { age: 22, job: "developer" , friends: ["Ian", "Alex", "Ruining"]};
    res.render("profile", { person: req.params.name, data });å
})

app.listen(3000, () => {
    console.log("listen to port 3000");
});