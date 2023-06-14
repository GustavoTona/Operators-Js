const hora = 22;
let saudacao;

if (hora < 12) {
    saudacao = "bom dia";

} else if (hora < 18) {
    saudacao = "boa tarde";


} else if (hora < 22) {
    saudacao = "Boa noite";


} else {
    saudacao = "Muitoooo tarde";
}

console.log(saudacao);

//quando tem um if, o programa vai executar uma outra coisa logo abaixo 
// (ex: setencia de codigo, bloco, if)