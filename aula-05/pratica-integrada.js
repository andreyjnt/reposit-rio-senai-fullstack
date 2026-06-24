let nomes = ["Andrey", "Isabele", "Ana", "Eduardo", "Joás"]

let notas = [9, 5, 6, 7, 3]

let frequencia = [57, 78, 87, 64, 67]

for (let i = 0; i < nomes.length; i++){

console.log("===============================")
console.log("Posição: " + i)
console.log("Nome: " + nomes [i]) 
console.log("notas: " + notas [i])
console.log("frequencia: " + frequencia [i])
console.log("===============================")
}

let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

// Calcular a média da turma
let mediaTurma = somaNotas / notas.length

// Mostrar a média no console
console.log("Média geral da turma: " + mediaTurma)

for (let i = 0; i < nomes.length; i++) {

    if(notas[i] >= 7 && frequencia[i] >= 75){
        console.log("Aluno Aprovado")
            } else if (notas[i] >= 5 && frequencia[i] >= 75) {
        console.log ("aluno em recuperação")  
    } else{
        console.log("Aluno reprovado")

}

}