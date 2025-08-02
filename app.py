from flask import Flask, render_template, request, redirect, url_for, session
import json
import re
import random

app = Flask(__name__)
app.secret_key = "votre_clé_secrète_sécurisée_2024"  # À changer en production

def charger_et_trier_sourates(mode):
    """Charge et trie les sourates selon le mode"""
    with open("sourates.json", "r", encoding="utf-8") as f:
        sourates = json.load(f)

    # Tri selon le mode choisi
    if mode == "canonique":
        sourates.sort(key=lambda s: s["ordre_canonique"])
    elif mode == "chronologique":
        sourates.sort(key=lambda s: s["ordre_chronologique"])
    elif mode == "aleatoire":
        # Pour l'aléatoire, on utilise une seed basée sur la session pour que l'ordre reste constant
        if "random_seed" not in session:
            session["random_seed"] = random.randint(1, 10000)
        random.seed(session["random_seed"])
        random.shuffle(sourates)
        random.seed()  # Reset la seed

    return sourates

@app.route('/')
def home():
    # Page d'accueil avec le choix du niveau
    return render_template('home.html')

@app.route("/start", methods=["POST"])
def start_quiz():
    niveau = request.form.get("niveau")
    mode = request.form.get("mode")
    
    if (
        niveau not in ["1", "2", "3"]
        or mode not in ["canonique", "chronologique", "aleatoire"]
    ):
        return "Niveau ou mode invalide", 400

    # Nettoyer la session et ne stocker que les infos essentielles
    session.clear()
    session["niveau"] = niveau
    session["mode"] = mode
    session["score"] = 0
    session["current_q"] = 0
    
    return redirect("/quiz")

@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    niveau = session.get("niveau")
    mode = session.get("mode")

    # Si aucun niveau n'est sélectionné, rediriger vers la page d'accueil
    if not niveau:
        return redirect(url_for("home"))

    # Charger les sourates à chaque fois (pas de stockage en session)
    try:
        sourates = charger_et_trier_sourates(mode)
    except FileNotFoundError:
        return "Fichier sourates.json non trouvé", 500
    except json.JSONDecodeError as e:
        return f"Erreur JSON: {e}", 500
    
    current_q = session["current_q"]

    # Fin du quiz
    if current_q >= len(sourates):
        score = session["score"]
        # Calculer le total basé sur les questions réellement répondues
        questions_repondues = current_q
        total = questions_repondues * niveau_max(niveau)
        # Nettoyer la session sauf le score et total pour la page de résultat
        session.clear()
        return render_template("resultat.html", score=score, total=total, questions_repondues=questions_repondues)

    question = sourates[current_q]

    if request.method == "POST":
        action = request.form.get("action")

        if action == "valider":
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
                if nettoyer_nom(n) == nettoyer_nom(question["nom"]):
                    session["score"] += 1

            session["current_q"] += 1
            return redirect(url_for("quiz"))

        elif action == "je_sais_pas":
            session["current_q"] += 1
            return redirect("/quiz")

        elif action == "continuer":
            session["current_q"] += 1
            return redirect("/quiz")

        elif action == "recommencer":
            return redirect(url_for("reset"))

    # Si action == "voir_reponse", ne rien faire (rester sur la même question)
    total_questions = len(sourates)

    # Afficher le template correspondant au niveau
    return render_template(f"quiz_n{niveau}.html", 
                         question=question, 
                         score=session["score"], 
                         mode=mode, 
                         current_q=current_q,  # Garder current_q tel quel pour la barre
                         total_questions=total_questions,
                         question_number=current_q + 1)  # +1 seulement pour l'affichage

@app.route('/terminer')
def terminer():
    """Route pour terminer le quiz prématurément et afficher les résultats"""
    niveau = session.get("niveau")
    mode = session.get("mode")
    current_q = session.get("current_q", 0)
    
    # Si pas de quiz en cours, rediriger vers l'accueil
    if not niveau:
        return redirect(url_for("home"))
    
    # Calculer le score final avec les questions réellement répondues
    score = session.get("score", 0)
    # Le nombre de questions répondues est égal à current_q
    questions_repondues = current_q
    
    # Éviter la division par zéro : si aucune question répondue, considérer au moins 1
    if questions_repondues == 0:
        questions_repondues = 1
        total = niveau_max(niveau)
        score = 0  # Score forcé à 0 si aucune question répondue
    else:
        total = questions_repondues * niveau_max(niveau)
    
    # Nettoyer la session
    session.clear()
    
    return render_template("resultat.html", score=score, total=total, questions_repondues=current_q)

def nettoyer_nom(texte):
    return re.sub(r"[-'\s]", "", texte.lower())

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