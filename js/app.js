// js/app.js - Logique principale de l'application (VERSION AMÉLIORÉE)

class QuizSurasApp {
    constructor() {
        this.gameState = {
            niveau: null,
            mode: null,
            currentQuestion: 0,
            score: 0,
            sourates: [],
            totalQuestions: 0,
            randomSeed: null
        };
        
        this.init();
    }

    init() {
        // Charger l'état depuis localStorage si disponible
        this.loadGameState();
    }

    // Gestion de l'état du jeu
    saveGameState() {
        localStorage.setItem('quizSurasState', JSON.stringify(this.gameState));
    }

    loadGameState() {
        const saved = localStorage.getItem('quizSurasState');
        if (saved) {
            try {
                this.gameState = { ...this.gameState, ...JSON.parse(saved) };
            } catch (e) {
                console.warn('Erreur lors du chargement de l\'état:', e);
                this.resetGameState();
            }
        }
    }

    resetGameState() {
        this.gameState = {
            niveau: null,
            mode: null,
            currentQuestion: 0,
            score: 0,
            sourates: [],
            totalQuestions: 0,
            randomSeed: null
        };
        localStorage.removeItem('quizSurasState');
    }

    // Démarrage du quiz
    startQuiz(niveau, mode) {
        this.gameState.niveau = niveau;
        this.gameState.mode = mode;
        this.gameState.currentQuestion = 0;
        this.gameState.score = 0;
        this.gameState.randomSeed = mode === 'aleatoire' ? Date.now() : null;
        
        // Charger et trier les sourates
        this.gameState.sourates = this.getSouratesSorted(mode);
        this.gameState.totalQuestions = this.gameState.sourates.length;
        
        this.saveGameState();
        
        // Redirection vers la page de quiz
        window.location.href = 'quiz.html';
    }

    // Tri des sourates selon le mode
    getSouratesSorted(mode) {
        const sourates = [...SOURATES_DATA]; // Copie pour éviter la mutation
        
        switch (mode) {
            case 'canonique':
                return sourates.sort((a, b) => a.ordre_canonique - b.ordre_canonique);
            case 'chronologique':
                return sourates.sort((a, b) => a.ordre_chronologique - b.ordre_chronologique);
            case 'aleatoire':
                return this.shuffleArray(sourates, this.gameState.randomSeed);
            default:
                return sourates;
        }
    }

    // Mélange déterministe avec seed
    shuffleArray(array, seed) {
        const shuffled = [...array];
        let random = this.seededRandom(seed);
        
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        return shuffled;
    }

    // Générateur de nombres pseudo-aléatoires avec seed
    seededRandom(seed) {
        let x = Math.sin(seed) * 10000;
        return function() {
            x = Math.sin(++seed) * 10000;
            return x - Math.floor(x);
        };
    }

    // Obtenir la question actuelle
    getCurrentQuestion() {
        if (this.gameState.currentQuestion >= this.gameState.sourates.length) {
            return null; // Quiz terminé
        }
        return this.gameState.sourates[this.gameState.currentQuestion];
    }

    // Calculer le score d'une réponse
    calculateScore(responses) {
        const question = this.getCurrentQuestion();
        if (!question) return 0;

        let score = 0;
        const niveau = this.gameState.niveau;

        if (niveau === '1') {
            if (responses.versets && responses.versets.trim() === question.versets.toString()) {
                score = 1;
            }
        } else if (niveau === '2') {
            if (responses.versets && responses.versets.trim() === question.versets.toString()) {
                score += 1;
            }
            if (responses.traduction && responses.traduction.trim().toLowerCase() === question.traduction.toLowerCase()) {
                score += 1;
            }
        } else if (niveau === '3') {
            if (responses.versets && responses.versets.trim() === question.versets.toString()) {
                score += 1;
            }
            if (responses.traduction && responses.traduction.trim().toLowerCase() === question.traduction.toLowerCase()) {
                score += 1;
            }
            if (responses.nom && this.normalizeText(responses.nom.trim()) === this.normalizeText(question.nom)) {
                score += 1;
            }
        }

        return score;
    }

