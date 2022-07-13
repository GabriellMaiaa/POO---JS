const user = {
    nome: 'Gabriel',
    email: 'gg456@gmail.com',
    nascimento: 2004/03/22,
    role: 'Admin',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const exibir = function(){
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)///O bind() serve para ligar (bind) o valor de this a um determinado contexto. 
exibirNome()
exibir()
/////////////// ARROW FUNCTION - TESTE
const soma = (num1, num2) =>{
    return num1 + num2
}

console.log(soma(38458, 48596))