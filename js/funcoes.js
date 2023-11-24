// Por padrão as funções tem um arguments que salva todos os parâmetros enviados
// Esse arguments funciona em todas as funções exceto a arrow function
//Function hoisting -> A engine do JS executa sempre a função primeiro, mesmo ela estando no final do código

//Sem Parâmetro
function saudacao () {
    console.log("Bom dia")
}

//Com Parâmetro
function saudacao1 (nome) {
    console.log(`Bom dia ${nome}`);    
}

saudacao(); //Chamada sem argumento
saudacao1("Lyvia"); //Chamada com Argumento

//Retornar valor -> Por padrão Undefined

function soma(x, y) {
    const soma = x + y;
    return soma; //Encerra a função no return
}

function soma2(x = 1, y = 2) { //Caso a função não receba valor, vai ter esses como padrão
    const soma = x + y;
    return soma; //Encerra a função no return
}

// const resultado = soma(4, 5); -> Pode ser atribuída a uma var
console.log(soma(1, 3));

//Criação de uma função anônima -> Direto em uma variável
//first-class objects (Objetos de primeira classe)
//Utilizar a função como dado

const raiz = function (n) {
    return n ** 0.5;
};

//Maneira mais moderna de se escrever, abreviar e adicionar a arrow(=>)
const raiz2 = n => n ** 0.5;    

//Dentro de Objetos

const obj = {
    falar1: function () {
        console.log('Falando'); //Maneira normal
    },
    falar2 () {
        console.log('Falando'); //Maneira mais compacta
    }
}

//Parâmetros desestruturados de objetos
function exemplo({ nome, sobrenome, idade }){
    console.log(nome, sobrenome, idade);
}

//exemplo({ nome: 'Lyvia', sobrenome: 'Morini', idade: 18});

//Parâmetros desestruturados de arrays
function exArray([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}

//exArray(0, 1, 2);

//Função Interna Externa

function criaMulti(multiplicador) {
    //Parâmetro multiplicador 
    return function (n) {
        return n * multiplicador; //Parâmetro sendo dentro da função
    }
}

const duplica = criaMulti(2); // Multiplicador = 2
console.log(duplica(3)); // n = 3 