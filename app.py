from flask import Flask, render_template, request, redirect, url_for, session
import json

app = Flask(__name__)
app.secret_key = "votre_clé_secrète"  # Obligatoire pour utiliser session

@app.route('/')
def home():
    # Page d'accueil avec le choix du niveau
    return render_template('home.html')

@app.route("/start", methods=["POST"])
def start_quiz():
    niveau = request.form.get("niveau")  # récupère le niveau choisi (1, 2 ou 3)
    
    if niveau not in ["1", "2", "3"]:
        return "Niveau invalide", 400

    session.clear()  # on vide l’ancienne session (précaution)
    session["niveau"] = niveau
    session["score"] = 0
    session["current_q"] = 0

    return redirect("/quiz")

@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    niveau = request.args.get("niveau") or session.get("niveau")

    # Si aucun niveau n’est sélectionné, rediriger vers la page d’accueil
    if not niveau:
        return redirect(url_for("home"))

    # Enregistre le niveau dans la session s’il est nouveau
    if "niveau" not in session:
        session["niveau"] = niveau
        session["score"] = 0
        session["current_q"] = 0

    # Charger les données
    with open("sourates.json", "r", encoding="utf-8") as f:
        sourates = json.load(f)

    current_q = session["current_q"]

    # Fin du quiz
    if current_q >= len(sourates):
        score = session["score"]
        session.clear()
        return f"<h2>Quiz terminé ! Score final : {score}/{len(sourates) * niveau_max(niveau)}</h2><a href='/'>Recommencer</a>"

    question = sourates[current_q]

    if request.method == "POST":
        # Traiter les réponses en fonction du niveau
        if niveau == "1":
            reponse = request.form.get("reponse", "").strip()
            if reponse == str(question["versets"]):
                session["score"] += 1
        elif niveau == "2":
            v = request.form.get("versets", "").strip()
            t = request.form.get("traduction", "").strip().lower()
            if v == str(question["versets"]):
                session["score"] += 1
            if t == question["traduction"].lower():
                session["score"] += 1
        elif niveau == "3":
            v = request.form.get("versets", "").strip()
            t = request.form.get("traduction", "").strip().lower()
            n = request.form.get("nom", "").strip().lower()
            if v == str(question["versets"]):
                session["score"] += 1
            if t == question["traduction"].lower():
                session["score"] += 1
            if n == question["nom"].lower():
                session["score"] += 1

        session["current_q"] += 1
        return redirect("/quiz")

    # Afficher le template correspondant au niveau
    return render_template(f"quiz_n{niveau}.html", question=question, score=session["score"])

def niveau_max(niveau):
    return {
        "1": 1,
        "2": 2,
        "3": 3
    }.get(niveau, 1)

@app.route('/reset')
def reset():
    session.clear()
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
