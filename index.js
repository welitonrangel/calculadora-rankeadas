// 2️⃣ Calculadora de Partidas Rankeadas

/**
 * Função que calcula o saldo de vitórias e determina o nível do jogador.
 * @param {number} vitorias - A quantidade de vitórias do jogador.
 * @param {number} derrotas - A quantidade de derrotas do jogador.
 */
function calcularNivelRankeado(vitorias, derrotas) {

    // Utilizando operadores para calcular o saldo
    let saldoVitorias = vitorias - derrotas;

    // Variável para armazenar o nível
    let nivel = "";

    // Estrutura de decisão para determinar o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else { // Se vitórias for maior ou igual a 101
        nivel = "Imortal";
    }

    // Saída da mensagem final
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}


// --- Exemplos de Uso ---
// Para testar, você pode chamar a função com diferentes valores

// Exemplo 1: Jogador Ouro
calcularNivelRankeado(75, 20);

// Exemplo 2: Jogador Prata
calcularNivelRankeado(40, 10);

// Exemplo 3: Jogador Imortal
calcularNivelRankeado(150, 25);