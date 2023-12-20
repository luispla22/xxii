// Fecha límite para el contador (formato: año, mes (0-11), día, hora, minuto, segundo)
const fechaLimite = new Date('2024-01-01T00:00:00');

function actualizarCuentaRegresiva() {
  const ahora = new Date().getTime();
  const diferencia = fechaLimite - ahora;

  // Cálculos para obtener días, horas, minutos y segundos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Mostrar el contador en el span con id "countdown"
  document.getElementById('countdown').innerHTML = `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}

// Actualizar el contador cada segundo
setInterval(actualizarCuentaRegresiva, 1000);

// Mostrar el contador cuando se carga la página
actualizarCuentaRegresiva();
