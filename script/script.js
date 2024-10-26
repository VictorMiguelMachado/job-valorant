document.addEventListener('DOMContentLoaded', function () {
    const selectElo = document.getElementById('elo'); // Primeiro select
    const quadrado = document.getElementById('quadrado'); // Quadrado do primeiro formulário
    const selectElo2 = document.getElementById('elo2'); // Segundo select (atualize o ID)
    const quadrado2 = document.getElementById('quadrado2'); // Quadrado do segundo formulário

    // Define um objeto com as imagens correspondentes para os dois selects
    const imagens = {
        ferro1: 'assets/ferro1-removebg-preview.png',
        ferro2: 'assets/ferro2-removebg-preview.png',
        ferro3: 'assets/ferro3.png',
        bronze1: 'assets/bronz1-removebg-preview.png',
        bronze2: 'assets/bronze2-removebg-preview.png',
        bronze3: 'assets/bronze3-removebg-preview.png',
        prata1: 'assets/prata1-removebg-preview.png',
        prata2: 'assets/prata2-removebg-preview.png',
        prata3: 'assets/prata3-removebg-preview.png',
        ouro1: 'assets/ouro1-removebg-preview.png',
        ouro2: 'assets/ouro2-removebg-preview.png',
        ouro3: 'assets/ouro3-removebg-preview.png',
        platina1: 'assets/platina1-removebg-preview.png',
        platina2: 'assets/platina2-removebg-preview.png',
        platina3: 'assets/platina3-removebg-preview.png',
        diamante1: 'assets/diamante1-removebg-preview.png',
        diamante2: 'assets/diamante2-removebg-preview.png',
        diamante3: 'assets/diamante3-removebg-preview.png',
        ascendente1: 'assets/ascendente1-removebg-preview.png',
        ascendente2: 'assets/ascendente2-removebg-preview.png',
        ascendente3: 'assets/ascendente3-removebg-preview.png',
        Imortal1: 'assets/imortal1-removebg-preview.png',
        Imortal2: 'assets/imortal2-removebg-preview.png',
        Imortal3: 'assets/imortal3-removebg-preview.png',
        radiante: 'assets/radiante-removebg-preview.png',
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
