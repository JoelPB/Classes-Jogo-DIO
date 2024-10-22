// Importa as classes Heroi e Combate
const Heroi = require('./Heroi');
const Combate = require('./Combate');
const readline = require('readline');

// Criar uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar ao usuário os dados do herói
function perguntarDadosDoHeroi() {
    rl.question('Digite o nome do herói: ', (nome) => {
        rl.question('Digite a idade do herói: ', (idade) => {
            rl.question('Digite o tipo do herói (mago, guerreiro, monge, ninja): ', (tipo) => {
                const heroi = new Heroi(nome, idade, tipo);
                const combate = new Combate(heroi);
                combate.exibirAtaque(); // Exibe o ataque do herói

                // Perguntar se o usuário deseja criar outro herói
                rl.question('Deseja criar outro herói? (s/n): ', (resposta) => {
                    if (resposta.toLowerCase() === 's') {
                        perguntarDadosDoHeroi(); // Chama a função novamente para novo herói
                    } else {
                        rl.close(); // Fecha a interface de leitura
                    }
                });
            });
        });
    });
}

// Iniciar o processo de perguntar os dados do herói
perguntarDadosDoHeroi();