    // Normalisation du texte pour comparaison
    normalizeText(text) {
        return text.toLowerCase().replace(/[-'\s]/g, '');
    }

    // Valider une réponse et passer à la suivante
    validateAnswer(responses) {
        const scoreGained = this.calculateScore(responses);
        this.gameState.score += scoreGained;
        this.gameState.currentQuestion += 1;
        this.saveGameState();
        return scoreGained;
    }

    // Passer à la question suivante sans valider
    skipQuestion() {
        this.gameState.currentQuestion += 1;
        this.saveGameState();
    }

    // Vérifier si le quiz est terminé
    isQuizFinished() {
        return this.gameState.currentQuestion >= this.gameState.sourates.length;
    }

    // AMÉLIORATION : Calculer les résultats finaux avec messages personnalisés
    calculateResults() {
        const questionsRepondues = Math.max(this.gameState.currentQuestion, 1);
        const niveauPoints = { '1': 1, '2': 2, '3': 3 }[this.gameState.niveau] || 1;
        const total = questionsRepondues * niveauPoints;
        
        let score = this.gameState.score;
        if (this.gameState.currentQuestion === 0) {
            score = 0;
        }
        
        const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
        
        // NOUVEAUX MESSAGES AMÉLIORÉS selon le pourcentage ET le niveau
        let message, badgeClass, emoji, motivation;
        
        // Messages selon le score
        if (percentage >= 95) {
            message = "Masha'Allah ! Performance exceptionnelle ! 🌟✨";
            badgeClass = "excellent";
            emoji = "🏆👑";
            motivation = "Tu maîtrises parfaitement tes connaissances des sourates !";
        } else if (percentage >= 90) {
            message = "Subhan'Allah ! Quasi-parfait ! 🌟";
            badgeClass = "excellent";
            emoji = "🥇🌟";
            motivation = "Tu es vraiment impressionnant(e) ! Quelques détails et tu atteindras la perfection.";
        } else if (percentage >= 80) {
            message = "Masha'Allah ! Excellente performance ! 🌟";
            badgeClass = "excellent";
            emoji = "🥈✨";
            motivation = "Bravo ! Tes efforts portent leurs fruits. Tu es sur la bonne voie !";
        } else if (percentage >= 70) {
            message = "Très bon travail ! Tu progresses admirablement ! 💪";
            badgeClass = "tres-bon";
            emoji = "🥉📚";
            motivation = "Fantastique ! Tu montres une belle maîtrise. Continue ainsi !";
        } else if (percentage >= 60) {
            message = "Bon effort ! Tu es sur la bonne voie ! 📚";
            badgeClass = "tres-bon";
            emoji = "🌱💡";
            motivation = "Bien joué ! Tes bases sont solides. Avec plus de révision, tu vas briller !";
        } else if (percentage >= 50) {
            message = "C'est un bon début ! Continue d'apprendre ! 🌱";
            badgeClass = "bon";
            emoji = "🌿📖";
            motivation = "Courage ! Chaque question réussie est une victoire. Persévère !";
        } else if (percentage >= 40) {
            message = "Bon effort ! Tu progresses bien ! 📚";
            badgeClass = "bon";
            emoji = "🎯📝";
            motivation = "Tu es sur le bon chemin ! Continue tes efforts, ça va venir !";
        } else if (percentage >= 30) {
            message = "Ne te décourage pas ! Chaque pas compte ! 💫";
            badgeClass = "debut";
            emoji = "🌟🔍";
            motivation = "Rappelle-toi : même les savants ont commencé par apprendre !";
        } else if (percentage >= 20) {
            message = "C'est le début de ton parcours d'apprentissage ! 🌱";
            badgeClass = "debut";
            emoji = "🌱🎯";
            motivation = "Chaque expert était un débutant. Prends ton temps et révise !";
        } else {
            message = "L'apprentissage est un voyage, pas une destination ! 💫";
            badgeClass = "continue";
            emoji = "🚀📚";
            motivation = "Ne te décourage jamais ! Allah facilite le chemin de celui qui cherche le savoir.";
        }
        
        // Commentaires selon le niveau de difficulté
        let niveauComment = "";
        if (this.gameState.niveau === '3') {
            niveauComment = " Tu as relevé le défi du niveau expert - c'est remarquable !";
            if (percentage >= 70) {
                niveauComment += " Maîtriser les noms arabes ET les traductions, c'est du haut niveau !";
            }
        } else if (this.gameState.niveau === '2') {
            niveauComment = " Belle performance au niveau intermédiaire !";
            if (percentage >= 80) {
                niveauComment += " Prêt(e) pour le niveau 3 ?";
            }
        } else {
            niveauComment = " Bon début avec le niveau débutant !";
            if (percentage >= 80) {
                niveauComment += " Tu peux tenter le niveau 2 maintenant !";
            }
        }
        
        // Commentaires selon le mode de jeu
        let modeComment = "";
        if (this.gameState.mode === 'aleatoire') {
            modeComment = " Le mode aléatoire, c'est plus difficile - bravo !";
        } else if (this.gameState.mode === 'chronologique') {
            modeComment = " L'ordre chronologique aide à comprendre la révélation.";
        } else {
            modeComment = " L'ordre canonique, c'est un excellent point de départ.";
        }
        
        // Assembler le message final
        const finalMessage = motivation + niveauComment + modeComment;
        
        return {
            score,
            total,
            percentage,
            questionsRepondues: this.gameState.currentQuestion,
            message,
            badgeClass,
            emoji,
            finalMessage,
            niveau: this.gameState.niveau,
            mode: this.gameState.mode,
            // Statistiques supplémentaires
            stats: {
                totalSourates: this.gameState.totalQuestions,
                tauxReussite: percentage,
                niveauDifficulte: this.gameState.niveau,
                modeJeu: this.gameState.mode
            }
        };
    }

    // Terminer le quiz
    finishQuiz() {
        const results = this.calculateResults();
        localStorage.setItem('quizResults', JSON.stringify(results));
        this.resetGameState();
        window.location.href = 'resultat.html';
    }

    // Utilitaires pour l'interface
    updateProgressBar(elementId) {
        const progressBar = document.getElementById(elementId);
        if (progressBar) {
            const percentage = Math.min(
                (this.gameState.currentQuestion / this.gameState.totalQuestions) * 100, 
                100
            );
            progressBar.style.width = percentage + '%';
        }
    }

    updateScoreBadge(elementId) {
        const scoreBadge = document.getElementById(elementId);
        if (scoreBadge) {
            scoreBadge.textContent = `🏆 Score: ${this.gameState.score}`;
        }
    }

    // Utilitaires pour les animations
    createRippleEffect(element, event) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
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
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 600);
    }

