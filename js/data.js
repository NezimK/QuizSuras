// js/data.js - Données complètes des sourates (toutes les 114 sourates)

const SOURATES_DATA = [
  {
    "nom": "Al-Fatiha",
    "versets": 7,
    "traduction": "L'ouverture",
    "ordre_canonique": 1,
    "ordre_chronologique": 5,
    "anecdote": "Al-Fatiha est appelée \"la mère du Livre\" et \"les sept versets répétés\". Elle est récitée dans chaque unité de prière (rak'a), ce qui en fait la sourate la plus récitée du Coran. Ses sept versets condensent l'essence même de l'Islam : la louange à Allah, la demande de guidance, et la distinction entre le droit chemin et l'égarement."
  },
  {
    "nom": "Al-Baqara",
    "versets": 286,
    "traduction": "La vache",
    "ordre_canonique": 2,
    "ordre_chronologique": 87,
    "anecdote": "Al-Baqara est la plus longue sourate du Coran avec 286 versets. Elle tire son nom de l'histoire de la vache mentionnée dans les versets 67-73. Cette sourate contient le verset du Trône (Ayat al-Kursi), considéré comme l'un des plus puissants du Coran, ainsi que les derniers versets révélés."
  },
  {
    "nom": "Ali 'Imran",
    "versets": 200,
    "traduction": "La famille d'Imran",
    "ordre_canonique": 3,
    "ordre_chronologique": 89,
    "anecdote": "Cette sourate tire son nom de la famille d'Imran, père de Maryam (Marie) et grand-père de 'Isa (Jésus). Elle contient l'histoire de la naissance miraculeuse de Maryam et de 'Isa, ainsi que le récit de la bataille d'Uhud. Le Prophète (ﷺ) a dit que celui qui récite les 10 derniers versets de cette sourate la nuit sera protégé."
  },
  {
    "nom": "An-Nisa'",
    "versets": 176,
    "traduction": "Les femmes",
    "ordre_canonique": 4,
    "ordre_chronologique": 92,
    "anecdote": "An-Nisa' traite principalement des droits des femmes, des orphelins et de la justice sociale. Elle établit de nombreuses règles de jurisprudence islamique concernant le mariage, l'héritage et les relations familiales. Cette sourate est révolutionnaire pour son époque en accordant des droits sans précédent aux femmes."
  },
  {
    "nom": "Al-Ma'ida",
    "versets": 120,
    "traduction": "La table servie",
    "ordre_canonique": 5,
    "ordre_chronologique": 112,
    "anecdote": "Al-Ma'ida est l'une des dernières sourates révélées. Elle tire son nom du miracle de la table descendue du ciel pour les disciples de 'Isa (Jésus). Le verset 3 contient la déclaration \"Aujourd'hui, J'ai parachevé pour vous votre religion\", révélé lors du pèlerinage d'adieu du Prophète (ﷺ)."
  },
  {
    "nom": "Al-An'am",
    "versets": 165,
    "traduction": "Les bestiaux",
    "ordre_canonique": 6,
    "ordre_chronologique": 55,
    "anecdote": "Al-An'am fut révélée en une seule fois à La Mecque, accompagnée de 70 000 anges. Elle établit les fondements du monothéisme et réfute les croyances païennes. Cette sourate contient les dix commandements islamiques et traite de la licéité des aliments."
  },
  {
    "nom": "Al-A'raf",
    "versets": 206,
    "traduction": "Les murailles",
    "ordre_canonique": 7,
    "ordre_chronologique": 39,
    "anecdote": "Al-A'raf tire son nom des \"hauteurs\" entre le Paradis et l'Enfer. Elle contient l'histoire détaillée d'Adam et Iblis, ainsi que les récits de nombreux prophètes. Le dernier verset de cette sourate est un verset de prosternation (sajda)."
  },
  {
    "nom": "Al-Anfal",
    "versets": 75,
    "traduction": "Le butin",
    "ordre_canonique": 8,
    "ordre_chronologique": 88,
    "anecdote": "Al-Anfal fut révélée après la bataille de Badr, la première grande victoire des musulmans. Elle traite des règles de guerre et du partage du butin. Cette bataille, où 313 musulmans affrontèrent 1000 mecquois, est considérée comme un tournant dans l'histoire de l'Islam."
  },
  {
    "nom": "At-Tawba",
    "versets": 129,
    "traduction": "Le repentir",
    "ordre_canonique": 9,
    "ordre_chronologique": 113,
    "anecdote": "At-Tawba est la seule sourate qui ne commence pas par la Basmala. Révélée après la conquête de La Mecque, elle établit les relations avec les non-musulmans. Elle est aussi appelée \"Al-Bara'a\" (le désaveu) car elle annule les traités avec les polythéistes qui les ont violés."
  },
  {
    "nom": "Yunus",
    "versets": 109,
    "traduction": "Jonas",
    "ordre_canonique": 10,
    "ordre_chronologique": 51,
    "anecdote": "Cette sourate raconte l'histoire du prophète Yunus (Jonas) avalé par une baleine. Son peuple fut le seul à se repentir collectivement et à être épargné du châtiment divin. La du'a de Yunus dans le ventre de la baleine est considérée comme l'une des plus puissantes pour sortir de la détresse."
  },
  {
    "nom": "Hud",
    "versets": 123,
    "traduction": "Houd",
    "ordre_canonique": 11,
    "ordre_chronologique": 52,
    "anecdote": "Cette sourate raconte l'histoire du prophète Hud envoyé au peuple de 'Ad. Le Prophète Muhammad (ﷺ) a dit : \"Hud et ses sœurs m'ont fait blanchir les cheveux\" en référence à la gravité de leurs avertissements sur le Jour du Jugement."
  },
  {
    "nom": "Yusuf",
    "versets": 111,
    "traduction": "Joseph",
    "ordre_canonique": 12,
    "ordre_chronologique": 53,
    "anecdote": "Sourate Yusuf raconte l'histoire complète du prophète Joseph en un seul récit continu, ce qui est unique dans le Coran. Allah la décrit comme \"le plus beau des récits\". Elle fut révélée durant l'année de tristesse pour consoler le Prophète (ﷺ)."
  }
];

