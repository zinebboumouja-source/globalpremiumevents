/* ==========================================================================
   GLOBAL PREMIUM EVENTS — CANEVAS DES MISSIONS B2B
   --------------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour publier une nouvelle mission.
   Tout le reste (calendrier, page pays en français et en anglais, formulaire
   d'inscription, note d'information, fiche d'inscription, programme PDF)
   se génère automatiquement à partir de ces données.

   - Les textes en français sont la version principale.
   - Le bloc "en" de chaque mission contient la traduction anglaise : il
     remplace les textes français quand on visite la page en anglais
     (?lang=en). Ce qui n'est pas traduit reste en français.

   Guide complet : /missions/GUIDE.md
   ========================================================================== */

window.GPE_CONFIG = {
  organisation: 'Global Premium Events',
  ville: 'Rabat, Maroc',
  villeEn: 'Rabat, Morocco',
  email: 'info@globalpremiumevents.com',
  telephone: '+212 653512995',
  site: 'globalpremiumevents.com',
  // Adresse qui reçoit les inscriptions (formulaire du site)
  emailInscriptions: 'info@globalpremiumevents.com',
  // Coordonnées bancaires imprimées sur la fiche d'inscription
  paiement: {
    banque: 'Banque Populaire — Agence Al Yacout, Salé',
    titulaire: 'GPE SARL',
    rib: '181 815 2121146528040000 59',
    iban: 'MA64 1818 1521 2114 6528 0400 0059',
    swift: 'BCPOMAMC',
    modes: ['Virement bancaire', 'Chèque'],
    modesEn: ['Bank transfer', 'Cheque']
  },
  // Pièces demandées après l'inscription
  piecesDemandees: [
    'Copie du passeport (validité 6 mois minimum après le retour)',
    'Logo de l’entreprise (PNG ou JPG)',
    'Présentation de l’entreprise (1 page, en anglais)'
  ],
  piecesDemandeesEn: [
    'Copy of passport (valid at least 6 months after return)',
    'Company logo (PNG or JPG)',
    'One-page company presentation (in English)'
  ]
};

