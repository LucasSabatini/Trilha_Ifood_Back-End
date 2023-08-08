// FUNÇÕES

// Definição da função
function saudacao() {
    console.log("Olá, seja bem-vinda(o) ao nosso curso de JavaScript!");
}

saudacao();

console.clear();

// Como enviar parâmetros para as funções
function saudacao(nome, curso="JavaScript") {
    console.log(`Olá ${nome}, seja bem-vinda(o) ao nosso curso de ${curso}!`);
}

saudacao("Lucas");

console.clear();

// Retorno da função

function soma(num1, num2) {
    console.log(2);
    return num1 + num2;
}

const resultado = soma(10, 20);

console.log(resultado) / 2;

console.clear();

function maiorQue50(numero) {
    if(numero > 50) {
        return true;
    }   
    return false;
}

console.log(maiorQue50(49));