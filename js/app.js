document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const checkButton = document.getElementById('checkButton');
    const feedback = document.getElementById('feedback');
    const resetButton = document.getElementById('resetButton');

    let secretNumber;
    let attempts;

    function initGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        feedback.textContent = '';
        guessInput.value = '';
        guessInput.disabled = false;
        checkButton.disabled = false;
        resetButton.classList.add('hidden');
        console.log('Número secreto (solo para desarrollo): ', secretNumber);
    }

    function checkGuess() {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
            return;
        }

        if (userGuess === secretNumber) {
            feedback.textContent = `¡Felicidades! Adivinaste el número ${secretNumber} en ${attempts} intentos.`;
            guessInput.disabled = true;
            checkButton.disabled = true;
            resetButton.classList.remove('hidden');
        } else if (userGuess < secretNumber) {
            feedback.textContent = 'Demasiado bajo. ¡Intenta de nuevo!';
        } else {
            feedback.textContent = 'Demasiado alto. ¡Intenta de nuevo!';
        }
    }

    checkButton.addEventListener('click', checkGuess);
    resetButton.addEventListener('click', initGame);

    // Iniciar el juego por primera vez
    initGame();
});