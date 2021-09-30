//Recursion é uma funcionalidade que permite uma função se chamar novamente. (Podendo ser um problema caso a função se chame MUITAS vezes)

function numeroPar(n){
    if(n % 2 == 0){
        console.log("n agora é par: " + n);
    }else{
        console.log(n);
        numeroPar(n - 1);
    }
}
numeroPar(11);