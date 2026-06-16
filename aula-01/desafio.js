let nome = "Isabele"

let peso = 56;

let altura = 1.60;

let imc = peso / (altura*altura)

console.log (imc)

console.log (nome)



// SE O IMC MENOR QUE 18,5 FAZ ISSO
if (imc < 18.5){
console.log ("abaixo do peso")
}

// SE NAO SE IMC FOR ENTRE 18,5 E 24,9 FAZ ISSO
else if (imc > 18.5 && imc < 24.9) {
console.log ("peso normal")

}


// SE NAO SE IMC FOR ENTRE 25 E 29,9 FAZ ISSO
else if (imc > 25 && imc < 29.9) {

console.log ("peso normal")
}


// SE NAO FOR NENHUMA DESSA OBESIDADE

else  {
console.log ("obeso")
}