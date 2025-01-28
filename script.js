// Botón principal
document.getElementById('showFlowersButton').addEventListener('click', () => {
    const button = document.getElementById('showFlowersButton');
    button.classList.add('hidden'); // Esconder botón

    // Mostrar flores
    const flowers = document.getElementById('flowers');
    flowers.classList.remove('hidden');

    // Mostrar tarjeta
    const card = document.getElementById('card');
    card.classList.remove('hidden');

    // Reproducir sonido mágico
    playSound('magicSound');

    // Cambiar fondo
    document.body.classList.add('active');

    // Mostrar confeti
    createConfetti();

    // Activar fuegos artificiales
    createFireworks();

    // Mostrar botón de velas
    const candlesButton = document.getElementById('turnOffCandlesButton');
    candlesButton.classList.remove('hidden');
});

// Crear fuegos artificiales
function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F6', '#F1C40F', '#E74C3C'];

    setInterval(() => {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        firework.style.top = `${Math.random() * window.innerHeight}px`;
        firework.style.left = `${Math.random() * window.innerWidth}px`;

        fireworksContainer.appendChild(firework);

        playSound('fireworkSound'); // Reproducir sonido de fuegos artificiales

        setTimeout(() => firework.remove(), 1500);
    }, 300);
}

// Apagar velas
document.getElementById('turnOffCandlesButton').addEventListener('click', () => {
    document.querySelectorAll('.candle').forEach(candle => candle.classList.add('off'));
    createFireworks(); // Fuegos artificiales al apagar velas
});

// Función para crear confeti
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.classList.remove('hidden');

    for (let i = 0; i < 100; i++) {
        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');
        piece.style.backgroundColor = getRandomColor();
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(piece);

        setTimeout(() => piece.remove(), 5000); // Eliminar confeti después de 5 segundos
    }
}

// Función para reproducir sonidos
function playSound(id) {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
}

// Función para obtener un color aleatorio
function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F6', '#F1C40F', '#E74C3C'];
    return colors[Math.floor(Math.random() * colors.length)];
}
