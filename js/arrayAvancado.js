const numbers = [5, 10, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Filter -> Filtra

//Retorne os números maiores que 10


const numbersMaiores = numbers.filter((valor) => {
    return valor < 10;
});

console.log(numbersMaiores);


//Map -> Altera os valores

const numberDouble = numbers.map(valor => {
    return valor*2;
});

console.log(numberDouble);

//Reduce -> Reduzir o array

// Calcular todo o array
const total = numbers.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0);

console.log(total);