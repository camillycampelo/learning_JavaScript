// Entrada de dados no Node.js

const prompt = require('readline-sync');
//prompt não funciona no node.js, apenas no navegador
//no node.js, utilize o pacote readline-sync

const idade = prompt.question('Qual eh a sua idade? ');

const idadeNumero = Number(idade); //converte string para number
console.log(Number('X')); //NaN = Not a Number

console.log(String(10), typeof String(10)); //converte number para string
console.log(Boolean(1), typeof Boolean(1)); //converte number para boolean


console.log('A sua idade é ', idade, 'anos.');
