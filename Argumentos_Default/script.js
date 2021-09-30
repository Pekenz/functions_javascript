//Podemos também pré-determinar um valor para um argumento, exemplo:

function repetirFrase(frase, n=2){
    for(let x = 1;x <= n; x++){
        console.log(frase + " " + x);
    }
}

repetirFrase("teste", 5);
repetirFrase("só duas vezes");

//O argumento 'default' é o n=2, então se não passarmos nada ele será o argumento a se seguir pelo programa.