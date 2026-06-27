let alunos = [
    { nome: "Ana", idade: 18, curso: "Full Stack" },
    { nome: "Carlos", idade: 22, curso: "Full Stack" },
    { nome: "Maria", idade: 20, curso: "Full Stack" }
];

// FOR tradicional (nome e idade)
console.log("USANDO FOR TRADICIONAL");

for (let i = 0; i < alunos.length; i++) {
    console.log("Nome:", alunos[i].nome);
    console.log("Idade:", alunos[i].idade);
}

// FOR EACH (nome, idade e curso)
console.log("USANDO FOR EACH");

alunos.forEach(function(aluno) {
    console.log("Nome:", aluno.nome);
    console.log("Idade:", aluno.idade);
    console.log("Curso:", aluno.curso);
});

// Alterando a idade do segundo aluno
alunos[1].idade = 23;

// Mostrando novamente o segundo aluno
console.log("SEGUNDO ALUNO ATUALIZADO");
console.log("Nome:", alunos[1].nome);
console.log("Idade:", alunos[1].idade);
console.log("Curso:", alunos[1].curso);