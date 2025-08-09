// js/home.js - Version avec transitions ultra-fluides

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Page d\'accueil chargée');
    
    // Attendre que tous les scripts soient chargés
    setTimeout(initializePage, 50); // Réduit de 100ms à 50ms
});

function initializePage() {
    console.log('🔧 Initialisation de la page...');
    
    // Sélection des éléments
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const startButton = document.getElementById('startQuizBtn');
    const labels = document.querySelectorAll('label');
    const selectionSections = document.querySelectorAll('.selection-section');
    
    // Variables pour suivre l'état du formulaire
    let niveauSelectionne = false;
    let modeSelectionne = false;
    let quizEnCours = false;
    
    // Debug initial
    console.log('🔧 Debug initial:');
    console.log('- QuizApp disponible:', typeof quizApp !== 'undefined');
    console.log('- SOURATES_DATA disponible:', typeof SOURATES_DATA !== 'undefined');
    if (typeof SOURATES_DATA !== 'undefined') {
        console.log('- Nombre de sourates:', SOURATES_DATA.length);
    }
    
    // FORCER LA RESTAURATION DU BOUTON AU CHARGEMENT
    resetStartButton();
    
    function resetStartButton() {
        if (startButton) {
            startButton.innerHTML = 'Commencer le Quiz';
            startButton.style.background = '';
            startButton.disabled = true;
            startButton.style.opacity = '0.5';
            startButton.style.cursor = 'not-allowed';
            quizEnCours = false;
        }
    }
    
    // Fonction pour vérifier si le formulaire est complet
    function checkFormCompletion() {
        if (quizEnCours) return;
        
        const niveauChecked = document.querySelector('input[name="niveau"]:checked');
        const modeChecked = document.querySelector('input[name="mode"]:checked');
        
        niveauSelectionne = !!niveauChecked;
        modeSelectionne = !!modeChecked;
        
        // Activer/désactiver le bouton selon l'état du formulaire
        if (niveauSelectionne && modeSelectionne) {
            startButton.disabled = false;
            startButton.style.opacity = '1';
            startButton.style.cursor = 'pointer';
            console.log('✅ Formulaire complet, bouton activé');
        } else {
            startButton.disabled = true;
            startButton.style.opacity = '0.5';
            startButton.style.cursor = 'not-allowed';
        }
    }
    
    // Fonction pour gérer la sélection des options
    function handleOptionSelection(e) {
        if (quizEnCours) return;
        
        const input = e.target;
        const label = input.closest('label');
        
        console.log('📝 Option sélectionnée:', input.name, '=', input.value);
        
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
        
        // Effet visuel (vibration du label)
        label.style.transform = 'scale(1.02)';
        setTimeout(() => {
            label.style.transform = 'scale(1)';
        }, 150);
    }
    
    // NOUVELLE FONCTION : Transition fluide vers la page quiz
    function smoothTransitionToQuiz(niveau, mode) {
        console.log('🎬 Début de la transition fluide');
        
        const container = document.querySelector('.container');
        const level = document.querySelector('.level');
        
        // Préparer les données
        const gameState = {
            niveau: niveau,
            mode: mode,
            currentQuestion: 0,
            score: 0,
            sourates: [],
            totalQuestions: 0,
            randomSeed: mode === 'aleatoire' ? Date.now() : null
        };
        
        // Trier les sourates
        if (typeof SOURATES_DATA !== 'undefined' && SOURATES_DATA.length > 0) {
            let sourates = [...SOURATES_DATA];
            
            if (mode === 'canonique') {
                sourates.sort((a, b) => a.ordre_canonique - b.ordre_canonique);
            } else if (mode === 'chronologique') {
                sourates.sort((a, b) => a.ordre_chronologique - b.ordre_chronologique);
            } else if (mode === 'aleatoire') {
                // Mélange simple
                for (let i = sourates.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [sourates[i], sourates[j]] = [sourates[j], sourates[i]];
                }
            }
            
            gameState.sourates = sourates;
            gameState.totalQuestions = sourates.length;
        }
        
        // Sauvegarder IMMÉDIATEMENT
        localStorage.setItem('quizSurasState', JSON.stringify(gameState));
        console.log('💾 État sauvegardé instantanément');
        
        // Animation de transition ultra-rapide
        level.style.transition = 'all 0.2s ease-out';
        level.style.transform = 'scale(0.98) translateY(-5px)';
        level.style.opacity = '0.9';
        
        // Effet de fondu sur le fond
        document.body.style.transition = 'all 0.2s ease-out';
        document.body.style.filter = 'brightness(0.8)';
        
        // Redirection ultra-rapide
        setTimeout(() => {
            console.log('🚀 Redirection immédiate');
            window.location.href = 'quiz.html';
        }, 100); // Seulement 100ms de délai
    }
    
    // Fonction pour démarrer le quiz - VERSION ULTRA-RAPIDE
    function startQuiz() {
        // PROTECTION CONTRE LES DOUBLES CLICS
        if (quizEnCours) {
            console.log('🚫 Quiz déjà en cours de démarrage');
            return;
        }
        
        console.log('🎯 Démarrage instantané du quiz...');
        
        const niveauChecked = document.querySelector('input[name="niveau"]:checked');
        const modeChecked = document.querySelector('input[name="mode"]:checked');
        
        if (!niveauChecked || !modeChecked) {
            console.log('❌ Formulaire incomplet');
            alert('Veuillez sélectionner un niveau et un mode !');
            return;
        }
        
        // MARQUER LE QUIZ COMME EN COURS IMMÉDIATEMENT
        quizEnCours = true;
        
        const niveau = niveauChecked.value;
        const mode = modeChecked.value;
        
        console.log('🎮 Paramètres du quiz:', { niveau, mode });
        
        // Animation du bouton - ULTRA-RAPIDE
        startButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        startButton.disabled = true;
        startButton.style.transform = 'scale(0.98)';
        
        // Désactiver tous les inputs IMMÉDIATEMENT
        radioButtons.forEach(radio => radio.disabled = true);
        
        // Essayer QuizApp d'abord, sinon fallback
        try {
            if (typeof quizApp !== 'undefined' && quizApp.startQuiz) {
                console.log('✅ Utilisation de QuizApp.startQuiz()');
                
                // Démarrage immédiat avec QuizApp
                quizApp.startQuiz(niveau, mode);
                
                // Pas besoin d'attendre, la redirection se fait dans startQuiz()
                return;
            }
            
            console.log('⚠️ QuizApp non disponible, transition fluide manuelle');
            smoothTransitionToQuiz(niveau, mode);
            
        } catch (error) {
            console.error('❌ Erreur lors du démarrage:', error);
            
            // En cas d'erreur, transition directe
            smoothTransitionToQuiz(niveau, mode);
        }
    }
    
    // Ajout des écouteurs d'événements
    radioButtons.forEach(radio => {
        radio.addEventListener('change', handleOptionSelection);
    });
    
    // Écouteur principal du bouton - ULTRA-RÉACTIF
    startButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation(); // Arrêter TOUS les autres événements
        
        if (quizEnCours) {
            console.log('🚫 Clic ignoré - quiz en cours de démarrage');
            return;
        }
        
        console.log('🔘 Clic détecté - démarrage immédiat');
        
        // Démarrage INSTANTANÉ sans setTimeout
        startQuiz();
    });
    
    // Effets de survol optimisés
    labels.forEach(label => {
        label.addEventListener('mouseenter', () => {
            if (!label.classList.contains('selected') && !quizEnCours) {
                label.style.transform = 'translateY(-2px)';
            }
        });
        
        label.addEventListener('mouseleave', () => {
            if (!label.classList.contains('selected') && !quizEnCours) {
                label.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Gestion du clavier ULTRA-RÉACTIVE
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && niveauSelectionne && modeSelectionne && !quizEnCours) {
            e.preventDefault();
            e.stopImmediatePropagation();
            startQuiz();
        }
    });
    
    // PROTECTION OPTIMISÉE CONTRE LES RETOURS ARRIÈRE
    window.addEventListener('pageshow', (e) => {
        if (e.persisted) {
            console.log('🔄 Page restaurée depuis le cache');
            resetStartButton();
            radioButtons.forEach(radio => radio.disabled = false);
            checkFormCompletion();
        }
    });
    
    // Initialisation
    checkFormCompletion();
    animatePageEntrance();
    
    // Nettoyage au chargement
    if (typeof quizApp !== 'undefined') {
        quizApp.resetGameState();
    }
    
    console.log('✅ Page d\'accueil initialisée avec transitions ultra-fluides');
}

// Fonction pour animer l'entrée des éléments - OPTIMISÉE
function animatePageEntrance() {
    const title = document.querySelector('h1');
    const sections = document.querySelectorAll('.selection-section');
    const button = document.getElementById('startQuizBtn');
    
    // Animation du titre - PLUS RAPIDE
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            title.style.transition = 'all 0.5s ease';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Animation des sections - PLUS RAPIDE
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.transition = 'all 0.4s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 200 + index * 100);
    });
    
    // Animation du bouton - PLUS RAPIDE
    if (button) {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        setTimeout(() => {
            button.style.transition = 'all 0.4s ease';
            button.style.opacity = '0.5'; // Commence désactivé
            button.style.transform = 'translateY(0)';
        }, 500);
    }
}

// Ajouter les styles CSS optimisés
const style = document.createElement('style');
style.textContent = `
    .selected {
        background: linear-gradient(135deg, 
            rgba(0, 212, 255, 0.3) 0%, 
            rgba(124, 58, 237, 0.2) 100%) !important;
        border: 2px solid #00d4ff !important;
        box-shadow: 
            0 0 30px rgba(0, 212, 255, 0.6),
            inset 0 0 20px rgba(255, 255, 255, 0.15) !important;
        transform: scale(1.05) !important;
    }
    
    .selected span {
        color: #ffffff !important;
        font-weight: 700 !important;
        text-shadow: 0 0 15px rgba(0, 212, 255, 1) !important;
    }
    
    button:disabled {
        cursor: not-allowed !important;
        opacity: 0.5 !important;
    }
    
    /* Optimisations pour la performance */
    * {
        will-change: auto;
    }
    
    .level {
        will-change: transform, opacity;
    }
    
    /* Protection supplémentaire */
    input:disabled + span {
        opacity: 0.7;
    }
    
    /* Transitions ultra-rapides pour le démarrage */
    .starting-transition {
        transition: all 0.2s ease-out !important;
    }
`;
document.head.appendChild(style);