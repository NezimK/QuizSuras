document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments spécifiques au niveau 2
    const inputVersets = document.getElementById('versets');
    const inputTraduction = document.getElementById('traduction');
    const allInputs = document.querySelectorAll('input[type="text"]');
    const buttons = document.querySelectorAll('button');
    const answerSection = document.querySelector('.answer-section');
    
    const progressBar = document.getElementById('progress-fill');
    if (progressBar) {
        const currentQ = parseInt(progressBar.dataset.current);
        const totalQuestions = parseInt(progressBar.dataset.total);
        const progressPercentage = (currentQ / totalQuestions) * 100;
        
        setTimeout(() => {
            progressBar.style.width = progressPercentage + '%';
        }, 500);
    }
    // Focus automatique sur le premier input (versets)
    if (inputVersets) {
        inputVersets.focus();
    }

    // Navigation entre les champs avec Enter
    if (inputVersets && inputTraduction) {
        inputVersets.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                inputTraduction.focus();
            }
        });
        
        inputTraduction.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                // Déclencher la validation quand on appuie sur Enter sur le dernier champ
                const validateBtn = document.querySelector('button[value="valider"]');
                if (validateBtn) {
                    validateBtn.click();
                }
            }
        });
    }

    // Validation en temps réel des inputs
    if (inputVersets) {
        inputVersets.addEventListener('input', e => {
            const value = e.target.value.trim();
            const isValid = value !== '' && !isNaN(value) && parseInt(value) > 0;
            
            // Changement de couleur en temps réel
            if (value === '') {
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.boxShadow = 'none';
            } else if (isValid) {
                e.target.style.borderColor = 'var(--success)';
                e.target.style.boxShadow = '0 0 15px rgba(16,185,129,0.3)';
            } else {
                e.target.style.borderColor = 'var(--danger)';
                e.target.style.boxShadow = '0 0 15px rgba(239,68,68,0.3)';
            }
        });
    }

    if (inputTraduction) {
        inputTraduction.addEventListener('input', e => {
            const value = e.target.value.trim();
            const isValid = value !== '' && value.length >= 2;
            
            // Changement de couleur en temps réel
            if (value === '') {
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.boxShadow = 'none';
            } else if (isValid) {
                e.target.style.borderColor = 'var(--success)';
                e.target.style.boxShadow = '0 0 15px rgba(16,185,129,0.3)';
            } else {
                e.target.style.borderColor = 'var(--warning)';
                e.target.style.boxShadow = '0 0 15px rgba(245,158,11,0.3)';
            }
        });
    }

    // Effets visuels sur les inputs (focus/blur)
    allInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'translateY(-2px)';
            input.parentElement.style.transition = 'transform 0.3s ease';
            
            // Effet de pulsation sur le label
            const label = input.parentElement.querySelector('label');
            if (label) {
                label.style.color = 'var(--primary)';
                label.style.transition = 'color 0.3s ease';
            }
        });

        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'translateY(0)';
            
            // Retour à la couleur normale du label
            const label = input.parentElement.querySelector('label');
            if (label) {
                label.style.color = 'var(--text-secondary)';
            }
        });
    });

    // Gestion des effets sur les boutons
    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            createClickEffect(e);
        });
    });

    // Fonction pour créer l'effet de clic (ripple effect)
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

    // Animation smooth pour la section réponse si elle existe déjà
    if (answerSection) {
        // Scroll vers la section réponse pour s'assurer qu'elle est visible
        setTimeout(() => {
            answerSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 200);
    }
});

// Styles CSS pour les animations
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    /* Animation ripple */
    @keyframes ripple { 
        to { 
            transform: scale(4); 
            opacity: 0; 
        } 
    }
    
    /* Transition smooth pour tous les éléments */
    * {
        transition: all 0.3s ease;
    }
`;

document.head.appendChild(additionalStyles);