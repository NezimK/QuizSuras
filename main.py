import json

# Ouvre le fichier json en mode lecture "r" "encoding utf permet de gérer les caractères spéciaux"
def niveau_1():
    with open("sourates.json", "r", encoding="utf-8") as f:  # variable 
        sourates = json.load(f)
        print(f"{len(sourates)} sourates chargées depuis JSON.")
    
    score = 0  # Compteur de bonne réponse

    # On parcourt chaque question grâce à une boucle
    for question in sourates:
        print(f"Combien de versets contient la sourate {question['nom']} ?")
        reponse = input("Ta réponse : ").strip()  # supprime les espaces

        # str permet de convertir la réponse en string
        if reponse == str(question["versets"]):
            print("Bonne réponse !\n")
            score += 1
        else:
            print(f"Mauvaise réponse; Il y a {question['versets']} versets.\n")

    # \n = retour a la ligne
    print(f"Score final : {score}/{len(sourates)}")


def niveau_2():
    with open("sourates.json", "r", encoding="utf-8") as f:  # variable 
        sourates = json.load(f)
        print(f"{len(sourates)} sourates chargées depuis JSON.")
        
    score = 0

    for question in sourates:
        # Question 1 : Nombre de versets
        print(f"\nCombien de versets contient la sourate {question['nom']} ?")
        reponse_versets = input("Ta réponse : ").strip()

        if reponse_versets == str(question["versets"]):
            print("Bonne réponse")
            score += 1
        else:
            print(f"Mauvaise réponse. Il y a {question['versets']} versets.")

        # Question 2 : Traduction FR
        print(f"Quelle est la traduction française de la sourate {question['nom']} ?")
        reponse_trad = input("Ta réponse : ").strip().lower()
        bonne_reponse = question["traduction"].lower()

        if reponse_trad == bonne_reponse:
            print("Bonne réponse !")
            score += 1
        else:
            print(f"Mauvaise réponse. La bonne traduction est {question['traduction']}.")

    # \n = retour à la ligne
    print(f"\nScore final : {score}/{len(sourates) * 2}")


def niveau_3():
    import json
    with open("sourates.json", "r", encoding="utf-8") as f:
        sourates = json.load(f)
        print(f"{len(sourates)} sourates chargées depuis JSON.")

    score = 0

    for question in sourates:
        
        # Question 1 : nom arabe phonétique
        print(f"Quel est le nom arabe phonétique de la sourate numero {question['numero']} ?")
        reponse_nom = input("Ta réponse : ").strip().lower()
        bonne_reponse_nom = question["nom"].lower()
        if reponse_nom == bonne_reponse_nom:
            print("Bonne réponse !")
            score += 1
        else:
            print(f"Mauvaise réponse. Le nom correct est {question['nom']}.")

        # Question 2 : traduction FR
        print(f"Quelle est la traduction française de la sourate {question['nom']} ?")
        reponse_trad = input("Ta réponse : ").strip().lower()
        bonne_reponse = question["traduction"].lower()
        if reponse_trad == bonne_reponse:
            print("Bonne réponse !")
            score += 1
        else:
            print(f"Mauvaise réponse. La bonne traduction est {question['traduction']}.")
            
             # Question  : nombre de versets
        print(f"\nCombien de versets contient la sourate {question['nom']} ?")
        reponse_versets = input("Ta réponse : ").strip()
        if reponse_versets == str(question["versets"]):
            print("Bonne réponse !")
            score += 1
        else:
            print(f"Mauvaise réponse. Il y a {question['versets']} versets.")

        

    print(f"\nScore final : {score}/{len(sourates) * 3}")

def menu():
    print("Choisis un niveau :")
    print("1 - Niveau 1 : Nombre de versets")
    print("2 - Niveau 2 : Nombre de versets + traduction FR")
    print("3 - Niveau 3 : Nom arabe phonétique + traduction FR + nombre de versets")

    choix = input("Tape 1, 2 ou 3 : ").strip()

    if choix == "1":
        niveau_1()
    elif choix == "2":
        niveau_2()
    elif choix == "3":
        niveau_3()
    else:
        print("Choix invalide, réessaie.")
        menu()  # relance le menu tant que la saisie est mauvaise

if __name__ == "__main__":
    menu()
