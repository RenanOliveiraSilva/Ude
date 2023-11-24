// IIFE -> Imemediately invoked function expression
(function(parametros) {

    const sobrenome = "Helena";
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Lyvia'));
    }

    falaNome();
    console.log(parametros);
    
})("Argumentos");