window.GPE_MISSIONS = [

  /* ------------------------------------------------------------------ */
  {
    id: 'ghana-2026',                 // identifiant unique dans l'URL : pays-année
    statut: 'ouverte',                // ouverte | bientot | complete | terminee
    enLigne: true,                    // false = masquée du site ; true = en ligne
    pays: 'Ghana',
    ville: 'Accra',
    langue: 'Anglais',
    dateDebut: '2026-11-15',          // format AAAA-MM-JJ
    dateFin: '2026-11-19',
    dateLimite: '2026-11-10',         // clôture des inscriptions
    places: 'limitees',
    titre: 'Mission d’affaires au Ghana — Invest Ghana Summit 2026',
    accroche: 'Global Premium Events organise la délégation d’affaires marocaine à l’Invest Ghana Summit 2026, premier sommet de l’investissement organisé par la Ghana Investment Promotion Authority (GIPA). Plus de 2 000 investisseurs, décideurs publics et chefs d’entreprise sont attendus à Accra.',

    evenement: {
      nom: 'Invest Ghana Summit 2026',
      organisateur: 'Ghana Investment Promotion Authority (GIPA)',
      dates: '16 – 17 novembre 2026',
      lieu: 'Kempinski Hotel Gold Coast City, Accra',
      slogan: 'Le premier rassemblement d’affaires du Ghana placé sous l’égide du Président de la République',
      theme: 'Investing in Ghana’s New Economy — Building a productive economy that creates value and competes globally.',
      description: 'Première édition. Sessions sectorielles, matchmaking, rendez-vous B2B et B2G, rencontres directes avec les décideurs publics, les entreprises et les porteurs de projets ghanéens.',
      lien: 'https://igs.gipa.gov.gh/'
    },

    pourquoi: [
      { chiffre: '2 000+', texte: 'investisseurs, décideurs et chefs d’entreprise attendus au sommet' },
      { chiffre: 'B2B & B2G', texte: 'rendez-vous pré-organisés avec des entreprises et des institutions ghanéennes' },
      { chiffre: 'Deal Room', texte: 'signatures d’accords et annonces d’investissements pendant le sommet' },
      { chiffre: 'ZLECAf', texte: 'Accra accueille le secrétariat de la Zone de libre-échange continentale africaine' }
    ],

    // Secteurs officiels du sommet
    secteurs: [
      'Agro-industrie, transformation alimentaire et agriculture d’export',
      'Industrie, pharmacie et chaînes de valeur industrielles',
      'Économie numérique, technologies et services',
      'Énergie et croissance industrielle verte',
      'Mines, minerais et transformation locale',
      'Infrastructures, transport et logistique'
    ],

    prix: {
      devise: 'MAD',
      mention: 'Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Accréditation au sommet incluse.'
    },

    /* LES FORFAITS ---------------------------------------------------
       prix = 1er participant, prixSup = participant supplémentaire,
       places = nombre maximum (null = selon disponibilité). */
    formules: [
      { id: 'delegation', nom: 'Forfait Délégation', prix: 6500, prixSup: 3500, places: 10, recommande: false },
      { id: 'business', nom: 'Forfait Business', prix: 11500, prixSup: 5000, places: null, recommande: true },
      { id: 'executive', nom: 'Forfait Executive', prix: 22000, prixSup: 7000, places: 3, recommande: false }
    ],

    /* LE COMPARATIF ---------------------------------------------------
       Une ligne = [prestation, Délégation, Business, Executive]
       'Y' = inclus, '-' = non inclus, sinon le texte affiché. */
    comparatif: [
      { groupe: 'Accès et rendez-vous', lignes: [
        ['Accréditation à l\u2019Invest Ghana Summit 2026', 'Y', 'Y', 'Y'],
        ['Intégration à la délégation d\u2019affaires marocaine et briefing pays', 'Y', 'Y', 'Y'],
        ['Rendez-vous B2B', 'Matchmaking du sommet', 'Agenda B2B qualifié selon votre profil', 'Agenda B2B garanti (8 rendez-vous minimum)'],
        ['Rencontres B2G (institutions)', '-', 'Sollicitées', 'Organisées pour votre secteur'],
        ['Dîner de networking de la délégation', 'Y', 'Y', 'Y']
      ] },
      { groupe: 'Logistique et assistance', lignes: [
        ['Transferts et navette de la délégation', 'Y', 'Y', 'Y'],
        ['Assistance', 'Coordination de groupe', 'Assistant dédié', 'Assistant personnel et interprète']
      ] },
      { groupe: 'Photo, vidéo et médias', lignes: [
        ['Photos de groupe de la délégation', 'Y', 'Y', 'Y'],
        ['Photographe et vidéaste dédiés à votre entreprise (créneau réservé : photos de vos rendez-vous et vidéo de 60 s)', '-', 'Y', 'Y'],
        ['Communiqué de presse dédié à votre entreprise', '-', '-', 'Y'],
        ['Relations médias (interviews proposées à la presse marocaine et ghanéenne)', '-', '-', 'Y']
      ] },
      { groupe: 'Sur mesure et suivi', lignes: [
        ['Programme personnalisé selon vos objectifs, défini avec vous avant le départ', '-', '-', 'Y'],
        ['Suivi de vos contacts à J+30', '-', 'Y', 'Y']
      ] }
    ],

    nonCompris: 'Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.',

    conditions: [
      'Inscription confirmée à réception du paiement intégral, au plus tard le 10 novembre 2026.',
      'Places attribuées par ordre de réception des paiements.',
      'Remboursement intégral si la mission est annulée par l’organisateur.'
    ],

    pratique: {
      vol: 'Vol direct Casablanca – Accra (environ 4 h 30). Tarif de groupe négocié communiqué à l’inscription.',
      hotel: 'Hôtel de délégation à proximité du Kempinski Gold Coast City. Tarif négocié communiqué à l’inscription.',
      visa: 'Pas de visa pour les ressortissants marocains (accord d’exemption Maroc – Ghana). Passeport valide 6 mois après le retour. Lettre d’invitation officielle disponible pour les délégués d’autres nationalités.',
      sante: 'Vaccin contre la fièvre jaune obligatoire (carnet international à présenter à l’arrivée).',
      monnaie: 'Cedi ghanéen (GHS). Cartes bancaires acceptées dans les grands hôtels.',
      autres: 'Pays anglophone : documents de présentation en anglais recommandés.'
    },

    programme: [
      { jour: 'Dimanche 15 novembre', items: ['Vol Casablanca – Accra', 'Accueil et transfert à l’hôtel', 'Soir : briefing de la délégation'] },
      { jour: 'Lundi 16 novembre', items: ['Invest Ghana Summit — ouverture officielle et discours d’ouverture du Président de la République, S.E. John Dramani Mahama', 'Interventions des ministres du Commerce et des Finances, et d’Aliko Dangote, invité spécial du Président', 'Déjeuner de networking', 'Après-midi : sessions d’investissement sectorielles, Ghana Deal Room et rendez-vous B2B', 'Soir : soirée diplomatique et culturelle Invest Ghana'] },
      { jour: 'Mardi 17 novembre', items: ['Petit-déjeuner AfCFTA avec le Secrétaire général de la Zone de libre-échange continentale africaine', 'Sessions d’investissement par région, Ghana Deal Room et rendez-vous B2B', 'Déjeuner avec le ministre de l’Énergie, signatures d’accords et annonces d’investissements', 'Sessions FinTech, investisseurs et diaspora', 'Clôture par la Vice-Présidente de la République'] },
      { jour: 'Mercredi 18 novembre', items: ['Rendez-vous B2B complémentaires', 'Visites de sites et d’entreprises'] },
      { jour: 'Jeudi 19 novembre', items: ['Rencontres institutionnelles', 'Transfert et vol retour Accra – Casablanca'] }
    ],

    // Référence : réalisation passée liée au pays (photo dans missions/img/)
    reference: {
      image: '/missions/img/ghana-tika-ankara.webp',
      surtitre: 'Notre engagement avec le Ghana',
      titre: 'Une relation déjà engagée au plus haut niveau',
      textes: [
        'Global Premium Events a pris part à Ankara à la rencontre officielle entre M. Abdullah Eren, Président de l’Agence turque de coopération et de coordination (TİKA), et une délégation ghanéenne de haut niveau dédiée au commerce et à l’investissement.',
        'Les échanges ont porté sur le renforcement de la coopération avec l’Afrique, et en particulier le Ghana, en matière de développement, de coopération institutionnelle, de renforcement des capacités et de partenariat économique durable, dans l’éducation, la santé, l’agriculture, l’entrepreneuriat et les échanges culturels.',
        'La mission Invest Ghana Summit 2026 prolonge cet engagement en faveur de partenariats durables avec le Ghana.'
      ],
      legende: 'Ankara — rencontre officielle avec le Président de TİKA et la délégation ghanéenne du commerce et de l’investissement.'
    },

    // Annonce mise en avant en haut de la page (supprimer la ligne pour la masquer)
    annonce: 'Ouverture officielle par S.E. le Président John Dramani Mahama, avec Aliko Dangote annoncé comme invité spécial du Président.',

    // Affiche de l'événement (affichée en haut de la page)
    image: '/missions/img/ghana-2026-affiche.webp',
    // Couleurs de l'événement (vert, jaune, rouge du Ghana). Supprimer pour garder les couleurs GPE.
    couleurs: { fonce: '#075C32', principal: '#12884A', accent: '#F8CB0E', rouge: '#E8484F' },

    /* ---------------- TRADUCTION ANGLAISE ---------------- */
    en: {
      pays: 'Ghana',
      langue: 'English',
      titre: 'Business Mission to Ghana — Invest Ghana Summit 2026',
      accroche: 'Global Premium Events is organising the Moroccan business delegation to the Invest Ghana Summit 2026, the first investment summit hosted by the Ghana Investment Promotion Authority (GIPA). More than 2,000 investors, policymakers and business leaders are expected in Accra.',
      evenement: {
        slogan: 'Ghana’s premier President-led business gathering',
        dates: '16 – 17 November 2026',
        description: 'First edition. Sector sessions, business matchmaking, B2B and B2G meetings, and direct engagement with government officials, Ghanaian businesses and investment project promoters.'
      },
      pourquoi: [
        { chiffre: '2,000+', texte: 'investors, policymakers and business leaders expected at the Summit' },
        { chiffre: 'B2B & B2G', texte: 'pre-arranged meetings with Ghanaian companies and institutions' },
        { chiffre: 'Deal Room', texte: 'investment signings and announcements during the Summit' },
        { chiffre: 'AfCFTA', texte: 'Accra hosts the Secretariat of the African Continental Free Trade Area' }
      ],
      secteurs: [
        'Agribusiness, Food Processing and Export Agriculture',
        'Manufacturing, Pharmaceuticals and Industrial Value Chains',
        'Digital Economy, Technology and Services',
        'Energy and Green Industrial Growth',
        'Mining, Minerals and Downstream Value Addition',
        'Infrastructure, Transport and Logistics'
      ],
      prix: {
        mention: 'Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Summit accreditation included.'
      },
      formules: [
        { nom: 'Delegation Package' },
        { nom: 'Business Package' },
        { nom: 'Executive Package' }
      ],
      comparatif: [
        { groupe: 'Access and meetings', lignes: [
          ['Accreditation to the Invest Ghana Summit 2026', 'Y', 'Y', 'Y'],
          ['Membership of the Moroccan business delegation and country briefing', 'Y', 'Y', 'Y'],
          ['B2B meetings', 'Summit matchmaking', 'Qualified B2B agenda based on your profile', 'Guaranteed B2B agenda (minimum 8 meetings)'],
          ['B2G meetings (institutions)', '-', 'Requested', 'Arranged for your sector'],
          ['Delegation networking dinner', 'Y', 'Y', 'Y']
        ] },
        { groupe: 'Logistics and assistance', lignes: [
          ['Transfers and delegation shuttle', 'Y', 'Y', 'Y'],
          ['Assistance', 'Group coordination', 'Dedicated assistant', 'Personal assistant and interpreter']
        ] },
        { groupe: 'Photo, video and media', lignes: [
          ['Delegation group photos', 'Y', 'Y', 'Y'],
          ['Photographer and videographer dedicated to your company (reserved slot: photos of your meetings and a 60-second video)', '-', 'Y', 'Y'],
          ['Press release dedicated to your company', '-', '-', 'Y'],
          ['Media relations (interviews offered to Moroccan and Ghanaian media)', '-', '-', 'Y']
        ] },
        { groupe: 'Tailor-made and follow-up', lignes: [
          ['Personalised programme based on your objectives, agreed with you before departure', '-', '-', 'Y'],
          ['Follow-up of your contacts at D+30', '-', 'Y', 'Y']
        ] }
      ],
      nonCompris: 'Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.',
      conditions: [
        'Registration is confirmed upon receipt of full payment, no later than 10 November 2026.',
        'Places are allocated in order of payment received.',
        'Full refund if the mission is cancelled by the organiser.'
      ],
      pratique: {
        vol: 'Direct flight Casablanca – Accra (about 4h30). Negotiated group fare provided upon registration.',
        hotel: 'Delegation hotel near the Kempinski Gold Coast City. Negotiated rate provided upon registration.',
        visa: 'No visa required for Moroccan nationals (Morocco – Ghana visa exemption agreement). Passport valid 6 months after return. Official invitation letter available for delegates of other nationalities.',
        sante: 'Yellow fever vaccination required (international certificate to be shown on arrival).',
        monnaie: 'Ghanaian cedi (GHS). Cards accepted in major hotels.',
        autres: 'English-speaking country: presentation materials in English recommended.'
      },
      annonce: 'Officially opened by H.E. President John Dramani Mahama, with Aliko Dangote announced as Presidential Special Guest.',
      reference: {
        surtitre: 'Our engagement with Ghana',
        titre: 'A relationship already engaged at the highest level',
        textes: [
          'Global Premium Events took part in Ankara in the official meeting between Mr. Abdullah Eren, President of the Turkish Cooperation and Coordination Agency (TİKA), and a high-level Ghanaian trade and investment delegation.',
          'Discussions focused on strengthening cooperation with Africa, particularly Ghana, in development, institutional collaboration, capacity building and sustainable economic partnership, across education, healthcare, agriculture, entrepreneurship and cultural exchange.',
          'The Invest Ghana Summit 2026 mission builds on this commitment to long-term partnerships with Ghana.'
        ],
        legende: 'Ankara — official meeting with the President of TİKA and the Ghanaian trade and investment delegation.'
      },
      programme: [
        { jour: 'Sunday 15 November', items: ['Flight Casablanca – Accra', 'Welcome and transfer to the hotel', 'Evening: delegation briefing'] },
        { jour: 'Monday 16 November', items: ['Invest Ghana Summit — official opening and keynote address by H.E. President John Dramani Mahama', 'Remarks by the Ministers of Trade and Finance, and by Aliko Dangote, Presidential Special Guest', 'Networking lunch', 'Afternoon: sector investment deep dives, Ghana Deal Room and B2B meetings', 'Evening: Invest Ghana Diplomatic and Cultural Evening'] },
        { jour: 'Tuesday 17 November', items: ['AfCFTA Investment Breakfast with the Secretary-General of the African Continental Free Trade Area', 'Regional investment deep dives, Ghana Deal Room and B2B meetings', 'Luncheon with the Minister for Energy, investment signings and announcements', 'FinTech, investor and diaspora sessions', 'Closing address by the Vice President of the Republic'] },
        { jour: 'Wednesday 18 November', items: ['Additional B2B meetings', 'Site and company visits'] },
        { jour: 'Thursday 19 November', items: ['Institutional meetings', 'Transfer and return flight Accra – Casablanca'] }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "emirats-agroalimentaire-2026",
    "statut": "terminee",
    "enLigne": true,
    "pays": "Émirats arabes unis",
    "ville": "Abou Dhabi",
    "langue": "Anglais / Arabe",
    "dateDebut": "2026-10-05",
    "dateFin": "2026-10-09",
    "dateLimite": "2026-09-20",
    "places": "limitees",
    "titre": "Mission B2B agroalimentaire à Abou Dhabi",
    "accroche": "Global Premium Events a conduit une délégation d’entreprises marocaines de l’agroalimentaire à Abou Dhabi, pendant la grande semaine internationale de l’alimentation des Émirats, pour des rendez-vous B2B avec des importateurs, distributeurs et acheteurs du Golfe.",
    "pourquoi": [
      {
        "chiffre": "B2B",
        "texte": "rendez-vous avec des importateurs, distributeurs et centrales d’achat du Golfe"
      },
      {
        "chiffre": "Sécurité alimentaire",
        "texte": "priorité stratégique des Émirats, qui importent l’essentiel de leur alimentation"
      },
      {
        "chiffre": "Hub régional",
        "texte": "Abou Dhabi, porte d’entrée vers les marchés du Golfe et de l’Asie"
      }
    ],
    "secteurs": [
      "Agroalimentaire et produits transformés",
      "Fruits, légumes et produits frais",
      "Huile d’olive, dattes et produits du terroir",
      "Produits de la mer",
      "AgriTech et alimentation animale"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "Visa requis pour les ressortissants marocains. GPE accompagne la demande (lettre d’invitation et dossier).",
      "monnaie": "Dirham des Émirats (AED).",
      "autres": "Documents de présentation en anglais (et en arabe si possible) recommandés."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Abou Dhabi et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 4",
        "items": [
          "Grand salon international de l’alimentation : visite et rendez-vous B2B avec acheteurs et distributeurs",
          "Rencontres avec des institutions émiriennes du secteur"
        ]
      },
      {
        "jour": "Jour 5",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "United Arab Emirates",
      "ville": "Abu Dhabi",
      "langue": "English / Arabic",
      "titre": "Food & Agribusiness B2B Mission to Abu Dhabi",
      "accroche": "Global Premium Events led a delegation of Moroccan food and agribusiness companies to Abu Dhabi during the UAE’s major international food week, for B2B meetings with Gulf importers, distributors and buyers.",
      "pourquoi": [
        {
          "chiffre": "B2B",
          "texte": "meetings with Gulf importers, distributors and buying groups"
        },
        {
          "chiffre": "Food security",
          "texte": "a strategic priority for the UAE, which imports most of its food"
        },
        {
          "chiffre": "Regional hub",
          "texte": "Abu Dhabi, a gateway to Gulf and Asian markets"
        }
      ],
      "secteurs": [
        "Food and processed products",
        "Fruit, vegetables and fresh produce",
        "Olive oil, dates and local specialities",
        "Seafood",
        "AgriTech and animal feed"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "Visa required for Moroccan nationals. GPE supports the application (invitation letter and file).",
        "monnaie": "UAE dirham (AED).",
        "autres": "Presentation materials in English (and Arabic if possible) recommended."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Abu Dhabi and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 4",
          "items": [
            "Major international food show: visit and B2B meetings with buyers and distributors",
            "Meetings with UAE institutions in the sector"
          ]
        },
        {
          "jour": "Day 5",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "qatar-investissement-2026",
    "statut": "ouverte",
    "enLigne": true,
    "pays": "Qatar",
    "ville": "Doha",
    "langue": "Anglais",
    "dateDebut": "2026-10-24",
    "dateFin": "2026-10-28",
    "dateLimite": "2026-10-12",
    "places": "limitees",
    "titre": "Mission B2B investissement et finance à Doha",
    "accroche": "Global Premium Events conduit une délégation d’entreprises et de porteurs de projets à Doha, pendant un grand rendez-vous mondial de l’investissement, pour des rencontres B2B avec des investisseurs, fonds et entreprises du Golfe.",
    "pourquoi": [
      {
        "chiffre": "Investisseurs",
        "texte": "fonds, family offices et entreprises du Golfe à la recherche de projets"
      },
      {
        "chiffre": "B2B & B2G",
        "texte": "rendez-vous pré-organisés avec des entreprises et des institutions qatariennes"
      },
      {
        "chiffre": "Doha",
        "texte": "une place financière en forte croissance, tournée vers l’Afrique"
      }
    ],
    "secteurs": [
      "Projets d’investissement et levée de fonds",
      "Énergie et transition énergétique",
      "Infrastructures et immobilier",
      "Économie numérique et FinTech",
      "Agro-industrie et sécurité alimentaire"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "GPE confirme les formalités d’entrée et accompagne les démarches (lettre d’invitation et dossier).",
      "monnaie": "Riyal qatari (QAR).",
      "autres": "Pitch et présentation de projet en anglais recommandés."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Doha et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 4",
        "items": [
          "Grand forum international de l’investissement : sessions et rendez-vous B2B avec investisseurs et fonds",
          "Rencontres institutionnelles sollicitées"
        ]
      },
      {
        "jour": "Jour 5",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "Qatar",
      "ville": "Doha",
      "langue": "English",
      "titre": "Investment & Finance B2B Mission to Doha",
      "accroche": "Global Premium Events is leading a delegation of companies and project promoters to Doha during a major global investment gathering, for B2B meetings with Gulf investors, funds and companies.",
      "pourquoi": [
        {
          "chiffre": "Investors",
          "texte": "Gulf funds, family offices and companies looking for projects"
        },
        {
          "chiffre": "B2B & B2G",
          "texte": "pre-arranged meetings with Qatari companies and institutions"
        },
        {
          "chiffre": "Doha",
          "texte": "a fast-growing financial centre with a focus on Africa"
        }
      ],
      "secteurs": [
        "Investment projects and fundraising",
        "Energy and energy transition",
        "Infrastructure and real estate",
        "Digital economy and FinTech",
        "Agribusiness and food security"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "GPE confirms entry requirements and supports the process (invitation letter and file).",
        "monnaie": "Qatari riyal (QAR).",
        "autres": "Project pitch and presentation in English recommended."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Doha and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 4",
          "items": [
            "Major international investment forum: sessions and B2B meetings with investors and funds",
            "Requested institutional meetings"
          ]
        },
        {
          "jour": "Day 5",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "france-villes-2026",
    "statut": "bientot",
    "enLigne": true,
    "pays": "France",
    "ville": "Paris",
    "langue": "Français",
    "dateDebut": "2026-11-23",
    "dateFin": "2026-11-27",
    "dateLimite": "2026-11-02",
    "places": 15,
    "titre": "Mission B2B villes et services urbains à Paris",
    "accroche": "Global Premium Events conduit une délégation d’entreprises à Paris, pendant le grand rendez-vous annuel des collectivités locales françaises, pour des rencontres B2B et B2G avec des élus, des acheteurs publics et des entreprises de la ville durable.",
    "pourquoi": [
      {
        "chiffre": "B2B & B2G",
        "texte": "rencontres avec des collectivités, acheteurs publics et entreprises françaises"
      },
      {
        "chiffre": "Ville durable",
        "texte": "équipements, services urbains, énergie, eau et mobilité"
      },
      {
        "chiffre": "Partenariats",
        "texte": "coopération décentralisée et projets entre territoires français et africains"
      }
    ],
    "secteurs": [
      "Construction, BTP et aménagement urbain",
      "Eau, énergie et environnement",
      "Mobilité et transport",
      "Smart city et services numériques aux collectivités",
      "Équipements et mobilier urbain"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "Visa Schengen requis pour les ressortissants marocains : à demander au plus tôt. GPE fournit la lettre d’invitation.",
      "monnaie": "Euro (EUR).",
      "autres": "Pays francophone : documents en français."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Paris et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 4",
        "items": [
          "Grand salon international des collectivités : rendez-vous B2B et rencontres avec des élus et acheteurs publics",
          "Rencontres institutionnelles sollicitées"
        ]
      },
      {
        "jour": "Jour 5",
        "items": [
          "Visites d’entreprises et retour"
        ]
      }
    ],
    "en": {
      "pays": "France",
      "ville": "Paris",
      "langue": "French",
      "titre": "Cities & Urban Services B2B Mission to Paris",
      "accroche": "Global Premium Events is leading a delegation of companies to Paris during the annual gathering of French local authorities, for B2B and B2G meetings with elected officials, public buyers and sustainable-city companies.",
      "pourquoi": [
        {
          "chiffre": "B2B & B2G",
          "texte": "meetings with French local authorities, public buyers and companies"
        },
        {
          "chiffre": "Sustainable city",
          "texte": "equipment, urban services, energy, water and mobility"
        },
        {
          "chiffre": "Partnerships",
          "texte": "decentralised cooperation between French and African territories"
        }
      ],
      "secteurs": [
        "Construction and urban development",
        "Water, energy and environment",
        "Mobility and transport",
        "Smart city and digital services for local authorities",
        "Urban equipment and street furniture"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "Schengen visa required for Moroccan nationals: apply as early as possible. GPE provides the invitation letter.",
        "monnaie": "Euro (EUR).",
        "autres": "French-speaking country: documents in French."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Paris and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 4",
          "items": [
            "Major international show for local authorities: B2B meetings with elected officials and public buyers",
            "Requested institutional meetings"
          ]
        },
        {
          "jour": "Day 5",
          "items": [
            "Company visits and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "usa-tech-2026",
    "statut": "bientot",
    "enLigne": true,
    "pays": "États-Unis",
    "ville": "Las Vegas",
    "langue": "Anglais",
    "dateDebut": "2026-11-29",
    "dateFin": "2026-12-05",
    "dateLimite": "2026-11-09",
    "places": 12,
    "titre": "Mission B2B cloud, IA et numérique aux États-Unis",
    "accroche": "Global Premium Events conduit une délégation d’entreprises du numérique à Las Vegas, pendant l’un des plus grands rendez-vous mondiaux du cloud et de l’intelligence artificielle, pour des rencontres B2B avec des éditeurs, intégrateurs et partenaires technologiques.",
    "pourquoi": [
      {
        "chiffre": "Cloud & IA",
        "texte": "les dernières technologies et les grands éditeurs réunis au même endroit"
      },
      {
        "chiffre": "B2B",
        "texte": "rendez-vous avec des partenaires, intégrateurs et investisseurs technologiques"
      },
      {
        "chiffre": "Marché US",
        "texte": "un premier pas vers le premier marché technologique au monde"
      }
    ],
    "secteurs": [
      "Cloud, data et cybersécurité",
      "Intelligence artificielle",
      "Services numériques et ESN",
      "Startups et scale-ups",
      "Télécommunications"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "Visa américain B1/B2 requis. Les délais de rendez-vous consulaires étant longs, cette mission s’adresse aux délégués disposant déjà d’un visa valide.",
      "monnaie": "Dollar américain (USD).",
      "autres": "Présentation et pitch en anglais indispensables."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Las Vegas et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 5",
        "items": [
          "Grand rendez-vous international du cloud et de l’IA : conférences et rendez-vous B2B",
          "Rencontres avec des partenaires et intégrateurs technologiques"
        ]
      },
      {
        "jour": "Jours 6 et 7",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "United States",
      "ville": "Las Vegas",
      "langue": "English",
      "titre": "Cloud, AI & Digital B2B Mission to the United States",
      "accroche": "Global Premium Events is leading a delegation of digital companies to Las Vegas during one of the world’s largest cloud and artificial intelligence gatherings, for B2B meetings with software vendors, integrators and technology partners.",
      "pourquoi": [
        {
          "chiffre": "Cloud & AI",
          "texte": "the latest technologies and leading vendors in one place"
        },
        {
          "chiffre": "B2B",
          "texte": "meetings with technology partners, integrators and investors"
        },
        {
          "chiffre": "US market",
          "texte": "a first step into the world’s largest technology market"
        }
      ],
      "secteurs": [
        "Cloud, data and cybersecurity",
        "Artificial intelligence",
        "Digital services and IT consulting",
        "Startups and scale-ups",
        "Telecommunications"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "US B1/B2 visa required. As consular appointments take time, this mission is for delegates who already hold a valid visa.",
        "monnaie": "US dollar (USD).",
        "autres": "Presentation and pitch in English essential."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Las Vegas and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 5",
          "items": [
            "Major international cloud and AI gathering: conferences and B2B meetings",
            "Meetings with technology partners and integrators"
          ]
        },
        {
          "jour": "Days 6 and 7",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "emirats-tech-2026",
    "statut": "bientot",
    "enLigne": true,
    "pays": "Émirats arabes unis",
    "ville": "Dubaï",
    "langue": "Anglais",
    "dateDebut": "2026-12-06",
    "dateFin": "2026-12-11",
    "dateLimite": "2026-11-16",
    "places": 15,
    "titre": "Mission B2B technologies et startups à Dubaï",
    "accroche": "Global Premium Events conduit une délégation d’entreprises technologiques et de startups à Dubaï, pendant le plus grand salon technologique de la région, pour des rencontres B2B avec des investisseurs, des grands groupes et des partenaires du Golfe.",
    "pourquoi": [
      {
        "chiffre": "Tech & startups",
        "texte": "le plus grand rassemblement technologique du Moyen-Orient et de l’Afrique"
      },
      {
        "chiffre": "B2B",
        "texte": "rendez-vous avec des investisseurs, grands comptes et partenaires du Golfe"
      },
      {
        "chiffre": "Dubaï",
        "texte": "plateforme de lancement vers les marchés du Golfe, d’Asie et d’Afrique"
      }
    ],
    "secteurs": [
      "Intelligence artificielle et data",
      "Cybersécurité",
      "FinTech et paiements",
      "Smart city et mobilité",
      "Startups et investissement"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "Visa requis pour les ressortissants marocains. GPE accompagne la demande (lettre d’invitation et dossier).",
      "monnaie": "Dirham des Émirats (AED).",
      "autres": "Pitch et présentation en anglais indispensables."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Dubaï et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 5",
        "items": [
          "Grand salon international de la technologie : visite, conférences et rendez-vous B2B",
          "Rencontres avec des investisseurs et des institutions sollicitées"
        ]
      },
      {
        "jour": "Jour 6",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "United Arab Emirates",
      "ville": "Dubai",
      "langue": "English",
      "titre": "Technology & Startups B2B Mission to Dubai",
      "accroche": "Global Premium Events is leading a delegation of technology companies and startups to Dubai during the region’s largest technology show, for B2B meetings with Gulf investors, corporates and partners.",
      "pourquoi": [
        {
          "chiffre": "Tech & startups",
          "texte": "the largest technology gathering in the Middle East and Africa"
        },
        {
          "chiffre": "B2B",
          "texte": "meetings with Gulf investors, key accounts and partners"
        },
        {
          "chiffre": "Dubai",
          "texte": "a launchpad to Gulf, Asian and African markets"
        }
      ],
      "secteurs": [
        "Artificial intelligence and data",
        "Cybersecurity",
        "FinTech and payments",
        "Smart city and mobility",
        "Startups and investment"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "Visa required for Moroccan nationals. GPE supports the application (invitation letter and file).",
        "monnaie": "UAE dirham (AED).",
        "autres": "Pitch and presentation in English essential."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Dubai and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 5",
          "items": [
            "Major international technology show: visit, conferences and B2B meetings",
            "Requested meetings with investors and institutions"
          ]
        },
        {
          "jour": "Day 6",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "qatar-investissement-2025",
    "statut": "terminee",
    "enLigne": true,
    "pays": "Qatar",
    "ville": "Doha",
    "langue": "Anglais",
    "dateDebut": "2025-05-19",
    "dateFin": "2025-05-23",
    "dateLimite": "2025-05-02",
    "places": "limitees",
    "titre": "Mission B2B investissement à Doha",
    "accroche": "Global Premium Events a conduit une délégation d’entreprises à Doha, pendant un grand forum économique international, pour des rencontres B2B avec des investisseurs et des entreprises qatariennes.",
    "pourquoi": [
      {
        "chiffre": "Investisseurs",
        "texte": "fonds et entreprises du Golfe"
      },
      {
        "chiffre": "B2B & B2G",
        "texte": "rencontres avec des entreprises et institutions qatariennes"
      }
    ],
    "secteurs": [
      "Investissement et finance",
      "Énergie",
      "Infrastructures",
      "Économie numérique"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "GPE confirme les formalités d’entrée et accompagne les démarches (lettre d’invitation et dossier).",
      "monnaie": "Riyal qatari (QAR).",
      "autres": "Documents de présentation en anglais recommandés."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Doha et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 4",
        "items": [
          "Grand forum économique international : rendez-vous B2B",
          "Rencontres institutionnelles sollicitées"
        ]
      },
      {
        "jour": "Jour 5",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "Qatar",
      "ville": "Doha",
      "langue": "English",
      "titre": "Investment B2B Mission to Doha",
      "accroche": "Global Premium Events led a business delegation to Doha during a major international economic forum, for B2B meetings with Qatari investors and companies.",
      "pourquoi": [
        {
          "chiffre": "Investors",
          "texte": "Gulf funds and companies"
        },
        {
          "chiffre": "B2B & B2G",
          "texte": "meetings with Qatari companies and institutions"
        }
      ],
      "secteurs": [
        "Investment and finance",
        "Energy",
        "Infrastructure",
        "Digital economy"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "GPE confirms entry requirements and supports the process (invitation letter and file).",
        "monnaie": "Qatari riyal (QAR).",
        "autres": "Presentation materials in English recommended."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Doha and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 4",
          "items": [
            "Major international economic forum: B2B meetings",
            "Requested institutional meetings"
          ]
        },
        {
          "jour": "Day 5",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "arabie-saoudite-investissement-2025",
    "statut": "terminee",
    "enLigne": true,
    "pays": "Arabie saoudite",
    "ville": "Riyad",
    "langue": "Anglais / Arabe",
    "dateDebut": "2025-10-26",
    "dateFin": "2025-10-31",
    "dateLimite": "2025-10-08",
    "places": "limitees",
    "titre": "Mission B2B investissement à Riyad",
    "accroche": "Global Premium Events a conduit une délégation d’entreprises à Riyad, pendant le grand rendez-vous international de l’investissement du Royaume, pour des rencontres B2B avec des investisseurs, fonds et entreprises saoudiennes.",
    "pourquoi": [
      {
        "chiffre": "Vision 2030",
        "texte": "des investissements massifs dans tous les secteurs"
      },
      {
        "chiffre": "B2B & B2G",
        "texte": "rencontres avec des entreprises, fonds et institutions saoudiennes"
      }
    ],
    "secteurs": [
      "Investissement et fonds",
      "Énergie et industrie",
      "Infrastructures et immobilier",
      "Technologies et IA"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "Visa requis pour les ressortissants marocains. GPE accompagne la demande (lettre d’invitation et dossier).",
      "monnaie": "Riyal saoudien (SAR).",
      "autres": "Documents de présentation en anglais recommandés."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Riyad et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 5",
        "items": [
          "Grand forum international de l’investissement : rendez-vous B2B",
          "Rencontres institutionnelles sollicitées"
        ]
      },
      {
        "jour": "Jour 6",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "Saudi Arabia",
      "ville": "Riyadh",
      "langue": "English / Arabic",
      "titre": "Investment B2B Mission to Riyadh",
      "accroche": "Global Premium Events led a business delegation to Riyadh during the Kingdom’s major international investment gathering, for B2B meetings with Saudi investors, funds and companies.",
      "pourquoi": [
        {
          "chiffre": "Vision 2030",
          "texte": "massive investment across all sectors"
        },
        {
          "chiffre": "B2B & B2G",
          "texte": "meetings with Saudi companies, funds and institutions"
        }
      ],
      "secteurs": [
        "Investment and funds",
        "Energy and industry",
        "Infrastructure and real estate",
        "Technology and AI"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "Visa required for Moroccan nationals. GPE supports the application (invitation letter and file).",
        "monnaie": "Saudi riyal (SAR).",
        "autres": "Presentation materials in English recommended."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Riyadh and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 5",
          "items": [
            "Major international investment forum: B2B meetings",
            "Requested institutional meetings"
          ]
        },
        {
          "jour": "Day 6",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "emirats-energie-2025",
    "statut": "terminee",
    "enLigne": true,
    "pays": "Émirats arabes unis",
    "ville": "Abou Dhabi",
    "langue": "Anglais / Arabe",
    "dateDebut": "2025-11-02",
    "dateFin": "2025-11-07",
    "dateLimite": "2025-10-15",
    "places": "limitees",
    "titre": "Mission B2B énergie à Abou Dhabi",
    "accroche": "Global Premium Events a conduit une délégation d’entreprises de l’énergie à Abou Dhabi, pendant le plus grand salon mondial de l’énergie, pour des rencontres B2B avec des opérateurs, sous-traitants et fournisseurs.",
    "pourquoi": [
      {
        "chiffre": "Énergie",
        "texte": "pétrole, gaz, renouvelables et hydrogène réunis"
      },
      {
        "chiffre": "B2B",
        "texte": "rencontres avec des opérateurs, EPC et fournisseurs du Golfe"
      }
    ],
    "secteurs": [
      "Pétrole et gaz",
      "Énergies renouvelables",
      "Hydrogène",
      "Services et équipements industriels"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "Visa requis pour les ressortissants marocains. GPE accompagne la demande (lettre d’invitation et dossier).",
      "monnaie": "Dirham des Émirats (AED).",
      "autres": "Documents de présentation en anglais recommandés."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Abou Dhabi et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 5",
        "items": [
          "Grand salon international de l’énergie : rendez-vous B2B",
          "Rencontres institutionnelles sollicitées"
        ]
      },
      {
        "jour": "Jour 6",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "United Arab Emirates",
      "ville": "Abu Dhabi",
      "langue": "English / Arabic",
      "titre": "Energy B2B Mission to Abu Dhabi",
      "accroche": "Global Premium Events led a delegation of energy companies to Abu Dhabi during the world’s largest energy show, for B2B meetings with operators, contractors and suppliers.",
      "pourquoi": [
        {
          "chiffre": "Energy",
          "texte": "oil, gas, renewables and hydrogen in one place"
        },
        {
          "chiffre": "B2B",
          "texte": "meetings with Gulf operators, EPC contractors and suppliers"
        }
      ],
      "secteurs": [
        "Oil and gas",
        "Renewable energy",
        "Hydrogen",
        "Industrial services and equipment"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "Visa required for Moroccan nationals. GPE supports the application (invitation letter and file).",
        "monnaie": "UAE dirham (AED).",
        "autres": "Presentation materials in English recommended."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Abu Dhabi and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 5",
          "items": [
            "Major international energy show: B2B meetings",
            "Requested institutional meetings"
          ]
        },
        {
          "jour": "Day 6",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "arabie-saoudite-immobilier-2025",
    "statut": "terminee",
    "enLigne": true,
    "pays": "Arabie saoudite",
    "ville": "Riyad",
    "langue": "Anglais / Arabe",
    "dateDebut": "2025-11-16",
    "dateFin": "2025-11-21",
    "dateLimite": "2025-10-30",
    "places": "limitees",
    "titre": "Mission B2B immobilier et construction à Riyad",
    "accroche": "Global Premium Events a conduit une délégation d’entreprises de l’immobilier et de la construction à Riyad, pendant le grand salon international de l’immobilier du Royaume, pour des rencontres B2B avec promoteurs et donneurs d’ordre.",
    "pourquoi": [
      {
        "chiffre": "Giga-projets",
        "texte": "des programmes immobiliers et urbains sans précédent"
      },
      {
        "chiffre": "B2B",
        "texte": "rencontres avec promoteurs, développeurs et donneurs d’ordre"
      }
    ],
    "secteurs": [
      "Promotion immobilière",
      "BTP et matériaux",
      "Architecture et design",
      "PropTech"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "Visa requis pour les ressortissants marocains. GPE accompagne la demande (lettre d’invitation et dossier).",
      "monnaie": "Riyal saoudien (SAR).",
      "autres": "Documents de présentation en anglais recommandés."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Riyad et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 5",
        "items": [
          "Grand salon international de l’immobilier : rendez-vous B2B",
          "Rencontres institutionnelles sollicitées"
        ]
      },
      {
        "jour": "Jour 6",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "Saudi Arabia",
      "ville": "Riyadh",
      "langue": "English / Arabic",
      "titre": "Real Estate & Construction B2B Mission to Riyadh",
      "accroche": "Global Premium Events led a delegation of real estate and construction companies to Riyadh during the Kingdom’s major international real estate show, for B2B meetings with developers and contractors.",
      "pourquoi": [
        {
          "chiffre": "Giga-projects",
          "texte": "unprecedented real estate and urban programmes"
        },
        {
          "chiffre": "B2B",
          "texte": "meetings with developers and contractors"
        }
      ],
      "secteurs": [
        "Real estate development",
        "Construction and materials",
        "Architecture and design",
        "PropTech"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "Visa required for Moroccan nationals. GPE supports the application (invitation letter and file).",
        "monnaie": "Saudi riyal (SAR).",
        "autres": "Presentation materials in English recommended."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Riyadh and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 5",
          "items": [
            "Major international real estate show: B2B meetings",
            "Requested institutional meetings"
          ]
        },
        {
          "jour": "Day 6",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "emirats-agroalimentaire-dubai-2026",
    "statut": "terminee",
    "enLigne": true,
    "pays": "Émirats arabes unis",
    "ville": "Dubaï",
    "langue": "Anglais / Arabe",
    "dateDebut": "2026-01-25",
    "dateFin": "2026-01-31",
    "dateLimite": "2026-01-08",
    "places": "limitees",
    "titre": "Mission B2B agroalimentaire à Dubaï",
    "accroche": "Global Premium Events a conduit une délégation d’entreprises agroalimentaires à Dubaï, pendant le plus grand salon mondial de l’alimentation et des boissons, pour des rencontres B2B avec importateurs, distributeurs et acheteurs.",
    "pourquoi": [
      {
        "chiffre": "Acheteurs",
        "texte": "importateurs, distributeurs et grande distribution du Golfe"
      },
      {
        "chiffre": "Export",
        "texte": "une vitrine vers le Moyen-Orient, l’Asie et l’Afrique"
      }
    ],
    "secteurs": [
      "Agroalimentaire et boissons",
      "Produits frais",
      "Huile d’olive, dattes et terroir",
      "Emballage et ingrédients"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "Visa requis pour les ressortissants marocains. GPE accompagne la demande (lettre d’invitation et dossier).",
      "monnaie": "Dirham des Émirats (AED).",
      "autres": "Documents de présentation en anglais recommandés."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Dubaï et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 6",
        "items": [
          "Grand salon international de l’alimentation : rendez-vous B2B",
          "Rencontres institutionnelles sollicitées"
        ]
      },
      {
        "jour": "Jour 7",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "United Arab Emirates",
      "ville": "Dubai",
      "langue": "English / Arabic",
      "titre": "Food & Beverage B2B Mission to Dubai",
      "accroche": "Global Premium Events led a delegation of food companies to Dubai during the world’s largest food and beverage show, for B2B meetings with importers, distributors and buyers.",
      "pourquoi": [
        {
          "chiffre": "Buyers",
          "texte": "Gulf importers, distributors and retailers"
        },
        {
          "chiffre": "Export",
          "texte": "a showcase to the Middle East, Asia and Africa"
        }
      ],
      "secteurs": [
        "Food and beverages",
        "Fresh produce",
        "Olive oil, dates and local specialities",
        "Packaging and ingredients"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "Visa required for Moroccan nationals. GPE supports the application (invitation letter and file).",
        "monnaie": "UAE dirham (AED).",
        "autres": "Presentation materials in English recommended."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Dubai and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 6",
          "items": [
            "Major international food show: B2B meetings",
            "Requested institutional meetings"
          ]
        },
        {
          "jour": "Day 7",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "emirats-sante-2026",
    "statut": "terminee",
    "enLigne": true,
    "pays": "Émirats arabes unis",
    "ville": "Dubaï",
    "langue": "Anglais / Arabe",
    "dateDebut": "2026-02-08",
    "dateFin": "2026-02-13",
    "dateLimite": "2026-01-22",
    "places": "limitees",
    "titre": "Mission B2B santé à Dubaï",
    "accroche": "Global Premium Events a conduit une délégation d’entreprises de la santé à Dubaï, pendant le grand salon international de la santé de la région, pour des rencontres B2B avec hôpitaux, distributeurs et acheteurs.",
    "pourquoi": [
      {
        "chiffre": "Santé",
        "texte": "équipements, dispositifs médicaux et services réunis"
      },
      {
        "chiffre": "B2B",
        "texte": "rencontres avec hôpitaux, distributeurs et acheteurs du Golfe"
      }
    ],
    "secteurs": [
      "Dispositifs médicaux",
      "Pharmacie",
      "Laboratoires et diagnostic",
      "Santé numérique"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "Visa requis pour les ressortissants marocains. GPE accompagne la demande (lettre d’invitation et dossier).",
      "monnaie": "Dirham des Émirats (AED).",
      "autres": "Documents de présentation en anglais recommandés."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Dubaï et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 5",
        "items": [
          "Grand salon international de la santé : rendez-vous B2B",
          "Rencontres institutionnelles sollicitées"
        ]
      },
      {
        "jour": "Jour 6",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "United Arab Emirates",
      "ville": "Dubai",
      "langue": "English / Arabic",
      "titre": "Healthcare B2B Mission to Dubai",
      "accroche": "Global Premium Events led a delegation of healthcare companies to Dubai during the region’s major international health show, for B2B meetings with hospitals, distributors and buyers.",
      "pourquoi": [
        {
          "chiffre": "Healthcare",
          "texte": "equipment, medical devices and services in one place"
        },
        {
          "chiffre": "B2B",
          "texte": "meetings with Gulf hospitals, distributors and buyers"
        }
      ],
      "secteurs": [
        "Medical devices",
        "Pharmaceuticals",
        "Laboratories and diagnostics",
        "Digital health"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "Visa required for Moroccan nationals. GPE supports the application (invitation letter and file).",
        "monnaie": "UAE dirham (AED).",
        "autres": "Presentation materials in English recommended."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Dubai and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 5",
          "items": [
            "Major international health show: B2B meetings",
            "Requested institutional meetings"
          ]
        },
        {
          "jour": "Day 6",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "arabie-saoudite-tech-2026",
    "statut": "terminee",
    "enLigne": true,
    "pays": "Arabie saoudite",
    "ville": "Riyad",
    "langue": "Anglais / Arabe",
    "dateDebut": "2026-08-30",
    "dateFin": "2026-09-04",
    "dateLimite": "2026-08-12",
    "places": "limitees",
    "titre": "Mission B2B technologies et IA à Riyad",
    "accroche": "Global Premium Events a conduit une délégation d’entreprises technologiques à Riyad, pendant le grand salon international de la technologie du Royaume, pour des rencontres B2B avec investisseurs, grands groupes et partenaires.",
    "pourquoi": [
      {
        "chiffre": "IA & tech",
        "texte": "un marché en très forte croissance"
      },
      {
        "chiffre": "B2B",
        "texte": "rencontres avec investisseurs, grands comptes et partenaires saoudiens"
      }
    ],
    "secteurs": [
      "Intelligence artificielle",
      "Cloud et data",
      "Cybersécurité",
      "Startups"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "Visa requis pour les ressortissants marocains. GPE accompagne la demande (lettre d’invitation et dossier).",
      "monnaie": "Riyal saoudien (SAR).",
      "autres": "Documents de présentation en anglais recommandés."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Riyad et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 5",
        "items": [
          "Grand salon international de la technologie : rendez-vous B2B",
          "Rencontres institutionnelles sollicitées"
        ]
      },
      {
        "jour": "Jour 6",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "Saudi Arabia",
      "ville": "Riyadh",
      "langue": "English / Arabic",
      "titre": "Technology & AI B2B Mission to Riyadh",
      "accroche": "Global Premium Events led a delegation of technology companies to Riyadh during the Kingdom’s major international technology show, for B2B meetings with investors, corporates and partners.",
      "pourquoi": [
        {
          "chiffre": "AI & tech",
          "texte": "a fast-growing market"
        },
        {
          "chiffre": "B2B",
          "texte": "meetings with Saudi investors, key accounts and partners"
        }
      ],
      "secteurs": [
        "Artificial intelligence",
        "Cloud and data",
        "Cybersecurity",
        "Startups"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "Visa required for Moroccan nationals. GPE supports the application (invitation letter and file).",
        "monnaie": "Saudi riyal (SAR).",
        "autres": "Presentation materials in English recommended."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Riyadh and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 5",
          "items": [
            "Major international technology show: B2B meetings",
            "Requested institutional meetings"
          ]
        },
        {
          "jour": "Day 6",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    "id": "arabie-saoudite-immobilier-2026",
    "statut": "bientot",
    "enLigne": true,
    "pays": "Arabie saoudite",
    "ville": "Riyad",
    "langue": "Anglais / Arabe",
    "dateDebut": "2026-11-15",
    "dateFin": "2026-11-20",
    "dateLimite": "2026-11-02",
    "places": 15,
    "titre": "Mission B2B immobilier et construction à Riyad",
    "accroche": "Global Premium Events conduit une délégation d’entreprises de l’immobilier et de la construction à Riyad, pendant le grand salon international de l’immobilier du Royaume, pour des rencontres B2B avec promoteurs, développeurs et donneurs d’ordre.",
    "pourquoi": [
      {
        "chiffre": "Giga-projets",
        "texte": "des programmes immobiliers et urbains sans précédent"
      },
      {
        "chiffre": "B2B",
        "texte": "rencontres avec promoteurs, développeurs et donneurs d’ordre"
      },
      {
        "chiffre": "Vision 2030",
        "texte": "une demande forte en matériaux, services et savoir-faire"
      }
    ],
    "secteurs": [
      "Promotion immobilière",
      "BTP et matériaux",
      "Architecture et design",
      "PropTech"
    ],
    "prix": {
      "devise": "MAD",
      "mention": "Prix par entreprise, hors taxes (TVA 20 % en sus), hors billet d’avion et hébergement. Badge d’accès au salon inclus."
    },
    "formules": [
      {
        "id": "delegation",
        "nom": "Forfait Délégation",
        "prix": null,
        "prixSup": null,
        "places": 10,
        "recommande": false
      },
      {
        "id": "business",
        "nom": "Forfait Business",
        "prix": null,
        "prixSup": null,
        "places": null,
        "recommande": true
      },
      {
        "id": "executive",
        "nom": "Forfait Executive",
        "prix": null,
        "prixSup": null,
        "places": 3,
        "recommande": false
      }
    ],
    "comparatif": [
      {
        "groupe": "Accès et rendez-vous",
        "lignes": [
          [
            "Badge d’accès au grand salon international du pays hôte",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Intégration à la délégation d’affaires marocaine et briefing pays",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Rendez-vous B2B",
            "Rencontres de networking",
            "Agenda B2B qualifié selon votre profil",
            "Agenda B2B garanti (8 rendez-vous minimum)"
          ],
          [
            "Rencontres B2G (institutions)",
            "-",
            "Sollicitées",
            "Organisées pour votre secteur"
          ],
          [
            "Dîner de networking de la délégation",
            "Y",
            "Y",
            "Y"
          ]
        ]
      },
      {
        "groupe": "Logistique et assistance",
        "lignes": [
          [
            "Assistance visa (lettre d’invitation et dossier)",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Transferts et navette de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Assistance",
            "Coordination de groupe",
            "Assistant dédié",
            "Assistant personnel et interprète"
          ]
        ]
      },
      {
        "groupe": "Visibilité et suivi",
        "lignes": [
          [
            "Photos de groupe de la délégation",
            "Y",
            "Y",
            "Y"
          ],
          [
            "Photographe dédié à vos rendez-vous",
            "-",
            "Y",
            "Y"
          ],
          [
            "Programme personnalisé selon vos objectifs",
            "-",
            "-",
            "Y"
          ],
          [
            "Suivi de vos contacts à J+30",
            "-",
            "Y",
            "Y"
          ]
        ]
      }
    ],
    "nonCompris": "Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.",
    "conditions": [
      "Inscription confirmée à réception du paiement intégral, au plus tard à la date de clôture.",
      "Places attribuées par ordre de réception des paiements.",
      "Remboursement intégral si la mission est annulée par l’organisateur."
    ],
    "pratique": {
      "visa": "Visa requis pour les ressortissants marocains. GPE accompagne la demande (lettre d’invitation et dossier).",
      "monnaie": "Riyal saoudien (SAR).",
      "autres": "Documents de présentation en anglais recommandés."
    },
    "programme": [
      {
        "jour": "Jour 1",
        "items": [
          "Arrivée à Riyad et briefing de la délégation"
        ]
      },
      {
        "jour": "Jours 2 à 5",
        "items": [
          "Grand salon international de l’immobilier : rendez-vous B2B",
          "Rencontres institutionnelles sollicitées"
        ]
      },
      {
        "jour": "Jour 6",
        "items": [
          "Rendez-vous complémentaires et retour"
        ]
      }
    ],
    "en": {
      "pays": "Saudi Arabia",
      "ville": "Riyadh",
      "langue": "English / Arabic",
      "titre": "Real Estate & Construction B2B Mission to Riyadh",
      "accroche": "Global Premium Events is leading a delegation of real estate and construction companies to Riyadh during the Kingdom’s major international real estate show, for B2B meetings with developers and contractors.",
      "pourquoi": [
        {
          "chiffre": "Giga-projects",
          "texte": "unprecedented real estate and urban programmes"
        },
        {
          "chiffre": "B2B",
          "texte": "meetings with developers and contractors"
        },
        {
          "chiffre": "Vision 2030",
          "texte": "strong demand for materials, services and expertise"
        }
      ],
      "secteurs": [
        "Real estate development",
        "Construction and materials",
        "Architecture and design",
        "PropTech"
      ],
      "prix": {
        "mention": "Price per company, excluding VAT (20% VAT applies), excluding flights and accommodation. Show access badge included."
      },
      "formules": [
        {
          "nom": "Delegation Package"
        },
        {
          "nom": "Business Package"
        },
        {
          "nom": "Executive Package"
        }
      ],
      "comparatif": [
        {
          "groupe": "Access and meetings",
          "lignes": [
            [
              "Access badge to the host country’s major international show",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Membership of the Moroccan business delegation and country briefing",
              "Y",
              "Y",
              "Y"
            ],
            [
              "B2B meetings",
              "Networking sessions",
              "Qualified B2B agenda based on your profile",
              "Guaranteed B2B agenda (minimum 8 meetings)"
            ],
            [
              "B2G meetings (institutions)",
              "-",
              "Requested",
              "Arranged for your sector"
            ],
            [
              "Delegation networking dinner",
              "Y",
              "Y",
              "Y"
            ]
          ]
        },
        {
          "groupe": "Logistics and assistance",
          "lignes": [
            [
              "Visa assistance (invitation letter and file)",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Transfers and delegation shuttle",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Assistance",
              "Group coordination",
              "Dedicated assistant",
              "Personal assistant and interpreter"
            ]
          ]
        },
        {
          "groupe": "Visibility and follow-up",
          "lignes": [
            [
              "Delegation group photos",
              "Y",
              "Y",
              "Y"
            ],
            [
              "Photographer dedicated to your meetings",
              "-",
              "Y",
              "Y"
            ],
            [
              "Personalised programme based on your objectives",
              "-",
              "-",
              "Y"
            ],
            [
              "Follow-up of your contacts at D+30",
              "-",
              "Y",
              "Y"
            ]
          ]
        }
      ],
      "nonCompris": "Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.",
      "conditions": [
        "Registration is confirmed upon receipt of full payment, no later than the closing date.",
        "Places are allocated in order of payment received.",
        "Full refund if the mission is cancelled by the organiser."
      ],
      "pratique": {
        "visa": "Visa required for Moroccan nationals. GPE supports the application (invitation letter and file).",
        "monnaie": "Saudi riyal (SAR).",
        "autres": "Presentation materials in English recommended."
      },
      "programme": [
        {
          "jour": "Day 1",
          "items": [
            "Arrival in Riyadh and delegation briefing"
          ]
        },
        {
          "jour": "Days 2 to 5",
          "items": [
            "Major international real estate show: B2B meetings",
            "Requested institutional meetings"
          ]
        },
        {
          "jour": "Day 6",
          "items": [
            "Additional meetings and return"
          ]
        }
      ]
    }
  }
  ,
  /* ------------------------------------------------------------------ */
  {
    id: 'belgique-climat-2026',
    statut: 'ouverte',
    enLigne: true,
    surDemande: true,                 // pas de prix en ligne : contact pour les détails (mission et sponsoring)
    pays: 'Belgique',
    ville: 'Bruxelles',
    langue: 'Français',
    dateDebut: '2026-12-07',
    dateFin: '2026-12-09',
    dateLimite: '2026-11-23',
    places: 'limitees',
    pourquoiTitre: 'Pourquoi participer',
    secteursTitre: 'Thématiques des Rencontres',
    titre: 'Mission B2B et sponsoring — Rencontres « Solutions numériques pour le climat » Bruxelles 2026',
    accroche: 'Global Premium Events conduit une délégation d’entreprises à Bruxelles pour la 2e édition des Rencontres « Solutions numériques pour le climat : la Francophonie en action », organisées par le Groupement du Patronat Francophone au Conseil central de l’économie, et propose aux entreprises des offres de sponsoring pour y gagner en visibilité.',

    evenement: {
      nom: 'Rencontres « Solutions numériques pour le climat : la Francophonie en action » — 2e édition',
      organisateur: 'Groupement du Patronat Francophone (GPF)',
      dates: '8 décembre 2026',
      lieu: 'Conseil central de l’économie, Bruxelles',
      slogan: 'Après le Sénat à Paris, Bruxelles ouvre un nouveau chapitre, au cœur des décisions européennes.',
      theme: 'Qui finance la transition, qui en fixe les règles, et comment en faire un levier de croissance et de compétitivité pour les entreprises francophones ?',
      description: 'Une rencontre économique de haut niveau qui réunit dirigeants d’entreprises, responsables institutionnels européens, organisations patronales, investisseurs et experts. Accueil par Benoît Bayenet, Président du Conseil central de l’économie de Belgique ; clôture par David Clarinval, Vice-Premier ministre et ministre de l’Emploi, de l’Économie et de l’Agriculture de Belgique.',
      lien: 'https://www.gpf-int.org'
    },

    pourquoi: [
      { chiffre: '60', texte: 'organisations patronales membres du GPF, sur 5 continents' },
      { chiffre: '1,5 M', texte: 'd’entreprises représentées dans l’espace francophone' },
      { chiffre: '3', texte: 'tables rondes : retour sur investissement, réglementation européenne, financements' },
      { chiffre: 'B2B', texte: 'rendez-vous avec des entreprises, investisseurs et institutions francophones et européens' }
    ],

    secteurs: [
      'Numérique et intelligence artificielle',
      'Technologies vertes et économie circulaire',
      'Énergie et efficacité énergétique',
      'Finance verte et investissement',
      'Données, reporting et traçabilité',
      'Conseil et services aux entreprises'
    ],

    // Offres de sponsoring : contenu affiché, montants communiqués sur demande
    sponsoring: {
      titre: 'Offres de sponsoring',
      intro: 'Trois formules pour associer votre entreprise aux Rencontres et rencontrer les décideurs présents. Les conditions sont communiquées sur demande.',
      niveaux: [
        { nom: 'Partenaire', avantages: ['Logo sur le document officiel et pendant l’événement'] },
        { nom: 'Partenaire Table ronde', avantages: ['Logo sur le document officiel et pendant l’événement', 'Participation à une table ronde comme intervenant'] },
        { nom: 'Partenaire Premium', recommande: true, avantages: ['Logo sur le document officiel et pendant l’événement', 'Participation à une table ronde comme intervenant', 'Rendez-vous individuel de 5 à 10 minutes avec le Vice-Premier ministre et ministre de l’Emploi, de l’Économie et de l’Agriculture de Belgique'] }
      ],
      cta: 'Contactez-nous pour recevoir les conditions'
    },

    prix: {
      devise: 'EUR',
      mention: 'Conditions communiquées sur demande.'
    },

    formules: [
      { id: 'delegation', nom: 'Délégation B2B', prix: null, prixSup: null, places: null, recommande: true }
    ],
    comparatif: [
      { groupe: 'Ce que comprend la mission', lignes: [
        ['Accès aux Rencontres du 8 décembre au Conseil central de l’économie', 'Y'],
        ['Intégration à la délégation et briefing avant le départ', 'Y'],
        ['Agenda de rendez-vous B2B qualifié selon votre profil', 'Y'],
        ['Rencontres institutionnelles (sollicitées)', 'Y'],
        ['Accompagnement sur place par l’équipe GPE', 'Y']
      ] }
    ],

    nonCompris: 'Billet d’avion, hébergement, visa et dépenses personnelles.',

    pratique: {
      vol: 'Vols directs Casablanca – Bruxelles (environ 3 h).',
      hotel: 'Hôtel de délégation à Bruxelles, tarif négocié communiqué avec l’offre.',
      visa: 'Visa Schengen requis pour les ressortissants marocains : prévoir la demande au moins 4 semaines avant le départ. Lettre d’invitation disponible pour les délégués inscrits.',
      monnaie: 'Euro (EUR).',
      autres: 'Rencontres en français. Documents de présentation en français recommandés.'
    },

    programme: [
      { jour: 'Lundi 7 décembre', items: ['Arrivée à Bruxelles', 'Soir : briefing de la délégation'] },
      { jour: 'Mardi 8 décembre', items: ['Rencontres « Solutions numériques pour le climat » au Conseil central de l’économie', 'Accueil par Benoît Bayenet, Président du Conseil central de l’économie de Belgique', 'Table ronde 1 : numérique et transition climatique, quel retour sur investissement pour les entreprises ?', 'Table ronde 2 : numérique et climat, entre réglementation européenne et réalité opérationnelle', 'Table ronde 3 : comment transformer les ambitions européennes en opportunités pour les entreprises francophones ?', 'Clôture par David Clarinval, Vice-Premier ministre de Belgique', 'Networking'] },
      { jour: 'Mercredi 9 décembre', items: ['Rendez-vous B2B et rencontres institutionnelles (sollicitées)', 'Retour'] }
    ],

    reference: {
      image: '/missions/img/belgique-climat-2025-senat.webp',
      surtitre: 'Première édition',
      titre: 'Lancée au Sénat, à Paris',
      textes: [
        'La première édition s’est tenue au Sénat le 29 septembre 2025. Elle a réuni décideurs publics, dirigeants d’entreprises, institutions et experts de tout l’espace francophone, dont le ministre français chargé de la Francophonie.',
        'Trois enjeux y ont été traités : intelligence artificielle et environnement, technologies vertes et économie circulaire, finance verte et transformation numérique.'
      ],
      legende: 'Sénat, Paris — 1re édition, 29 septembre 2025.'
    },

    image: '/missions/img/belgique-climat-2026-affiche.webp',
    couleurs: { fonce: '#1F3D7A', principal: '#2E5AA8', accent: '#F2C500', rouge: '#E52630' },

    en: {
      pourquoiTitre: 'Why take part',
      secteursTitre: 'Themes of the meetings',
      pays: 'Belgium',
      ville: 'Brussels',
      langue: 'French',
      titre: 'B2B Mission and Sponsorship — “Digital Solutions for the Climate” Meetings, Brussels 2026',
      accroche: 'Global Premium Events is leading a business delegation to Brussels for the 2nd edition of the “Digital Solutions for the Climate: La Francophonie in Action” meetings, organised by the Groupement du Patronat Francophone at the Central Council of the Economy, and offers companies sponsorship packages to gain visibility there.',
      evenement: {
        nom: '“Digital Solutions for the Climate: La Francophonie in Action” — 2nd edition',
        organisateur: 'Groupement du Patronat Francophone (GPF)',
        dates: '8 December 2026',
        lieu: 'Central Council of the Economy, Brussels',
        slogan: 'After the French Senate in Paris, Brussels opens a new chapter at the heart of European decision-making.',
        theme: 'Who finances the transition, who sets the rules, and how can it become a lever for growth and competitiveness for French-speaking businesses?',
        description: 'A high-level business meeting bringing together business leaders, European officials, employers’ organisations, investors and experts. Welcome by Benoît Bayenet, President of Belgium’s Central Council of the Economy; closing by David Clarinval, Deputy Prime Minister and Minister of Employment, Economy and Agriculture of Belgium.'
      },
      pourquoi: [
        { chiffre: '60', texte: 'employers’ organisations in the GPF network, across 5 continents' },
        { chiffre: '1.5 M', texte: 'companies represented across the French-speaking world' },
        { chiffre: '3', texte: 'round tables: return on investment, EU regulation, financing' },
        { chiffre: 'B2B', texte: 'meetings with French-speaking and European companies, investors and institutions' }
      ],
      secteurs: ['Digital and artificial intelligence', 'Green technologies and circular economy', 'Energy and energy efficiency', 'Green finance and investment', 'Data, reporting and traceability', 'Business consulting and services'],
      sponsoring: {
        titre: 'Sponsorship opportunities',
        intro: 'Three packages to associate your company with the meetings and meet the decision-makers attending. Terms are provided on request.',
        niveaux: [
          { nom: 'Partner', avantages: ['Logo on the official document and during the event'] },
          { nom: 'Round Table Partner', avantages: ['Logo on the official document and during the event', 'Speaking slot on a round table'] },
          { nom: 'Premium Partner', avantages: ['Logo on the official document and during the event', 'Speaking slot on a round table', 'One-to-one 5 to 10-minute meeting with Belgium’s Deputy Prime Minister and Minister of Employment, Economy and Agriculture'] }
        ],
        cta: 'Contact us to receive the terms'
      },
      prix: { mention: 'Terms provided on request.' },
      formules: [{ nom: 'B2B Delegation' }],
      comparatif: [
        { groupe: 'What the mission includes', lignes: [
          ['Access to the 8 December meetings at the Central Council of the Economy'],
          ['Place in the delegation and pre-departure briefing'],
          ['Qualified B2B meeting agenda based on your profile'],
          ['Institutional meetings (requested)'],
          ['On-site support from the GPE team']
        ] }
      ],
      nonCompris: 'Flights, accommodation, visa and personal expenses.',
      pratique: {
        vol: 'Direct flights Casablanca – Brussels (about 3 h).',
        hotel: 'Delegation hotel in Brussels; negotiated rate provided with the offer.',
        visa: 'Schengen visa required for Moroccan nationals: apply at least 4 weeks before departure. Invitation letter available for registered delegates.',
        monnaie: 'Euro (EUR).',
        autres: 'Meetings held in French. Presentation materials in French recommended.'
      },
      programme: [
        { jour: 'Monday 7 December', items: ['Arrival in Brussels', 'Evening: delegation briefing'] },
        { jour: 'Tuesday 8 December', items: ['“Digital Solutions for the Climate” meetings at the Central Council of the Economy', 'Welcome by Benoît Bayenet, President of Belgium’s Central Council of the Economy', 'Round table 1: digital and the climate transition — what return on investment for companies?', 'Round table 2: digital and climate — between EU regulation and operational reality', 'Round table 3: how to turn European ambitions into opportunities for French-speaking companies?', 'Closing by David Clarinval, Deputy Prime Minister of Belgium', 'Networking'] },
        { jour: 'Wednesday 9 December', items: ['B2B meetings and institutional meetings (requested)', 'Return'] }
      ],
      reference: {
        surtitre: 'First edition',
        titre: 'Launched at the French Senate in Paris',
        textes: [
          'The first edition was held at the French Senate on 29 September 2025, bringing together policymakers, business leaders, institutions and experts from across the French-speaking world, including the French minister responsible for La Francophonie.',
          'It addressed three issues: artificial intelligence and the environment, green technologies and the circular economy, green finance and digital transformation.'
        ],
        legende: 'French Senate, Paris — 1st edition, 29 September 2025.'
      }
    }
  }

  /* ------------------------------------------------------------------
     MODÈLE — dupliquez la mission ci-dessus (le plus simple), ou utilisez
     l'éditeur /missions/editeur/ pour les champs principaux.
  ------------------------------------------------------------------ */
];
