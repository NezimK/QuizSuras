# On importe les modules nécessaires de Flask
from flask import Flask, render_template, request
import json  # Pour lire le fichier sourates.json

# On initialise l'application Flask
app = Flask(__name__)

# Route de la page d'accueil
@app.route("/")
def index():
    # On affiche le fichier templates/index.html
    return render_template("index.html")

# Route du quiz, accepte les méthodes GET (chargement de page) et POST (formulaire envoyé)
@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    # On ouvre le fichier JSON contenant les sourates
    with open("sourates.json", "r", encoding="utf-8") as f:
        sourates = json.load(f)  # On lit toutes les données

    question = sourates[0]  # On prend la première sourate pour commencer

    # Si le formulaire a été envoyé (méthode POST)
    if request.method == "POST":
        reponse = request.form["reponse"].strip()  # On récupère la réponse et on enlève les espaces
        # Vérifie si la réponse est correcte
        if reponse == str(question["versets"]):
            message = "Bonne réponse !"
        else:
            message = f"Mauvaise réponse. Il y a {question['versets']} versets."
        # On affiche un message simple avec un lien pour recommencer
        return f"<h2>{message}</h2><a href='/quiz'>Recommencer</a>"

    # Si on arrive sur la page pour la première fois (GET), on affiche la question
    return render_template("quiz.html", nom=question["nom"])

# Lancement du serveur Flask en mode debug (utile pour le développement)
if __name__ == "__main__":
    app.run(debug=True)
