const cuadro = document.querySelectorAll(".cuadro");
const tiempoFaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoActual = tiempoFaltante.textContent;

function cuadroAzar() {
  cuadro.forEach((muevete) => {
    muevete.classList.remove("topo");
  });
  let posicionAlAzar = cuadro[Math.floor(Math.random() * 16)];
  posicionAlAzar.classList.add("topo");
  posicionTopo = posicionAlAzar.id;
}

cuadro.forEach((identificador) => {
  identificador.addEventListener("click", () => {
    if (identificador.id === posicionTopo) {
      resultado = resultado + 1;
      puntaje.textContent = resultado;
      posicionTopo = null;
    }
  });
});

function moverTopo() {
  tiempoTopo = setInterval(cuadroAzar, 1500);
}

moverTopo();
function cuentaRegresiva() {
  tiempoActual--;
  tiempoFaltante.textContent = tiempoActual;

  if (tiempoActual === 0) {
    clearInterval(idTiempo);
    clearInterval(tiempoTopo);
    alert("¡SE ACABO TU TOTAL ES DE " + resultado + " TOPOS CAPTURADOS!");
  }
}

let idTiempo = setInterval(cuentaRegresiva, 500);
