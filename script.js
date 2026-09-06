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
