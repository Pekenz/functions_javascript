//Closure é uma função que se 'lembra' do escopo em que foi criada, exemplo

function guardarSoma(x) {
    return y => x + y;
}

let soma1 = guardarSoma(3);
console.log(soma1(5)); // 8, já que ele vai somar o X(3) com o Y(5)
let soma2 = guardarSoma(5);
console.log(soma2(10)); //15. (5+10)

//Podemos ver então que podemos criar várias somas, criando outras variáveis e armazenando o numero X para somar com Y depois.