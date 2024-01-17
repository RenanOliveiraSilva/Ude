const express = require('express');
const app = express();

app.get('/', (request, response ) => {
    response.send(`
        <form acrion="/" method="POST">
            Nome do Cliente: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);

});

app.post('/', (request, response ) => {
    response.send('Formulário Enviado');

});

app.listen(3000, () => {
    console.log('Servidor rodando: http://localhost:3000');

});