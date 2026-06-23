// Variáveis de entrada

// Valor original da compra
let valorCompra = 180;

// Cliente possui cupom?
let temCupom = true;

// Cliente é aluno do SENAI?
let ehAlunoSENAI = false;

// Forma de pagamento escolhida
let formaPagamento = "pix";




// Variáveis auxiliares

// Guarda o valor original da compra
let valorOriginal = valorCompra;

// Guarda o total de descontos aplicados
let desconto = 0;

// Guarda o valor do frete
let frete = 0;

// Valor total da compra
let total = valorCompra;

// Aplica desconto de 10% se possuir cupom ou for aluno do SENAI
if (temCupom || ehAlunoSENAI) {
    desconto = valorCompra * 0.10;
    total = total - desconto;
}

// Verifica a forma de pagamento
switch (formaPagamento) {
    case "pix":
        // Aplica mais 5% de desconto
        let descontoPix = total * 0.05;
        desconto = desconto + descontoPix;
        total = total - descontoPix;
        break;

    case "boleto":
        // Aplica mais 2% de desconto
        let descontoBoleto = total * 0.02;
        desconto += descontoBoleto;
        total -= descontoBoleto;
        break;

    case "credito":
        // Não altera o valor
        break;

    // Forma de pagamento invalida
    default:
        console.log("Forma de pagamento inválida.");
}

// Calcula o frete
if (total >= 200) {
    frete = 0;
} else {
    frete = 20;
}

// Soma o frete ao valor final
total = total + frete;

// Exibe o resultado da compra
console.log("Valor original: R$ " + valorOriginal);
console.log("Desconto aplicado: R$ " + desconto);
console.log("Frete: R$ " + frete);
console.log("Total a pagar: R$ " + total);


