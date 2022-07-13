function User(nome, email) {
    this.nome = nome;
    this.email = email;
}

this.exibirInfos = function(){
    return `${nome}, ${email}`;
}
//const novoUser = new User('Gabriel', 'Grm@cic.gmail.com')
//console.log(novoUser)


const user = {
    init: function(nome, email) {
        this.nome = nome, 
        this.email = email

    },
    
    exibirInfos: function(nome) {
        return this.nome
       
    }
}
    ////novoUser pegou user como protótipo ///////
const novoUser = Object.create(user)
novoUser.init('Gabriel', 'Maia')
console.log(novoUser.exibirInfos())

//////////
