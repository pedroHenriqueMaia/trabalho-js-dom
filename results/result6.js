const botaoRemover = document.getElementById('botaoRemover');
const lista = document.getElementById('lista');

function removerUltimo() {
  const ultimo = lista.lastElementChild;
  if (ultimo) {
    lista.removeChild(ultimo);
  }
}

botaoRemover.addEventListener('click', removerUltimo);
