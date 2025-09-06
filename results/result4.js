const itens = document.querySelectorAll('#lista li');

function marcarItem(evento) {
  const item = evento.currentTarget;
  item.style.backgroundColor = 'yellow';
}

let indice = 0;
while (indice < itens.length) {
  const item = itens[indice];
  item.addEventListener('click', marcarItem);
  indice = indice + 1;
}
