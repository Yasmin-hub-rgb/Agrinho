# AGRINHO2026
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agro Forte, Futuro Sustentável</title>
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
            z-index: 10
