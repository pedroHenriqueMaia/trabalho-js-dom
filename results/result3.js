const botaoMostrar = document.getElementById('botaoMostrar');
const mensagem = document.getElementById('mensagem');

function alternarMensagem() {
  const invisivel = mensagem.style.display === 'none';
  if (invisivel) {
    mensagem.style.display = 'block';
  } else {
    mensagem.style.display = 'none';
  }
}

botaoMostrar.addEventListener('click', alternarMensagem);
