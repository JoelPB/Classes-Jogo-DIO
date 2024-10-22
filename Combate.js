class Combate {
    constructor(heroi) {
        this.heroi = heroi;
    }

    // Método para exibir o ataque realizado
    exibirAtaque() {
        const ataque = this.heroi.atacar(); // Chama o método atacar() da classe Heroi
        console.log(`O ${this.heroi.tipo} atacou usando ${ataque}.`);
    }
}

// Exportando a classe Combate para ser usada em outros arquivos
module.exports = Combate;
