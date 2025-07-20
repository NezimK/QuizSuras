// Configuration du quiz
const TOTAL_QUESTIONS = 10; // Nombre total de questions dans le quiz
let currentQuestion = 1;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const progressFill = document.querySelector('.progress-fill');
    const input = document.querySelector('.futuristic-input');
    const answerSection = document.querySelector('.answer-section');
    const scoreElement = document.getElementById('score-value');
    const allButtons = document.querySelectorAll('.futuristic-btn');
    const form = document.querySelector('form');
    let clickedAction = null;

    // Initialiser la barre de progression
    updateProgressBar();

    // Focus automatique sur l'input
    if (input) {
        input.focus();
    }

    // Gestion des effets sur les boutons avec animations améliorées
    allButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            clickedAction = e.target.value;
            createClickEffect(e);
            
            // Effet de vibration pour les boutons importants
            if (clickedAction === 'valider') {
                btn.style.animation = 'buttonSuccess 0.5s ease';
            } else if (clickedAction === 'voir_reponse') {
                btn.style.animation = 'buttonReveal 0.5s ease';
            }
        });

        // Effets de survol améliorés
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.05)';
            btn.style.boxShadow = '0 8px 25px rgba(64,224,208,0.4)';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
            btn.style.boxShadow = '0 4px 15px rgba(64,224,208,0.2)';
        });
    });

    // Gestion de la soumission du formulaire avec validation améliorée
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            if (clickedAction === 'voir_reponse') {
                showAnswerSection();
            } else if (clickedAction === 'valider') {
                // Logique de validation améliorée
                const userAnswer = input.value.trim();
                validateAnswer(userAnswer);
            } else if (clickedAction === 'je_sais_pas') {
                showSkipMessage();
                showAnswerSection();
            }
        });
    }

    // Validation en temps réel de l'input
    if (input) {
        input.addEventListener('input', e => {
            const value = e.target.value.trim();
            const isValid = value !== '' && !isNaN(value) && parseInt(value) > 0;
            
            // Changement de couleur en temps réel
            if (value === '') {
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.boxShadow = 'var(--glow-primary)';
            } else if (isValid) {
                e.target.style.borderColor = 'var(--success)';
                e.target.style.boxShadow = '0 0 15px rgba(16,185,129,0.3)';
            } else {
                e.target.style.borderColor = 'var(--danger)';
                e.target.style.boxShadow = '0 0 15px rgba(239,68,68,0.3)';
            }
        });

        // Navigation avec Enter
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const validateBtn = document.querySelector('button[value="valider"]');
                if (validateBtn) {
                    validateBtn.click();
                }
            }
        });

        // Effets visuels sur focus/blur
        input.addEventListener('focus', () => {
            input.style.transform = 'translateY(-2px) scale(1.02)';
            input.style.transition = 'all 0.3s ease';
            
            // Effet de pulsation
            input.style.animation = 'inputPulse 2s infinite';
        });

        input.addEventListener('blur', () => {
            input.style.transform = 'translateY(0) scale(1)';
            input.style.animation = 'none';
        });
    }

    // Fonction pour valider la réponse avec feedback visuel
    function validateAnswer(userAnswer) {
        const correctAnswer = '7'; // Réponse correcte pour Al-Fatiha
        const isCorrect = userAnswer === correctAnswer;
        
        if (isCorrect) {
            score += 10;
            scoreElement.textContent = score;
            showSuccessMessage();
            validateInput(input, true);
        } else {
            showErrorMessage(correctAnswer);
            validateInput(input, false);
        }
        
        // Afficher la section réponse après un délai
        setTimeout(() => {
            showAnswerSection();
        }, 1000);
    }

    // Fonction pour afficher la section réponse avec animation
    function showAnswerSection() {
        if (answerSection) {
            answerSection.style.display = 'block';
            answerSection.style.opacity = '0';
            answerSection.style.transform = 'translateY(30px) scale(0.95)';
            
            setTimeout(() => {
                answerSection.style.transition = 'all 0.8s ease';
                answerSection.style.opacity = '1';
                answerSection.style.transform = 'translateY(0) scale(1)';
                
                // Scroll vers la section réponse
                setTimeout(() => {
                    answerSection.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }, 400);
            }, 100);
        }
    }

    // Messages de feedback améliorés
    function showSuccessMessage() {
        createNotification('Correct ! +10 points', 'success');
    }

    function showErrorMessage(correctAnswer) {
        createNotification(`Incorrect. La bonne réponse était ${correctAnswer}.`, 'error');
    }

    function showSkipMessage() {
        createNotification('Question passée.', 'info');
    }

    // Fonction pour créer des notifications modernes
    function createNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Styles de base
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 12px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            transform: translateX(100%);
            transition: all 0.5s ease;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        `;
        
        // Couleurs selon le type
        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
        }
        
        document.body.appendChild(notification);
        
        // Animation d'entrée
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Suppression automatique
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    // Fonction pour valider visuellement un input
    function validateInput(inputElement, isValid) {
        if (!inputElement) return;
        
        inputElement.style.transition = 'all 0.3s ease';
        if (isValid) {
            inputElement.style.borderColor = 'var(--success)';
            inputElement.style.boxShadow = '0 0 20px rgba(16,185,129,0.4)';
            inputElement.style.transform = 'scale(1.02)';
        } else {
            inputElement.style.borderColor = 'var(--danger)';
            inputElement.style.boxShadow = '0 0 20px rgba(239,68,68,0.4)';
            inputElement.style.transform = 'scale(1.02)';
            // Animation de secousse pour l'erreur
            inputElement.style.animation = 'inputShake 0.5s ease';
        }
        
        // Retour à la normale après un délai
        setTimeout(() => {
            inputElement.style.transform = 'scale(1)';
            inputElement.style.animation = 'none';
        }, 500);
    }

    // Fonction pour créer l'effet de clic amélioré (ripple effect)
    function createClickEffect(e) {
        const ripple = document.createElement('div');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            pointer-events: none;
            z-index: 1000;
        `;
        
        e.target.style.position = 'relative';
        e.target.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    // Gestion des raccourcis clavier
    document.addEventListener('keydown', (e) => {
        // Ctrl + Enter pour valider rapidement
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            const validateBtn = document.querySelector('button[value="valider"]');
            if (validateBtn) {
                validateBtn.click();
            }
        }
        
        // Échap pour passer
        if (e.key === 'Escape') {
            const passBtn = document.querySelector('button[value="je_sais_pas"]');
            if (passBtn) {
                passBtn.click();
            }
        }
    });

    // Animations d'entrée des éléments
    const animateElements = () => {
        const title = document.querySelector('.quiz-title');
        const inputContainer = document.querySelector('.quiz-container');
        const actionsGrid = document.querySelector('.actions-grid');

        // Animation du titre
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(-30px)';
            setTimeout(() => {
                title.style.transition = 'all 0.8s ease';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 100);
        }

        // Animation du container principal
        if (inputContainer) {
            inputContainer.style.opacity = '0';
            inputContainer.style.transform = 'translateY(20px)';
            setTimeout(() => {
                inputContainer.style.transition = 'all 0.6s ease';
                inputContainer.style.opacity = '1';
                inputContainer.style.transform = 'translateY(0)';
            }, 300);
        }

        // Animation des boutons
        if (actionsGrid) {
            actionsGrid.style.opacity = '0';
            actionsGrid.style.transform = 'translateY(30px)';
            setTimeout(() => {
                actionsGrid.style.transition = 'all 0.8s ease';
                actionsGrid.style.opacity = '1';
                actionsGrid.style.transform = 'translateY(0)';
            }, 500);
        }
    };

    // Lancer les animations
    animateElements();
});

