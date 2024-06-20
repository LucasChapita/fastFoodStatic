document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registroForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el envío del formulario
        /*
        // Captura los datos del formulario
        const formData = new FormData(event.target);
        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        // Convertir los datos a formato JSON
        const jsonData = JSON.stringify(data, null, 2);

        // Guardar los datos en un archivo JSON (simulado con un enlace de descarga)
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Crear un enlace de descarga
        const a = document.createElement('a');
        a.href = url;
        a.download = 'usuario_registro.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        */
        // Mostrar mensaje de registro exitoso
        alert("Registro exitoso!");

        // Redirigir a la página de inicio
        window.location.href = "../../index.html";
    });
});
