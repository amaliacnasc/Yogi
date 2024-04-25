function principal() {
    // selecionando elementos 
    let imagemPrincipal = document.getElementById('main-image');
    let imagemPequena = document.getElementsByClassName('small-image');
    let botaoAdicionarCarrinho = document.querySelector('.botao-add-carrinho');
    let numeroProdutos = document.querySelector('.numero-produtos');
    let numeroCarrinho = document.querySelector('.numero-carrinho');
    let botaoAddVerde = document.querySelectorAll('.botao-add');
    let numeroProdutosPequeno = document.querySelectorAll('.adicionarPequeno');
    let numeroCliques = Array.from({ length: botaoAddVerde.length }, () => 0); // defini o numero de cliques como um array para armazenar o valor e colocar a soma no carrinho 
    let numeroTotalCliques = 0; //inicializando variavel

    //Ao clicar no 'Adicionar ao carrinho' , pega o valor do input e coloca no carrinho 
    botaoAdicionarCarrinho.onclick = function () {
        let numeroDeProdutos = parseInt(numeroProdutos.value);
        numeroCarrinho.textContent = numeroDeProdutos;
        numeroCarrinho.classList.add('ativo');
    }

    // Para cada botão verde, deve haver uma contagem do zero daquele produto 
    // Ao mesmo tempo, deve fazer uma soma com o valor que já existe no carrinho 
    botaoAddVerde.forEach((botao, indice) => {
        botao.addEventListener('click', function () {
            numeroCliques[indice]++; // Incrementa o contador do botão atual
            numeroProdutosPequeno.forEach(element => {
                element.classList.add('ativo');
            });
            numeroProdutosPequeno[indice].textContent = numeroCliques[indice];
            
            // Recalcula o número total de cliques em todos os botões verdes
            numeroTotalCliques = parseInt(numeroProdutos.value) + numeroCliques.reduce((total, atual) => total + atual, 0);
            numeroCarrinho.textContent = numeroTotalCliques;

            
        });
    });
    // Mudando a imagem pequena para imagem grande ao clicar 
imagemPequena[0].onclick = function () {
    imagemPrincipal.src = imagemPequena[0].src;
}

imagemPequena[1].onclick = function () {
    imagemPrincipal.src = imagemPequena[1].src;
}

imagemPequena[2].onclick = function () {
    imagemPrincipal.src = imagemPequena[2].src;
}

imagemPequena[3].onclick = function () {
    imagemPrincipal.src = imagemPequena[3].src;
}
//Inicializando variáveis para mudar imagem principal ao clique 
let contadorCliques = 0; 
let contadorCliques1 = 0; 
let contadorCliques2= 0; 
let contadorCliques3 = 0; 


//fazendo menu mobile 

let menu = document.querySelector('.menu'); 
let containerDoMenu = document.querySelector('.navbar-mobile')
let itemDoMenu= document.querySelectorAll('.mobile-links');

menu.onclick = function(){
    itemDoMenu.forEach(element => {
        element.classList.add('menuativo');
    });
    if (containerDoMenu.classList.contains('menuativo')){
        containerDoMenu.classList.remove('menuativo');
    } else{
       containerDoMenu.classList.add('menuativo');
    }
   
}

}

principal(); //chamando a função, criei ela para que todas as funções ficassem dentro de um mesmo escopo 
