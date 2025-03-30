function ingresar(){
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    const audioExito = document.getElementById("audioExito");

    if ((nombre === "Brayan" || nombre === "brayan") && contraseña === "viscaBarca") {
        // Configuración clave para evitar el silencio
        audioExito.currentTime = 0; // Reinicia el audio
        audioExito.volume = 1;      // Volumen al máximo

        // Intenta reproducir
        audioExito.play()
            .then(() => {
                console.log("¡Audio activado!");
                setTimeout(() => {
                    window.location.href = "Contenido.html";
                }, 2000); // Redirige después de 2 segundos
            })
            .catch(error => {
                console.error("Error al reproducir:", error);
                // Mensaje para el usuario (opcional)
                alert("El audio no se pudo activar. Redirigiendo...");
                window.location.href = "Contenido.html";
            });
    } else {
        alert("Datos incorrectos");
    }
}