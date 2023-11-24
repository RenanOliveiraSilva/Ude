function criaCaluladora() {

    return{

        display: document.querySelector('.display'),

        iniciaCalculadora() {
            this.cliqueBotoes();
            this.clicaEnter();
            this.display.focus();
        },

        mostraNoDisplay(valor) {
            this.display.value += valor;
            this.display.focus();

        },

        limpaDisplay() {
            this.display.value = ' ';
            this.display.focus();
        },

        apagaNum() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta); //Perigo 

                if (!conta) {
                    alert('Conta Inválida!');
                    this.limpaDisplay();
                    return;
                }
                
                this.display.value = String(conta);
                this.display.focus();

            } catch (error) {
                alert('Conta Inválida!');
                this.limpaDisplay();
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const elemente = e.target;

                if (elemente.classList.contains('btn-num')) {
                    this.mostraNoDisplay(elemente.innerText);
                }
                
                if (elemente.classList.contains('btn-del')) {
                    this.limpaDisplay();
                }

                if (elemente.classList.contains('btn-ap')) {
                    this.apagaNum();
                }

                if (elemente.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        clicaEnter() {
            document.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

    };

}

const caluladora = criaCaluladora();
caluladora.iniciaCalculadora();