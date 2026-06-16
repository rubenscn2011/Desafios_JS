/*
DESAFIO 04 - LOJA TECH

Uma loja de informática possui vários produtos cadastrados.

Crie um array de objetos contendo:
- nome
- preco

Utilize uma estrutura de repetição para mostrar apenas
 os produtos que custam mais de R$ 100,00.

 Exiba o nome dos produtos encontrados.
 */

 // Criação do array de objetos contendo os produtos da Loja Tech
const produtos = [
  { nome: "Mouse Gamer", preco: 89.90 },
  { nome: "Teclado Mecânico", preco: 159.00 },
  { nome: "Cabo HDMI 2m", preco: 25.00 },
  { nome: "Monitor 24 polegadas", preco: 849.90 },
  { nome: "Headset com Microfone", preco: 120.00 },
  { nome: "Pendrive 32GB", preco: 45.00 }
];

console.log("Produtos que custam mais de R$ 100,00:");

// Estrutura de repetição para percorrer o array
for (const produto of produtos) {
  // Condição para verificar se o preço é maior que 100
  if (produto.preco > 100) {
    // Exibe apenas o nome do produto encontrado
    console.log(produto.nome);
  }
}