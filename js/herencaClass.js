class DispositoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'ja está ligado');
            return;
        }

        this.ligado = false;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'ja está desligado');
            return;
        }

        this.desligado = false;
    }
}

class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo) {
        super(nome) //Chamada do constructor do pai
        this.cor = cor;
        this.modelo = modelo;
    }

}

const s1 = new Smartphone('Iphone', 'Roxo', 'XL');
console.log(s1);