/* ==========================================
   AGRINHO 2026 - LÓGICA E INTERATIVIDADE (JS)
   Tema: Agro Forte, Futuro Sustentável
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Executa as funções assim que o HTML for totalmente carregado
    initSmoothScroll();
    initHeaderScroll();
    initMobileMenu();
});

/**
 * 1. ROLAGEM SUAVE (Smooth Scroll)
 * Faz com que o clique nos links do menu deslize suavemente até a seção alvo.
 */
function initSmoothScroll() {
    const menuLinks = document.querySelectorAll('nav a[href^="#"]');
    
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita o salto brusco padrão
            
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calcula a posição descontando a altura do menu fixo (80px)
                const headerHeight = 80;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

/**
 * 2. EFEITO NO HEADER AO ROLAR (Scroll Effect)
 * Adiciona uma sombra ou muda o fundo do menu quando o usuário rola a página para baixo.
 */
function initHeaderScroll() {
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            // Estilo opcional: aumenta o destaque do menu ao rolar
            header.style.boxShadow = "0 4px 20px rgba(27, 94, 32, 0.15)"; // Sombra leve com tom Verde Escuro
            header.style.transition = "box-shadow 0.3s ease";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"; // Retorna ao padrão do CSS
        }
    });
}

/**
 * 3. VALIDAÇÃO SIMPLES DE FORMULÁRIO (Exemplo para Contato ou Quiz de Sustentabilidade)
 * Adicione esta função caso crie um formulário de mensagens ou de ideias sustentáveis.
 */
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio padrão para processar via JS
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    
    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos para fazer parte do Agro Sustentável! 🌱");
        return false;
    }
    
    alert(`Obrigado pelo contato, ${nome}! Juntos construímos um futuro mais verde e produtivo. 🚜💚`);
    event.target.reset(); // Limpa o formulário
}
