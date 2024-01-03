//Produtos -- Nome, Preco
//Camiseta -> Nome, Preco, Cor
//Caneca -> Nome, Preco, Material

function Produtos(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produtos.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produtos.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};


//CAMISETA
function Camiseta(nome, preco, cor) {
    Produtos.call(this, nome, preco); //Chamando o Objeto Produto
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produtos.prototype); //Camiseta recebe o proto de Produtos
Camiseta.prototype.constructor = Camiseta; //Mudamos o construtor de Produtos para Camiseta


Camiseta.prototype.aumento = function(porcentagem) {
    this.preco = this.preco + (this.preco * (porcentagem / 100)); //Sobrescrevemos o aumento
}


//CANECA
function Caneca(nome, preco, material) {
    Produtos.call(this, nome, preco); //Chamando o Objeto pai (Produtos)
    this.material = material; //Novo atributo
}

Caneca.prototype = Object.create(Produtos.prototype); //Linkamos o proto com Produtos
Caneca.prototype.constructor = Caneca; //Renomeamos o construtor

Caneca.prototype.desconto = function(porcentagem) { // Sobrescrevos o método desconto do pai
    this.preco = this.preco - (this.preco * (porcentagem / 100));
};

const produto1 = new Produtos('Genérico', 555);
const camiseta1 = new Camiseta('Regata', 50, 'Roxo');
const caneca1 = new Caneca('Xicára', 40, 'Vidro');

camiseta1.aumento(100);
caneca1.desconto(100);

console.log(produto1);
console.log(camiseta1);
console.log(caneca1);