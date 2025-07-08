// Configuration du quiz
const TOTAL_QUESTIONS = 10; // Nombre total de questions dans le quiz
let currentQuestion = 1;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const progressFill = document.querySelector('.progress-fill');
    const input = document.querySelector('.futuristic-input');
    const answerSection = document.querySelector('.answer-section');
    const scoreElement = document.getElementById('score-value');
    let clickedAction = null;

    // Initialiser la barre de progression
    updateProgressBar();

    input.focus();

    document.querySelectorAll('.futuristic-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            clickedAction = e.target.value;
            createClickEffect(e);
        });
    });

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        if (clickedAction === 'voir_reponse') {
            answerSection.style.display = 'block';
        } else if (clickedAction === 'valider') {
            // Logique de validation
            const userAnswer = input.value.trim();
            if (userAnswer === '7') {
                score += 10;
                scoreElement.textContent = score;
                alert('Correct ! +10 points');
            } else {
                alert('Incorrect. La bonne réponse était 7.');
            }
            answerSection.style.display = 'block';
        } else if (clickedAction === 'je_sais_pas') {
            alert('Question passée.');
            answerSection.style.display = 'block';
        }
    });

    function createClickEffect(e) {
        const ripple = document.createElement('div');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        ripple.style.cssText = `
            position:absolute;border-radius:50%;background:rgba(255,255,255,0.6);
            transform:scale(0);animation:ripple 0.6s linear;
            left:${x}px;top:${y}px;width:${size}px;height:${size}px;
        `;
        e.target.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }
});

function updateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    const progressPercentage = (currentQuestion / TOTAL_QUESTIONS) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion <= TOTAL_QUESTIONS) {
        updateProgressBar();
        document.querySelector('.answer-section').style.display = 'none';
        document.querySelector('.futuristic-input').value = '';
        document.querySelector('.futuristic-input').focus();
        document.querySelector('.quiz-title').textContent = `Question ${currentQuestion}`;
    } else {
        alert(`Quiz terminé ! Score final: ${score}`);
    }
}

function restart() {
    currentQuestion = 1;
    score = 0;
    document.getElementById('score-value').textContent = score;
    updateProgressBar();
    document.querySelector('.answer-section').style.display = 'none';
    document.querySelector('.futuristic-input').value = '';
    document.querySelector('.futuristic-input').focus();
    document.querySelector('.quiz-title').textContent = 'Al-Fatiha';
}
