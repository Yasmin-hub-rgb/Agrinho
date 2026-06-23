<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agro Forte, Futuro Sustentável - Agrinho 2026</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* ==========================================
           ESTILOS GERAIS (CSS)
           ========================================== */
        :root {
            --primary-color: #2E7D32; /* Verde Agro */
            --secondary-color: #81C784; /* Verde Claro */
            --dark-color: #1B5E20; /* Verde Escuro */
            --text-color: #333333;
            --light-bg: #F4F9F4;
            --white: #ffffff;
            --warning-color: #E65100; /* Laranja para Desafios */
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Open Sans', sans-serif;
            color: var(--text-color);
            line-height: 1.6;
            background-color: var(--white);
            padding-top: 80px; /* Evita que o menu fixo cubra o conteúdo */
        }

        h1, h2, h3 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 0;
        }

        /* Botões */
        .btn {
            display: inline-block;
            background-color: var(--primary-color);
            color: var(--white);
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 30px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }

        .btn:hover {
            background-color: var(--dark-color);
            transform: translateY(-2px);
        }

        /* Menu de Navegação */
        header {
            background-color: var(--white);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
        }

        header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }

        .logo {
            font-size: 1.5rem;
            color: var(--dark-color);
            font-weight: 700;
            text-decoration: none;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 20px;
        }

        nav a {
            text-decoration: none;
            color: var(--text-color);
            font-weight: 600;
            transition: color 0.3s;
        }

        nav a:hover {
            color: var(--primary-color);
        }

        /* Seção Hero (Início) */
        .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('colheita.jpg') no-repeat center center/cover;
            height: 70vh;
            display: flex;
            align-items: center;
            color: var(--white);
            text-align: center;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
        }

        /* Seção Conteúdo / Tecnologia */
        .features {
            background-color: var(--light-bg);
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
        }

        .features-img img {
            width: 100%;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .features-text h2 {
            color: var(--dark-color);
            margin-bottom: 20px;
            font-size: 2rem;
        }

        /* Seção Formulário */
        .contato-section {
            background-color: var(--white);
        }

        .contato-section h2 {
            text-align: center;
            color: var(--dark-color);
            margin-bottom: 40px;
        }

        form {
            max-width: 600px;
            margin: 0 auto;
            background: var(--light-bg);
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 5px;
            color: var(--dark-color);
        }

        .form-group input, .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #ccc;
            border-radius: 8px;
            font-family: inherit;
            font-size: 1rem;
        }

        .form-group input:focus, .form-group textarea:focus {
            border-color: var(--primary-color);
            outline: none;
        }

        footer {
            background-color: var(--dark-color);
            color: var(--white);
            text-align: center;
            padding: 20px 0;
            margin-top: 40px;
        }

        /* ==========================================
           RESPONSIVIDADE (Celulares e Tablets)
           ========================================== */
        @media (max-width: 768px) {
            header .container {
                flex-direction: column;
                gap: 15px;
            }

            nav ul {
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            .container {
                padding: 20px 0;
            }

            .grid {
                grid-template-columns: 1fr;
            }

            .hero h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>

    <header>
        <div class="container">
            <a href="#" class="logo"><i class="fa-solid fa-leaf"></i> Agrinho 2026</a>
            <nav>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#tecnologia">Tecnologia</a></li>
                    <li><a href="#ideias">Enviar Ideia</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="inicio" class="hero">
        <div class="container">
            <h1>Agro Forte, Futuro Sustentável</h1>
            <p>A força do campo unida à preservação ambiental e à tecnologia de ponta.</p>
            <a href="#tecnologia" class="btn">Conheça a Tecnologia</a>
        </div>
    </section>

    <section id="tecnologia" class="features">
        <div class="container">
            <div class="grid">
                <div class="features-text">
                    <h2>Inovação Campo a Fora</h2>
                    <p>O Agrinho 2026 destaca como a tecnologia transforma nossa produção. O uso de drones inteligentes para mapeamento e pulverização de precisão economiza recursos, protege o solo e otimiza a colheita do produtor rural com sustentabilidade.</p>
                </div>
                <div class="features-img">
                    <img src="drone.jpg" alt="Mulher operando drone em plantação de café">
                </div>
            </div>
        </div>
    </section>

    <section id="ideias" class="contato-section">
        <div class="container">
            <h2>Compartilhe sua Ideia Sustentável</h2>
            <form id="form-sustentavel">
                <div class="form-group">
                    <label for="nome">Seu Nome:</label>
                    <input type="text" id="nome" placeholder="Digite seu nome completo">
                </div>
                <div class="form-group">
                    <label for="email">Seu E-mail:</label>
                    <input type="email" id="email" placeholder="nome@exemplo.com">
                </div>
                <div class="form-group">
                    <label for="ideia">Sua Ideia para o Agro do Futuro:</label>
                    <textarea id="ideia" rows="5" placeholder="Como podemos tornar o agro ainda mais forte e sustentável?"></textarea>
                </div>
                <button type="submit" class="btn">Enviar Proposta <i class="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 Agrinho - Agro Forte, Futuro Sustentável. Todos os direitos reservados.</p>
    </footer>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            initSmoothScroll();
            initHeaderScroll();
            initFormValidation();
        });

        function initSmoothScroll() {
            const menuLinks = document.querySelectorAll('nav a[href^="#"]');
            
            menuLinks.forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault(); 
                    
                    const targetId = this.getAttribute("href");
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
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

        function initFormValidation() {
            const formulario = document.getElementById("form-sustentavel");
            
            if (formulario) {
                formulario.addEventListener("submit", function (event) {
                    event.preventDefault(); 
                    
                    const nome = document.getElementById("nome").value.trim();
                    const email = document.getElementById("email").value.trim();
                    const ideia = document.getElementById("ideia").value.trim();
                    
                    if (nome === "" || email === "") {
                        alert("Por favor, preencha os campos obrigatórios! 🌱");
                        return;
                    }
                    
                    alert(`Obrigado, ${nome}! Sua ideia para o Agro Sustentável foi enviada com sucesso! 🚜💚`);
                    
                    this.reset(); 
                });
            }
        }
    </script>
</body>
</html>
