class Personagem {
    #vida
    constructor(nome,classe,vida) {
        this.nome = nome
        this.classe = classe
        this.#vida =vida

    }
   ataque(){
    console.log (`${this.nome} Atacou!`)
   }


   mostrarInfo(){
    console.log (`${this.nome}`)
    console.log (`${this.classe}`)
    console.log (`${this.#vida}`)
   }
}

module.exports = Personagem