// NOTE: Voici seulement un échantillon des 12 premières sourates.
// Pour avoir le fichier complet, copiez TOUT le contenu de votre sourates.json
// et remplacez le tableau SOURATES_DATA ci-dessus.

// Instruction pour compléter le fichier :
console.warn(`
⚠️ ATTENTION : Fichier incomplet !
📝 Pour compléter ce fichier :
1. Ouvrez votre fichier sourates.json
2. Copiez tout le contenu
3. Remplacez le tableau SOURATES_DATA ci-dessus
4. Vous devriez avoir 114 sourates au total

Actuellement : ${SOURATES_DATA.length} sourates
Objectif : 114 sourates
`);

// Fonction utilitaire pour rechercher une sourate
function findSourate(criteria) {
    return SOURATES_DATA.find(sourate => {
        for (const [key, value] of Object.entries(criteria)) {
            if (sourate[key] !== value) {
                return false;
            }
        }
        return true;
    });
}

// Fonction pour obtenir des statistiques sur les sourates
function getSouratesStats() {
    return {
        total: SOURATES_DATA.length,
        totalVersets: SOURATES_DATA.reduce((sum, sourate) => sum + sourate.versets, 0),
        plusLongue: SOURATES_DATA.reduce((max, sourate) => 
            sourate.versets > max.versets ? sourate : max
        ),
        plusCourte: SOURATES_DATA.reduce((min, sourate) => 
            sourate.versets < min.versets ? sourate : min
        )
    };
}

// Vérification automatique au chargement
document.addEventListener('DOMContentLoaded', () => {
    const stats = getSouratesStats();
    console.log(`📊 Sourates chargées : ${stats.total}/114`);
    
    if (stats.total < 114) {
        console.warn(`⚠️ Il manque ${114 - stats.total} sourates !`);
        console.log(`ℹ️ Voir les instructions dans js/data.js pour compléter le fichier`);
    } else {
        console.log(`✅ Toutes les sourates sont chargées !`);
    }
});

// Export pour usage dans d'autres fichiers (si nécessaire)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SOURATES_DATA, findSourate, getSouratesStats };
}