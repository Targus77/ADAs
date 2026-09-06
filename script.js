let votosAires = 0;
let votosProyector = 0;


function votar(opcion) {

    if (opcion === "aires") {
        votosAires++;
    }

    if (opcion === "proyector") {
        votosProyector++;
    }


    // Oculta la pantalla de votación
    document.getElementById("votacion").style.display = "none";


    // Muestra los resultados
    document.getElementById("resultados").style.display = "block";


    // Actualiza los números
    document.getElementById("votosAires").textContent = votosAires;

    document.getElementById("votosProyector").textContent = votosProyector;
}
const fechaFinal = new Date();

fechaFinal.setDate(fechaFinal.getDate() + 15);


function actualizarContador() {

    const ahora = new Date();

    const diferencia = fechaFinal - ahora;


    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );


    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );


    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    document.getElementById("tiempo").textContent =
        dias + " días " +
        horas + "h " +
        minutos + "m " +
        segundos + "s";
}


actualizarContador();


setInterval(actualizarContador, 1000);
