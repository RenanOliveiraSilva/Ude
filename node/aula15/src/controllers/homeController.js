exports.paginaIncial = (request, response) => {
    //SESSION -> Irá durar o tempo programado nesse caso 7 dias, mesmo apagando o código ele ainda estará salvo
    //request.session.usuario = { nome: "Ly", logado:true };
    //console.log(request.session.usuario);

    //FLASH -> Irá acontecer somente uma vez
    // request.flash('error', 'msg de erro');
    // request.flash('info', 'msg de alerta');
    // request.flash('success', 'msg de sucesso');

    //Saída do FLASH
    // console.log(request.flash('error'))
    // console.log(request.flash('info'))
    // console.log(request.flash('success'))

    response.render('index'); //N precisa da extensão ejs
}

exports.trataPost = (request, response) => {
    response.send('Nova rota POST');
}