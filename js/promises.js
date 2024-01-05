function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Erro');
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase());
            return;
        }, tempo);
    });
}

//resolve -> then reject -> catch
esperaAi(10, 1000).then((valor) => {
        console.log(valor); 

    }).catch((e) => console.log(e));


const array1 = [
    'Promise resolvida',
    esperaAi('Promise 1', 5000),
    esperaAi('Promise 2', 4000),
    esperaAi('Promise 3', 7000),
];

//Promise.all -> Retorna um valor de um array de promises
//Retorna todos os valores porém se ocorrer um reject retornará somente ele
Promise.all(array1).then((valor) => {
        console.log(valor)
    }).catch(e => console.log(e));


//Promise.race -> retornará o valor que executar primeiro
Promise.race(array1).then((valor) => {
    console.log(valor)
}).catch(e => console.log(e));


function baixaPagina() {
    const emCache = true;

    if(emCache) {
        //Promise.resolve -> Já envia o valor direto para o then
        return Promise.resolve('Página em cache');

    } else {
        
        //Promise.reject -> Já envia o valor direto para o catch
        return Promise.reject('Baixei a página');
    }
}

baixaPagina().then((valor) => {
        console.log(valor);
    
    }).catch(e => console.log(e));


    //Async e Await

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
    } catch(e) {
        console.log(e);

    }
}

executa();