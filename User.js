/////COMO CONSTRUIRR CLASSESSS/////////

export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome,
        this.email = email,
        this.nascimento = nascimento,
        this.role = role || 'estudante',
        this.ativo = ativo
    }

    exibirInfos () {
        return `${this.nome}, ${this.nascimento}`
    }
}

const novoUser = new User('Jamilton', 'j@j.gmail.com', '31/09/96')
console.log(novoUser)
console.log(novoUser.exibirInfos())