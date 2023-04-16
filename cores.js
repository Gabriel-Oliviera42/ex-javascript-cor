// Obtém a hora atual
const horaAtual = new Date().getHours();

// Obtém o elemento <body>
const body = document.querySelector('body');

// muda as classes a serem adicionadas com base na hora do dia
if (horaAtual >= 6 && horaAtual < 18) { // pesquisei como usar isso na internet mas não sei se estou usando do modo certo
  body.classList.add('diurno');
} else {
  body.classList.add('noturno');
}
