document.addEventListener('DOMContentLoaded', function() {
    const sonidoClick = document.getElementById('sonidoClick');
    const clickLayer = document.querySelector('.click-layer');
    
    // 1. Solución con capa transparente
    clickLayer.addEventListener('click', function() {
        sonidoClick.currentTime = 0;
        sonidoClick.play().catch(e => console.log("Error de audio:", e));
        
        // Opcional: Quitar la capa después del primer clic
        this.style.display = 'none';
    });

    // 2. Solución alternativa con API de YouTube
    let player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtubeVideo', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        document.querySelector('.video-container').addEventListener('click', function() {
            sonidoClick.currentTime = 0;
            sonidoClick.play().catch(e => console.log("Error de audio:", e));
        });
    }

    function onPlayerStateChange(event) {
        // Puedes añadir lógica adicional aquí
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const silueta = document.getElementById('silueta');
    const modal = document.getElementById('modal-mensaje');
    const cerrarModal = document.getElementById('cerrar-modal');

    silueta.addEventListener('click', function() {
        modal.style.display = 'flex'; 
    });

    cerrarModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});