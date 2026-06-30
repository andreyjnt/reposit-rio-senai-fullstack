## Perguntas

**R:Uma função é um bloco de código criado para realizar uma tarefa específica e que pode ser reutilizado sempre que necessário.**



- Qual e a principal vantagem de usar funcoes em vez de repetir o mesmo codigo varias vezes?

**R: Evita a repetição de código, facilita a organização, a manutenção e a reutilização do programa.**

- O que sao parametros de uma funcao?

**R:Parâmetros são as variáveis declaradas na função que recebem os valores enviados quando ela é chamada.**

- Qual a diferenca entre parametro e argumento?

**R: Parâmetro é a variável definida na função. Argumento é o valor passado para a função no momento da chamada.**

- Para que serve a palavra-chave return?

**R:Serve para retornar um valor da função para quem a chamou.**

- O que acontece quando uma funcao nao possui return?

**R: Ela executa o código normalmente, mas não retorna nenhum valor. Em JavaScript e TypeScript, o retorno será undefined.**

- O que significa modularizar um codigo?

**R: Significa dividir o programa em partes menores, organizadas em funções ou módulos, facilitando a leitura, a reutilização e a manutenção.**

- Por que funcoes pequenas e bem nomeadas facilitam a manutencao do sistema?

**R: Porque tornam o código mais fácil de entender, localizar erros e fazer alterações sem afetar outras partes do programa.**

- Em TypeScript, por que e util informar o tipo dos parametros e do retorno?

**R: Porque ajuda a evitar erros, melhora a legibilidade do código e permite que o TypeScript faça verificações antes da execução do programa.**


- Observe a funcao abaixo. Qual sera o resultado exibido no console?
function dobro(n: number): number {
return n * 2;
}
console.log(dobro(7));


**Resposta: Será 14.**