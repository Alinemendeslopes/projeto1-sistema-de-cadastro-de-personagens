const Personagem = require("./class/Personagem")

const liliane = new Personagem("Liliane", "Mago" , 1000)

const boris= new Personagem("Boris", "Guerreiro" , 800)

const julieta = new Personagem("Julieta", "Arqueiro" , 1000)

liliane.ataque()
liliane.mostrarInfo()

boris.ataque()
boris.mostrarInfo()

julieta.ataque()
julieta.mostrarInfo()