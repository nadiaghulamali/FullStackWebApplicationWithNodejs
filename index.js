const express = require('express');
const expressEdge = require('express-edge');
const mongose = require('mongoose')
const bodyParser = require('body-parser')

const app = new express();


mongose.connect('mongodb://localhost/node-js-blog')



app.use(express.static('public'));

app.use(expressEdge);

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/',(req,res) => {

    // res.sendFile(path.resolve(__dirname, 'pages/index.html'));

    res.render('index');

})


const createPostController = require('./controller/createPost')

const homePageControlller = require('./controller/homePage');

const getPostController = require('./controller/getPost');


app.get('/about', (req,res) =>{
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'));

    res.render('about');
})

app.get('/post', createPostController);

app.get('/', homePageControlller);

app.get("/post/:id", getPostController);

app.get('/contact', (req,res) =>{
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'));

    res.render('contact')
})

app.post('/posts/store', (req,res) =>{
    console.log(req.body);
    res.redirect('/');
})

app.listen(4000, () =>{

    console.log('App listening to port 4000');

})