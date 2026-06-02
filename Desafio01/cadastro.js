//Desafio 01 - Cadastro de Pessoa

/*
 Crie um objeto chamado pessoa contendo:
 - nome
 - idade
 - cidade
 Após a criação:
 - Altere a idade
 - Adicione uma profissão
 - Remova a cidade
 No fim, exiba o objeto final.
*/

const pessoa= {
    nome: "Rubens",
    idade: "30",
    cidade: "Capanema"

}
   console.log(pessoa);
   console.log(pessoa.nome);
   console.log(pessoa.idade);
   pessoa.idade = "18";
   
   pessoa.profissão ="Técnico em Desenvolvimento de Sistemas";
   delete pessoa.cidade;
   console.log (pessoa);


   

