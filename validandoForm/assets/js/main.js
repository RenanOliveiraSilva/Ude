class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario'); //Selecionando o formulário HTMl
        this.eventos(); //Registrar os eventos
    }

    //Pegando evento de submit do formulário
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e); //Chamada da função handle quando formulario for enviado
            
        });
    }

    //Enviando formulário caso validações estejam ok
    handleSubmit(e) {
        e.preventDefault(); //Previnindo a configuração padrão, ou seja, o formulário ainda não foi enviado

        const camposValidos = this.camposValidos(); //Validação dos campos
        const senhasValidas = this.senhasValidas(); //Validação das senhas

        if(camposValidos && senhasValidas) { //Verificação
            alert('Formulário Enviado');
            this.formulario.submit(); //Envio do formulário
        }
    }

    //Verificando todos o campos
    camposValidos() {
        let valid = true; //Definindo uma variável com padrão de true

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove(); //Remove a classe error-text
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) { //Pegando todos os campos
            const label = campo.previousElementSibling.innerText; //Pegando o nome do campo
            
            //Verificando se os campos estão em branco
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }

            //Validação do CPF
            if(campo.classList.contains('cpf')) {
                if(!this.validaCpf(campo)) valid = false;
            }
            
            //Validação do campo usuário
            if(campo.classList.contains('usuario')) {
                if(!this.validaUser(campo)) valid = false;

            }
        }

        return valid;
    }

    //Validando CPF
    validaCpf(campo) {
        const cpf = new ValidaCPF(campo.value); //Criando uma instância da classe validaCPF

        //Validando CPF
        if(!cpf.valida()) { 
            this.criaErro(campo, 'CPF inválido');
            return false; //Retornando false
        } else {
            return true; //Retornando true
        }

    }

    //Validando usuários
    validaUser(campo) {
        const user = campo.value; //Pegando o valor do campo usuário do formulario
        let valid = true; //Setando true para valid

        //Verificando tamanho da usuário
        if(user.length < 3 || user.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }
        
        //Verificando os tipos de caracter do usuário
        if(!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
            valid = false;
            
        }

        return valid; //Retornando resultado da validação
    } 
    
    //Validando senhas
    senhasValidas() {
        let valid = true; //Setando true para valid
        
        const senha = this.formulario.querySelector('.senha'); //Selecionando o campo senha do formulário
        const repetirSenha = this.formulario.querySelector('.repetir'); //Selecionando o campo repetir senha do formulário
    
        //Verficando se as senhas são iguai
        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.')
        }

        //Verificando o tamanho da senha
        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.')

        }

        return valid;
    }

    //Mostrando erro ao usuário
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();