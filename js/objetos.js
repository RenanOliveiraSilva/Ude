//Criação de Objeto
const exemplo = {
    exemplo1: "AAA",
    exemplo2: "BBB"
};

console.log(exemplo.exemplo1); //Consulta do Objeto
//OU
console.log(exemplo['exemplo1'])

//Criação de Objeto -> Em uma função
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade

        /*
        nome,
        sobrenome,  -> Abrevidado pois o atributo e o parâmetro são iguais
        idade
        */
    };
}

const pessoa1 = criaPessoa("Lyvia", "Morini", 19);
console.log(pessoa1.nome);


