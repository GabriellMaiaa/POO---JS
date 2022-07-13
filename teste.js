class Teste {
    constructor(nome, email, cidade, curso, carreira){
    this.nome = nome,
    this.email = email,
    this.cidade = cidade,
    this.curso = curso,
    this.carreira = carreira

}
exibirInfos (){
    return `${this.carreira}, ${this.cidade}`
}
}

const Teste2 = new Teste('Jacinto', 'J@gmail.com', 'Jaratinguetá', 'Med', 'Médico');
console.log(Teste2)
console.log(Teste2.exibirInfos())