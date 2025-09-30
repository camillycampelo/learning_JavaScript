// Switch é muito útil para lidar com múltiplas condições e quando sua variável possui valores específicos.

const permissoes = 'aluno'  //'aluno' || 'professor' || 'admin'

switch(permissoes){
    case 'aluno':
        console.log('Voce tem acesso ao conteudo do curso!')
        break;
    case 'professor':
        console.log('Voce tem acesso ao conteudo do curso e pode corrigir as atividades!')
        break;
    case 'admin':
        console.log('Voce tem acesso ao conteudo do curso, pode corrigir as atividades e gerenciar os usuarios!')
        break;
    default:
        console.log('Permissao invalida!')
}

// Operador Ternário

const idade = 30;

// idade >= 18 ? console.log('Voce eh maior de idade!') : console.log('Voce eh menor de idade!');

const mensagem = idade >= 18 ? 'Maior de idade' : idade >= 16 ? 'Já pode votar' : 'Não pode votar';

console.log(mensagem);
