function validaCpf(cpfEx) {

    function formataCPF(cpf) {
        const cpfLimpo = cpf.replace(/\D+/g, ''); //Tirando tudo que não for numérico
        cpfArray = Array.from(cpfLimpo); // Transformando em Array
        return cpfArray;
    }

    function cpfOriginal(cpf) {
        const cpfLimpo = cpf.replace(/\D+/g, ''); //Tirando tudo que não for numérico
        return cpfLimpo;
    }

    function digitos9Cpf(cpf) {
        const cpf9 = cpf.filter((valor, index) => {
            return index < 9;
        });

        return cpf9;
    }

    function digitos10Cpf(cpf9, digito10) {
        const digito = digito10.toString();
        cpf9.push(digito);

        return cpf9;
    }

    function juntaCpf(cpf10, digito11) {
        const digito = digito11.toString();
        cpf10.push(digito);

        const cpfInteiro = cpf10.join('');
        return cpfInteiro;
    }

    function verificaDigito10(cpfArray) {
        let i = 11;

        const total = cpfArray.map(valor => {
            i--;
            return parseFloat(valor) * i;
        }).reduce((ac, valor) => {
            ac += parseFloat(valor);
            return ac;

        }, 0);

        const digito10 = 11 - (total % 11);
        
        return digito10 < 9 ? digito10 : 0;
    }

    function verificaDigito11(cpfArray) {
        let i = 12;

        const total = cpfArray.map(valor => {
            i--;
            return parseFloat(valor) * i;

        }).reduce((ac, valor) => {
            ac += parseFloat(valor);
            return ac;

        }, 0);

        const digito11 = 11 - (total % 11);
        
        return digito11;
    }

    function verificaCPF(cpfUser, cpfInteiro) {
        return cpfUser == cpfInteiro ? 'Válido' : 'Inválido';
    }

    let cpfUser = cpfOriginal(cpfEx);
    let cpf = formataCPF(cpfEx);

    let cpf9 = digitos9Cpf(cpf);
    let digito10 = verificaDigito10(cpf9);

    let cpf10 = digitos10Cpf(cpf9, digito10);
    let digito11 = verificaDigito11(cpf10);
    let cpfInteiro = juntaCpf(cpf10, digito11);
    console.log(verificaCPF(cpfUser, cpfInteiro));
}

let cpfValido = '705.484.450-52'
let cpfInvalido = '123.111.789-10';

validaCpf(cpfInvalido);