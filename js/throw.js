function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Tipo de dado incompatível');
        //throw('Tipo de dado incompatível') MANDA SOMENTE A MSG
    }

    return x+y;
}

try {
    console.log(soma(1, 2));
    console.log(soma(1, '2'));

} catch (error) {
    console.log('Tratamento do meu próprio erro');
}    

