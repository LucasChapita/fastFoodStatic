function validarCredenciales() {
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;

    if (email === "admi@gmail.com" && password === "admi") {
        alert("Inicio de sesión exitoso");

        // Establecer variable de sesión para indicar que el usuario está logueado
        sessionStorage.setItem('isLoggedIn', 'true');

        // Redirigir a la página de inicio
        window.location.href = "../../index.html";

        return false; // Prevenir el envío del formulario
    } else {
        var mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = "<p style='color: red;'>Credenciales incorrectas</p>";
        return false; // Prevenir el envío del formulario
    }
}
