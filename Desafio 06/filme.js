/*
DESAFIO 06 - FILME FAVORITO

Crie um objeto chamado filme contendo:
- titulo
- genero
- ano

Crie uma função responsável por receber esse objeto
e exibir todas as informações formatadas no console
utilizando template string.

O objeto é praticar a manipulação de objetos
e passagem de parâmetros para funções.
*/

let filme = {
    titulo: "A Virada",
    genero: "Gospel",
    ano: 2026
}
 
function exibirFilme() {
    console.log(`
        O titulo do filme que irei assistir 
        no cinema nesse fim de de semana é: ${filme.titulo}.
        o gênero do filme é de: ${filme.genero},
        o ano de ${filme.ano}.`);
}
        
exibirFilme();  