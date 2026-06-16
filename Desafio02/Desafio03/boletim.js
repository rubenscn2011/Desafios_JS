/*
DESAFIO 03 - SISTEMA DE APROVAÇÃO

Crie uma função chamada verificarAluno() que receba:
- nome
-nota

Regras:
- Nota maior ou igual a 7 = Aprovado
- Nota maior ou igual a 5 e menor que 7 = Recuperação
- Nota menor que 5 = Reprovado

Exiba uma mensagem informando a situação do aluno.
*/
function verificarAluno (nome, nota) {
     if (nota >=7) {
        console.log(nome + "está aprovado(a)");
} 
    else{ (nota >=5) {
        console.log(nome + "está em recuperação");
}
    else (nota >= 5){
        console.log(nome + "reprovado(a)");
    }
     x
}
   

verificarAluno(" Rubens Erik, 7);
verificarAluno("Rubens, 5.5);
verificarAluno("Camila, 4");