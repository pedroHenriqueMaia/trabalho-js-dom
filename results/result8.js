const botaoMais = document.getElementById('botaoIncrementar');
const botaoReset = document.getElementById('botaoResetar');
const textoContador = document.getElementById('valorContador');

let valor = 0;

function mostrarValor() {
  textoContador.textContent = String(valor);
}

function incrementar() {
  valor = valor + 1;
  mostrarValor();
}

function resetar() {
  valor = 0;
  mostrarValor();
}

botaoMais.addEventListener('click', incrementar);
botaoReset.addEventListener('click', resetar);
mostrarValor();
