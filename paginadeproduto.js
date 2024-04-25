let numeroCarrinho = document.querySelector('.numero-carrinho'); 
let botaoAdicionar = document.querySelectorAll('.botao-add-verde'); 

let contadorTotalCliques = 0; // Inicializa o contador total de cliques

botaoAdicionar.forEach(botao => {
    botao.addEventListener('click', function () {
        contadorTotalCliques++; // Incrementa o contador total de cliques quando o botão é clicado
        numeroCarrinho.innerText = contadorTotalCliques; // Atualiza o número de cliques no carrinho
        numeroCarrinho.classList.add('ativo'); // Adiciona a classe 'ativo' ao número do carrinho
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('.navbar-minha');
    navbar.classList.add('.fixed-navbar-minha');
});

