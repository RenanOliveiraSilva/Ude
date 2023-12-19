function Produto(nome, preco, estoque) {
    //Apenas uma
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Chave visível
        value: estoque, //valor
        writable: false, //pode ser alterado
        configurable: true //pode ser reconfigurado
    });
    //Várias
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //Chave visível
            value: nome, //valor
            writable: true, //pode ser alterado
            configurable: true //pode ser reconfigurado    
        },
        preco: {
            enumerable: true, //Chave visível
            value: preco, //valor
            writable: false, //pode ser alterado
            configurable: true //pode ser reconfigurado
    
        }
    })
}

const p1 = new Produto('camisa', 20, 3);
console.log(p1);
p1.estoque = 5; // Alteração não funciona por conta do writable false
console.log(Object.keys(p1)); // ->A chave estoque é visivel por conta do enumerable true
