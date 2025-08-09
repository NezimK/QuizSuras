// js/quiz.js - Gestion fluide sans mouvement latéral

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page de quiz chargée');
    
    // Vérifier si on a bien un quiz en cours
    if (!quizApp.gameState.niveau || !quizApp.gameState.mode) {
        console.warn('Pas de quiz en cours, redirection vers l\'accueil');
        window.location.href = 'index.html';
        return;
    }
    
    // Éléments de l'interface
    const elements = {
        questionSection: document.getElementById('question-section'),
        answerSection: document.getElementById('answer-section'),
        quizTitle: document.getElementById('quiz-title'),
        progressBar: document.getElementById('progress-fill'),
        scoreBadge: document.getElementById('score-badge'),
        answerContent: document.getElementById('answer-content'),
        anecdoteText: document.getElementById('anecdote-text'),
        
        // Boutons
        validerBtn: document.getElementById('valider-btn'),
        revelerBtn: document.getElementById('reveler-btn'),
        continuerBtn: document.getElementById('continuer-btn'),
        recommencerBtn: document.getElementById('recommencer-btn'),
        terminerBtn: document.getElementById('terminer-btn'),
        
        // Inputs par niveau
        niveauInputs: {
            '1': document.getElementById('niveau-1-inputs'),
            '2': document.getElementById('niveau-2-inputs'),
            '3': document.getElementById('niveau-3-inputs')
        }
    };
    
    // Classe pour gérer le quiz
    class QuizPageHandler {
        constructor() {
            this.currentQuestion = null;
            this.isTransitioning = false;
            this.init();
        }
        
        init() {
            this.setupEventListeners();
            this.loadQuestion();
            this.updateUI();
        }
        
        setupEventListeners() {
            // Boutons principaux
            elements.validerBtn.addEventListener('click', () => this.handleValider());
            elements.revelerBtn.addEventListener('click', () => this.handleReveler());
            elements.continuerBtn.addEventListener('click', () => this.handleContinuer());
            elements.recommencerBtn.addEventListener('click', () => this.handleRecommencer());
            elements.terminerBtn.addEventListener('click', () => this.handleTerminer());
            
            // Gestion clavier
            document.addEventListener('keydown', (e) => this.handleKeyboard(e));
            
            // Focus sur le premier input
            this.focusFirstInput();
            
            // Validation en temps réel
            this.setupInputValidation();
        }
        
        loadQuestion() {
            this.currentQuestion = quizApp.getCurrentQuestion();
            
            if (!this.currentQuestion) {
                // Quiz terminé - transition fluide
                this.finishQuizSmoothly();
                return;
            }
            
            // Afficher les inputs du bon niveau
            this.showNiveauInputs();
            
            // Mettre à jour le titre avec animation
            this.updateQuestionTitle();
            
            // Réinitialiser la vue
            this.resetQuestionView();
        }
        
        updateQuestionTitle() {
            const questionNumber = quizApp.gameState.currentQuestion + 1;
            const newTitle = `🌟 N°${questionNumber} - ${this.currentQuestion.nom} (${this.currentQuestion.traduction})`;
            
            // Animation fluide du titre SANS mouvement latéral
            elements.quizTitle.style.transition = 'opacity 0.3s ease';
            elements.quizTitle.style.opacity = '0.7';
            
            setTimeout(() => {
                elements.quizTitle.textContent = newTitle;
                elements.quizTitle.style.opacity = '1';
            }, 150);
        }
        
        resetQuestionView() {
            // Vider tous les inputs
            document.querySelectorAll('.futuristic-input').forEach(input => {
                input.value = '';
                input.style.borderColor = 'rgba(255,255,255,0.1)';
                input.style.boxShadow = 'none';
            });
            
            // Remettre la section question visible
            elements.questionSection.style.display = 'block';
            elements.answerSection.style.display = 'none';
            
            // Focus sur le premier input
            this.focusFirstInput();
        }
        
        showNiveauInputs() {
            // Cacher tous les inputs
            Object.values(elements.niveauInputs).forEach(input => {
                if (input) input.style.display = 'none';
            });
            
            // Afficher les inputs du niveau actuel
            const currentInputs = elements.niveauInputs[quizApp.gameState.niveau];
            if (currentInputs) {
                currentInputs.style.display = 'block';
            }
        }
        
        focusFirstInput() {
            setTimeout(() => {
                const niveau = quizApp.gameState.niveau;
                const firstInput = document.querySelector(`#niveau-${niveau}-inputs input`);
                if (firstInput) {
                    firstInput.focus();
                    firstInput.select();
                }
            }, 100);
        }
        
        setupInputValidation() {
            const inputs = document.querySelectorAll('.futuristic-input');
            inputs.forEach(input => {
                input.addEventListener('input', (e) => this.validateInput(e.target));
                input.addEventListener('focus', (e) => this.enhanceInputFocus(e.target));
                input.addEventListener('blur', (e) => this.resetInputFocus(e.target));
                
                // Navigation entre inputs avec Enter
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this.navigateToNextInput(input);
                    }
                });
            });
        }
        
        validateInput(input) {
            const value = input.value.trim();
            const isNumberInput = input.id.includes('versets') || input.id.includes('reponse');
            let isValid = false;
            
            if (isNumberInput) {
                isValid = value !== '' && !isNaN(value) && parseInt(value) > 0;
            } else {
                isValid = value !== '' && value.length >= 2;
            }
            
            // Appliquer les styles de validation
            if (value === '') {
                input.style.borderColor = 'rgba(255,255,255,0.1)';
                input.style.boxShadow = 'none';
            } else if (isValid) {
                input.style.borderColor = 'var(--success)';
                input.style.boxShadow = '0 0 15px rgba(16,185,129,0.3)';
            } else {
                const color = isNumberInput ? 'var(--danger)' : 'var(--warning)';
                const shadowColor = isNumberInput ? 'rgba(239,68,68,0.3)' : 'rgba(245,158,11,0.3)';
                input.style.borderColor = color;
                input.style.boxShadow = `0 0 15px ${shadowColor}`;
            }
        }
        
        enhanceInputFocus(input) {
            const inputGroup = input.closest('.input-group');
            const label = inputGroup?.querySelector('.input-label');
            
            if (inputGroup) {
                inputGroup.style.transform = 'translateY(-2px)';
                inputGroup.style.transition = 'transform 0.3s ease';
            }
            
            if (label) {
                label.style.color = 'var(--primary)';
                label.style.transition = 'color 0.3s ease';
            }
        }
        
        resetInputFocus(input) {
            const inputGroup = input.closest('.input-group');
            const label = inputGroup?.querySelector('.input-label');
            
            if (inputGroup) {
                inputGroup.style.transform = 'translateY(0)';
            }
            
            if (label) {
                label.style.color = 'var(--text-secondary)';
            }
        }
        
        navigateToNextInput(currentInput) {
            const niveau = quizApp.gameState.niveau;
            const inputs = Array.from(document.querySelectorAll(`#niveau-${niveau}-inputs input`));
            const currentIndex = inputs.indexOf(currentInput);
            
            if (currentIndex < inputs.length - 1) {
                inputs[currentIndex + 1].focus();
                inputs[currentIndex + 1].select();
            } else {
                elements.validerBtn.click();
            }
        }
        
        getResponses() {
            const niveau = quizApp.gameState.niveau;
            const responses = {};
            
            if (niveau === '1') {
                const input = document.getElementById('reponse-n1');
                responses.versets = input?.value || '';
            } else if (niveau === '2') {
                responses.versets = document.getElementById('versets-n2')?.value || '';
                responses.traduction = document.getElementById('traduction-n2')?.value || '';
            } else if (niveau === '3') {
                responses.versets = document.getElementById('versets-n3')?.value || '';
                responses.nom = document.getElementById('nom-n3')?.value || '';
                responses.traduction = document.getElementById('traduction-n3')?.value || '';
            }
            
            return responses;
        }
        
        handleValider() {
            if (this.isTransitioning) return;
            
            const responses = this.getResponses();
            console.log('Validation des réponses:', responses);
            
            // Calculer et ajouter le score
            const scoreGained = quizApp.validateAnswer(responses);
            console.log('Score gagné:', scoreGained);
            
            // Passer à la question suivante SANS MOUVEMENT LATÉRAL
            this.nextQuestionSmooth();
        }
        
        handleReveler() {
            if (this.isTransitioning) return;
            console.log('Révélation de la réponse');
            this.showAnswer();
        }
        
        handleContinuer() {
            if (this.isTransitioning) return;
            console.log('Continuer vers la question suivante');
            quizApp.skipQuestion();
            this.nextQuestionSmooth();
        }
        
        handleRecommencer() {
            if (this.isTransitioning) return;
            console.log('Recommencer le quiz - redirection immédiate');
            this.transitionToPage('index.html', () => {
                quizApp.resetGameState();
            });
        }
        
        handleTerminer() {
            if (this.isTransitioning) return;
            console.log('Terminer le quiz - transition fluide');
            this.finishQuizSmoothly();
        }
        
        // MODIFIÉ : Transition sans mouvement latéral
        nextQuestionSmooth() {
            this.isTransitioning = true;
            
            // Mettre à jour l'UI d'abord
            this.updateUI();
            
            // Vérifier si le quiz est terminé
            if (quizApp.isQuizFinished()) {
                this.finishQuizSmoothly();
                return;
            }
            
            // Animation de transition SANS mouvement latéral - seulement fondu
            const container = document.querySelector('.quiz-container');
            container.style.transition = 'opacity 0.2s ease';
            container.style.opacity = '0.8';
            
            setTimeout(() => {
                // Charger la nouvelle question
                this.loadQuestion();
                
                // Animation de retour - seulement opacité
                container.style.opacity = '1';
                
                this.isTransitioning = false;
            }, 100);
        }
        
        // MODIFIÉ : Terminer le quiz avec masquage du bouton terminer
        finishQuizSmoothly() {
            this.isTransitioning = true;
            
            // MASQUER LE BOUTON TERMINER IMMÉDIATEMENT
            if (elements.terminerBtn) {
                elements.terminerBtn.style.display = 'none';
            }
            
            const results = quizApp.calculateResults();
            localStorage.setItem('quizResults', JSON.stringify(results));
            
            // Transition fluide vers la page de résultats
            this.transitionToPage('resultat.html', () => {
                quizApp.resetGameState();
            });
        }
        
        // MODIFIÉ : Transition fluide avec masquage des éléments problématiques
        transitionToPage(url, beforeRedirect = null) {
            const container = document.querySelector('.quiz-container');
            
            // MASQUER TOUS LES ÉLÉMENTS PROBLÉMATIQUES
            if (elements.terminerBtn) {
                elements.terminerBtn.style.display = 'none';
            }
            
            // Animation de sortie simple
            container.style.transition = 'all 0.2s ease';
            container.style.transform = 'scale(0.98)';
            container.style.opacity = '0';
            
            setTimeout(() => {
                if (beforeRedirect) beforeRedirect();
                window.location.href = url;
            }, 150);
        }
        
        showAnswer() {
            // Cacher la section question
            elements.questionSection.style.display = 'none';
            
            // Générer le contenu des réponses
            this.generateAnswerContent();
            
            // Afficher la section réponse avec animation
            elements.answerSection.style.display = 'block';
            elements.answerSection.style.opacity = '0';
            elements.answerSection.style.transform = 'translateY(20px)';
            elements.answerSection.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                elements.answerSection.style.opacity = '1';
                elements.answerSection.style.transform = 'translateY(0)';
            }, 50);
        }
        
        generateAnswerContent() {
            if (!this.currentQuestion) return;
            
            const niveau = quizApp.gameState.niveau;
            let content = '';
            
            // Niveau 1
            if (niveau === '1') {
                content = `
                    <div class="answer-item">
                        <div class="answer-label">💫 Nombre de versets</div>
                        <div class="answer-value">${this.currentQuestion.versets}</div>
                    </div>
                `;
            }
            // Niveau 2
            else if (niveau === '2') {
                content = `
                    <div class="answer-item">
                        <div class="answer-label">📜 Nombre de versets</div>
                        <div class="answer-value">${this.currentQuestion.versets}</div>
                    </div>
                    <div class="answer-item">
                        <div class="answer-label">🌍 Traduction française</div>
                        <div class="answer-value">${this.currentQuestion.traduction}</div>
                    </div>
                `;
            }
            // Niveau 3
            else if (niveau === '3') {
                content = `
                    <div class="answer-item">
                        <div class="answer-label">💫 Nombre de versets</div>
                        <div class="answer-value">${this.currentQuestion.versets}</div>
                    </div>
                    <div class="answer-item">
                        <div class="answer-label">📜 Nom arabe</div>
                        <div class="answer-value">${this.currentQuestion.nom}</div>
                    </div>
                    <div class="answer-item">
                        <div class="answer-label">🌍 Traduction française</div>
                        <div class="answer-value">${this.currentQuestion.traduction}</div>
                    </div>
                `;
            }
            
            elements.answerContent.innerHTML = content;
            elements.anecdoteText.textContent = this.currentQuestion.anecdote || 'Aucune anecdote disponible.';
        }
        
        updateUI() {
            // Mettre à jour la barre de progression
            quizApp.updateProgressBar('progress-fill');
            
            // Mettre à jour le score
            quizApp.updateScoreBadge('score-badge');
        }
        
        handleKeyboard(e) {
            if (this.isTransitioning) return;
            
            if (e.ctrlKey && e.key === 'Enter') {
                e.preventDefault();
                elements.validerBtn.click();
            }
            
            if (e.key === 'Escape') {
                elements.revelerBtn.click();
            }
            
            if (e.key === 'r' || e.key === 'R') {
                elements.recommencerBtn.click();
            }
            
            if (e.key === 'c' || e.key === 'C') {
                if (elements.continuerBtn.style.display !== 'none') {
                    elements.continuerBtn.click();
                }
            }
        }
    }
    
    // Initialiser le gestionnaire de la page de quiz
    const quizHandler = new QuizPageHandler();
    
    // Ajouter les effets de clic aux boutons
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (typeof quizApp !== 'undefined' && quizApp.createRippleEffect) {
                quizApp.createRippleEffect(btn, e);
            }
        });
    });
});