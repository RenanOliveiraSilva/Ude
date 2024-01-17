require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('Conectado');
    app.emit('pronto');
}).catch( e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { meuMiddleWare } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true })); //Tratamento de POST

app.use(express.static(path.resolve(__dirname, 'public'))); //Diretório Estático

const sessionOptions = session({
    secret: 'dwvvrewgerwgrwg qualquer',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); //Diretório de views
app.set('view engine', 'ejs'); //Engine de view

//app.use(meuMiddleWare);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor rodando: http://localhost:3000');
    
    });

});