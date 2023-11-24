//Estrutura de repetição WHILE

const array = ['maçã', 'abacaxi', 'uva', 'banana'];

let i = 0;

while (i < array.length) {
    console.log(array[i]);
    i++; //NÃO ESQUECER DE ITERAR
}

//VALIDAÇÃO FEITA APÓS A ENTRADA NO LOOP    
do {
    console.log(array[i]);
    i++; //NÃO ESQUECER DE ITERAR

} while(i < array.length);