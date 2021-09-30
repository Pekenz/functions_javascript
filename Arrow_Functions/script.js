//A arrow function é uma outra forma de escrever funções, bem utilizada em frameworks modernos. Porém não devemos substituir as functions totalmente.
//Exemplo de como é criada uma arrow function:

const parOuImpar = (n) => { //Não precisa do 'function' e usamos essa 'seta' para indicarmos a function.
    return n % 2;
};

console.log(parOuImpar(3));

//Se temos apenas um parâmetro, podemos remover os parênteses do argumento e o return. Então se a expressão for pequena, pode até ser feita em uma linha sem prejudicar
//a leitura do código. Exemplo:

const raizQuadrada = n => n * n;

//Fica bem mais simples do que se fizermos:
const raizQuadrada2 = (x) => {
    return x * x;
};