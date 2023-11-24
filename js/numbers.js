let num1 = 10; //Number
let num2 = 1.8; //Number

//console.log(num1.toString() + num2) -> Mesmo com a conversão o num1 continua number
//num1 = num1.toString() -> Agora o num1 é string
//console.log(num1.toString(2)) -> Forma decimal do número
//console.log(num1.toFixed(2)) -> Arredondar o númeor
//console.log(Number.isInteger(num1)) -> É interio? True ou False


//IEEE 754-2008 -> Padrão do JS

let n1 = 0.7;
let n2 = 0.1;

n1 += n2; // 0.8
n1 += n2; // 0.9
n1 += n2; // 1.0

n1 = parseFloat(n1.toFixed(2));
console.log(n1);
console.log(Number.isInteger(n1));