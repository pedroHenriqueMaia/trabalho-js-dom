const input = document.getElementById('novoItem');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const listaItens = document.getElementById('listaItens');

function adicionarItem() {
  const texto = input.value;
  const vazio = texto.trim().length === 0;
  if (vazio) {
    return;
  }
  const li = document.createElement('li');
  li.textContent = texto;
  listaItens.appendChild(li);
  input.value = '';
  input.focus();
}

botaoAdicionar.addEventListener('click', adicionarItem);
