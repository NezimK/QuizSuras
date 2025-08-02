document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments
    const inputs = document.querySelectorAll('input[type="text"]');
    const buttons = document.querySelectorAll('button');
    const forms = document.querySelectorAll('form');
    let clickedAction = null;

    // Gestion de la barre de progression - CORRIGÉE
    const progressBar = document.getElementById('progress-fill');
    if (progressBar) {
        const currentQ = parseInt(progressBar.dataset.current);
        const totalQuestions = parseInt(progressBar.dataset.total);
        const progressPercentage = (currentQ / totalQuestions) * 100;
        
        // CORRECTION : Toujours définir la progression au bon pourcentage sans animation
        progressBar.style.width = progressPercentage + '%';
        progressBar.style.transition = 'width 0.3s ease';
    }

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
            if (clickedAction === 'valider') {
                const responses = {};
                inputs.forEach(input => {
                    responses[input.name] = input.value;
                });
                console.log('Réponses saisies:', responses);
            }
            console.log('Action choisie :', clickedAction);
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
`;
document.head.appendChild(style);