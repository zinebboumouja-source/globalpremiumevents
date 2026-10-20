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
      slogan: 'Le premier rassemblement d’affaires du Ghana placé sous l’égide du Président de la République',
      theme: 'Investing in Ghana’s New Economy — Building a productive economy that creates value and competes globally.',
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
