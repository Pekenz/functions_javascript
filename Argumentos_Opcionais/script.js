//Podemos chamar uma função em JS sem o número igual de parâmetros determinados. Exemplo:
function nomeIdade (nome, idade){
    if(idade == undefined && nome == undefined) {
        console.log("Você não definiu um nome ou idade, seu idiota.")
    }else if (idade == undefined){
        console.log("Seu nome é: " + nome);
    }else {
        console.log("Seu nome é " + nome + " e você tem " + idade + " anos");
    }
}

nomeIdade("Pedro"); // Definimos apenas o nome.
nomeIdade(undefined, undefined); //Não definimos nada.
nomeIdade("Pedro",15); //Definimos os 2.

//Lembrando que algumas bibliotecas exigem que todos os argumentos sejam preenchidos, então cuidado com isso.