// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para obtener el valor del campo de entrada
function obtenerValorInput(id) {
    let input = document.getElementById(id);
    return input.value.trim();
}

// Función para validar el nombre del amigo
function validarNombre(nombre) {
    if (nombre === "") {
        alert("Por favor ingrese un nombre");
        return false;
    }
    return true;
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombreamigo = obtenerValorInput('amigo');
    if (!validarNombre(nombreamigo)) {
        document.getElementById('amigo').focus();
        return;
    }
    amigos.push(nombreamigo);
    console.log(amigos);
    limpiarCampo('amigo');
    actualizarListaAmigos();
}

// Función para limpiar el campo de entrada
function limpiarCampo(id) {
    let element = document.getElementById(id);
    if (element.tagName === 'INPUT') {
        element.value = '';
    } else {
        element.innerHTML = '';
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    mostrarResultado(amigoSorteado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigo}`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = [];
    actualizarListaAmigos();
    limpiarCampo('resultado');

}

