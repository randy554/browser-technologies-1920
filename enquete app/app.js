const express       = require('express');
const bodyParser    = require('body-parser');
const port          = 3001;
const app           = express();
const fs            = require('fs');

let database        = [];

const databaseSettings = (req, res) => {
    const {nameStudent, numberStudent, studentSchool, studentCourse, courseYear, studentSkill} = req.body;
    const jsonFile = './db.json';
    fs.readFile(jsonFile, (err, content) => {

        if (err){
            return console.log(err);
        }

        const contentJSON = JSON.parse(content);
        matchUser(req, res);
        const formData = { nameStudent, numberStudent, studentSchool, studentCourse, courseYear, studentSkill };
        contentJSON.data.push(formData);

        fs.writeFile(jsonFile, JSON.stringify(contentJSON, null, 2), err => {

            if(err) {
                console.log(jsonFile);
            }

        });

    });
};

const matchUser = (req, res) => {

    const userData = {nameStudent, numberStudent} = req.body;
    const jsonFile = './db.json';

    fs.readFile(jsonFile, (err, content) => {

        if (err){
            return console.log(err);
        }

        const contentJSON = JSON.parse(content);
        console.log('Wat zit er in de JSONFile', contentJSON);
        // const formData = { nameStudent, numberStudent, studentSchool, studentCourse, courseYear, studentSkill };
        // contentJSON.data.push(formData);
        //
        // fs.writeFile(jsonFile, JSON.stringify(contentJSON), err => {
        //
        //     if(err) {
        //         console.log(jsonFile);
        //     }
        //
        // });

    });
};


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
    res.render('home');
});

// Vraag 2
app.post('/vraag/2', (req, res) => {
    console.log(req.body);
    // database.push(req.body);
    databaseSettings(req, res);
    res.render('question2');

});

// Vraag 3
app.post('/vraag/3', (req, res) => {
    console.log(req.body);
    databaseSettings(req, res);
    res.render('question3');

});

// Vraag 4
app.post('/vraag/4', (req, res) => {
    console.log(req.body);
    databaseSettings(req, res);
    res.render('question4');

});

app.post('/successpage', (req, res) => {
    console.log(req.body);
    databaseSettings(req, res);
    console.log('Database: ', database);
    res.render('successpage');
});


app.listen(port, () => console.log(`Enquete app listening on port ${port}!`), console.log(`Open Enquete app -> http://localhost:${port}`));

