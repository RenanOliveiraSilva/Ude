// Funções Geradores servem como uma estrutura de decisão
//function* -> Possuem uma sintaxe diferente
//yield -> Funciona como um return, porém n para o código e pode haver vários

function* gerador1 () {
    //Código qualquer   
    yield "Opção 1";
    //Código qualquer
    yield "Opção 2";
    //Código qualquer
    
}

g1 = gerador1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value); // -> Undefined pois acabou as opções