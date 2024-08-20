const express = require("express");
const app = express();
const port = process.env.PORT || 7070;

var books = [];
books.push({"bookid": 10, "authors": ["Shesh", "Vishwas"]});
books.push({"bookid": 11, "authors": ["Praveen", "SandeepR"]});
books.push({"bookid": 12, "authors": ["Praveen", "SandeepR", "Vishwas"]});

app.get('/', function(req, res){
    res.json({"server": require('os').hostname()});
});

app.get('/api/books', function(req, res){
    // Get data from db
    res.json({"data": books});
});
app.post('/api/books', function(req, res){
    // Create record in db
    const data = req.body;
    const qp = req.query;
    console.log(qp);
    res.json({"result": true});
});
app.get('/api/books/:id', function(req, res){

    const bookid = req.params.id;
    res.json({"result": books[bookid]});
});
app.put('/api/books/:id', function(req, res){
    res.json({"result": true});
});
app.patch('/api/books/:id', function(req, res){
    res.json({"result": true});
});
app.delete('/api/books/:id', function(req, res){
    res.json({"result": true});
});

app.listen(port, function(){
    console.log("Server running at http://localhost:"+port);
});