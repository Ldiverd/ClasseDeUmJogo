let name = "digite seu nome";

console.log(name)
name = "Naruto"
console.log("Bem Vindo " + name)

class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    classeHeroi(tipoHeroi){
        let tipo = tipoHeroi
    
        if (tipo === "Mago"){
            const ataque = "magia"
            console.log("O " + tipo + " atacou usando " + ataque)
        }

        if (tipo === "Guerreiro"){
            const ataque = "espada"
            console.log("O " + tipo + " atacou usando " + ataque)
        }

        if (tipo === "Monge"){
            const ataque = "artes marciais"
            console.log("O " + tipo + " atacou usando " + ataque)
        }
        if (tipo === "Ninja"){
            const ataque = "shuriken"
            console.log("O " + tipo + " atacou usando " + ataque)
        }
    }
}


let game = new heroi(name, 21, "Mago")
let men = "Guerreiro"

game.classeHeroi(men)