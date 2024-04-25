document.querySelectorAll('.quantidade').forEach(input => {
    input.addEventListener('input', atualizarPreco);
  });

  function atualizarPreco() {
    let total = 0;
    document.querySelectorAll('.quantidade').forEach(input => {
      const preco = input.dataset.preco;
      total += input.value * preco;
    });
    document.getElementById('total').textContent = 'R$' + total;
  }

