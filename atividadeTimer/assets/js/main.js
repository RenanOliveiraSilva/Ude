let relogio = document.querySelector('.relogio');
let start = document.querySelector('.start');
let stopTimer = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let segundos = 0;
let timer;

function horaSegundos(segundos) {
    const dataTime = new Date(segundos * 1000);
    return dataTime.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "UTC"
    });
}

function iniciaTimer() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = horaSegundos(segundos);
    }, 1000);
}

start.addEventListener('click', function (e) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaTimer();
});

stopTimer.addEventListener('click', function (e) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

reset.addEventListener('click', function (e) {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
});