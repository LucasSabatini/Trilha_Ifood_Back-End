// OBJETOS

// Como criar um objeto no JavaScript

let pessoa = {
    nome: "Lucas",
    idade: 30,
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["nome"]);
console.log(pessoa.idade);

console.clear();

// Como adicionar um par de chave-valor?

pessoa.altura = 1.71;

console.log(pessoa);

// Como remover um par de chave-valor?

delete pessoa.altura;

console.log(pessoa);

console.clear();

// Como percorrer um objeto?

for (let chave in pessoa) {
    console.log(chave);
}