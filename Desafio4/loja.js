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
let produtos = [
  { nome: "Mouse", preco: 169.90 },
  { nome: "Teclado", preco: 249.90 },
  { nome: "Cabo HDMI", preco: 25.00 },
 
];
for (let i = 0; i < produtos.length; i++){
    if(produtos[i].preco > 100)
      console.log(produtos[i].nome);
}

