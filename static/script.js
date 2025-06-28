document.addEventListener('DOMContentLoaded', () => {
    const progressFill = document.querySelector('.progress-fill');
    const input = document.querySelector('.futuristic-input');
    const answerSection = document.querySelector('.answer-section');
    const btnVoir = document.querySelector('button[value="voir_reponse"]');
    let clickedAction = null;

    input.focus();

    setTimeout(() => {
        progressFill.style.width = '45%';
    }, 500);

    document.querySelectorAll('.futuristic-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            clickedAction = e.target.value;
            createClickEffect(e);
        });
    });

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        if (clickedAction === 'voir_reponse') {
            answerSection.style.display = 'block';
        } else {
            // ici tu peux gérer valider / passer
            console.log('Action choisie :', clickedAction, 'Réponse saisie:', input.value);
        }
    });

    function createClickEffect(e) {
        const ripple = document.createElement('div');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        ripple.style.cssText = `
            position:absolute;border-radius:50%;background:rgba(255,255,255,0.6);
            transform:scale(0);animation:ripple 0.6s linear;
            left:${x}px;top:${y}px;width:${size}px;height:${size}px;
        `;
        e.target.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }
});

// création du style CSS pour l'animation ripple
const style = document.createElement('style');
style.textContent = `
@keyframes ripple { to { transform:scale(4); opacity:0; } }
`;
document.head.appendChild(style);
