document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "You're my sunshine!",
        "I love you more each day!",
        "Forever and always, my love!",
        "You make my heart skip a beat!",
        "Together forever, my sweetheart!",
    ];

    const balloonContainer = document.getElementById('balloon-container');
    const messageContainer = document.getElementById('message-container');
    const confettiButton = document.getElementById('confetti-button');
    const confettiContainer = document.getElementById('confetti-container');

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.bottom = `-${Math.random() * 100}px`;
        balloon.style.animation = `float ${Math.random() * 5 + 5}s linear infinite`;

        balloon.addEventListener('click', () => {
            const message = messages[Math.floor(Math.random() * messages.length)];
            showMessage(message);
            balloon.remove();
        });

        balloonContainer.appendChild(balloon);
    }

    function showMessage(message) {
        messageContainer.textContent = message;
        messageContainer.classList.add('show');
        setTimeout(() => {
            messageContainer.classList.remove('show');
        }, 2000);
    }

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.className = 'confetti';
            confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
            confettiPiece.style.width = `${Math.random() * 10 + 5}px`;
            confettiPiece.style.height = confettiPiece.style.width;
            confettiPiece.style.left = `${Math.random() * 100}vw`;
            confettiPiece.style.top = `${Math.random() * 100}vh`;
            confettiPiece.style.opacity = Math.random();
            confettiPiece.style.transform = `rotate(${Math.random() * 360}deg)`;
            confettiPiece.style.transition = `transform ${Math.random() * 2 + 1}s, opacity ${Math.random() * 2 + 1}s`;

            confettiContainer.appendChild(confettiPiece);

            setTimeout(() => {
                confettiPiece.style.transform = `translateY(${Math.random() * 100 + 100}vh) rotate(${Math.random() * 360}deg)`;
                confettiPiece.style.opacity = 0;
                setTimeout(() => confettiPiece.remove(), 2000);
            }, 0);
        }
    }

    function startConfetti() {
        createConfetti();
    }

    confettiButton.addEventListener('click', startConfetti);

    setInterval(createBalloon, 1500);
});