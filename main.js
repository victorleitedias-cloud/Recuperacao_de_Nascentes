/* --- script.js --- */

// Variáveis de Estado
let qualidade = 0;

// Elementos do DOM
const springDisplay = document.getElementById('springDisplay');
const progressBar = document.getElementById('progressBar');
const feedback = document.getElementById('msgFeedback');

// Função Principal
function realizarAcao(acao) {
    if (qualidade >= 100) {
        feedback.innerText = "A nascente está completamente restaurada! Ótimo trabalho! ☀️💧";
        return;
    }

    // Lógica de incremento de qualidade
    if (acao === 'plantar') {
        qualidade += 15;
        feedback.innerText = "🌱 As raízes estão crescendo e filtrando a água!";
        atualizarCores();
    } else if (acao === 'limpar') {
        qualidade += 20;
        feedback.innerText = "🧹 Lixo removido! A água está mais transparente.";
        atualizarCores();
    } else if (acao === 'proteger') {
        qualidade += 10;
        feedback.innerText = "🪨 Barreira criada contra animais e químicos.";
        atualizarCores();
    }

    // Atualizar Visualização
    atualizarInterface();
}

// Atualiza a_interface (texto e barra)
function atualizarInterface() {
    // Limita a 100%
    if (qualidade > 100) qualidade = 100;

    // Atualiza Texto
    springDisplay.innerText = `Qualidade da Água: ${qualidade}%`;
    
    // Atualiza Barra de Progresso
    progressBar.style.width = `${qualidade}%`;
}

// Atualiza as cores conforme a qualidade
function atualizarCores() {
    // Lógica para mudar a cor da "água" (quadrado cinza)
    // De Cinza (sujo) -> Marrom -> Amarelo -> Azul (limpo)
    
    if (qualidade < 30) {
        springDisplay.style.background = "#8d6e63"; // Marrom sujo
    } else if (qualidade < 60) {
        springDisplay.style.background = "#f39c12"; // Amarelo/lodo
    } else {
        springDisplay.style.background = "#3498db"; // Azul limpo
    }
}