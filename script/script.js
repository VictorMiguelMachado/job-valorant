document.addEventListener('DOMContentLoaded', function () {
    const selectElo = document.getElementById('elo'); // Primeiro select
    const quadrado = document.getElementById('quadrado'); // Quadrado do primeiro formulário
    const selectElo2 = document.getElementById('elo2'); // Segundo select (atualize o ID)
    const quadrado2 = document.getElementById('quadrado2'); // Quadrado do segundo formulário

    // Define um objeto com as imagens correspondentes para os dois selects
    const imagens = {
        ferro1: 'assets/ferro1.png',
        ferro2: 'assets/ferro2.png',
        ferro3: 'assets/ferro3.png',
        bronze1: 'assets/bronze1.png',
        bronze2: 'assets/bronze2.png',
        bronze3: 'assets/bronze3.png',
        prata1: 'assets/prata1.png',
        prata2: 'assets/prata2.png',
        prata3: 'assets/prata3.png',
        ouro1: 'assets/ouro1.png',
        ouro2: 'assets/ouro2.png',
        ouro3: 'assets/ouro3.png',
        platina1: 'assets/platina1.png',
        platina2: 'assets/platina2.png',
        platina3: 'assets/platina3.png',
        diamante1: 'assets/diamante1.png',
        diamante2: 'assets/diamante2.png',
        diamante3: 'assets/diamante3.png',
        ascendente1: 'assets/ascendente1.png',
        ascendente2: 'assets/ascendente2.png',
        ascendente3: 'assets/ascendente3.png',
        Imortal1: 'assets/imortal1.png',
        Imortal2: 'assets/imortal2.png',
        Imortal3: 'assets/imortal3.png',
        radiante: 'assets/radiante.png',
    };

    // Evento para o primeiro select
    selectElo.addEventListener('change', function () {
        const valorSelecionado = selectElo.value;

        // Muda a imagem do quadrado de acordo com a opção selecionada
        if (imagens[valorSelecionado]) {
            quadrado.style.backgroundImage = `url(${imagens[valorSelecionado]})`;
            quadrado.style.backgroundSize = 'cover'; // Faz a imagem cobrir o quadrado
        } else {
            quadrado.style.backgroundImage = 'none'; // Reseta a imagem se não houver opção
        }

        // Adiciona uma classe para estilizar a opção "Escolha" como desabilitada
        selectElo.classList.add('opcao-escolhida');
    });

    // Evento para o segundo select
    selectElo2.addEventListener('change', function () {
        const valorSelecionado = selectElo2.value;

        // Muda a imagem do quadrado2 de acordo com a opção selecionada
        if (imagens[valorSelecionado]) {
            quadrado2.style.backgroundImage = `url(${imagens[valorSelecionado]})`;
            quadrado2.style.backgroundSize = 'cover'; // Faz a imagem cobrir o quadrado2
        } else {
            quadrado2.style.backgroundImage = 'none'; // Reseta a imagem se não houver opção
        }

        // Adiciona uma classe para estilizar a opção "Escolha" como desabilitada
        selectElo2.classList.add('opcao-escolhida');
    });
});
