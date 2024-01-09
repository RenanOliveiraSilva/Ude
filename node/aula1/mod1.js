const nome = 'Lyvia';
const sobrenome = "Morini";

const falanome = () => {
    console.log(nome, sobrenome);
}

// module.exports.nome = nome -> forma extensa

//Forma reduzida
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falanome = falanome;
this.qualquercoisa = 'Oque for importar'; //This aponta para o objeto module

