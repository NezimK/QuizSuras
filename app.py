from flask import Flask, render_template, request, redirect, url_for, session
import json

app = Flask(__name__)
app.secret_key = "votre_clé_secrète"  # Obligatoire pour utiliser session

@app.route('/')
def home():
    # Page d'accueil avec le choix du niveau
    return render_template('home.html')

@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    # On charge les sourates depuis le fichier JSON
    with open("sourates.json", "r", encoding="utf-8") as f:
        sourates = json.load(f)

    # Si c’est le début du quiz, on initialise les variables
    if "score" not in session:
        session['score'] = 0
        session['current_q'] = 0

    current_q = session["current_q"]  # Index de la question actuelle

    # Si toutes les questions ont été posées, on affiche le score final
    if current_q >= len(sourates):
        score = session["score"]
        session.clear()  # On réinitialise la session
        return f"<h2>Quiz terminé ! Score final : {score}/{len(sourates)}</h2><a href='/quiz'>Recommencer</a>"

    # On récupère la question actuelle
    question = sourates[current_q]

    # Si le formulaire est soumis (POST)
    if request.method == "POST":
        reponse = request.form.get("reponse")  # Réponse utilisateur
        if reponse == str(question["versets"]):  # Bonne réponse ?
            session['score'] += 1
        session["current_q"] += 1  # Passer à la question suivante
        return redirect("/quiz")  # Rafraîchit la page pour afficher la suivante

    # Affichage de la question avec le score en haut
    return render_template("quiz_n1.html", question=question, score=session["score"])

@app.route('/reset')
def reset():
    session.clear()
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
