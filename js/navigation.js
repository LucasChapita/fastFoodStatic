document.addEventListener('DOMContentLoaded', function () {
    var isLoggedIn = sessionStorage.getItem('isLoggedIn'); // Usar sessionStorage en lugar de localStorage

    console.log('Estado de isLoggedIn:', isLoggedIn);

    var navRight = document.getElementById('nav-right');

    if (isLoggedIn === 'true') {
        // Usuario logueado
        console.log('El usuario está logueado');
        navRight.innerHTML = `
            <li><a href="#">Mi perfil</a></li>
            <li><a href="#">Carrito</a></li>
            <li><a href="#" onclick="cerrarSesion()">Cerrar sesión</a></li>
        `;
    } else {
        // Usuario no logueado
        console.log('El usuario NO está logueado');
        navRight.innerHTML = `
            <li><a href="./views/pages/login.html">Iniciar sesión</a></li>
            <li><a href="./views/pages/registro.html">Registrarse</a></li>
        `;
    }
});

// Función para cerrar sesión
function cerrarSesion() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = "/views/pages/login.html"; // Redirigir al inicio de sesión
}
