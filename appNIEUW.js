const express       = require('express');
const bodyParser    = require('body-parser');
const port          = 3001;
const app           = express();
const fs            = require('fs');
const path = require('path')

let database        = [];


const formData = {}


const databaseSettings = (data) => {

    const userFile = './user.json'
    // console.log('daataa: ', data)

    if(data.nameStudent != undefined && data.numberStudent != undefined){
        Object.assign(formData, {nameStudent, numberStudent} = data)
        fs.writeFile(userFile, JSON.stringify(formData), err => {
            console.log(err)
        })
    }
    
    if(data.studentSchool != undefined && data.studentCourse != undefined){
        Object.assign(formData, {studentSchool, studentCourse} = data)
        // fs.appendFileSync(userFile, JSON.stringify(formData))
    }

    if(data.courseYear != undefined != undefined){
        Object.assign(formData, {courseYear} = data)
    }
    
    if(data.studentSkill != undefined){
        Object.assign(formData, {studentSkill} = data)
    }


    // const jsonFile = './db.json';
    // fs.readFile(jsonFile, (err, content) => {

    //     if (err){
    //         return console.log(err);
    //     }

    //     const contentJSON = JSON.parse(content);

        
    //     // console.log('conteeeent: ', contentJSON.data)
    //     // matchUser(req, res);

    //     // console.log('formData12345: ', formData)
        
        

    //     // contentJSON.data.push(formData);

        

    //     fs.writeFile(jsonFile, JSON.stringify(contentJSON, null, 2), err => {
    //         // console.log('read: ', contentJSON)
    //         if(err) {
    //             console.log(jsonFile);
    //         }

    //     });

    // });
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

app.get('/login', (req, res) => {
    res.render('login')
})



app.get('/postlogin', (req, res) => {
    // res.send('hi there')

    const jsonFile = path.join(__dirname + '/db.json');
    const login = req.query
    console.log('logincreds: ', login)
    
    fs.readFile(jsonFile, "utf-8", (err, data) => {
        
        if(err) console.log('something went wrong: ', err)

        const jsonData = JSON.parse(data)
        
        console.log(jsonData)

        const loggedIn = jsonData.data.find(user => user.nameStudent == login.nameStudent && user.numberStudent == login.numberStudent)
        
        console.log('The user was found! : ', loggedIn)

        if(loggedIn === undefined) res.send('no account found')

        if(loggedIn != undefined) res.render('question2')

    })

})




// Vraag 2
app.post('/vraag/2', (req, res) => {
    
    // console.log('vraag 2: ', req.body);
    // database.push(req.body);
    // console.log('vraag 2: ', req.body)
    databaseSettings(req.body)
    res.render('question2');

});

// Vraag 3
app.post('/vraag/3', (req, res) => {
    
    
    
    databaseSettings(req.body);
    res.render('question3');
    console.log('form data: ', formData)

});

// Vraag 4
app.post('/vraag/4', (req, res) => {
    console.log(req.body);
    
    databaseSettings(req.body);
    res.render('question4');

});

app.post('/successpage', (req, res) => {
    // console.log(req.body);
    databaseSettings(req.body)
    // console.log('succesio: ', req.body)
    console.log('Final page: ', formData)
    // console.log('Database: ', database);
    res.render('successpage', {
        data: formData
    });
});



app.listen(port, () => console.log(`Enquete app listening on port ${port}!`), console.log(`Open Enquete app -> http://localhost:${port}`));

