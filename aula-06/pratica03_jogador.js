let jogador = {
    nickname: "Player01",
    nivel: 5,
    moedas: 200,
    energia: 100,
    premium: false
};

// Estado inicial
console.log("======= ESTADO INICIAL =====");
console.log("Nickname:", jogador.nickname);
console.log("Nível:", jogador.nivel);
console.log("Moedas:", jogador.moedas);
console.log("Energia:", jogador.energia);
console.log("Premium:", jogador.premium);

// Alterando os dados
jogador.nivel = 6;
jogador.moedas = 350;
jogador.energia = 80;
jogador.premium = true;

// Estado final
console.log("======== ESTADO FINAL =========");
console.log("Nickname:", jogador.nickname);
console.log("Nível:", jogador.nivel);
console.log("Moedas:", jogador.moedas);
console.log("Energia:", jogador.energia);
console.log("Premium:", jogador.premium);