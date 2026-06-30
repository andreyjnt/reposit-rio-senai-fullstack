function calcularMedia(nota1: number, nota2: number, nota3: number): number {
    return (nota1 + nota2 + nota3) / 3;
}

function verificarSituacao(media: number): string {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperacao";
    } else {
        return "Reprovado";
    }
}

function exibirBoletim(nome: string, media: number, situacao: string): void {
    console.log("Nome:", nome);
    console.log("Média:", media);
    console.log("Situação:", situacao);
}

const nome = "João";
const media = calcularMedia(8, 7, 9);
const situacao = verificarSituacao(media);

exibirBoletim(nome, media, situacao);