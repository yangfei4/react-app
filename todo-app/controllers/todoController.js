let data = [ { item: 'Feed the dog' }, { item: 'Learn Node JS' }, { item: 'Go shopping' }];

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render("todo", { todos: data });
    });

    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', (req, res) => {
        console.log(req.params.item);
        data = data.filter( (todo) => {
            return todo.item.replace(/ /g, "-") !== req.params.item
        }
        );
        res.json(data);
    });

};