let a = 8;
let b = 4;

let operacao = "*";
let resultado =  operacao === "+"? a + b : operacao === "-"? a - b : operacao === "*"? a*b : a / b;
console.log(resultado);