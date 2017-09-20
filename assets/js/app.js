let estudiantes = [];

function app() {
    let botonAgregar = document.getElementById("agregar");
    let botonMostrar = document.getElementById("mostrar");
    let botonBuscar = document.getElementById("buscar");
    let botonactualizar = document.getElementById("actualizar");
    let botonempleabilidad = document.getElementById("empleabilidad");
    let resultado = document.getElementById("contenedor-estudiantes");

    let eventoAgregar = function(e) {
        e.preventDefault();
        let estudiante = agregarEstudiante();
        resultado.innerHTML = mostrar(estudiante);
    };

    let eventoMostrar = function(e) {
        e.preventDefault();
        let estudiantes = obtenerListaEstudiantes();
        resultado.innerHTML = mostrarLista(estudiantes);
    };

    let eventoBuscar = function(e) {
        e.preventDefault();
        let estudiantes = obtenerListaEstudiantes();
        let nombreEstudiante = prompt("¿Qué nombre desea buscar?");
        let estudianteBuscado = buscar(nombreEstudiante, estudiantes);
        resultado.innerHTML = mostrarLista(estudianteBuscado);
    };

    let eventoactualizar = function(e) {
        e.preventDefault();
        let estudiantes = obtenerListaEstudiantes();
        let estudiantesactualizar = actualizar(estudiantes);
        resultado.innerHTML = mostrarLista(estudiantesactualizar);
    };

    let eventoempleabilidad = function(e) {
        e.preventDefault();
        let estudiantes = obtenerListaEstudiantes();
        let estudiantesempleabilidad = empleabilidad(estudiantes);
        resultado.innerHTML = mostrarLista(estudiantesempleabilidad);
    };

    botonAgregar.addEventListener("click", eventoAgregar);
    botonMostrar.addEventListener("click", eventoMostrar);
    botonBuscar.addEventListener("click", eventoBuscar);
    botonactualizar.addEventListener("click", eventoactualizar);
    botonempleabilidad.addEventListener("click", eventoempleabilidad);
}
app();

function obtenerListaEstudiantes() {
    return estudiantes;
}

function agregarEstudiante() {
    let student = prompt("Nombre de la estudiante: ");
    let porcentTecni = prompt("Porcentaje Técnico: ");
    let porcentSocio = prompt("Porcentaje Habilidades Socio-Emocionales: ");
    let estudiante = {
        nombre: student,
        porcentajeTecnico: porcentTecni,
        porcentajeHSE: porcentSocio
    };

    estudiantes.push(estudiante);
    return estudiante;

}

function mostrar(estudiante) {
    let resultado = "";
    resultado += "<div class='row caja'>";
    resultado += "<div class='col-md-12 col-xs-12'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.porcentajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porcentajeHSE + "</p>";
    resultado += "<p><strong>Estado:</strong> Activo</p>";
    resultado += "</div>";
    resultado += "</div><br>";
    return resultado;
}

function mostrarLista(estudiantes) {
    let srt = "";
    srt += estudiantes.map(mostrar);
    return srt;
}

function buscar(nombre, estudiantes) {
    let arr = [];
    for (let i in estudiantes) {
        if (estudiantes[i].nombre.toLowerCase() == nombre.toLowerCase()) {
            arr.push(estudiantes[i]);
        }
    }
    return arr;
}

function actualizar(estudiantes) {
    let eliminar = estudiantes.filter(function(op1) {
        return (op1.porcentajeTecnico >= 70);
    });
    return eliminar;
}

function empleabilidad(estudiantes) {
    let filtrar = estudiantes.filter(function(op1) {
        return (op1.porcentajeTecnico >= 70);
    });
    return filtrar;
}
