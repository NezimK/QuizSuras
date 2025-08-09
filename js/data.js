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
  },
  {
    "nom": "Ar-Ra'd",
    "versets": 43,
    "traduction": "Le tonnerre",
    "ordre_canonique": 13,
    "ordre_chronologique": 96,
    "anecdote": "Ar-Ra'd tire son nom du tonnerre qui glorifie Allah par Sa louange. Cette sourate établit un lien entre les phénomènes naturels et la puissance divine. Elle contient le verset \"Allah ne modifie point l'état d'un peuple tant qu'ils ne changent pas ce qui est en eux-mêmes\"."
  },
  {
    "nom": "Ibrahim",
    "versets": 52,
    "traduction": "Abraham",
    "ordre_canonique": 14,
    "ordre_chronologique": 72,
    "anecdote": "Cette sourate relate la prière d'Ibrahim pour La Mecque et sa descendance. Elle contient sa célèbre invocation pour ses parents et les croyants. Le verset comparant la bonne parole à un arbre aux racines fermes est particulièrement mémorable."
  },
  {
    "nom": "Al-Hijr",
    "versets": 99,
    "traduction": "La vallée des pierres",
    "ordre_canonique": 15,
    "ordre_chronologique": 54,
    "anecdote": "Al-Hijr fait référence à la cité de pierre du peuple de Thamud. Cette sourate contient l'histoire d'Iblis refusant de se prosterner devant Adam. Allah y garantit la préservation du Coran : \"C'est Nous qui avons fait descendre le Rappel, et c'est Nous qui en sommes gardien\"."
  },
  {
    "nom": "An-Nahl",
    "versets": 128,
    "traduction": "Les abeilles",
    "ordre_canonique": 16,
    "ordre_chronologique": 70,
    "anecdote": "An-Nahl mentionne l'abeille comme un signe de la création divine. Allah inspire à l'abeille son comportement complexe. Le miel est décrit comme une guérison pour les hommes. Cette sourate est aussi appelée \"la sourate des bienfaits\" pour son énumération des faveurs divines."
  },
  {
    "nom": "Al-Isra'",
    "versets": 111,
    "traduction": "Le voyage nocturne",
    "ordre_canonique": 17,
    "ordre_chronologique": 50,
    "anecdote": "Al-Isra' commémore le voyage nocturne miraculeux du Prophète (ﷺ) de La Mecque à Jérusalem, puis son ascension aux cieux. C'est durant ce voyage que furent prescrites les cinq prières quotidiennes, réduites de cinquante grâce à l'intercession de Musa (Moïse)."
  },
  {
    "nom": "Al-Kahf",
    "versets": 110,
    "traduction": "La caverne",
    "ordre_canonique": 18,
    "ordre_chronologique": 69,
    "anecdote": "Al-Kahf contient quatre histoires majeures dont celle des jeunes gens de la caverne qui dormirent 309 ans. Le Prophète (ﷺ) a recommandé sa récitation le vendredi pour être illuminé d'une lumière entre deux vendredis. Les dix premiers versets protègent contre l'Antéchrist (Dajjal)."
  },
  {
    "nom": "Maryam",
    "versets": 98,
    "traduction": "Marie",
    "ordre_canonique": 19,
    "ordre_chronologique": 44,
    "anecdote": "Sourate Maryam raconte la naissance miraculeuse de Yahya (Jean-Baptiste) et 'Isa (Jésus). C'est la sourate que Ja'far ibn Abi Talib récita devant le Négus d'Abyssinie, le faisant pleurer ainsi que ses évêques, ce qui assura la protection des musulmans réfugiés."
  },
  {
    "nom": "Ta-Ha",
    "versets": 135,
    "traduction": "Ta-Ha",
    "ordre_canonique": 20,
    "ordre_chronologique": 45,
    "anecdote": "Ta-Ha commence par ces lettres mystérieuses. Cette sourate raconte en détail l'histoire de Musa (Moïse). 'Umar ibn al-Khattab embrassa l'Islam après avoir entendu sa sœur réciter cette sourate. Allah y affirme : \"Nous n'avons pas fait descendre le Coran pour que tu sois malheureux\"."
  },
  {
    "nom": "Al-Anbiya'",
    "versets": 112,
    "traduction": "Les prophètes",
    "ordre_canonique": 21,
    "ordre_chronologique": 73,
    "anecdote": "Al-Anbiya' mentionne seize prophètes et leurs épreuves. Elle contient la description de l'univers avant le Big Bang : \"Les cieux et la terre étaient soudés, puis Nous les avons séparés\". Cette sourate affirme l'universalité du message de Muhammad (ﷺ) : \"Nous ne t'avons envoyé qu'en miséricorde pour l'univers\"."
  },
  {
    "nom": "Al-Hajj",
    "versets": 78,
    "traduction": "Le pèlerinage",
    "ordre_canonique": 22,
    "ordre_chronologique": 103,
    "anecdote": "Al-Hajj est unique car elle contient deux versets de prosternation. Elle détaille les rites du pèlerinage et fut révélée partie à La Mecque, partie à Médine. Cette sourate contient la permission de combattre pour se défendre, première autorisation de ce type dans le Coran."
  },
  {
    "nom": "Al-Mu'minun",
    "versets": 118,
    "traduction": "Les croyants",
    "ordre_canonique": 23,
    "ordre_chronologique": 74,
    "anecdote": "Al-Mu'minun commence par décrire les qualités des croyants qui réussiront. Elle détaille les étapes de la création humaine dans l'utérus avec une précision scientifique remarquable. Le Prophète (ﷺ) pleurait souvent en récitant ses derniers versets sur le Jour du Jugement."
  },
  {
    "nom": "An-Nur",
    "versets": 64,
    "traduction": "La lumière",
    "ordre_canonique": 24,
    "ordre_chronologique": 102,
    "anecdote": "An-Nur contient le célèbre \"verset de la Lumière\" comparant Allah à la lumière des cieux et de la terre. Cette sourate établit des règles de pudeur et de vie sociale. Elle fut révélée suite à la calomnie contre 'Aisha, épouse du Prophète (ﷺ), innocentée par la révélation divine."
  },
  {
    "nom": "Al-Furqan",
    "versets": 77,
    "traduction": "Le discernement",
    "ordre_canonique": 25,
    "ordre_chronologique": 42,
    "anecdote": "Al-Furqan signifie \"le critère\" qui distingue le vrai du faux, autre nom du Coran. Cette sourate décrit les serviteurs du Tout Miséricordieux ('Ibad ar-Rahman) et leurs nobles qualités. Elle réfute les accusations des mécréants contre le Prophète (ﷺ)."
  },
  {
    "nom": "Ash-Shu'ara'",
    "versets": 227,
    "traduction": "Les poètes",
    "ordre_canonique": 26,
    "ordre_chronologique": 47,
    "anecdote": "Ash-Shu'ara' répète le refrain \"Ton Seigneur est vraiment le Puissant, le Miséricordieux\" après chaque récit prophétique. Elle contient l'histoire de sept prophètes. Les derniers versets défendent la poésie pieuse tout en critiquant les poètes égarés."
  },
  {
    "nom": "An-Naml",
    "versets": 93,
    "traduction": "Les fourmis",
    "ordre_canonique": 27,
    "ordre_chronologique": 48,
    "anecdote": "An-Naml raconte l'histoire de Sulayman (Salomon) comprenant le langage des animaux. Une fourmi avertit sa colonie de rentrer pour éviter d'être écrasée par l'armée de Salomon, qui sourit à ses paroles. Cette sourate mentionne aussi la reine de Saba et la huppe messagère."
  },
  {
    "nom": "Al-Qasas",
    "versets": 88,
    "traduction": "Le récit",
    "ordre_canonique": 28,
    "ordre_chronologique": 49,
    "anecdote": "Al-Qasas raconte l'histoire de Musa (Moïse) de façon détaillée, de sa naissance à sa mission prophétique. Elle contient l'histoire de Qarun (Coré), l'homme le plus riche de son époque, avalé par la terre avec ses trésors à cause de son arrogance."
  },
  {
    "nom": "Al-'Ankabut",
    "versets": 69,
    "traduction": "L'araignée",
    "ordre_canonique": 29,
    "ordre_chronologique": 85,
    "anecdote": "Al-'Ankabut compare ceux qui prennent des protecteurs en dehors d'Allah à l'araignée qui se construit une maison, la plus fragile des demeures. Cette sourate fut révélée pour réconforter les musulmans persécutés à La Mecque."
  },
  {
    "nom": "Ar-Rum",
    "versets": 60,
    "traduction": "Les Romains",
    "ordre_canonique": 30,
    "ordre_chronologique": 84,
    "anecdote": "Ar-Rum prédit miraculeusement la victoire des Byzantins sur les Perses dans quelques années, alors qu'ils venaient de subir une défaite cuisante. Cette prophétie se réalisa exactement comme annoncé, renforçant la foi des musulmans."
  },
  {
    "nom": "Luqman",
    "versets": 34,
    "traduction": "Luqman",
    "ordre_canonique": 31,
    "ordre_chronologique": 57,
    "anecdote": "Cette sourate contient les sages conseils de Luqman à son fils, notamment de ne jamais associer quoi que ce soit à Allah. Luqman était un sage d'origine africaine dont la sagesse est devenue proverbiale. Ses conseils incluent la gratitude, la prière et la patience."
  },
  {
    "nom": "As-Sajda",
    "versets": 30,
    "traduction": "La prosternation",
    "ordre_canonique": 32,
    "ordre_chronologique": 75,
    "anecdote": "As-Sajda contient un verset de prosternation. Le Prophète (ﷺ) avait l'habitude de la réciter avec sourate Al-Mulk avant de dormir. Elle décrit la création des cieux et de la terre en six jours et l'administration divine de l'univers."
  },
  {
    "nom": "Al-Ahzab",
    "versets": 73,
    "traduction": "Les coalisés",
    "ordre_canonique": 33,
    "ordre_chronologique": 90,
    "anecdote": "Al-Ahzab fut révélée lors du siège de Médine par une coalition de tribus. Elle contient des règles importantes concernant le Prophète (ﷺ) et ses épouses, les \"Mères des Croyants\". Le verset du choix (al-takhyir) y fut révélé, donnant aux épouses du Prophète le choix entre ce monde et l'au-delà."
  },
  {
    "nom": "Saba'",
    "versets": 54,
    "traduction": "Saba",
    "ordre_canonique": 34,
    "ordre_chronologique": 58,
    "anecdote": "Saba' raconte l'histoire du royaume de Saba (Sheba) au Yémen, béni puis détruit à cause de l'ingratitude. Cette sourate mentionne les dons accordés à Dawud (David) et Sulayman (Salomon), notamment le pouvoir de façonner le fer et de commander aux djinns."
  },
  {
    "nom": "Fatir",
    "versets": 45,
    "traduction": "Le Créateur",
    "ordre_canonique": 35,
    "ordre_chronologique": 43,
    "anecdote": "Fatir signifie \"Créateur\" ou \"Celui qui fend\". Cette sourate décrit la création et les signes d'Allah dans l'univers. Elle contient le verset : \"Ceux qui craignent le plus Allah parmi Ses serviteurs sont les savants\", soulignant le lien entre science et foi."
  },
  {
    "nom": "Ya-Sin",
    "versets": 83,
    "traduction": "Ya-Sin",
    "ordre_canonique": 36,
    "ordre_chronologique": 41,
    "anecdote": "Ya-Sin est appelée \"le cœur du Coran\". Le Prophète (ﷺ) a dit : \"Récitez Ya-Sin à vos mourants\". Cette sourate affirme la résurrection et contient la parabole des habitants de la cité qui rejetèrent trois messagers. Sa récitation apporte de nombreux bienfaits spirituels."
  },
  {
    "nom": "As-Saffat",
    "versets": 182,
    "traduction": "Les rangées",
    "ordre_canonique": 37,
    "ordre_chronologique": 56,
    "anecdote": "As-Saffat décrit les anges en rangs dans leur adoration. Elle raconte l'épreuve d'Ibrahim prêt à sacrifier son fils, les défis des prophètes face à leurs peuples, et mentionne l'arbre de Zaqqum en Enfer. Cette sourate affirme la protection divine des messagers."
  },
  {
    "nom": "Sad",
    "versets": 88,
    "traduction": "Sad",
    "ordre_canonique": 38,
    "ordre_chronologique": 38,
    "anecdote": "Sourate Sad raconte l'histoire de Dawud (David) et son jugement équitable, ainsi que les épreuves d'Ayyub (Job) et sa patience exemplaire. Elle contient le récit du refus d'Iblis de se prosterner devant Adam par orgueil."
  },
  {
    "nom": "Az-Zumar",
    "versets": 75,
    "traduction": "Les groupes",
    "ordre_canonique": 39,
    "ordre_chronologique": 59,
    "anecdote": "Az-Zumar décrit l'arrivée des gens au Paradis et en Enfer en groupes. Elle contient le verset sur la sincérité dans l'adoration : \"C'est à Allah qu'appartient la religion pure\". Cette sourate encourage la réflexion et le repentir avant qu'il ne soit trop tard."
  },
  {
    "nom": "Ghafir",
    "versets": 85,
    "traduction": "Le Pardonneur",
    "ordre_canonique": 40,
    "ordre_chronologique": 60,
    "anecdote": "Ghafir raconte l'histoire du croyant de la famille de Pharaon qui cacha sa foi puis défendit Musa (Moïse). Cette sourate, première des sept \"Ha-Mim\", décrit les attributs divins du pardon et met en garde contre l'orgueil qui mena Pharaon à sa perte."
  },
  {
    "nom": "Fussilat",
    "versets": 54,
    "traduction": "Les versets détaillés",
    "ordre_canonique": 41,
    "ordre_chronologique": 61,
    "anecdote": "Fussilat signifie \"détaillé\" ou \"expliqué clairement\". Cette sourate contient un verset de prosternation et décrit la création des cieux et de la terre. Elle mentionne que la peau témoignera contre les pécheurs le Jour du Jugement."
  },
  {
    "nom": "Ash-Shura",
    "versets": 53,
    "traduction": "La consultation",
    "ordre_canonique": 42,
    "ordre_chronologique": 62,
    "anecdote": "Ash-Shura tire son nom du principe de consultation mutuelle (shoura) dans les affaires des musulmans. C'est la seule sourate où apparaissent ensemble les lettres \"Ha-Mim\" et \"'Ayn-Sin-Qaf\". Elle établit les principes de gouvernance et de prise de décision collective."
  },
  {
    "nom": "Az-Zukhruf",
    "versets": 89,
    "traduction": "L'ornement",
    "ordre_canonique": 43,
    "ordre_chronologique": 63,
    "anecdote": "Az-Zukhruf critique l'attachement excessif aux ornements et richesses de ce monde. Elle réfute la croyance païenne attribuant des filles à Allah. Cette sourate affirme que le Coran est dans la \"Mère du Livre\" (Umm al-Kitab) auprès d'Allah."
  },
  {
    "nom": "Ad-Dukhan",
    "versets": 59,
    "traduction": "La fumée",
    "ordre_canonique": 44,
    "ordre_chronologique": 64,
    "anecdote": "Ad-Dukhan mentionne un signe de la fin des temps : une fumée évidente qui couvrira les gens. Elle relate le châtiment de Pharaon et son peuple. Le Prophète (ﷺ) a dit que celui qui récite cette sourate la nuit du vendredi sera pardonné."
  },
  {
    "nom": "Al-Jathiya",
    "versets": 37,
    "traduction": "L'agenouillée",
    "ordre_canonique": 45,
    "ordre_chronologique": 65,
    "anecdote": "Al-Jathiya décrit comment chaque communauté sera agenouillée le Jour du Jugement, appelée à son livre. Cette sourate invite à la réflexion sur les signes d'Allah dans la création et met en garde contre le fait de suivre ses passions comme divinité."
  },
  {
    "nom": "Al-Ahqaf",
    "versets": 35,
    "traduction": "Les dunes",
    "ordre_canonique": 46,
    "ordre_chronologique": 66,
    "anecdote": "Al-Ahqaf mentionne un groupe de djinns qui écoutèrent le Coran et crurent. Les dunes font référence à la région où vivait le peuple de 'Ad. Cette sourate souligne l'importance du bon comportement envers les parents, particulièrement la mère."
  },
  {
    "nom": "Muhammad",
    "versets": 38,
    "traduction": "Muhammad",
    "ordre_canonique": 47,
    "ordre_chronologique": 95,
    "anecdote": "Cette sourate porte le nom du Prophète Muhammad (ﷺ) et est aussi appelée \"Al-Qital\" (le combat). Elle fut révélée après l'Hégire et traite du jihad défensif. Elle promet la victoire à ceux qui secourent la cause d'Allah."
  },
  {
    "nom": "Al-Fath",
    "versets": 29,
    "traduction": "La victoire éclatante",
    "ordre_canonique": 48,
    "ordre_chronologique": 111,
    "anecdote": "Al-Fath fut révélée lors du retour de Hudaybiya, annonçant ce traité apparent de défaite comme une victoire éclatante. Le Prophète (ﷺ) dit : \"Cette nuit m'a été révélée une sourate qui m'est plus chère que tout ce sur quoi le soleil se lève\". Elle prédit la conquête de La Mecque."
  },
  {
    "nom": "Al-Hujurat",
    "versets": 18,
    "traduction": "Les appartements",
    "ordre_canonique": 49,
    "ordre_chronologique": 106,
    "anecdote": "Al-Hujurat établit l'éthique islamique et les règles de bienséance, notamment le respect envers le Prophète (ﷺ). Elle interdit la médisance, l'espionnage et les moqueries. Le verset sur la fraternité islamique et l'égalité devant Allah y est révélé."
  },
  {
    "nom": "Qaf",
    "versets": 45,
    "traduction": "Qaf",
    "ordre_canonique": 50,
    "ordre_chronologique": 34,
    "anecdote": "Le Prophète (ﷺ) récitait souvent sourate Qaf lors du sermon du vendredi. Elle décrit la mort, la résurrection et le Jour du Jugement. Cette sourate mentionne que deux anges enregistrent chaque parole prononcée par l'être humain."
  },
  {
    "nom": "Adh-Dhariyat",
    "versets": 60,
    "traduction": "Ceux qui éparpillent",
    "ordre_canonique": 51,
    "ordre_chronologique": 67,
    "anecdote": "Adh-Dhariyat commence par des serments sur les vents qui dispersent. Elle raconte l'histoire des anges venus annoncer à Ibrahim la naissance d'un fils et la destruction du peuple de Lut. Le verset \"Je n'ai créé les djinns et les hommes que pour qu'ils M'adorent\" s'y trouve."
  },
  {
    "nom": "At-Tur",
    "versets": 49,
    "traduction": "Le mont",
    "ordre_canonique": 52,
    "ordre_chronologique": 76,
    "anecdote": "At-Tur fait référence au mont Sinaï où Allah parla à Musa (Moïse). Cette sourate décrit les délices du Paradis où les familles pieuses seront réunies. Le Prophète (ﷺ) la récita lors de la prière du Maghrib, et sa récitation bouleversa Jubayr ibn Mut'im qui était alors polythéiste."
  },
  {
    "nom": "An-Najm",
    "versets": 62,
    "traduction": "L'étoile",
    "ordre_canonique": 53,
    "ordre_chronologique": 23,
    "anecdote": "An-Najm décrit l'ascension du Prophète (ﷺ) lors du Mi'raj. C'est la première sourate récitée publiquement à La Mecque où musulmans et polythéistes se prosternèrent ensemble à la fin. Elle contient un verset de prosternation et affirme que le Prophète ne parle pas sous l'effet de la passion."
  },
  {
    "nom": "Al-Qamar",
    "versets": 55,
    "traduction": "La lune",
    "ordre_canonique": 54,
    "ordre_chronologique": 37,
    "anecdote": "Al-Qamar commence par mentionner le miracle de la fente de la lune accompli par le Prophète (ﷺ). Cette sourate répète le refrain \"Nous avons rendu le Coran facile pour la méditation. Y a-t-il quelqu'un pour méditer ?\". Elle relate le châtiment des peuples rebelles passés."
  },
  {
    "nom": "Ar-Rahman",
    "versets": 78,
    "traduction": "Le Tout Miséricordieux",
    "ordre_canonique": 55,
    "ordre_chronologique": 97,
    "anecdote": "Ar-Rahman est appelée \"la fiancée du Coran\" pour sa beauté poétique. Elle répète 31 fois le refrain \"Lequel donc des bienfaits de votre Seigneur nierez-vous ?\". Cette sourate décrit les merveilles de la création et les délices du Paradis avec une éloquence incomparable."
  },
  {
    "nom": "Al-Waqi'a",
    "versets": 96,
    "traduction": "L'événement",
    "ordre_canonique": 56,
    "ordre_chronologique": 46,
    "anecdote": "Al-Waqi'a décrit le Jour du Jugement qui est inévitable. Le Prophète (ﷺ) a dit : \"Celui qui récite sourate Al-Waqi'a chaque nuit ne connaîtra jamais la pauvreté\". Elle divise l'humanité en trois groupes : les devanciers, les gens de la droite et les gens de la gauche."
  },
  {
    "nom": "Al-Hadid",
    "versets": 29,
    "traduction": "Le fer",
    "ordre_canonique": 57,
    "ordre_chronologique": 94,
    "anecdote": "Al-Hadid mentionne que le fer fut descendu avec une force redoutable et des avantages pour les hommes. Cette sourate encourage la dépense dans la voie d'Allah et contient le verset : \"C'est Lui le Premier et le Dernier, l'Apparent et le Caché\"."
  },
  {
    "nom": "Al-Mujadila",
    "versets": 22,
    "traduction": "La discussion",
    "ordre_canonique": 58,
    "ordre_chronologique": 105,
    "anecdote": "Al-Mujadila commence par l'histoire de Khawla bint Tha'laba qui vint se plaindre au Prophète (ﷺ) au sujet de son mari. Allah entendit sa plainte depuis les sept cieux. Cette sourate établit les règles du zihar (forme de divorce préislamique) et de son expiation."
  },
  {
    "nom": "Al-Hashr",
    "versets": 24,
    "traduction": "L'exode",
    "ordre_canonique": 59,
    "ordre_chronologique": 101,
    "anecdote": "Al-Hashr relate l'expulsion de la tribu juive des Banu Nadir de Médine. Les derniers versets contiennent de nombreux noms d'Allah. Le Prophète (ﷺ) a dit que celui qui récite les trois derniers versets matin et soir aura 70 000 anges qui prient pour lui."
  },
  {
    "nom": "Al-Mumtahana",
    "versets": 13,
    "traduction": "L'éprouvée",
    "ordre_canonique": 60,
    "ordre_chronologique": 91,
    "anecdote": "Al-Mumtahana tire son nom de l'examen des femmes émigrées pour vérifier leur foi. Elle fut révélée après le traité de Hudaybiya concernant les relations avec les non-musulmans. Cette sourate contient le serment d'allégeance des femmes au Prophète (ﷺ)."
  },
  {
    "nom": "As-Saff",
    "versets": 14,
    "traduction": "Le rang",
    "ordre_canonique": 61,
    "ordre_chronologique": 109,
    "anecdote": "As-Saff mentionne qu'Allah aime ceux qui combattent dans Son sentier en rangs serrés. Cette sourate contient la prophétie de 'Isa (Jésus) annonçant la venue d'Ahmad (autre nom du Prophète Muhammad ﷺ). Elle compare les croyants aux disciples de 'Isa."
  },
  {
    "nom": "Al-Jumu'a",
    "versets": 11,
    "traduction": "Le vendredi",
    "ordre_canonique": 62,
    "ordre_chronologique": 110,
    "anecdote": "Al-Jumu'a établit l'obligation de la prière du vendredi. Elle fut révélée quand des compagnons quittèrent le sermon pour voir une caravane commerciale. Cette sourate souligne la faveur d'Allah d'avoir envoyé un messager aux illettrés pour leur enseigner le Livre et la sagesse."
  },
  {
    "nom": "Al-Munafiqun",
    "versets": 11,
    "traduction": "Les hypocrites",
    "ordre_canonique": 63,
    "ordre_chronologique": 104,
    "anecdote": "Al-Munafiqun expose les caractéristiques des hypocrites, notamment leur chef 'Abdullah ibn Ubayy. Elle fut révélée après la bataille de Banu Mustaliq. Cette sourate met en garde contre l'hypocrisie et rappelle que les biens et les enfants ne doivent pas détourner du rappel d'Allah."
  },
  {
    "nom": "At-Taghabun",
    "versets": 18,
    "traduction": "La grande perte",
    "ordre_canonique": 64,
    "ordre_chronologique": 108,
    "anecdote": "At-Taghabun décrit le Jour du Jugement comme le jour de la grande perte pour les mécréants. Cette sourate avertit que les épouses et les enfants peuvent être une épreuve. Elle encourage le pardon et promet que celui qui craint Allah, Il lui accordera une issue favorable."
  },
  {
    "nom": "At-Talaq",
    "versets": 12,
    "traduction": "Le divorce",
    "ordre_canonique": 65,
    "ordre_chronologique": 99,
    "anecdote": "At-Talaq détaille les règles du divorce et de la période d'attente ('iddah). Elle insiste sur la justice et la crainte d'Allah dans ces moments difficiles. Cette sourate promet : \"Celui qui craint Allah, Il lui donnera une issue favorable et lui accordera Ses dons par où il ne s'y attend pas\"."
  },
  {
    "nom": "At-Tahrim",
    "versets": 12,
    "traduction": "L'interdiction",
    "ordre_canonique": 66,
    "ordre_chronologique": 107,
    "anecdote": "At-Tahrim fut révélée quand le Prophète (ﷺ) s'interdit le miel pour plaire à ses épouses. Elle donne l'exemple de deux femmes mécréantes (épouses de Nuh et Lut) et deux femmes croyantes (Asiya, femme de Pharaon, et Maryam) comme modèles."
  },
  {
    "nom": "Al-Mulk",
    "versets": 30,
    "traduction": "La royauté",
    "ordre_canonique": 67,
    "ordre_chronologique": 77,
    "anecdote": "Al-Mulk protège du châtiment de la tombe selon le Prophète (ﷺ). Il la récitait chaque nuit avant de dormir. Cette sourate, aussi appelée \"La Protectrice\" et \"La Salvatrice\", intercédera pour celui qui la récite régulièrement jusqu'à ce qu'il soit pardonné."
  },
  {
    "nom": "Al-Qalam",
    "versets": 52,
    "traduction": "La plume",
    "ordre_canonique": 68,
    "ordre_chronologique": 2,
    "anecdote": "Al-Qalam est l'une des premières sourates révélées. Elle défend le Prophète (ﷺ) contre les accusations de folie. Allah jure par la plume et ce qu'ils écrivent. Cette sourate contient l'histoire des propriétaires du jardin qui furent punis pour leur avarice."
  },
  {
    "nom": "Al-Haqqa",
    "versets": 52,
    "traduction": "Celle qui montre la vérité",
    "ordre_canonique": 69,
    "ordre_chronologique": 78,
    "anecdote": "Al-Haqqa décrit le Jour du Jugement comme la Vérité inéluctable. Elle relate la destruction des peuples de 'Ad et Thamud. Cette sourate affirme que le Coran est la parole d'un noble Messager et non celle d'un poète ou d'un devin."
  },
  {
    "nom": "Al-Ma'arij",
    "versets": 44,
    "traduction": "Les voies d'ascension",
    "ordre_canonique": 70,
    "ordre_chronologique": 79,
    "anecdote": "Al-Ma'arij mentionne les voies par lesquelles les anges et l'Esprit montent vers Allah en un jour équivalent à 50 000 ans. Cette sourate décrit les tourments qui attendent les mécréants et les qualités des habitants du Paradis."
  },
  {
    "nom": "Nuh",
    "versets": 28,
    "traduction": "Noé",
    "ordre_canonique": 71,
    "ordre_chronologique": 71,
    "anecdote": "Sourate Nuh relate la prédication de Nuh (Noé) à son peuple pendant 950 ans. Elle contient sa supplication émouvante et sa plainte à Allah contre l'obstination de son peuple. Nuh demanda le pardon pour les croyants et la destruction des mécréants obstinés."
  },
  {
    "nom": "Al-Jinn",
    "versets": 28,
    "traduction": "Les djinns",
    "ordre_canonique": 72,
    "ordre_chronologique": 40,
    "anecdote": "Al-Jinn raconte comment un groupe de djinns écoutèrent le Coran et crurent. Elle révèle que les djinns ne connaissent pas l'invisible et qu'il y a parmi eux des croyants et des mécréants. Cette sourate affirme que les mosquées appartiennent à Allah seul."
  },
  {
    "nom": "Al-Muzzammil",
    "versets": 20,
    "traduction": "L'enveloppé",
    "ordre_canonique": 73,
    "ordre_chronologique": 3,
    "anecdote": "Al-Muzzammil s'adresse au Prophète (ﷺ) enveloppé dans son manteau. Elle prescrit la prière de nuit (qiyam al-layl) qui était obligatoire avant d'être allégée. Cette sourate enseigne comment réciter le Coran avec tartil (lentement et distinctement)."
  },
  {
    "nom": "Al-Muddaththir",
    "versets": 56,
    "traduction": "Le revêtu d'un manteau",
    "ordre_canonique": 74,
    "ordre_chronologique": 4,
    "anecdote": "Al-Muddaththir fut révélée quand le Prophète (ﷺ) tremblait de froid après avoir vu Jibril. Elle marque le début de sa mission publique avec l'ordre : \"Lève-toi et avertis !\" Cette sourate décrit les dix-neuf gardiens de l'Enfer."
  },
  {
    "nom": "Al-Qiyama",
    "versets": 40,
    "traduction": "La résurrection",
    "ordre_canonique": 75,
    "ordre_chronologique": 31,
    "anecdote": "Al-Qiyama décrit le Jour de la Résurrection et ses signes. Elle interdit au Prophète (ﷺ) de hâter sa langue pour mémoriser la révélation, Allah lui garantissant de la préserver. Cette sourate décrit l'agonie de la mort et la résurrection des corps."
  },
  {
    "nom": "Al-Insan",
    "versets": 31,
    "traduction": "L'homme",
    "ordre_canonique": 76,
    "ordre_chronologique": 98,
    "anecdote": "Al-Insan, aussi appelée Ad-Dahr, fut révélée en l'honneur de la famille du Prophète (ﷺ) qui jeûna trois jours pour nourrir un pauvre, un orphelin et un captif. Elle décrit magnifiquement les délices du Paradis promis aux vertueux."
  },
  {
    "nom": "Al-Mursalat",
    "versets": 50,
    "traduction": "Les envoyés",
    "ordre_canonique": 77,
    "ordre_chronologique": 33,
    "anecdote": "Al-Mursalat fut la dernière sourate que le Prophète (ﷺ) récita en public avant sa mort. Elle répète dix fois le refrain \"Malheur, ce jour-là, à ceux qui criaient au mensonge !\" Cette sourate décrit les vents envoyés et les signes du Jour du Jugement."
  },
  {
    "nom": "An-Naba'",
    "versets": 40,
    "traduction": "La nouvelle",
    "ordre_canonique": 78,
    "ordre_chronologique": 80,
    "anecdote": "An-Naba' traite de la \"grande nouvelle\" sur laquelle les gens divergent : la résurrection. 'Abdullah ibn 'Abbas pleurait en la récitant, particulièrement au verset \"Le jour où l'homme verra ce que ses mains ont préparé\". Cette sourate décrit la création comme preuve de la résurrection."
  },
  {
    "nom": "An-Nazi'at",
    "versets": 46,
    "traduction": "Les arracheurs",
    "ordre_canonique": 79,
    "ordre_chronologique": 81,
    "anecdote": "An-Nazi'at décrit les anges qui arrachent violemment les âmes des mécréants et doucement celles des croyants. Elle raconte l'histoire de Musa (Moïse) et Pharaon. Cette sourate affirme que ressusciter les hommes est plus facile pour Allah que créer les cieux."
  },
  {
    "nom": "'Abasa",
    "versets": 42,
    "traduction": "Il s'est renfrogné",
    "ordre_canonique": 80,
    "ordre_chronologique": 24,
    "anecdote": "'Abasa fut révélée quand le Prophète (ﷺ) se détourna d'un aveugle, 'Abdullah ibn Umm Maktum, pour parler aux nobles de Quraysh. Allah le réprimanda doucement, enseignant que la piété prime sur le statut social. Ibn Umm Maktum devint ensuite muezzin à Médine."
  },
  {
    "nom": "At-Takwir",
    "versets": 29,
    "traduction": "L'obscurcissement",
    "ordre_canonique": 81,
    "ordre_chronologique": 7,
    "anecdote": "At-Takwir décrit les bouleversements cosmiques du Jour du Jugement : le soleil obscurci, les étoiles dispersées, les montagnes mises en mouvement. 'Umar ibn al-Khattab pleurait en récitant le verset sur les filles enterrées vivantes qui demanderont pour quel péché elles furent tuées."
  },
  {
    "nom": "Al-Infitar",
    "versets": 19,
    "traduction": "La rupture",
    "ordre_canonique": 82,
    "ordre_chronologique": 82,
    "anecdote": "Al-Infitar décrit la rupture du ciel et le bouleversement des mers au Jour du Jugement. Elle rappelle à l'homme l'ingratitude envers son Seigneur qui l'a créé et équilibré. Cette sourate mentionne les anges scribes qui enregistrent toutes les actions."
  },
  {
    "nom": "Al-Mutaffifin",
    "versets": 36,
    "traduction": "Les fraudeurs",
    "ordre_canonique": 83,
    "ordre_chronologique": 86,
    "anecdote": "Al-Mutaffifin condamne ceux qui trichent dans les mesures et les poids. Quand le Prophète (ﷺ) arriva à Médine, les commerçants y étaient réputés pour leur malhonnêteté. Après la révélation de cette sourate, ils devinrent les plus honnêtes des commerçants."
  },
  {
    "nom": "Al-Inshiqaq",
    "versets": 25,
    "traduction": "La déchirure",
    "ordre_canonique": 84,
    "ordre_chronologique": 83,
    "anecdote": "Al-Inshiqaq décrit la déchirure du ciel obéissant à son Seigneur. Elle contient un verset de prosternation. Cette sourate promet que celui qui reçoit son livre dans la main droite aura un jugement facile, contrairement à celui qui le recevra derrière son dos."
  },
  {
    "nom": "Al-Buruj",
    "versets": 22,
    "traduction": "Les constellations",
    "ordre_canonique": 85,
    "ordre_chronologique": 27,
    "anecdote": "Al-Buruj raconte l'histoire des \"gens du fossé\" qui brûlèrent vifs les croyants. Elle fait référence au roi Dhu Nuwas du Yémen qui persécuta les chrétiens de Najran. Cette sourate affirme qu'Allah est témoin de tout et que le Coran est préservé dans la Tablette gardée."
  },
  {
    "nom": "At-Tariq",
    "versets": 17,
    "traduction": "L'astre nocturne",
    "ordre_canonique": 86,
    "ordre_chronologique": 36,
    "anecdote": "At-Tariq jure par l'étoile perçante qui apparaît la nuit. Cette courte sourate affirme qu'Allah peut ressusciter les morts comme Il a créé l'homme d'une goutte. Elle avertit que les complots des mécréants seront déjoués."
  },
  {
    "nom": "Al-A'la",
    "versets": 19,
    "traduction": "Le Très-Haut",
    "ordre_canonique": 87,
    "ordre_chronologique": 8,
    "anecdote": "Al-A'la était souvent récitée par le Prophète (ﷺ) dans les prières de l'Aïd et du vendredi. Elle commence par \"Glorifie le nom de ton Seigneur, le Très-Haut\". Cette sourate compare la vie d'ici-bas à l'au-delà et mentionne les feuillets d'Ibrahim et Musa."
  },
  {
    "nom": "Al-Ghashiya",
    "versets": 26,
    "traduction": "L'enveloppante",
    "ordre_canonique": 88,
    "ordre_chronologique": 68,
    "anecdote": "Al-Ghashiya décrit le Jour du Jugement qui enveloppera tout. Le Prophète (ﷺ) la récitait souvent le vendredi avec sourate Al-A'la. Elle décrit les visages humiliés des mécréants et les visages radieux des croyants ce jour-là."
  },
  {
    "nom": "Al-Fajr",
    "versets": 30,
    "traduction": "L'aube",
    "ordre_canonique": 89,
    "ordre_chronologique": 10,
    "anecdote": "Al-Fajr jure par l'aube et les dix nuits (de Dhul-Hijja). Elle raconte le châtiment des peuples de 'Ad, Thamud et Pharaon. Cette sourate contient l'appel à l'âme apaisée : \"Ô toi, âme apaisée, retourne vers ton Seigneur, satisfaite et agréée\"."
  },
  {
    "nom": "Al-Balad",
    "versets": 20,
    "traduction": "La cité",
    "ordre_canonique": 90,
    "ordre_chronologique": 35,
    "anecdote": "Al-Balad jure par La Mecque, la cité sacrée. Elle décrit les deux voies : celle du bien, comparée à une montée escarpée (libérer un esclave, nourrir en temps de famine), et celle du mal. Cette sourate souligne que l'homme fut créé pour peiner."
  },
  {
    "nom": "Ash-Shams",
    "versets": 15,
    "traduction": "Le soleil",
    "ordre_canonique": 91,
    "ordre_chronologique": 26,
    "anecdote": "Ash-Shams contient onze serments consécutifs, le plus grand nombre dans le Coran. Elle relate la destruction de Thamud qui tua la chamelle de Salih. Cette sourate enseigne que l'âme a été inspirée de sa perversité et de sa piété, et que réussit celui qui la purifie."
  },
  {
    "nom": "Al-Layl",
    "versets": 21,
    "traduction": "La nuit",
    "ordre_canonique": 92,
    "ordre_chronologique": 9,
    "anecdote": "Al-Layl fut révélée au sujet d'Abu Bakr qui acheta et libéra Bilal torturé pour sa foi. Elle enseigne que les actions des hommes divergent : certains donnent et craignent Allah, d'autres sont avares. Cette sourate promet la facilité à celui qui donne et la difficulté à l'avare."
  },
  {
    "nom": "Ad-Duha",
    "versets": 11,
    "traduction": "Le jour montant",
    "ordre_canonique": 93,
    "ordre_chronologique": 11,
    "anecdote": "Ad-Duha fut révélée pour consoler le Prophète (ﷺ) après une interruption de la révélation. Les polythéistes se moquaient en disant que son Seigneur l'avait abandonné. Cette sourate lui rappelle les bienfaits d'Allah et l'enjoint à ne pas repousser l'orphelin ni le mendiant."
  },
  {
    "nom": "Ash-Sharh",
    "versets": 8,
    "traduction": "L'ouverture",
    "ordre_canonique": 94,
    "ordre_chronologique": 12,
    "anecdote": "Ash-Sharh évoque l'ouverture de la poitrine du Prophète (ﷺ) et l'allègement de son fardeau. Elle fait suite à Ad-Duha et contient la promesse répétée : \"Avec la difficulté vient la facilité\". Cette sourate enseigne qu'après l'accomplissement des tâches, il faut se consacrer à l'adoration."
  },
  {
    "nom": "At-Tin",
    "versets": 8,
    "traduction": "Le figuier",
    "ordre_canonique": 95,
    "ordre_chronologique": 28,
    "anecdote": "At-Tin jure par le figuier et l'olivier, symboles de Jérusalem, et par le Mont Sinaï et La Mecque. Elle affirme que l'homme fut créé dans la forme la plus parfaite. Cette sourate questionne : \"Allah n'est-Il pas le plus sage des juges ?\""
  },
  {
    "nom": "Al-'Alaq",
    "versets": 19,
    "traduction": "L'adhérence",
    "ordre_canonique": 96,
    "ordre_chronologique": 1,
    "anecdote": "Al-'Alaq contient les tout premiers versets révélés au Prophète Muhammad (ﷺ) dans la grotte de Hira. Le mot \"Iqra\" (lis) fut le premier mot du Coran révélé, soulignant l'importance de la connaissance et de l'apprentissage en Islam. Cette sourate marque le début de la révélation coranique."
  },
  {
    "nom": "Al-Qadr",
    "versets": 5,
    "traduction": "La destinée",
    "ordre_canonique": 97,
    "ordre_chronologique": 25,
    "anecdote": "Al-Qadr décrit la Nuit du Destin, meilleure que mille mois. Durant cette nuit bénie du Ramadan, le Coran fut descendu et les anges descendent avec toutes sortes d'affaires. Le Prophète (ﷺ) encourageait à la chercher dans les dix dernières nuits impaires du Ramadan."
  },
  {
    "nom": "Al-Bayyina",
    "versets": 8,
    "traduction": "La preuve",
    "ordre_canonique": 98,
    "ordre_chronologique": 100,
    "anecdote": "Al-Bayyina parle de la preuve évidente venue aux Gens du Livre : le Prophète Muhammad (ﷺ). Elle affirme que la religion droite consiste à adorer Allah avec sincérité. Cette sourate promet que ceux qui croient et font le bien sont les meilleures créatures."
  },
  {
    "nom": "Az-Zalzala",
    "versets": 8,
    "traduction": "Le séisme",
    "ordre_canonique": 99,
    "ordre_chronologique": 93,
    "anecdote": "Az-Zalzala décrit le tremblement de terre final qui secouera la terre. Le Prophète (ﷺ) a dit que cette sourate équivaut à la moitié du Coran en récompense. Elle enseigne que quiconque fait le poids d'un atome de bien ou de mal le verra."
  },
  {
    "nom": "Al-'Adiyat",
    "versets": 11,
    "traduction": "Les coursiers",
    "ordre_canonique": 100,
    "ordre_chronologique": 14,
    "anecdote": "Al-'Adiyat jure par les chevaux de guerre haletants qui font jaillir des étincelles. Elle dénonce l'ingratitude de l'homme envers son Seigneur et son amour excessif des richesses. Cette sourate rappelle que le jour où les tombes seront bouleversées, Allah sera parfaitement informé."
  },
  {
    "nom": "Al-Qari'a",
    "versets": 11,
    "traduction": "Le fracas",
    "ordre_canonique": 101,
    "ordre_chronologique": 30,
    "anecdote": "Al-Qari'a décrit le Jour du Jugement comme un fracas assourdissant. Les hommes y seront comme des papillons éparpillés et les montagnes comme de la laine cardée. Cette sourate décrit la balance où seront pesées les actions, déterminant le Paradis ou l'Enfer."
  },
  {
    "nom": "At-Takathur",
    "versets": 8,
    "traduction": "La course aux richesses",
    "ordre_canonique": 102,
    "ordre_chronologique": 16,
    "anecdote": "At-Takathur critique la course à l'accumulation des richesses qui distrait jusqu'à la visite des tombes. Le Prophète (ﷺ) a dit : \"Si le fils d'Adam avait une vallée d'or, il en voudrait une deuxième\". Cette sourate avertit qu'on sera interrogé sur les bienfaits reçus."
  },
  {
    "nom": "Al-'Asr",
    "versets": 3,
    "traduction": "Le temps",
    "ordre_canonique": 103,
    "ordre_chronologique": 13,
    "anecdote": "Al-'Asr est la plus courte sourate après Al-Kawthar. L'imam Shafi'i a dit : \"Si Allah n'avait révélé que cette sourate, elle aurait suffi comme guidance\". Les compagnons ne se séparaient pas sans se la réciter mutuellement pour se rappeler ses enseignements."
  },
  {
    "nom": "Al-Humaza",
    "versets": 9,
    "traduction": "Les calomniateurs",
    "ordre_canonique": 104,
    "ordre_chronologique": 32,
    "anecdote": "Al-Humaza condamne les calomniateurs et les médisants qui amassent des fortunes en pensant qu'elles les rendront immortels. Elle décrit le feu de l'Enfer qui pénètre jusqu'aux cœurs. Cette sourate fut révélée au sujet d'Al-Akhnas ibn Shurayq qui calomniait le Prophète (ﷺ)."
  },
  {
    "nom": "Al-Fil",
    "versets": 5,
    "traduction": "L'éléphant",
    "ordre_canonique": 105,
    "ordre_chronologique": 19,
    "anecdote": "Al-Fil raconte la destruction de l'armée d'Abraha venue détruire la Ka'ba avec des éléphants, l'année de naissance du Prophète (ﷺ). Allah envoya des oiseaux portant des pierres d'argile qui anéantirent l'armée. Cet événement confirma la sacralité de La Mecque."
  },
  {
    "nom": "Quraysh",
    "versets": 4,
    "traduction": "Les Qoraych",
    "ordre_canonique": 106,
    "ordre_chronologique": 29,
    "anecdote": "Quraysh évoque les deux voyages commerciaux annuels de la tribu : en hiver vers le Yémen et en été vers la Syrie. Cette sourate rappelle aux Quraysh de remercier Allah qui leur a assuré sécurité et prospérité grâce à leur gardiennage de la Ka'ba."
  },
  {
    "nom": "Al-Ma'un",
    "versets": 7,
    "traduction": "L'ustensile",
    "ordre_canonique": 107,
    "ordre_chronologique": 17,
    "anecdote": "Al-Ma'un décrit celui qui traite de mensonge la rétribution comme celui qui repousse l'orphelin et n'encourage pas à nourrir le pauvre. Elle critique ceux qui prient par ostentation et refusent l'aide la plus simple à autrui, même prêter un ustensile."
  },
  {
    "nom": "Al-Kawthar",
    "versets": 3,
    "traduction": "L'abondance",
    "ordre_canonique": 108,
    "ordre_chronologique": 15,
    "anecdote": "Al-Kawthar est la plus courte sourate du Coran avec seulement 3 versets et 10 mots en arabe. Allah y promet au Prophète (ﷺ) Al-Kawthar, un fleuve du Paradis. Elle fut révélée quand les polythéistes l'insultaient après la mort de son fils, le traitant d'\"abtar\" (sans descendance)."
  },
  {
    "nom": "Al-Kafirun",
    "versets": 6,
    "traduction": "Les infidèles",
    "ordre_canonique": 109,
    "ordre_chronologique": 18,
    "anecdote": "Al-Kafirun établit la séparation claire entre l'Islam et la mécréance. Elle fut révélée quand les Quraysh proposèrent au Prophète (ﷺ) d'adorer leurs dieux une année en échange qu'ils adorent Allah l'année suivante. Elle se conclut par : \"À vous votre religion, et à moi ma religion\"."
  },
  {
    "nom": "An-Nasr",
    "versets": 3,
    "traduction": "Le secours",
    "ordre_canonique": 110,
    "ordre_chronologique": 114,
    "anecdote": "An-Nasr fut la dernière sourate complète révélée, annonçant la victoire de l'Islam et la conquête de La Mecque. Quand elle fut révélée, le Prophète (ﷺ) comprit que sa mission touchait à sa fin. Ibn 'Abbas l'appela \"la sourate de l'adieu\"."
  },
  {
    "nom": "Al-Masad",
    "versets": 5,
    "traduction": "Les fibres",
    "ordre_canonique": 111,
    "ordre_chronologique": 6,
    "anecdote": "Al-Masad est la seule sourate qui nomme explicitement un ennemi du Prophète (ﷺ) : Abu Lahab, son oncle. Elle prédit sa destruction et celle de sa femme qui portait des épines pour les jeter sur le chemin du Prophète. Abu Lahab mourut peu après la bataille de Badr."
  },
  {
    "nom": "Al-Ikhlas",
    "versets": 4,
    "traduction": "Le monothéisme pur",
    "ordre_canonique": 112,
    "ordre_chronologique": 22,
    "anecdote": "Al-Ikhlas équivaut au tiers du Coran selon le Prophète (ﷺ) car elle traite exclusivement de l'unicité d'Allah. Un compagnon la récitait dans chaque prière par amour pour elle. Le Prophète lui annonça qu'Allah l'aimait. Elle est récitée dans de nombreuses invocations de protection."
  },
  {
    "nom": "Al-Falaq",
    "versets": 5,
    "traduction": "L'aube naissante",
    "ordre_canonique": 113,
    "ordre_chronologique": 20,
    "anecdote": "Al-Falaq est l'une des deux sourates de protection (Al-Mu'awwidhatân) avec An-Nas. Elle fut révélée quand un juif, Labid ibn A'sam, ensorcela le Prophète (ﷺ). Cette sourate cherche protection contre le mal de la création, l'obscurité, la sorcellerie et l'envie."
  },
  {
    "nom": "An-Nas",
    "versets": 6,
    "traduction": "Les hommes",
    "ordre_canonique": 114,
    "ordre_chronologique": 21,
    "anecdote": "An-Nas est la dernière sourate du Coran et la seconde sourate de protection. Elle cherche refuge auprès d'Allah contre le mal du tentateur (Satan) qui insuffle le mal dans les poitrines des hommes. Le Prophète (ﷺ) la récitait avec Al-Falaq matin et soir, et avant de dormir."
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