// ESTRUTURAS CONDICIONAIS

const idade = 20;

if(idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// Se a média for >= 7, Aprovado
// Se a média for < 7 e >= 5, Recuperação
// Se a média for <5, Reprovado

console.clear(); // Limpar as saídas anteriores

let media = 10;

if(media >= 7) {
    console.log("Aprovada(o)");
} else if(media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovada(o)");
}