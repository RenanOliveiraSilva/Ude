const multiplica = require('./mod');

console.log(multiplica(5, 4));

//Caminhos

const path = require('path');

console.log(__filename) // --> Onde o arquivo atual está
console.log(__dirname) // --> Caminho da nossa pasta atual

console.log(path.resolve(__dirname, '..')); //Indepente do sistema do servidor, conseguimos caiminhar pelos diretórios

