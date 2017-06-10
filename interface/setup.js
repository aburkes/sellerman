let express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// Settings

app.set('views', 'interface/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//basic; used just to test.
/*
app.get('/', function(req, res){
    res.render('welcome')
})
*/

//starting Express engine

app.listen(8000, "localhost", function(err){
    if(err){
        console.log("Express error: " + err);
    }
    else {
        console.log("Express server running.");
    }
});

module.exports = app;