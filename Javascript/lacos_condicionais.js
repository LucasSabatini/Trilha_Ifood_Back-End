// LAÇOS CONDICIONAIS

const input = require("readline-sync");

const numero_sorteado = 5;

let numero = Number(input.question("Qual número você escolhe? "));

while(numero != numero_sorteado) {
    if(numero == numero_sorteado) {
        console.log("Você acertou!");
    } else {
        console.log("Você errou!")
        numero = Number(input.question("Qual número você escolhe? "));
    }
}
console.log("Você acertou!");