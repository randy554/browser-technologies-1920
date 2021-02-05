const express       = require('express');
const bodyParser    = require('body-parser');
const port          = 3001;
const app           = express();
const fs            = require('fs');

let database        = [];

// Public folder voor CSS/JS
app.use(express.static('public'));

// Bodyparser voor POST request handling
app.use(bodyParser.urlencoded({ extended: true }));

// Gebruik template engine: EJS
app.set('view engine', 'ejs');

// Locatie EJS files (settingsname, value)
app.set('views', 'views');

// Homepagina
app.get('/', (req, res) => {
    console.log('homepage');

    // databaseSettings(req, res);

    res.render('home');
});


// POST Vraag 2
app.post('/vraag/2', (req, res) => {
    console.log(req.body);
    console.log('vraag 2');
    // database.push(req.body);
    databaseSettings(req, res);

    // Valideer voor studentnummer


    let nextPage = getCurrentPage(req.body.page);

    res.render('question2', {
        pagina: nextPage
    });
});

// GET Vraag 2
app.get('/vraag/2', (req, res) => {
    console.log('homepage');
    res.render('question2');
});

// POST Vraag 3
app.post('/vraag/3', (req, res) => {
    console.log(req.body);
    console.log('vraag 3');
    //databaseSettings(req, res);
    let nextPage = getCurrentPage(req.body.page);

    res.render('question3', {
        pagina: nextPage
    });

});

// GET Vraag 3
app.get('/vraag/3', (req, res) => {

    console.log(req.body);
    console.log('vraag 3');

    res.render('question3');

});

// POST Vraag 4
app.post('/vraag/4', (req, res) => {

    console.log(req.body);
    console.log('vraag 4');

    let nextPage = getCurrentPage(req.body.page);

    res.render('question4', {
        pagina: nextPage
    });
});

// GET Vraag 4
app.get('/vraag/4', (req, res) => {

    console.log(req.body);
    console.log('vraag 4');

    res.render('question4');
});

// POST Success
app.post('/successpage', (req, res) => {

    console.log(req.body);
    console.log('successpage');

    res.render('successpage');
});

function getCurrentPage(postRequest) {
    let page = parseInt(postRequest);
    return ++page;
}


app.listen(port, () => console.log(`Enquete app listening on port ${port}!`), console.log(`Open Enquete app -> http://localhost:${port}`));

