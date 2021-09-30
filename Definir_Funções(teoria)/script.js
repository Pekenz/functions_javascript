/*
Funções são estruturas de códigos menores que são reaproveitadas durante a execução/construção de um programa
O principal objetivo é poupar repetição de código e podemos reaproveitar esta função e podemos considerar uma função como um 'subprograma'

Para declararmos uma função, temos sempre que começar com a palavra 'function;' e essa função deve ter um nome, podendo conter argumentos e parâmetros, definidos entre ();
O corpo da função é definido entre {}; e geralmente uma função retorna um valor.
Também é possível declarar funções em variáveis.

Exemplos de como definir uma função abaixo:

*/

function escreverNoConsole(){
    console.log('Escrevendo no console');
}

escreverNoConsole(); // Chamamos uma função desta maneira.

//Podemos também definir uma função em uma variável

const textoNoConsole = function(){
    console.log('Texto no console!');
}

textoNoConsole(); // E chamamos da mesma maneira.

const textPorParametro = function(texto){
    console.log(texto);
}

textPorParametro('Testando por Parâmetro!');