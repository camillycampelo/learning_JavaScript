const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual eh sua idade? '))

//const ehMaiorDeIdade = idade >= 18;

// Estrutra condicional simples

if (idade >= 18) {
    console.log('Voce eh maior de idade!')
}
else {
    console.log('Voce eh menor de idade!')
}

const mediaDoAluno = 10;

if (mediaDoAluno >= 7){
    console.log('Aprovado!')
}
else if (mediaDoAluno >= 5) {
    console.log('Recuperacao!')
}
else {
    console.log('Reprovado!')
}

const idadeDaPessoa = 17;

const temCNH = true;

if (idadeDaPessoa >= 18 && temCNH) {
    console.log('Pode dirigir!')
}
else{
    console.log('Nao pode dirigir!')
}