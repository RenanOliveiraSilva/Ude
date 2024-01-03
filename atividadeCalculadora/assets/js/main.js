function CriaCaluladora() {

        this.display =  document.querySelector('.display');

        this.inicia = () => {
            this.cliqueBotoes();
            this.clicaEnter();
            this.display.focus();
        };

        this.mostraNoDisplay = valor => {
            this.display.value += valor;
            this.display.focus();

        };

        this.limpaDisplay = () => {
            this.display.value = ' ';
            this.display.focus();
        };

        this.apagaNum = () => {
            this.display.value = this.display.value.slice(0, -1);
        },

        this.realizaConta = () => {
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

        this.cliqueBotoes = () => {
            document.addEventListener('click', event => {
                const elemente = event.target;

                if (elemente.classList.contains('btn-num')) this.mostraNoDisplay(elemente.innerText);
                if (elemente.classList.contains('btn-del')) this.limpaDisplay();
                if (elemente.classList.contains('btn-ap')) this.apagaNum();
                if (elemente.classList.contains('btn-eq')) this.realizaConta();

            });
        };

        this.clicaEnter = () => {
            document.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        };


}

const caluladora = new CriaCaluladora();
caluladora.inicia();