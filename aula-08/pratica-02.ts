let produto = {
    nome: "Mouse",
    preco: 80,
    quantidade: 2,
    calcularTotal: function () {
        return this.preco * this.quantidade;
    }
};
console.log(produto.calcularTotal ());
