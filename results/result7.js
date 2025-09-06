const box = document.getElementById('box');

function alternarClasse() {
  const estaAtivo = box.classList.contains('ativo');
  if (estaAtivo) {
    box.classList.remove('ativo');
    box.classList.add('inativo');
  } else {
    box.classList.remove('inativo');
    box.classList.add('ativo');
  }
}

box.addEventListener('click', alternarClasse);
