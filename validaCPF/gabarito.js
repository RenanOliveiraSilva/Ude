function ValidaCPF(cpfEnviado) { 
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: () => {
            return cpfEnviado.replace(/\D+/g, ''); //Formatamos o cpf para apenas números
        }
    });
}

ValidaCPF.prototype.valida = function() {
    
    if(typeof this.cpfLimpo === 'undefined') return "teste"; //Não recebemos o cpf
    if(this.cpfLimpo.length !== 11) return false; //CPF com quantidade de digitos errado
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2); //Pegamos os 9 primeiros digitos
    const digito1 = this.criaDigito(cpfParcial);  //Verificação do primero digito verificador
    const digito2 = this.criaDigito(cpfParcial + digito1);  //Verificação do segundo digito verificador

    const novoCpf = cpfParcial + digito1 + digito2; //Concatenando todos os digitos
    return novoCpf === this.cpfLimpo; //True se for válido, false se for inválido
};

ValidaCPF.prototype.criaDigito = (cpfParcial) => {
    const arrayCpf = Array.from(cpfParcial); //Convertemos a string em array

    let i = arrayCpf.length + 1; //Número para usar na multiplicação

    const total = arrayCpf.reduce((ac, valor) => { //Realizando a conta
        ac += (i * Number(valor));
        i --;
        return ac;
    }, 0); 

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito); //Retornando o digito

};

ValidaCPF.prototype.isSequencia = function() { 
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52');

if (cpf.valida()) console.log('CPF válido!'); else console.log('CPF inválido!');