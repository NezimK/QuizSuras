document.addEventListener('DOMContentLoaded', () => {
    console.log('Page d\'accueil chargée');
    
    // Sélection des éléments
    const form = document.querySelector('form');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const submitButton = document.querySelector('button[type="submit"]');
    const labels = document.querySelectorAll('label');
    const selectionSections = document.querySelectorAll('.selection-section');
    
    // Variables pour suivre l'état du formulaire
    let niveauSelectionne = false;
    let modeSelectionne = false;
    
    // Fonction pour vérifier si le formulaire est complet
    function checkFormCompletion() {
        const niveauChecked = document.querySelector('input[name="niveau"]:checked');
        const modeChecked = document.querySelector('input[name="mode"]:checked');
        
        niveauSelectionne = !!niveauChecked;
        modeSelectionne = !!modeChecked;
        
        // Activer/désactiver le bouton selon l'état du formulaire
        if (niveauSelectionne && modeSelectionne) {
            submitButton.disabled = false;
            submitButton.style.opacity = '1';
            submitButton.style.cursor = 'pointer';
        } else {
            submitButton.disabled = true;
            submitButton.style.opacity = '0.5';
            submitButton.style.cursor = 'not-allowed';
        }
    }
    
    // Fonction pour créer l'effet de clic (ripple)
    function createRippleEffect(e) {
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
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 600);
    }
    
    // Fonction pour animer l'entrée des éléments
    function animatePageEntrance() {
        const title = document.querySelector('h1');
        const sections = document.querySelectorAll('.selection-section');
        const button = document.querySelector('button');
        
        // Animation du titre
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(-30px)';
            setTimeout(() => {
                title.style.transition = 'all 0.8s ease';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 300);
        }
        
        // Animation des sections
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            setTimeout(() => {
                section.style.transition = 'all 0.6s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 500 + index * 200);
        });
        
        // Animation du bouton
        if (button) {
            button.style.opacity = '0';
            button.style.transform = 'translateY(30px)';
            setTimeout(() => {
                button.style.transition = 'all 0.6s ease';
                button.style.opacity = '0.5'; // Commence désactivé
                button.style.transform = 'translateY(0)';
            }, 1100);
        }
    }
    
    // Fonction pour gérer la sélection des options
    function handleOptionSelection(e) {
        const input = e.target;
        const label = input.closest('label');
        
        // Effet visuel sur la sélection
        if (input.checked) {
            label.classList.add('selected');
            
            // Retire la classe selected des autres options du même groupe
            const sameNameInputs = document.querySelectorAll(`input[name="${input.name}"]`);
            sameNameInputs.forEach(otherInput => {
                if (otherInput !== input) {
                    otherInput.closest('label').classList.remove('selected');
                }
            });
        }
        
        // Vérifier l'état du formulaire
        checkFormCompletion();
        
        // Effet sonore visuel (vibration du label)
        label.style.transform = 'scale(1.02)';
        setTimeout(() => {
            label.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Fonction pour gérer la soumission du formulaire
    function handleFormSubmit(e) {
        const niveauChecked = document.querySelector('input[name="niveau"]:checked');
        const modeChecked = document.querySelector('input[name="mode"]:checked');
        
        if (!niveauChecked || !modeChecked) {
            e.preventDefault();
            
            // Animation d'erreur
            const container = document.querySelector('.container');
            container.style.animation = 'shake 0.5s ease-in-out';
            
            setTimeout(() => {
                container.style.animation = '';
            }, 500);
            
            // Mettre en évidence les sections non complétées
            if (!niveauChecked) {
                selectionSections[0].style.borderColor = '#ef4444';
                selectionSections[0].style.boxShadow = '0 0 10px rgba(239, 68, 68, 0.3)';
            }
            if (!modeChecked) {
                selectionSections[1].style.borderColor = '#ef4444';
                selectionSections[1].style.boxShadow = '0 0 10px rgba(239, 68, 68, 0.3)';
            }
            
            return false;
        }
        
        // Animation de succès avant soumission
        submitButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        submitButton.innerHTML = '🚀 Démarrage...';
        
        // Laisser le formulaire se soumettre normalement
        console.log('Formulaire soumis avec:', {
            niveau: niveauChecked.value,
            mode: modeChecked.value
        });
    }
    
    // Ajout des écouteurs d'événements
    radioButtons.forEach(radio => {
        radio.addEventListener('change', handleOptionSelection);
    });
    
    // Ajout des effets de survol et de clic sur les labels
    labels.forEach(label => {
        label.addEventListener('mouseenter', () => {
            if (!label.classList.contains('selected')) {
                label.style.transform = 'translateY(-2px)';
            }
        });
        
        label.addEventListener('mouseleave', () => {
            if (!label.classList.contains('selected')) {
                label.style.transform = 'translateY(0)';
            }
        });
        
        label.addEventListener('click', createRippleEffect);
    });
    
    // Écouteur pour le bouton de soumission
    submitButton.addEventListener('click', createRippleEffect);
    form.addEventListener('submit', handleFormSubmit);
    
    // Gestion du clavier
    document.addEventListener('keydown', (e) => {
        // Permettre la navigation avec les flèches
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            const focusedElement = document.activeElement;
            
            if (focusedElement.type === 'radio') {
                const radios = Array.from(document.querySelectorAll('input[type="radio"]'));
                const currentIndex = radios.indexOf(focusedElement);
                
                let nextIndex;
                if (e.key === 'ArrowUp') {
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : radios.length - 1;
                } else {
                    nextIndex = currentIndex < radios.length - 1 ? currentIndex + 1 : 0;
                }
                
                radios[nextIndex].focus();
            }
        }
        
        // Soumission avec Entrée si le formulaire est complet
        if (e.key === 'Enter' && niveauSelectionne && modeSelectionne) {
            form.submit();
        }
    });
    
    // Initialisation
    checkFormCompletion();
    animatePageEntrance();
    
    // Ajouter les styles CSS pour les animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple { 
            to { 
                transform: scale(4); 
                opacity: 0; 
            } 
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .selected {
            background: rgba(0,212,255,0.15) !important;
            border-color: var(--primary) !important;
            color: var(--text-primary) !important;
            box-shadow: 0 0 15px rgba(0,212,255,0.3) !important;
        }
        
        button:disabled {
            cursor: not-allowed !important;
            opacity: 0.5 !important;
        }
        
        button:disabled:hover {
            transform: none !important;
            box-shadow: none !important;
        }
    `;
    document.head.appendChild(style);
});

// Fonction utilitaire pour déboguer
function debugFormState() {
    const niveau = document.querySelector('input[name="niveau"]:checked');
    const mode = document.querySelector('input[name="mode"]:checked');
    
    console.log('État du formulaire:', {
        niveau: niveau ? niveau.value : 'non sélectionné',
        mode: mode ? mode.value : 'non sélectionné'
    });
}