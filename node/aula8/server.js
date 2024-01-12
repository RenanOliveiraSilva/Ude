const express = require('express');
const app = express();


//Tratamento para POST 
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (request, response ) => {
    response.send(`
    <form acrion="/" method="POST">
        Nome do Cliente: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
`);

});
               //ParametroOpicional?    
app.get('/testes/:idUser?/:parametroOp?', (request, response) => {
    response.send(request.params);
    console.log(request.params);
    console.log(request.query);
    
});

app.post('/', (request, response ) => {
    console.log(request.body);
    response.send(request.body.nome);

});

app.listen(3000, () => {
    console.log('Servidor rodando: http://localhost:3000');

});