// Uma função que chama ela mesma  -> Tem uma limite de calls
function recursiva (max) {
    console.log(max);
    if (max >= 10) return;
    max++
    recursiva(max);
};

recursiva(0);