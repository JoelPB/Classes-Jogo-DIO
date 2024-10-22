## Desafio de projeto da DIO [Escrevendo as Classes de Um Jogo](https://web.dio.me/lab/escrevendo-as-classes-de-um-jogo/learning/202d96ad-5cbe-4efe-9a2e-5ba90701314d)

---

# Jogo de Heróis - Utilizando classes

Este projeto demonstra um sistema simples de heróis usando conceitos de Programação Orientada a Objetos (POO) com Node.js. O projeto está dividido em três partes:

* Classe Heroi: Representa os heróis e define suas propriedades e comportamentos.
* Classe Combate: Responsável por exibir o ataque do herói no console.
* Arquivo main.js: Gerencia a interação com o usuário e orquestra a criação dos heróis e seus ataques.

## Funcionalidades
O programa solicita ao usuário o nome, idade e tipo do herói.

Dependendo do tipo de herói escolhido (mago, guerreiro, monge ou ninja), o herói realiza um ataque específico.

Exibe a mensagem de ataque no formato: "O {tipo} atacou usando {ataque}".

O usuário pode criar vários heróis e ver os ataques correspondentes até decidir encerrar o programa.

### Estrutura de Pastas
```
/meu_projeto
  ├── Heroi.js      # Contém a classe Heroi
  ├── Combate.js    # Contém a classe Combate
  ├── main.js       # Arquivo principal que executa o programa
```

### Como Executar o Projeto
Siga os passos abaixo para executar o código no terminal usando Node.js:

1. Clonar o Projeto
Se você estiver usando um repositório Git, clone o projeto ou baixe o código manualmente.
    ````
    git clone <https://github.com/JoelPB/Classes-Jogo-DIO.git>
    cd Classes-Jogo-DIO
    ```

2. Executar o Projeto
    * Abra o terminal e navegue até o diretório onde o projeto está salvo.
    * Execute o arquivo principal main.js com o comando:
        ```
        node main.js
        ```
