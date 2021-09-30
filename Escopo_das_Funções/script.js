//O que acontece dentro de uma função fica separado do escopo global. O escopo global seria todo o arquivo do JS.

// let n = 10;

// const numero = function() {
//     let n = 25;
//     console.log(n);
// }
// numero();
// console.log(n);

//Mais sobre escopo das funções:

let x = 10;

if(x > 5) {
    let x = 20;
    x++
    console.log(x);
}

console.log(x)

//Atualmente com let e const, qualquer bloco de código pode separar seu escopo, por exemplo o if acima.