let numeroCarrinho = document.querySelector('.numero-carrinho'); 
let botaoAdicionar = document.querySelectorAll('.botao-add-verde'); 
let numeroCliques = document.querySelectorAll('.numero-produto');

botaoAdicionar.forEach(botao => {
    let numeroCliques = 0; // Inicializa o contador de cliques para cada botão
    contadorTotalCliques=0; // Incrementa o contador total de cliques

    botao.addEventListener('click', function () {
        numeroCliques++; // Incrementa o contador de cliques quando o botão é clicado
        contadorTotalCliques++;
        let numeroProduto = this.closest('.item').querySelector('.numero-produto');
        numeroProduto.innerText = numeroCliques; // Atualiza o número de cliques dentro da tag com a classe 'numero-produto' associada ao botão
        numeroProduto.classList.add('ativo'); // Adiciona a classe 'ativo' ao número do produto
        numeroCarrinho.innerText = contadorTotalCliques;
            numeroCarrinho.classList.add('ativo');
    });
});

// Select all FAQ questions and answers
let faqPergunta = document.querySelectorAll('.faq-pergunta');
let faqResposta = document.querySelectorAll('.faq-resposta');

// Add click event listener to each question
faqPergunta.forEach(element => {
    element.addEventListener('click', ativar);
});

// Function to toggle activation class
function ativar() {
    // Get the next element sibling (answer) of the clicked question
    let resposta = this.nextElementSibling;

    // Toggle the 'ativado' class on the answer
    resposta.classList.toggle('ativado');
}

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