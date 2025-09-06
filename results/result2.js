const quadrados = document.querySelectorAll('.quadrado');

function pintarQuadrados() {
  let i = 0;
  while (i < quadrados.length) {
    const atual = quadrados[i];
    atual.style.backgroundColor = 'red';
    i = i + 1;
  }
}

window.addEventListener('load', pintarQuadrados);
