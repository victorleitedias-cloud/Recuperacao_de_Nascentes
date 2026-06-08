/* 
 * AGRINHO 2026 - PROGRAMA DE VALORIZAÇÃO DE NASCENTES
 * Arquivo de JavaScript - Lógica do Jogo e Interatividade
 */

// ============================================
// VARIÁVEIS DO JOGO
// ============================================

let health = 0;  // Nível de saúde da nascente (0 a 100)
const maxHealth = 100;

// Elementos do DOM (HTML)
const springIcon = document.getElementById('springIcon');
const progressFill = document.getElementById('progressFill');
const statusText = document.getElementById('statusText');
const message = document.getElementById('message');
const btnFinal = document.getElementById('btnFinal');
const finalMessage = document.getElementById('finalMessage');

// ============================================
// FUNÇÕES DO JOGO
// ============================================

/**
 * Função para plantar árvore
 * Aumenta a saúde da nascente em 15%
 */
function plantTree() {
    if (health < maxHealth) {
        health += 15;
        message.innerText = "🌳 Árvore plantada! A terra agora absorve melhor a água da chuva.";
        updateGame();
    }
}

/**
 * Função para cercar a nascente
 * Aumenta a saúde da nascente em 15%
 */
function fenceSpring() {
    if (health < maxHealth) {
        health += 15;
        message.innerText = "🚧 Cerca construída! O gado não consegue mais sujar a água.";
        updateGame();
    }
}

/**
 * Função para limpar a água
 * Aumenta a saúde da nascente em 20%
 */
function cleanWater() {
    if (health < maxHealth) {
        health += 20;
        message.innerText = "✨ Água limpa! Os peixes e sapos estão voltando para a nascente.";
        updateGame();
    }
}

/**
 * Função para atualizar o jogo
 * Muda os ícones e textos conforme a saúde
 */
function updateGame() {
    // Limita o máximo em 100
    if (health > maxHealth) {
        health = maxHealth;
    }
    
    // Atualiza a barra de progresso
    progressFill.style.width = health + "%";
    progressFill.innerText = health + "%";
    
    // Atualiza o ícone e texto conforme o nível
    if (health < 25) {
        // Nível muito baixo - perigosamente poluída
        springIcon.innerText = "💧🐢"; // Tartaruga suja
        statusText.innerText = "Nascente POLUÍDA - Perigo!";
        statusText.style.color = "#c0392b"; // Vermelho
    } 
    else if (health < 50) {
        // Nível baixo - em recuperação
        springIcon.innerText = "💧🐟"; // Peixe voltando
        statusText.innerText = "Nascente em RECUPERAÇÃO";
        statusText.style.color = "#e67e22"; // Laranja
    } 
    else if (health < 100) {
        // Nível médio - quase limpa
        springIcon.innerText = "💧🦆"; //