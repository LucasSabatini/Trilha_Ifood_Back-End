// Operadores booleanos

// Igualdade: == (ou ===)
// Desigualdade: != (ou !==)
// Maior que: >
// Maior ou igual: <=
// Menor que: <
// Menor ou igual: <=

const numero = 10;
console.log(numero > 20);
console.log(numero == 10);

console.log(numero == "10"); // Compara apenas o conteúdo, portanto true
console.log(numero === "10"); // Compara o tipo e o conteúdo, portanto false
console.log(numero != "10"); // Compara apenas o conteúdo, portanto true
console.log(numero !== "10"); // Compara o tipo e o conteúdo, portanto false

// Conjunções lógicas

// AND => &&
let idade = 26;
let tenhoCNH = true;
const possoDirigir = idade >= 18 && tenhoCNH === true;
console.log(possoDirigir);

// OR => ||
idade = 40;
const votoFacultativo = idade < 18 || idade >= 70;
console.log(votoFacultativo);

// NOT => !
const estouGostandoDoCurso = false;
console.log(!estouGostandoDoCurso);