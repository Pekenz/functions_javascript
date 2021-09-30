//Por conta da possibilidade de criarmos um escopo, podemos ter mais níveis de escopo, como no exemplo abaixo:

let y = 5;

const multiplicar = function(n) {
    let y = n * 2;
    console.log(y) //escopo da function
    if (y >= 10){
        let y = 55;
        console.log(y) //escopo if dentro da function
    }
}

multiplicar(10);