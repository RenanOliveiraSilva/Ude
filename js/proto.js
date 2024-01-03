function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

}

Pessoa.prototype.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa ("Lyvia", "Morini"); //Instância criada
const pessoa2 = new Pessoa ("Renan", "Silva"); //Instância criada

//Todo objeto criado por uma função construtrora, é linkado ao Object prototype
//Esse prototype pode conter os metodos do objeto, melhorando a perfomance

pessoa1.nomeCompleto();
console.dir(pessoa1); // Olhar no navegador

//Manipular protos

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto ("Camiseta", 40);
p1.aumento(100);

console.log(p1.preco);

//Objeto literal
const p3 = {
    tamanho: 30,
    preco: 20
};

//P3 recebeu o prototype de Produto -> Herança
Object.setPrototypeOf(p3, Produto.prototype)

p3.desconto(50);

console.log(p3.preco);