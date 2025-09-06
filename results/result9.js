const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const botaoEnviar = document.getElementById('botaoEnviar');
const mensagemErro = document.getElementById('mensagemErro');

function destacar(input, ativo) {
  if (ativo) {
    input.style.border = '2px solid red';
  } else {
    input.style.border = '';
  }
}

function validar() {
  const nomeVazio = campoNome.value.trim().length === 0;
  const emailVazio = campoEmail.value.trim().length === 0;
  const temErro = nomeVazio || emailVazio;

  destacar(campoNome, nomeVazio);
  destacar(campoEmail, emailVazio);

  if (temErro) {
    mensagemErro.style.display = 'block';
    return;
  }

  mensagemErro.style.display = 'none';
}

botaoEnviar.addEventListener('click', validar);
