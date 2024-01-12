exports.paginaIncial = (request, response) => {
    response.send(`
        <form acrion="/" method="POST">
            Nome do Cliente: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `); 
}

exports.trataPost = (request, response) => {
    response.send('Nova rota POST');
}