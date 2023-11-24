function horaAtual () {
    let data = new Date();

    return data.toLocaleTimeString('pr-BR', {
        hour12: false
    });
}

//Executa toda vez a cada intervalo passado (2º PARÂMETRO)
const timer = setInterval(function () {
    console.log(horaAtual());
}, 1000);

//Executa apenas uma vez
setTimeout(function() {
    clearInterval(timer);
}, 5000);