const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { meuMiddleWare } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true })); //Tratamento de POST

app.use(express.static(path.resolve(__dirname, 'public'))); //Diretório Estático
app.set('views', path.resolve(__dirname, 'src', 'views')); //Diretório de views
app.set('view engine', 'ejs'); //Engine de view

app.use(meuMiddleWare);
app.use(routes);

app.listen(3000, () => {
    console.log('Servidor rodando: http://localhost:3000');

});