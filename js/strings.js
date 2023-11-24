//Strins são indexadas, ou seja, cada caractere possui um índice
let umaString = "Um texto";
let outraString = "O rato roeu a roupa do rei de roma";

console.log(umaString);
console.log(umaString[3]);
console.log(umaString.concat(" bem elaborado!!!")); //Concatenar
console.log(umaString.indexOf("Um")); //Ver qual a posição
console.log(umaString.indexOf("o", 4)); //Ver qual a posição da letra a partir da posiçãi indicada
console.log(umaString.lastIndexOf("t", 3)); 
console.log(umaString.match(/[a-z]/g)); //todas a letras minúsculas
console.log(umaString.search(/[x]/)); //todas a letras minúsculas
console.log(outraString.replace(/r/g, '#')); 
console.log(outraString.length); // Tamanho
console.log(outraString.slice(2, 6)); // Um pedaço da frase
console.log(outraString.split(' ',)); // Separa a frase
console.log(outraString.split(' ', 3)); // Separa a frase da posição determinada
console.log(outraString.toUpperCase()); 
console.log(outraString.toLowerCase());

// Documentação Oficial ecma



 
