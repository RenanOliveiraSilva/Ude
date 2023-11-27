
function Pessoa (nome, sobrenome) {
    //Privadas -> Serão utilizadas somente dentro do escopo da função
    const CPF = 12345678;
    const metodoInterno = () => {}; //Arrow function, mas pode ser utilizada qualquer tipo

    // Atributos e Métodos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + " " + this.sobrenome);
    };

};

const pessoa1 = new Pessoa("Renan", "Silva");
pessoa1.metodo();
