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

const admin = {
    nome :'Mariana',
    email : 'mm345@gmail.com',
    role : 'Admin',
    CriarCurso() {
        console.log('Curso Criado!!')
    }
}
////// user é o Protótipo de Admin ///////
Object.setPrototypeOf(admin, user)
admin.CriarCurso()
admin.exibirInfos();