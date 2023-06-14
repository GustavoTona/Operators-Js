let temDinheiro = false;
let temSol = false;
let carro = true;

let resultadoE = "Go to the shopping? "; //resultado E (and)
resultadoE += temDinheiro && temSol;

console.log(resultadoE);

let resultadoOU = "#2 Go to the shopping? "; //OR
resultadoOU += temSol || carro;

console.log(resultadoOU);


// ou exclusivo menos usado

console.log(true !== true); // true é diferente de true
console.log(true !== false); // true e diferente de false 
console.log(false !== true); // false e diferente de true 
console.log(false !== false); // false e diferente de false

//operador unario, negacao

console.log(!true);  // nao verdadeiro = false 
console.log(!false); // nao false = true; 