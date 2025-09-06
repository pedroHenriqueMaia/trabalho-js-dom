const botao = document.getElementById('botaoMudarFundo');

function mudarCores() {
  document.body.style.backgroundColor = 'red';
  botao.style.backgroundColor = 'green';
}

botao.addEventListener('click', mudarCores);
