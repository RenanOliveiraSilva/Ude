//Tipos de Comparação 

// maior        >
// menor        <
// maior igual  >=
// menor igual  <=
// igual        ==
// diferente    !=

let ex = 10

console.log(3 > 2);

console.log(ex == "10"); // Dois iguais compara somente o coteúdo
console.log(ex === "10"); // Além do conteúdo, compara o tipo das variáveis

console.clear(); // Limpa oque foi imprimido acima

// Conjunções Lógicoas

// --> AND --> &&
2
let idade = 18;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log("Posso Dirigir? ", possoDirigir);

// --> OR --> || 

idade = 80;

let votoFacultativo = idade < 18 || idade > 70;

// --> NOT --> !

let estouCansado = false;

console.log(!estouCansado);


//Falsos

/**
 * False
 * Null / Undefined
 * NaN
 * String Vazia ""
*/