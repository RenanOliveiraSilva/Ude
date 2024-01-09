//Importando todo o módulo
// const mod1 = require('./mod1');
// const nome = mod1.nome;
// const sobrenome = mod1.sobrenome;
// mod1.falanome();

// console.log(nome, sobrenome);

//Importando somente o necessário
//const falanome = require('./mod1').falanome();

//Importando com desestruturação
const {nome, sobrenome, falanome } = require('./mod1');

console.log(nome, sobrenome);

//Importando Classes
const { Pessoa } = require('./class');

const p1 = new Pessoa('Renan');
console.log(p1);