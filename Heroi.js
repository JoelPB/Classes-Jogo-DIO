class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para determinar o ataque baseado no tipo do herói e retornar o ataque
    atacar() {
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                return 'magia';
            case 'guerreiro':
                return 'espada';
            case 'monge':
                return 'artes marciais';
            case 'ninja':
                return 'shuriken';
            default:
                return 'um ataque desconhecido';
        }
    }
}

// Exportando a classe Heroi para ser usada em outros arquivos
module.exports = Heroi;
