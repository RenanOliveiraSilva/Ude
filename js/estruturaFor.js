const array = ['Lyvia', 'Renan', 'Mel', 'Pedro'];

//For clássico
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);    
}
console.log('**********************');
//--------------FOR IN-----------------------------------------------

//FOR IN -> Lê os indices do array ou chaves do objeto

for (let indice in array) {
    console.log(indice, array[indice]);
}

//EM OBJETOS

const pessoa = {
    nome: 'Lyvia',
    sobrenome: 'Helena',
    idade: 18
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
console.log('**********************');
//------------------------FOR OF--------------------------
//FOR OF -> Lê os valores de um array

for (let value of array) {
    console.log(value);
}

console.log('**********************');

//FOR EACH -> Função interna do array
array.forEach(function (element, index, array) { console.log(element, index, array) })
