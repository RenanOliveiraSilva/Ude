function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Chave visível
        configurable: true, //pode ser reconfigurado
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number') {
                throw new TypeError('Erro');
            }

            estoquePrivado = valor;
        }
    });
    
}

const p1 = new Produto('camisa', 20, 3);
p1.estoque = 'sdvvd';
console.log(p1.estoque);
