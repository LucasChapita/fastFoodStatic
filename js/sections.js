// Función para cargar contenido de la sección de comidas
function cargarComidas() {
    fetch('views/sections/comidas.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('comidas').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la sección de comidas:', error));
}

// Función para cargar contenido de la sección de bebidas
function cargarBebidas() {
    fetch('views/sections/bebidas.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bebidas').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la sección de bebidas:', error));
}

// Función para cargar contenido de la sección de combos
function cargarCombos() {
    fetch('views/sections/combos.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('combos').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la sección de combos:', error));
}

// Llamar a las funciones para cargar cada sección cuando la página cargue
document.addEventListener('DOMContentLoaded', function () {
    cargarComidas();
    cargarBebidas();
    cargarCombos();
});
