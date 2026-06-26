// criando objeto
let aluno = {
nome: "Maria",
idade: 20,
curso: "Administração",
matriculado: true,
notaFinal: 10,
aprovado: true
};




// mensagem inicial 
console.log("Dados iniciais do aluno")
console.log("Batata: ", aluno.nome)
console.log("Idade: ", aluno.idade)
console.log("Curso: ", aluno.curso)
console.log("Matriculado: ", aluno.matriculado)
console.log("Nota final: " + aluno.notaFinal)


aluno.idade = 18
aluno.notaFinal = 8
aluno.matriculado = false 


console.log("|==================================|")
console.log("|         DADOS ATUALIZADOS        |")
console.log("|==================================|")

console.log("Nome: ", aluno.nome)
console.log("Idade: ", aluno.idade)
console.log("Curso: ", aluno.curso)
console.log("Matriculado: ", aluno.matriculado)
console.log("Nota final: " + aluno.notaFinal)


