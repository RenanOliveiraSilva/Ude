//Atividade 1

//Somar 2 valores digitados pelo usuário e exibir o resultado

/*
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let resultado = num1 + num2; 
*/

//Atividade 2

let a = 'a'; //b
let b = 'b'; //c
let c = 'c'; //a
let auxA; //Auxiliar A

auxA = a;

a = b;
b = c;
c = auxA;

console.log(a, b, c);

[a, b, c] = [a, b, c]; //Solução sem criar uma nova váriavel 

console.log(a, b, c);


