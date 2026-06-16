/* ==========================================
   AGRINHO 2026 - LÓGICA E INTERATIVIDADE (JS)
   Tema: Agro Forte, Futuro Sustentável
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Inicializa as funções assim que a página carrega
    initSmoothScroll();
    initHeaderScroll();
    initFormValidation();
});

/**
 * 1. ROLAGEM SUAVE (Smooth Scroll)
 * Faz com que o clique nos links do menu deslize suavemente até as seções.
 */
function initSmoothScroll() {
    const menuLinks = document.querySelectorAll('nav a[href^="#"]');
    
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = 80; // Altura do menu fixo
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
 * 2. EFEITO NO MENU AO ROLAR (Scroll Effect)
 * Adiciona uma sombra mais marcante no menu quando o usuário rola a página para baixo.
 */
function initHeaderScroll() {
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(27, 94, 32, 0.15)"; 
            header.style.transition = "box-shadow 0.3s ease";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"; 
        }
    });
}

/**
 * 3. VALIDAÇÃO DO FORMULÁRIO (100% isolada do HTML)
 * Captura o envio do formulário, valida os dados e exibe a mensagem de sucesso.
 */
function initFormValidation() {
    const formulario = document.getElementById("form-sustentavel");
    
    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede a página de atualizar
            
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const ideia = document.getElementById("ideia").value.trim();
            
            if (nome === "" || email === "") {
                alert("Por favor, preencha os campos obrigatórios! 🌱");
                return;
            }
            
            // Mensagem personalizada de sucesso para o Agrinho 2026
            alert(`Obrigado, ${nome}! Sua ideia para o Agro Sustentável foi enviada com sucesso! 🚜💚`);
            
            this.reset(); // Limpa todos os campos do formulário após o envio
        });
    }
}
