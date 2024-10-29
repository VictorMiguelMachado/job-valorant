document.addEventListener('DOMContentLoaded', function () {
    const selectElo = document.getElementById('elo');
    const quadrado = document.getElementById('quadrado');
    const selectElo2 = document.getElementById('elo2');
    const quadrado2 = document.getElementById('quadrado2');

    
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

    
    selectElo.addEventListener('change', function () {
        const valorSelecionado = selectElo.value;

        
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
