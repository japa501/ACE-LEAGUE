# ACE-LEAGUE
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campeonato Valorant</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Campeonato de Valorant</h1>
    </header>

    <section class="formulario">
        <h2>Inscreva sua Equipe</h2>
        <form id="formEquipe">
            <label for="nomeEquipe">Nome da Equipe:</label>
            <input type="text" id="nomeEquipe" required><br>

            <h3>Jogadores (5 jogadores + 1 Coach):</h3>

            <label for="jogador1">Jogador 1:</label>
            <input type="text" id="jogador1" required><br>

            <label for="jogador2">Jogador 2:</label>
            <input type="text" id="jogador2" required><br>

            <label for="jogador3">Jogador 3:</label>
            <input type="text" id="jogador3" required><br>

            <label for="jogador4">Jogador 4:</label>
            <input type="text" id="jogador4" required><br>

            <label for="jogador5">Jogador 5:</label>
            <input type="text" id="jogador5" required><br>

            <label for="coach">Coach:</label>
            <input type="text" id="coach" required><br>

            <button type="submit">Inscrever Equipe</button>
        </form>
    </section>

    <section class="equipes">
        <h2>Equipes Inscritas</h2>
        <div id="listaEquipes"></div>
    </section>

    <section class="chaveamento">
        <h2>Chaveamento</h2>
        <button id="gerarChaveamento">Gerar Chaveamento</button>
        <div id="chaveamento"></div>
    </section>

    <script src="script.js"></script>
</body>
</html>
