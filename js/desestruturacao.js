const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

//Atribuição via Desestruturação
                        //Operador Rest
const [numero1, numero2, ...resto] = numeros;
console.log(numero1, numero2);
console.log(resto);

const arrayNum = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// const [,[, ,seis]] = arrayNum; -> complicado
//console.log(seis);

//Maneira mais simples
const [linha1, linha2, linha3] = arrayNum;
console.log(linha2[2]);

// --------------EM OBJETOS ---------------------

const pessoa = {
    nome: 'Lyvia',
    idade: 19,
    cabelo: 'castanho',
    endereco: {
        rua: 'nseioq',
        numero: 157
    }
}

const { nome } = pessoa;
//const {nome: momoi} = pessoa; -> podemos colocar outro nome para a variavel, != do atributo
//console.log(momoi);

//const {nome, ...resto} = pessoa; -> Operador REST
console.log(nome);

