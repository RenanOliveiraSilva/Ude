exports.paginaIncial = (request, response) => {
    response.render('index'); //N precisa da extensão ejs
}

exports.trataPost = (request, response) => {
    response.send('Nova rota POST');
}