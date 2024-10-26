document.addEventListener('DOMContentLoaded', function () {
    const selectElo = document.getElementById('elo');
    const quadrado = document.getElementById('quadrado');
    const selectElo2 = document.getElementById('elo2'); 
    const quadrado2 = document.getElementById('quadrado2');


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

    
    selectElo.addEventListener('change', function () {
        const valorSelecionado = selectElo.value;

        // Muda a imagem do quadrado de acordo com a opção selecionada
        if (imagens[valorSelecionado]) {
            quadrado.style.backgroundImage = `url(${imagens[valorSelecionado]})`;
            quadrado.style.backgroundSize = 'cover';
        } else {
            quadrado.style.backgroundImage = 'none';
        }


        selectElo.classList.add('opcao-escolhida');
    });


    selectElo2.addEventListener('change', function () {
        const valorSelecionado = selectElo2.value;

        
        if (imagens[valorSelecionado]) {
            quadrado2.style.backgroundImage = `url(${imagens[valorSelecionado]})`;
            quadrado2.style.backgroundSize = 'cover'; 
        } else {
            quadrado2.style.backgroundImage = 'none'; 
        }

        
        selectElo2.classList.add('opcao-escolhida');
    });
});
