// PARA index.html
const fechaLimite = new Date('2025-07-04T12:00:00');

function actualizarCuentaRegresiva() {
  const ahora = new Date().getTime();
  const diferencia = fechaLimite - ahora;

  if (diferencia <= 0) {
    window.location.href = 'listo.html';
  } else {
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    const countdownElem = document.getElementById('countdown');
    if (countdownElem) {
      countdownElem.innerText = `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
    }
  }
}

if (document.getElementById('countdown')) {
  setInterval(actualizarCuentaRegresiva, 1000);
  actualizarCuentaRegresiva();
}

// PARA listo.html — mover botón "No"
const noButton = document.getElementById('noButton');
if (noButton) {
  noButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;
    noButton.style.left = `${randX}px`;
    noButton.style.top = `${randY}px`;
  });
}