// Fonctions utilitaires
function updateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const progressPercentage = (currentQuestion / TOTAL_QUESTIONS) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        progressFill.style.transition = 'width 0.5s ease';
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion <= TOTAL_QUESTIONS) {
        updateProgressBar();
        
        // Masquer la section réponse avec animation
        const answerSection = document.querySelector('.answer-section');
        if (answerSection) {
            answerSection.style.opacity = '0';
            answerSection.style.transform = 'translateY(30px)';
            setTimeout(() => {
                answerSection.style.display = 'none';
            }, 300);
        }
        
        // Réinitialiser et focus sur l'input
        const input = document.querySelector('.futuristic-input');
        if (input) {
            input.value = '';
            input.style.borderColor = 'rgba(255,255,255,0.1)';
            input.style.boxShadow = 'var(--glow-primary)';
            input.focus();
        }
        
        // Mettre à jour le titre
        const title = document.querySelector('.quiz-title');
        if (title) {
            title.textContent = `Question ${currentQuestion}`;
        }
    } else {
        // Quiz terminé
        showFinalScore();
    }
}

function showFinalScore() {
    const notification = document.createElement('div');
    notification.className = 'final-score-notification';
    notification.innerHTML = `
        <h2>🎉 Quiz terminé !</h2>
        <p>Score final: <strong>${score}</strong></p>
        <p>Excellent travail !</p>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #1e293b, #334155);
        color: white;
        padding: 30px;
        border-radius: 20px;
        text-align: center;
        z-index: 1000;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        border: 1px solid rgba(255,255,255,0.1);
        transition: all 0.5s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
    
    // Suppression automatique
    setTimeout(() => {
        notification.style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
}

function restart() {
    currentQuestion = 1;
    score = 0;
    
    // Réinitialiser les éléments
    const scoreElement = document.getElementById('score-value');
    const answerSection = document.querySelector('.answer-section');
    const input = document.querySelector('.futuristic-input');
    const title = document.querySelector('.quiz-title');
    
    if (scoreElement) scoreElement.textContent = score;
    if (answerSection) answerSection.style.display = 'none';
    if (input) {
        input.value = '';
        input.style.borderColor = 'rgba(255,255,255,0.1)';
        input.style.boxShadow = 'var(--glow-primary)';
        input.focus();
    }
    if (title) title.textContent = 'Al-Fatiha';
    
    updateProgressBar();
}

// Styles CSS supplémentaires pour les nouvelles animations
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    /* Animation ripple */
    @keyframes ripple { 
        to { 
            transform: scale(4); 
            opacity: 0; 
        } 
    }
    
    /* Animation de secousse pour les erreurs */
    @keyframes inputShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    /* Animations des boutons */
    @keyframes buttonSuccess {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); background: var(--success); }
        100% { transform: scale(1); }
    }
    
    @keyframes buttonReveal {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); background: var(--warning); }
        100% { transform: scale(1); }
    }
    
    /* Animation de pulsation pour les inputs actifs */
    @keyframes inputPulse {
        0%, 100% { 
            box-shadow: var(--glow-primary); 
        }
        50% { 
            box-shadow: var(--glow-secondary); 
        }
    }
    
    /* Effet de survol amélioré pour les inputs */
    .futuristic-input:hover {
        border-color: rgba(255,255,255,0.3);
        transform: translateY(-1px);
    }
    
    /* Notifications */
    .notification {
        font-family: 'Orbitron', monospace;
    }
    
    .final-score-notification h2 {
        margin: 0 0 15px 0;
        font-size: 24px;
        color: var(--primary);
    }
    
    .final-score-notification p {
        margin: 10px 0;
        font-size: 16px;
    }
    
    .final-score-notification strong {
        color: var(--success);
        font-size: 20px;
    }
    
    /* Transition smooth pour tous les éléments */
    .futuristic-btn,
    .futuristic-input {
        transition: all 0.3s ease;
    }
    
    /* Variables CSS pour les couleurs */
    :root {
        --success: #10b981;
        --danger: #ef4444;
        --warning: #f59e0b;
        --primary: #40e0d0;
        --secondary: #64ffda;
    }
`;

document.head.appendChild(additionalStyles);