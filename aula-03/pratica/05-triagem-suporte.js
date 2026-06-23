let prioridade = 2
let sistemaForaDoAr = false
let tempoEsperaMin = 35
let categoria = "internet";

// Parte A - Classificação com if/else if
let classificacao;

if (sistemaForaDoAr || prioridade === 3) {
    classificacao = "CRÍTICO";
} else if (tempoEsperaMin > 30 && prioridade === 2) {
    classificacao = "ALTO";
} else if (prioridade === 1) {
    classificacao = "NORMAL";
} else {
    classificacao = "EM ANÁLISE";
}

console.log("Classificação:", classificacao);

// Parte B - Orientação com switch
switch (categoria) {
    case "login":
        console.log("Redefinir senha e validar usuário");
        break;

    case "internet":
        console.log("Verificar cabo, Wi-Fi e roteador");
        break;

    case "computador":
        console.log("Reiniciar máquina e verificar atualizações");
        break;

    case "outro":
        console.log("Coletar mais informações");
        break;

    default:
        console.log("Categoria inválida");
}