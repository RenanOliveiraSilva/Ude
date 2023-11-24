//Escreva uma função que receba  números e retorne o maior deles
function max(x, y) {
    const maior = x > y ? x : y;
    return maior;
}

console.log(max(8, 8));
console.log('----------------------------------------------------')

//Olhar se a imagem está em modo paisagem(true) ou não (false)
const ePaisagem = (altura, largura) => largura > altura ; 
console.log(ePaisagem(50, 120));
console.log('----------------------------------------------------')

// Atividade 3
function fizzBuzz (num) {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
    
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
console.log('----------------------------------------------------');





