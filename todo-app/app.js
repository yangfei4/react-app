const express = require('express');
const todoController = require("./controllers/todoController");

const app = express();


app.set('view engine', 'ejs');

app.use(express.static('./public'));

// controller
todoController(app);

app.listen(3000, () => {
    console.log("Listening to port 3000");
})