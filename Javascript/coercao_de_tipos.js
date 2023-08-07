// Coerção (conversão) de tipos

// 1. Coerção explícita (manual)
const numero = 10;
console.log(numero, typeof numero);

const numeroEmFormatoString = String(numero);
console.log(numeroEmFormatoString, typeof numeroEmFormatoString);

console.log(Number(numeroEmFormatoString));
console.log(parseFloat("1234.938"));
console.log(parseInt("1234.938"));
console.log(Boolean(1));

console.clear();

// 2. - Coerção Implícita (automática)

console.log(10 + "1"); // Se não converter para número manualmente, ele não soma e sim concatena tudo em uma string
console.log(10 - "1"); // Na subtração e outras operações há a conversão automática para número
console.log(10 * "3");
console.log(10 - "asass"); // NaN => Not a Number