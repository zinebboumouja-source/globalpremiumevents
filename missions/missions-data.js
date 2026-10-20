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
    banque: 'À compléter',
    rib: 'À compléter',
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
    pays: 'Ghana',
    ville: 'Accra',
    langue: 'Anglais',
    dateDebut: '2026-11-15',          // format AAAA-MM-JJ
    dateFin: '2026-11-19',
    dateLimite: '2026-10-30',         // clôture des inscriptions
    places: 15,
    titre: 'Mission d’affaires au Ghana — Invest Ghana Summit 2026',
    accroche: 'Global Premium Events organise la délégation d’affaires marocaine à l’Invest Ghana Summit 2026, premier sommet de l’investissement organisé par la Ghana Investment Promotion Authority (GIPA). Plus de 2 000 investisseurs, décideurs publics et chefs d’entreprise sont attendus à Accra.',

    evenement: {
      nom: 'Invest Ghana Summit 2026',
      organisateur: 'Ghana Investment Promotion Authority (GIPA)',
      dates: '16 – 17 novembre 2026',
      lieu: 'Kempinski Hotel Gold Coast City, Accra',
      description: 'Première édition. Sessions sectorielles, matchmaking, rendez-vous B2B et B2G, rencontres directes avec les décideurs publics, les entreprises et les porteurs de projets ghanéens.',
      lien: 'https://igs.gipa.gov.gh/'
    },

    pourquoi: [
      { chiffre: '2 000+', texte: 'investisseurs, décideurs et chefs d’entreprise attendus au sommet' },
      { chiffre: 'B2B & B2G', texte: 'rendez-vous pré-organisés avec des entreprises et des institutions ghanéennes' },
      { chiffre: '4 h 30', texte: 'de vol direct entre Casablanca et Accra' },
      { chiffre: 'ZLECAf', texte: 'Accra accueille le secrétariat de la Zone de libre-échange continentale africaine' }
    ],

    // Secteurs officiels du sommet
    secteurs: [
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
      { id: 'delegation', nom: 'Forfait Délégation', prix: 5000, prixSup: 2500, places: 10, recommande: false },
      { id: 'business', nom: 'Forfait Business', prix: 9500, prixSup: 4500, places: null, recommande: true },
      { id: 'executive', nom: 'Forfait Executive', prix: 15000, prixSup: 6000, places: 3, recommande: false }
    ],

    /* LE COMPARATIF ---------------------------------------------------
       Une ligne = [prestation, Délégation, Business, Executive]
       'Y' = inclus, '-' = non inclus, sinon le texte affiché. */
    comparatif: [
      { groupe: 'Accès et programme', lignes: [
        ['Accréditation à l’Invest Ghana Summit 2026', 'Y', 'Y', 'Y'],
        ['Intégration à la délégation d’affaires marocaine', 'Y', 'Y', 'Y'],
        ['Briefing pays avant le départ (climat des affaires, réglementation, opportunités)', 'Y', 'Y', 'Y'],
        ['Dîner de networking de la délégation', 'Y', 'Y', 'Placement à la table protocolaire']
      ] },
      { groupe: 'Rendez-vous d’affaires', lignes: [
        ['Programme de rendez-vous B2B', 'Accès au matchmaking du sommet', 'Agenda B2B qualifié selon votre profil', 'Agenda B2B garanti (8 rendez-vous minimum)'],
        ['Rencontres B2G (institutions)', '-', 'Sollicitées', 'Organisées et préparées pour votre secteur'],
        ['Visites de sites et d’entreprises', 'Y', 'Y', 'Y']
      ] },
      { groupe: 'Logistique et assistance', lignes: [
        ['Transferts aéroport – hôtel – aéroport', 'Y', 'Y', 'Y'],
        ['Transport sur place', 'Navette de délégation', 'Navette de délégation', 'Véhicule avec chauffeur'],
        ['Assistance', 'Coordination de la délégation', 'Assistant dédié (1 pour 4 entreprises)', 'Assistant dédié et interprète']
      ] },
      { groupe: 'Visibilité et médias', lignes: [
        ['Catalogue officiel de la délégation', 'Mention', 'Fiche entreprise', 'Page complète'],
        ['Couverture photo et vidéo', 'Photo officielle de la délégation', 'Reportage photo de vos rendez-vous', 'Reportage photo et interview vidéo (60 s)'],
        ['Communication digitale de la mission (LinkedIn et site)', 'Mention collective', 'Publication dédiée à votre entreprise', 'Publication dédiée et vidéo'],
        ['Relations presse', 'Communiqué collectif de la délégation', 'Citation dans le communiqué', 'Interview proposée à la presse économique']
      ] },
      { groupe: 'Suivi après la mission', lignes: [
        ['Bilan de la mission', 'Y', 'Y', 'Y'],
        ['Suivi de vos contacts à J+30', '-', 'Y', 'Y'],
        ['Rapport de mission personnalisé (contacts, pistes, prochaines étapes)', '-', '-', 'Y']
      ] }
    ],

    nonCompris: 'Billet d’avion, hébergement et dépenses personnelles. Les tarifs de groupe négociés pour le vol et l’hôtel sont communiqués à l’inscription.',

    conditions: [
      'Inscription confirmée à réception du paiement intégral, au plus tard le 30 octobre 2026.',
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
      { jour: 'Lundi 16 novembre', items: ['Invest Ghana Summit — cérémonie d’ouverture et sessions sectorielles', 'Rendez-vous B2B et B2G', 'Soir : dîner de networking de la délégation'] },
      { jour: 'Mardi 17 novembre', items: ['Invest Ghana Summit — jour 2', 'Rendez-vous B2B et B2G', 'Rencontres avec les porteurs de projets'] },
      { jour: 'Mercredi 18 novembre', items: ['Rendez-vous B2B complémentaires', 'Visites de sites et d’entreprises'] },
      { jour: 'Jeudi 19 novembre', items: ['Rencontres institutionnelles', 'Transfert et vol retour Accra – Casablanca'] }
    ],

    image: null,

    /* ---------------- TRADUCTION ANGLAISE ---------------- */
    en: {
      pays: 'Ghana',
      langue: 'English',
      titre: 'Business Mission to Ghana — Invest Ghana Summit 2026',
      accroche: 'Global Premium Events is organising the Moroccan business delegation to the Invest Ghana Summit 2026, the first investment summit hosted by the Ghana Investment Promotion Authority (GIPA). More than 2,000 investors, policymakers and business leaders are expected in Accra.',
      evenement: {
        dates: '16 – 17 November 2026',
        description: 'First edition. Sector sessions, business matchmaking, B2B and B2G meetings, and direct engagement with government officials, Ghanaian businesses and investment project promoters.'
      },
      pourquoi: [
        { chiffre: '2,000+', texte: 'investors, policymakers and business leaders expected at the Summit' },
        { chiffre: 'B2B & B2G', texte: 'pre-arranged meetings with Ghanaian companies and institutions' },
        { chiffre: '4h30', texte: 'direct flight between Casablanca and Accra' },
        { chiffre: 'AfCFTA', texte: 'Accra hosts the Secretariat of the African Continental Free Trade Area' }
      ],
      secteurs: [
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
        { groupe: 'Access and programme', lignes: [
          ['Accreditation to the Invest Ghana Summit 2026', 'Y', 'Y', 'Y'],
          ['Membership of the Moroccan business delegation', 'Y', 'Y', 'Y'],
          ['Pre-departure country briefing (business climate, regulations, opportunities)', 'Y', 'Y', 'Y'],
          ['Delegation networking dinner', 'Y', 'Y', 'Seat at the official table']
        ] },
        { groupe: 'Business meetings', lignes: [
          ['B2B meeting programme', 'Access to Summit matchmaking', 'Qualified B2B agenda based on your profile', 'Guaranteed B2B agenda (minimum 8 meetings)'],
          ['B2G meetings (institutions)', '-', 'Requested', 'Arranged and prepared for your sector'],
          ['Site and company visits', 'Y', 'Y', 'Y']
        ] },
        { groupe: 'Logistics and assistance', lignes: [
          ['Airport – hotel – airport transfers', 'Y', 'Y', 'Y'],
          ['Local transport', 'Delegation shuttle', 'Delegation shuttle', 'Private car with driver'],
          ['Assistance', 'Delegation coordination', 'Dedicated assistant (1 per 4 companies)', 'Dedicated assistant and interpreter']
        ] },
        { groupe: 'Visibility and media', lignes: [
          ['Official delegation catalogue', 'Listing', 'Company profile', 'Full page'],
          ['Photo and video coverage', 'Official delegation photo', 'Photo coverage of your meetings', 'Photo coverage and 60-second video interview'],
          ['Digital communication of the mission (LinkedIn and website)', 'Group mention', 'Dedicated post about your company', 'Dedicated post and video'],
          ['Press relations', 'Joint delegation press release', 'Quote in the press release', 'Interview offered to business media']
        ] },
        { groupe: 'Post-mission follow-up', lignes: [
          ['Mission report', 'Y', 'Y', 'Y'],
          ['Follow-up of your contacts at D+30', '-', 'Y', 'Y'],
          ['Personalised mission report (contacts, leads, next steps)', '-', '-', 'Y']
        ] }
      ],
      nonCompris: 'Flights, accommodation and personal expenses. Negotiated group rates for flights and hotel are provided upon registration.',
      conditions: [
        'Registration is confirmed upon receipt of full payment, no later than 30 October 2026.',
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
      programme: [
        { jour: 'Sunday 15 November', items: ['Flight Casablanca – Accra', 'Welcome and transfer to the hotel', 'Evening: delegation briefing'] },
        { jour: 'Monday 16 November', items: ['Invest Ghana Summit — opening ceremony and sector sessions', 'B2B and B2G meetings', 'Evening: delegation networking dinner'] },
        { jour: 'Tuesday 17 November', items: ['Invest Ghana Summit — day 2', 'B2B and B2G meetings', 'Meetings with investment project promoters'] },
        { jour: 'Wednesday 18 November', items: ['Additional B2B meetings', 'Site and company visits'] },
        { jour: 'Thursday 19 November', items: ['Institutional meetings', 'Transfer and return flight Accra – Casablanca'] }
      ]
    }
  }

  /* ------------------------------------------------------------------
     MODÈLE — dupliquez la mission ci-dessus (le plus simple), ou utilisez
     l'éditeur /missions/editeur/ pour les champs principaux.
  ------------------------------------------------------------------ */
];
