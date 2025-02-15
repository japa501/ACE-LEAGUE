let equipes = [];

// Função para renderizar a lista de equipes
function renderizarEquipes() {
    const listaEquipes = document.getElementById('listaEquipes');
    listaEquipes.innerHTML = '';
    equipes.forEach((equipe, index) => {
        const divEquipe = document.createElement('div');
        divEquipe.textContent = `Equipe: ${equipe.nomeEquipe}, Jogadores: ${equipe.jogadores.join(', ')}, Coach: ${equipe.coach}`;
        listaEquipes.appendChild(divEquipe);
    });
}

// Função para gerar chaveamento
function gerarChaveamento() {
    const chaveamento = document.getElementById('chaveamento');
    chaveamento.innerHTML = '';
    if (equipes.length % 2 !== 0) {
        chaveamento.textContent = 'Número de equipes ímpar, ajuste o número de equipes para continuar.';
        return;
    }
    for (let i = 0; i < equipes.length; i += 2) {
        const divChave = document.createElement('div');
        divChave.textContent = `Partida: ${equipes[i].nomeEquipe} vs ${equipes[i + 1].nomeEquipe}`;
        chaveamento.appendChild(divChave);
    }
}

// Manipulador de inscrição de equipe
document.getElementById('formEquipe').addEventListener('submit', function (e) {
    e.preventDefault();

    const nomeEquipe = document.getElementById('nomeEquipe').value;
    const jogadores = [
        document.getElementById('jogador1').value,
        document.getElementById('jogador2').value,
        document.getElementById('jogador3').value,
        document.getElementById('jogador4').value,
        document.getElementById('jogador5').value
    ];
    const coach = document.getElementById('coach').value;

    const equipe = {
        nomeEquipe,
        jogadores,
        coach
    };

    equipes.push(equipe);
    renderizarEquipes();
    document.getElementById('formEquipe').reset();
});

document.getElementById('gerarChaveamento').addEventListener('click', gerarChaveamento);
