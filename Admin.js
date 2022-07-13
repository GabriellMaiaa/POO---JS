import User from "./User";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "Admin", ativo = true) {
        super(nome, email, nascimento,role, ativo )
    }
    criarCurso(nome, vagas) {
        return `Curso de ${nome} com apenas ${vagas}`
    }
    
}
const novoAdmin = new Admin('Mário, m@mgmail.com', '21/05/79', 'Admin', 'true')
console.log(novoAdmin)
console.log(novoAdmin.criarCurso('js', 34))