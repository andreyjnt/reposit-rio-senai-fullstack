// Criando o objeto produto
let produto = {
    nome: "Notebook",
    preco: 120.00,
    estoque: 10,
    disponivel: true,
};

// Mostrando os dados antes das alterações
console.log("DADOS INICIAIS");
console.log("Nome:", produto.nome);
console.log("Preco" , produto.preco);
console.log("Estoque:" , produto.estoque);
console.log("Disponivel:" , produto.disponivel);

// Alterando o preço (desconto)
produto.preco = 99.90;

// Alterando o estoque (venda)
produto.estoque = 9;

// Alterando a disponibilidade
produto.disponivel = false;

// Mostrando os dados depois das alterações
console.log("DADOS MODIFICADOS");
console.log("Nome:", produto.nome);
console.log("Preco" , produto.preco);
console.log("Estoque:" , produto.estoque);
console.log("Disponivel:" , produto.disponivel);