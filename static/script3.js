document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments
    const inputs = document.querySelectorAll('input[type="text"]');
    const answerSection = document.querySelector('.answer-section');
    const buttons = document.querySelectorAll('button');
    const forms = document.querySelectorAll('form');
    let clickedAction = null;

    // Focus sur le premier input
    if (inputs.length > 0) {
        inputs[0].focus();
    }

    // Gestion des effets sur les boutons
    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            clickedAction = e.target.value;
            createClickEffect(e);
        });
    });

    // Gestion de la soumission des formulaires
    forms.forEach(form => {
        form.addEventListener('submit', e => {
            // Si c'est le bouton "voir_reponse", on empêche la soumission normale
            if (clickedAction === 'voir_reponse') {
                e.preventDefault();
                // Afficher la section réponse si elle existe
                if (answerSection) {
                    answerSection.style.display = 'block';
                    answerSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Pour les autres actions, on laisse la soumission normale se faire
                console.log('Action choisie :', clickedAction);
                if (clickedAction === 'valider') {
                    const responses = {};
                    inputs.forEach(input => {
                        responses[input.name] = input.value;
                    });
                    console.log('Réponses saisies:', responses);
                }
            }
        });
    });

    // Gestion du passage d'un champ à l'autre avec Tab ou Enter
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter' && index < inputs.length - 1) {
                e.preventDefault();
                inputs[index + 1].focus();
            }
        });
    });

    // Effets visuels sur les inputs
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'translateY(-2px)';
            input.parentElement.style.transition = 'transform 0.3s ease';
        });

        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'translateY(0)';
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
        `;
        
        e.target.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    // Animation d'entrée pour les éléments
    const animateElements = () => {
        const title = document.querySelector('.quiz-title');
        const inputGroups = document.querySelectorAll('.input-group');
        const actions = document.querySelector('.actions');

        // Animation du titre
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                title.style.transition = 'all 0.6s ease';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 200);
        }

        // Animation des groupes d'inputs
        inputGroups.forEach((group, index) => {
            group.style.opacity = '0';
            group.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                group.style.transition = 'all 0.6s ease';
                group.style.opacity = '1';
                group.style.transform = 'translateX(0)';
            }, 400 + index * 100);
        });

        // Animation des boutons
        if (actions) {
            actions.style.opacity = '0';
            actions.style.transform = 'translateY(20px)';
            setTimeout(() => {
                actions.style.transition = 'all 0.6s ease';
                actions.style.opacity = '1';
                actions.style.transform = 'translateY(0)';
            }, 800);
        }
    };

    // Lancer les animations
    animateElements();
});

// Création du style CSS pour l'animation ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple { 
        to { 
            transform: scale(4); 
            opacity: 0; 
        } 
    }
    
    .input-group {
        position: relative;
        margin-bottom: 1.5rem;
    }
    
    /* Animation de pulsation pour les inputs actifs */
    input:focus {
        animation: inputPulse 2s ease-in-out infinite;
    }
    
    @keyframes inputPulse {
        0%, 100% { box-shadow: var(--glow-primary), inset 0 1px 0 rgba(255,255,255,0.1); }
        50% { box-shadow: var(--glow-secondary), inset 0 1px 0 rgba(255,255,255,0.2); }
    }
`;
document.head.appendChild(style);