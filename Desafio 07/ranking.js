
/*
DESAFIO 07 - RANKING DE JOGADORES

Uma competição precisa exibir a classificação dos participantes.

Crie uma Array contendo o nome de 4 jogadores. ok

Utilize uma estrutura de repetição para mostrar:

1º jogador
2º jogador
3º jogador
4º jogador

A posição deve ser gerada automaticamente pelo sistema.
*/

let jogadores = ["Rubens", "Rubens Jr", "Net", "Maria", "Antonio"];

for (let posicao = 0; posicao < jogadores.length; posicao++) {
    console.log(`${[posicao + 1]}º Jogador: ${jogadores[posicao]}`);
}

