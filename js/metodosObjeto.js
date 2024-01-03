//Todos os métodos estão protegidos por funções, afim de não causar conflitos
const produto = {
    nome: 'produto',
    preco: 14.5
}

function copiar() {
    // Copiar um objeto
    
    //Utilizando o spread operator espalhamos o obj produto em caneca
    const caneca = { ...produto, tipo: 'porcelana'}
    
    
    //Podemos copiar esse objeto utilizando o objeto.assign
    
    const caneca2 = Object.assign({}, produto, {tipo: 'vidro'});
    
    console.log(produto);
    console.log(caneca);
    console.log(caneca2);

}

//copiar();

function propriedades() {
    //Podemos ler e configurar as propriedades do objeto

    //Configurando propriedades
    Object.defineProperty(produto, 'nome', {
        writable: true,
        configurable: false,
        value: "Outra coisa"
    });

    //Leitura das propriedades
    console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
}

//propriedades();

function ler() {
    //Pegar valores do objeto
    const chaves = Object.keys(produto); // Pega somente as chaves
    const valores = Object.values(produto); // Pega somente os valores
    const tudo = Object.entries(produto); // Pega as chaves e os valores

    console.log(chaves);
    console.log(valores);
    console.log(tudo);
}

//ler();