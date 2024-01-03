const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const lista = document.querySelector('.lista');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function criaBtnApagar(li) {
    li.innerText += " ";
    const btn = document.createElement('button');
    btn.innerText = "Apagar";
    li.appendChild(btn);
    btn.setAttribute('class', 'apagar')
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textInput) {
    const li = criaLi();
    li.innerText = textInput;
    lista.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvarTarefas();
    
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const element = e.target;
    
    if (element.classList.contains('apagar')) {
        element.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const li = lista.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of li) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);

    }

    const tarefasjson = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasjson);
}

function criaTarefaSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const liTarefas = JSON.parse(tarefas);

    for(let tarefa of liTarefas) {
        criaTarefa(tarefa);
    }
}

criaTarefaSalvas();
 