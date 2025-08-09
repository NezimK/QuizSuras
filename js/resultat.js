// js/resultat.js - Version avec transitions ultra-fluides

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page de résultats chargée');
    
    // Charger les résultats depuis localStorage
    const resultsData = localStorage.getItem('quizResults');
    
    if (!resultsData) {
        console.warn('Pas de résultats trouvés, redirection vers l\'accueil');
        window.location.href = 'index.html';
        return;
    }
    
    let results;
    try {
        results = JSON.parse(resultsData);
    } catch (e) {
        console.error('Erreur lors du parsing des résultats:', e);
        window.location.href = 'index.html';
        return;
    }
    
    // Éléments de l'interface
    const elements = {
        scoreDisplay: document.getElementById('score-display'),
        scorePercentage: document.getElementById('score-percentage'),
        performanceBadge: document.getElementById('performance-badge'),
        messageText: document.getElementById('message-text')
    };
    
    // Classe pour gérer la page de résultats
    class ResultsPageHandler {
        constructor(results) {
            this.results = results;
            this.isTransitioning = false;
            this.init();
        }
        
        init() {
            this.enhanceResultsWithPersonalizedMessages();
            this.displayResults();
            this.animateResults();
            this.setupEventListeners();
        }
        
        // Messages personnalisés selon le score
        enhanceResultsWithPersonalizedMessages() {
            const percentage = this.results.percentage;
            let message, emoji, motivation;
            
            if (percentage >= 95) {
                message = "Masha'Allah ! Performance exceptionnelle ! 🌟✨";
                emoji = "🏆👑";
                motivation = "Tu maîtrises parfaitement tes connaissances des sourates ! Continue à illuminer le monde avec ton savoir.";
            } else if (percentage >= 90) {
                message = "Subhan'Allah ! Quasi-parfait ! 🌟";
                emoji = "🥇🌟";
                motivation = "Tu es vraiment impressionnant(e) ! Quelques détails et tu atteindras la perfection absolue.";
            } else if (percentage >= 80) {
                message = "Masha'Allah ! Excellente performance ! 🌟";
                emoji = "🥈✨";
                motivation = "Bravo ! Tes efforts portent leurs fruits. Tu es sur la bonne voie pour devenir un(e) expert(e) !";
            } else if (percentage >= 70) {
                message = "Très bon travail ! Tu progresses admirablement ! 💪";
                emoji = "🥉📚";
                motivation = "Fantastique ! Tu montres une belle maîtrise. Continue ainsi, l'excellence t'attend !";
            } else if (percentage >= 60) {
                message = "Bon effort ! Tu es sur la bonne voie ! 📚";
                emoji = "🌱💡";
                motivation = "Bien joué ! Tes bases sont solides. Avec un peu plus de révision, tu vas briller !";
            } else if (percentage >= 50) {
                message = "C'est un bon début ! Continue d'apprendre ! 🌱";
                emoji = "🌿📖";
                motivation = "Courage ! Chaque question réussie est une victoire. Persévère, le savoir viendra !";
            } else if (percentage >= 30) {
                message = "Ne te décourage pas ! Chaque pas compte ! 💫";
                emoji = "🌟🔍";
                motivation = "Rappelle-toi : même les savants ont commencé par apprendre. Continue tes efforts !";
            } else if (percentage >= 20) {
                message = "C'est le début de ton parcours d'apprentissage ! 🌱";
                emoji = "🌱🎯";
                motivation = "Chaque expert était un débutant. Prends ton temps, révise et recommence !";
            } else {
                message = "L'apprentissage est un voyage, pas une destination ! 💫";
                emoji = "🚀📚";
                motivation = "Ne te décourage jamais ! Allah facilite le chemin de celui qui cherche le savoir.";
            }
            
            // Messages spéciaux selon le niveau
            const niveau = this.results.niveau || '1';
            let niveauComment = "";
            if (niveau === '3') {
                niveauComment = " Tu as relevé le défi du niveau expert ! ";
            } else if (niveau === '2') {
                niveauComment = " Belle performance au niveau intermédiaire ! ";
            } else {
                niveauComment = " Bon début avec le niveau débutant ! ";
            }
            
            // Mettre à jour le message
            this.results.message = message;
            this.results.emoji = emoji;
            this.results.motivation = motivation + niveauComment;
        }
        
        displayResults() {
            // Afficher le score
            elements.scoreDisplay.textContent = `${this.results.score} / ${this.results.total}`;
            
            // Afficher le pourcentage
            elements.scorePercentage.textContent = `${this.results.percentage}% de réussite`;
            
            // Afficher le badge de performance avec emoji
            elements.performanceBadge.textContent = `${this.results.emoji} ${this.getBadgeText()}`;
            elements.performanceBadge.className = `performance-badge ${this.results.badgeClass}`;
            
            // Afficher le message personnalisé
            elements.messageText.innerHTML = `
                <div style="font-weight: 600; margin-bottom: 1rem; font-size: 1.1rem;">
                    ${this.results.message}
                </div>
                <div style="font-style: italic; opacity: 0.9; font-size: 0.95rem;">
                    ${this.results.motivation}
                </div>
            `;
        }
        
        getBadgeText() {
            const badgeTexts = {
                'excellent': 'Excellent !',
                'tres-bon': 'Très bon !',
                'bon': 'Bon effort !',
                'debut': 'Bon début !',
                'continue': 'Continue !'
            };
            
            return badgeTexts[this.results.badgeClass] || 'Continue !';
        }
        
        animateResults() {
            // Animation d'entrée ULTRA-RAPIDE pour tous les éléments
            const animatedElements = [
                document.querySelector('.trophy'),
                document.querySelector('h1'),
                elements.scoreDisplay,
                elements.scorePercentage,
                elements.performanceBadge,
                elements.messageText,
                document.querySelector('.actions')
            ];
            
            animatedElements.forEach((element, index) => {
                if (element) {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(15px)';
                    
                    setTimeout(() => {
                        element.style.transition = 'all 0.4s ease';
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 80 + 100); // Délais réduits
                }
            });
            
            // Animation du score et pourcentage - PLUS RAPIDE
            this.animateScore();
            this.animatePercentage();
            
            // Effets spéciaux selon le score (SANS SON)
            this.addSpecialEffectsWithoutSound();
        }
        
        // MODIFIÉ : Effets spéciaux SANS son
        addSpecialEffectsWithoutSound() {
            const percentage = this.results.percentage;
            
            setTimeout(() => {
                if (percentage >= 90) {
                    this.createConfettiEffect();
                } else if (percentage >= 70) {
                    this.createSparkleEffect();
                }
                
                // SON SUPPRIMÉ - plus d'appel à playSuccessSound()
            }, 800);
        }
        
        createConfettiEffect() {
            // Confettis optimisés
            for (let i = 0; i < 30; i++) { // Réduit de 50 à 30
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.innerHTML = ['🎉', '🌟', '✨', '🎊'][Math.floor(Math.random() * 4)];
                    confetti.style.position = 'fixed';
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.top = '-20px';
                    confetti.style.fontSize = '1.2rem';
                    confetti.style.pointerEvents = 'none';
                    confetti.style.zIndex = '1000';
                    confetti.style.animation = 'confettiFall 2s linear forwards';
                    
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 2000);
                }, i * 50); // Délai réduit
            }
        }
        
        createSparkleEffect() {
            const badge = elements.performanceBadge;
            if (badge) {
                badge.style.animation += ', sparkle 1.5s ease-in-out infinite';
            }
        }
        
        // FONCTION SUPPRIMÉE - Son désactivé
        // playSuccessSound() {
        //     // Son complètement désactivé
        // }
        
        animateScore() {
            const targetScore = this.results.score;
            const targetTotal = this.results.total;
            let currentScore = 0;
            
            const duration = 1000; // Réduit de 1500ms à 1000ms
            const steps = 20;
            const stepDuration = duration / steps;
            const scoreIncrement = targetScore / steps;
            
            const counter = setInterval(() => {
                currentScore += scoreIncrement;
                
                if (currentScore >= targetScore) {
                    currentScore = targetScore;
                    clearInterval(counter);
                }
                
                elements.scoreDisplay.textContent = `${Math.floor(currentScore)} / ${targetTotal}`;
            }, stepDuration);
        }
        
        animatePercentage() {
            const targetPercentage = this.results.percentage;
            let currentPercentage = 0;
            
            const duration = 1200; // Réduit de 2000ms à 1200ms
            const steps = 30;
            const stepDuration = duration / steps;
            const percentageIncrement = targetPercentage / steps;
            
            setTimeout(() => {
                const counter = setInterval(() => {
                    currentPercentage += percentageIncrement;
                    
                    if (currentPercentage >= targetPercentage) {
                        currentPercentage = targetPercentage;
                        clearInterval(counter);
                    }
                    
                    elements.scorePercentage.textContent = `${Math.floor(currentPercentage)}% de réussite`;
                }, stepDuration);
            }, 300); // Délai réduit
        }
        
        setupEventListeners() {
            // Effet de clic sur le bouton "Nouveau Quiz" - ULTRA-RAPIDE
            const newQuizBtn = document.querySelector('.btn');
            if (newQuizBtn) {
                newQuizBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    if (this.isTransitioning) return;
                    this.isTransitioning = true;
                    
                    // Créer l'effet ripple
                    if (typeof quizApp !== 'undefined' && quizApp.createRippleEffect) {
                        quizApp.createRippleEffect(newQuizBtn, e);
                    }
                    
                    // Animation de sortie ULTRA-RAPIDE
                    this.fastExitTransition(() => {
                        // Nettoyer les données
                        localStorage.removeItem('quizResults');
                        if (typeof quizApp !== 'undefined') {
                            quizApp.resetGameState();
                        }
                        
                        // Redirection
                        window.location.href = 'index.html';
                    });
                });
            }
            
            // Gestion clavier OPTIMISÉE
            document.addEventListener('keydown', (e) => {
                if (this.isTransitioning) return;
                
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    newQuizBtn?.click();
                } else if (e.key === 'Escape') {
                    this.fastExitTransition(() => {
                        window.location.href = 'index.html';
                    });
                }
            });
        }
        
        // NOUVELLE MÉTHODE : Transition de sortie ultra-rapide
        fastExitTransition(callback) {
            const container = document.querySelector('.result-container');
            if (container) {
                container.style.transition = 'all 0.15s ease-out';
                container.style.transform = 'scale(0.98)';
                container.style.opacity = '0.7';
                
                // Effet de fondu sur le fond
                document.body.style.transition = 'all 0.15s ease-out';
                document.body.style.filter = 'brightness(0.5)';
                
                setTimeout(callback, 100); // Seulement 100ms
            } else {
                callback();
            }
        }
        
        // ANCIENNE MÉTHODE conservée pour compatibilité
        animateExit(callback) {
            this.fastExitTransition(callback);
        }
        
        // Partage des résultats optimisé
        shareResults() {
            const shareText = `J'ai obtenu ${this.results.score}/${this.results.total} (${this.results.percentage}%) au QuizSuras ! ${this.results.emoji}`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'QuizSuras - Mes résultats',
                    text: shareText,
                    url: window.location.origin
                }).catch(console.error);
            } else if (navigator.clipboard) {
                navigator.clipboard.writeText(shareText).then(() => {
                    this.showTemporaryMessage('✅ Résultats copiés !');
                }).catch(console.error);
            } else {
                // Fallback optimisé
                const textArea = document.createElement('textarea');
                textArea.value = shareText;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showTemporaryMessage('✅ Résultats copiés !');
            }
        }
        
        // NOUVELLE MÉTHODE : Message temporaire
        showTemporaryMessage(text) {
            const message = document.createElement('div');
            message.textContent = text;
            message.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, var(--success), #059669);
                color: white;
                padding: 0.8rem 1.5rem;
                border-radius: 12px;
                font-weight: 600;
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;
            
            document.body.appendChild(message);
            
            setTimeout(() => {
                message.style.animation = 'slideOut 0.3s ease forwards';
                setTimeout(() => message.remove(), 300);
            }, 2000);
        }
    }
    
    // Initialiser le gestionnaire de la page de résultats
    const resultsHandler = new ResultsPageHandler(results);
    
    // Ajouter les animations CSS optimisées
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes sparkle {
            0%, 100% { 
                box-shadow: 0 0 25px rgba(245, 158, 11, 0.6);
            }
            50% { 
                box-shadow: 0 0 40px rgba(245, 158, 11, 1);
            }
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        /* Optimisations de performance */
        .result-container * {
            will-change: auto;
        }
        
        .result-container {
            will-change: transform, opacity;
        }
        
        /* Bouton optimisé pour les transitions */
        .btn {
            will-change: transform;
        }
    `;
    document.head.appendChild(style);
    
    // Nettoyer les données après affichage - DÉLAI OPTIMISÉ
    setTimeout(() => {
        if (localStorage.getItem('quizResults')) {
            localStorage.removeItem('quizResults');
            console.log('🧹 Données de résultats nettoyées');
        }
    }, 30000); // Réduit de 60s à 30s
    
    // Ajouter un bouton de partage optimisé
    const actionsDiv = document.querySelector('.actions');
    if (actionsDiv && (navigator.share || navigator.clipboard)) {
        const shareBtn = document.createElement('button');
        shareBtn.className = 'btn';
        shareBtn.innerHTML = '📱 Partager';
        shareBtn.style.marginLeft = '1rem';
        shareBtn.style.background = 'linear-gradient(135deg, var(--secondary), var(--accent))';
        shareBtn.style.fontSize = '0.9rem';
        shareBtn.style.padding = '0.9rem 1.8rem';
        
        shareBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!resultsHandler.isTransitioning) {
                resultsHandler.shareResults();
            }
        });
        
        actionsDiv.appendChild(shareBtn);
    }
    
    // Préchargement de la page suivante pour des transitions ultra-rapides
    const linkPreload = document.createElement('link');
    linkPreload.rel = 'prefetch';
    linkPreload.href = 'index.html';
    document.head.appendChild(linkPreload);
    
    console.log('✅ Résultats affichés avec transitions optimisées:', results);
});