    // NOUVELLE MÉTHODE : Obtenir des conseils personnalisés
    getPersonalizedAdvice() {
        const results = this.calculateResults();
        const advice = [];
        
        if (results.percentage < 50) {
            advice.push("💡 Conseil : Commence par réviser les sourates les plus courtes (Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas)");
            advice.push("📚 Utilise des flashcards pour mémoriser le nombre de versets");
        }
        
        if (this.gameState.niveau === '1' && results.percentage >= 70) {
            advice.push("🎯 Tu es prêt(e) à essayer le niveau 2 ! Ajoute les traductions françaises");
        }
        
        if (this.gameState.niveau === '2' && results.percentage >= 80) {
            advice.push("🌟 Excellent ! Tente le niveau 3 avec les noms arabes phonétiques");
        }
        
        if (this.gameState.mode === 'canonique' && results.percentage >= 80) {
            advice.push("🔀 Essaie le mode aléatoire pour un défi supplémentaire !");
        }
        
        return advice;
    }
}

// Instance globale de l'application
const quizApp = new QuizSurasApp();

// Ajouter les styles CSS pour les animations
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('quiz-animations-styles')) {
        const style = document.createElement('style');
        style.id = 'quiz-animations-styles';
        style.textContent = `
            @keyframes ripple { 
                to { 
                    transform: scale(4); 
                    opacity: 0; 
                } 
            }
            
            .fade-in {
                animation: fadeIn 0.5s ease-in;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .fade-out {
                animation: fadeOut 0.3s ease-out;
            }
            
            @keyframes fadeOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(-20px); }
            }
            
            /* Nouvelles animations pour les effets spéciaux */
            @keyframes confettiExplosion {
                0% { transform: scale(0) rotate(0deg); opacity: 1; }
                100% { transform: scale(1.5) rotate(360deg); opacity: 0; }
            }
            
            @keyframes successGlow {
                0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
                50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8); }
            }
        `;
        document.head.appendChild(style);
    }
});