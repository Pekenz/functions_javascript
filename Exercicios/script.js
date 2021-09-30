//Alguns exercícios pra praticar, vou comentar tudo pra não ficar criando vários arquivos.


//#1 Famoso Hello World

/*
function helloWorld(){
    for(let x = 1;x<=3;x++)
    console.log("Hello World");
}

helloWorld();
*/

//#2 Template Literals

/*
function recebeIdade(idade){
    console.log(`Você tem ${idade} anos`);
}
recebeIdade(18);
*/

//#3 Retornar numeros (somar)
/*
function somar(a,b){
    return a + b;
}

console.log(somar(3,5));
*/

//#4 Numeros aleatorios dentro de um limite determinado
/*
function numAleatorio(num){
    return Math.floor(Math.random() * num) + 1;
}

console.log(numAleatorio(50));
*/

//#5Função para receber idade
/*
function auto(idade, cnh){
    if(idade == undefined && cnh == undefined){
        console.log("Você precisa estabelecer idade e CNH.")
    }else if(idade >= 18 && cnh == true){
        console.log("Você pode dirigir, parabéns")
    }else{
        console.log("Você não pode dirigir, faça 18 anos e consiga uma CNH primeiro.")
    }
}

auto(18,true);
auto(17,false);
auto(17);
auto(18);
*/

//#6 Detectar tipo de dado passado
/*
function detectar(dado,x,y){
    if(dado == true || dado == false){
        let result = x + y
        console.log("O dado é um Boolean! o num é: " + result);
    }else if(!isNaN(dado) == true){
        let result = x * y
        console.log("O dado é um Number, o num é: " + result);
    }else{
        let algo = x / y
        console.log("Ao que parece é uma string, huh? o num é: " + algo);
    }
}
detectar(true,5,5);
detectar(10,5,5);
detectar("string",10,2);
*/
//---------- Outra resolução para a #6 seria o exemplo abaixo ----------
/*
function verificar(dado){
    if(typeof dado === 'number'){
        console.log("É um number");
    }else if(typeof dado === 'string'){
        console.log("É uma string");
    }else if(typeof dado === 'boolean'){
        console.log("É um boolean");
    }else{
        console.log("É alguma outra porra que eu não sei")
    }
}
verificar(23);
verificar("teste");
verificar(true);
*/

//#7 Receber número negativo e retornar número positivo.

/*
function verificar(dado){
    if(dado < 0){
        return Math.abs(dado);
    }else{
        console.log("O numero não é negativo.")
    }
}
console.log(verificar(-30));
verificar(30);
*/

//#8Função que recebe string

/*
function verificar(dado){
    if(typeof dado === 'string' && dado.length > 10){
        console.log("Texto muito longo");
    }else if(typeof dado === 'string' && dado.length <= 10){
        console.log("Texto dentro do limite");
    }else{
        console.log("Não é uma string")
    }
}
verificar("Testando o texto muito longo");
verificar("Aceito");
verificar(10);
*/

//#9Função que recebe dois números, primeiro é a base e o segundo a potência.

/*
function verificar(base,pot){
    return Math.pow(base,pot);
}
console.log(verificar(7,2));
*/

//#10 Função que imprime numero par
/*
function verificar(x){
    for(let i = x; i >= 0; i--){
        if(i % 2 == 0){
            console.log("o numero par é: " + i);
        }
    }
}
verificar(100);
*/