let t1 = true; 
let t2 = true; 


let comprartv50 = t1 && t2;
console.log ('vamos comprar a tv de 50"? ' + comprartv50); // and

let comprartv30 = t1 !== t2;
console.log ('vamos comprar a tv de 32"? ' + comprartv50); // xor ou esclusivo 


let sorvete = t1 || t2;
console.log ('vamos comprar sorvete? ' + sorvete); // xor ou esclusivo 


let casa = !sorvete;
console.log ('vamos ficar em casa? ' + casa); // xor ou esclusivo 


let casanova = true;
let edicula = true;

let resultado = casanova !== edicula;
console.log('vamos fazer a edicula?' + resultado );