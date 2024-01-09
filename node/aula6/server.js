const express = require('express');
const app = express();

//CRUD -> CREATE    READ     UPDATE     DELETE
//        POST      GET      PUT        DELETE

// http://meusite.com/ <- GET -> Entre a página

//            Requisição  Resposta 
app.get('/', (request, response ) => {
    response.send('Hello Word');

});

app.get('/contato', (request, response ) => {
    response.send('Obrigado por entrar em contato');

});

app.listen(3000, () => {
    console.log('Servidor rodando: http://localhost:3000');

});