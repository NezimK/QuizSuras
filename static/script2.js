document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments spécifiques au niveau 2
    const inputVersets = document.getElementById('versets');
    const inputTraduction = document.getElementById('traduction');
    const allInputs = document.querySelectorAll('input[type="text"]');
    const buttons = document.querySelectorAll('button');
    const forms = document.querySelectorAll('form');
    const answerSection = document.querySelector('.answer-section');
    let clickedAction = null;

    // Focus automatique sur le premier input (versets)
    if (inputVersets) {
        inputVersets.focus();
    }

    // Gestion des effets sur les boutons
    buttons.forEach(btn => {
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
    });

    // Gestion de la soumission des formulaires
    forms.forEach(form => {
        form.addEventListener('submit', e => {
            if (clickedAction === 'valider') {
                // Validation des inputs avant soumission
                const versetsValue = inputVersets ? inputVersets.value.trim() : '';
                const traductionValue = inputTraduction ? inputTraduction.value.trim() : '';
                
                console.log('Validation niveau 2:', {
                    versets: versetsValue,
                    traduction: traductionValue,
                    versetsValid: versetsValue !== '' && !isNaN(versetsValue),
                    traductionValid: traductionValue !== ''
                });
                
                // Affichage visuel des champs valides/invalides
                validateInput(inputVersets, versetsValue !== '' && !isNaN(versetsValue));
                validateInput(inputTraduction, traductionValue !== '');
            }
            
            console.log('Action choisie :', clickedAction);
        });
    });

    // Navigation entre les champs avec Enter ou Tab
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

    // Fonction pour valider visuellement un input
    function validateInput(input, isValid) {
        if (!input) return;
        
        input.style.transition = 'all 0.3s ease';
        if (isValid) {
            input.style.borderColor = 'var(--success)';
            input.style.boxShadow = '0 0 20px rgba(16,185,129,0.4)';
            input.style.transform = 'scale(1.02)';
        } else {
            input.style.borderColor = 'var(--danger)';
            input.style.boxShadow = '0 0 20px rgba(239,68,68,0.4)';
            input.style.transform = 'scale(1.02)';
            // Animation de secousse pour l'erreur
            input.style.animation = 'inputShake 0.5s ease';
        }
        
        // Retour à la normale après un délai
        setTimeout(() => {
            input.style.transform = 'scale(1)';
            input.style.animation = 'none';
        }, 500);
    }

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

    // Animations d'entrée des éléments
    const animateElements = () => {
        const title = document.querySelector('.quiz-title');
        const subtitle = document.querySelector('.quiz-subtitle');
        const inputGroups = document.querySelectorAll('.input-group');
        const actionsGrid = document.querySelector('.actions-grid');

        // Animation du titre avec effet de frappe
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(-30px)';
            setTimeout(() => {
                title.style.transition = 'all 0.8s ease';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 100);
        }

        // Animation du sous-titre
        if (subtitle) {
            subtitle.style.opacity = '0';
            subtitle.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                subtitle.style.transition = 'all 0.6s ease';
                subtitle.style.opacity = '1';
                subtitle.style.transform = 'translateY(0)';
            }, 300);
        }

        // Animation des groupes d'inputs (effet de gauche à droite)
        inputGroups.forEach((group, index) => {
            group.style.opacity = '0';
            group.style.transform = 'translateX(-50px)';
            setTimeout(() => {
                group.style.transition = 'all 0.7s ease';
                group.style.opacity = '1';
                group.style.transform = 'translateX(0)';
            }, 500 + index * 200);
        });

        // Animation des boutons
        if (actionsGrid) {
            actionsGrid.style.opacity = '0';
            actionsGrid.style.transform = 'translateY(30px)';
            setTimeout(() => {
                actionsGrid.style.transition = 'all 0.8s ease';
                actionsGrid.style.opacity = '1';
                actionsGrid.style.transform = 'translateY(0)';
            }, 900);
        }
    };

    // Animation de la barre de progression (simulation)
    const animateProgressBar = () => {
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            // Simulation d'une progression basée sur le score ou l'avancement
            const randomProgress = Math.random() * 70 + 10; // Entre 10% et 80%
            setTimeout(() => {
                progressFill.style.width = `${randomProgress}%`;
                progressFill.style.transition = 'width 2s ease';
            }, 1000);
        }
    };

    // Lancer toutes les animations
    animateElements();
    animateProgressBar();

    // Animation smooth pour la section réponse si elle existe
    if (answerSection) {
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
        }, 200);
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

    // Sauvegarde automatique des réponses dans le localStorage (optionnel)
    const saveResponses = () => {
        const responses = {
            versets: inputVersets ? inputVersets.value : '',
            traduction: inputTraduction ? inputTraduction.value : '',
            timestamp: Date.now()
        };
        
        try {
            localStorage.setItem('quiz_level2_temp', JSON.stringify(responses));
        } catch (e) {
            console.log('Sauvegarde locale non disponible');
        }
    };

    // Sauvegarde automatique à chaque saisie
    allInputs.forEach(input => {
        input.addEventListener('input', saveResponses);
    });
});

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
            box-shadow: var(--glow-primary), inset 0 1px 0 rgba(255,255,255,0.1); 
        }
        50% { 
            box-shadow: var(--glow-secondary), inset 0 1px 0 rgba(255,255,255,0.2); 
        }
    }
    
    /* Effet de survol amélioré pour les inputs */
    .futuristic-input:hover {
        border-color: rgba(255,255,255,0.3);
        transform: translateY(-1px);
    }
    
    /* Transition smooth pour tous les éléments */
    * {
        transition: all 0.3s ease;
    }
`;

document.head.appendChild(additionalStyles);