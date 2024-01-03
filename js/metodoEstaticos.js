class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Método de Instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //Método Estático
    static trocaPilha() {
        console.log("Pilha trocada");
    }
}

const c1 = new ControleRemoto('LG');

c1.aumentarVolume(); //Método de Instância é acessado pela instância

ControleRemoto.trocaPilha(); //Método estático é acessado pela classe

console.log(c1);