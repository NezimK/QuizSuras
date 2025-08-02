document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments spécifiques au niveau 1
    const input = document.getElementById('reponse');
    const buttons = document.querySelectorAll('button');
    
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

    // Focus automatique sur l'input
    if (input) {
        input.focus();
    }

    // Navigation avec Enter
    if (input) {
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const validateBtn = document.querySelector('button[value="valider"]');
                if (validateBtn) {
                    validateBtn.click();
                }
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
`;

document.head.appendChild(additionalStyles);