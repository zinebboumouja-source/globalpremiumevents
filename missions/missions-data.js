/* ==========================================================================
   GLOBAL PREMIUM EVENTS — CANEVAS DES MISSIONS B2B
   --------------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour publier une nouvelle mission.
   Tout le reste (page liste, page pays, formulaire d'inscription,
   note d'information, fiche d'inscription, programme PDF) se génère
   automatiquement à partir de ces données.

   Pour ajouter un pays :
     1. Ouvrez /missions/editeur/ et remplissez le formulaire (aperçu inclus),
        OU copiez le bloc "MODÈLE" en bas de ce fichier.
     2. Collez le bloc dans la liste MISSIONS ci-dessous.
     3. Enregistrez et publiez (commit sur GitHub).
   Guide complet : /missions/GUIDE.md
   ========================================================================== */

window.GPE_CONFIG = {
  organisation: 'Global Premium Events',
  ville: 'Rabat, Maroc',
  email: 'info@globalpremiumevents.com',
  telephone: '+212 653512995',
  site: 'globalpremiumevents.com',
  // Adresse qui reçoit les inscriptions (formulaire du site)
  emailInscriptions: 'info@globalpremiumevents.com',
  // Coordonnées bancaires imprimées sur la fiche d'inscription
  paiement: {
    banque: 'À compléter',
    rib: 'À compléter',
    modes: ['Virement bancaire', 'Chèque', 'Espèces']
  },
  // Pièces demandées après l'inscription (comme sur les fiches TABC)
  piecesDemandees: [
    'Copie du passeport (validité 6 mois minimum après le retour)',
    'Logo de l’entreprise (PNG ou JPG)',
    'Une photo du ou des participants',
    'Présentation de l’entreprise (1 page, en anglais si la mission est anglophone)'
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
    places: 12,
    titre: 'Mission d’affaires au Ghana — Invest Ghana Summit',
    accroche: 'Une délégation d’entreprises marocaines à l’Invest Ghana Summit, le premier sommet de l’investissement organisé par la GIPA, prolongée par une journée de rendez-vous B2B et des visites institutionnelles à Accra.',

    // Événement du pays hôte sur lequel la mission s'appuie (laisser null s'il n'y en a pas)
    evenement: {
      nom: 'Invest Ghana Summit 2026',
      organisateur: 'Ghana Investment Promotion Authority (GIPA), sous le patronage du Président de la République',
      dates: '16 – 17 novembre 2026',
      lieu: 'Kempinski Hotel Gold Coast City, Accra',
      description: 'Première édition, plus de 2 000 investisseurs, diplomates et décideurs attendus. Thème : « Investing in Ghana’s New Economy » — industrialisation, export, économie 24 h/24 et ZLECAf.',
      lien: 'https://www.citinewsroom.com/2026/10/ghana-to-host-maiden-invest-ghana-summit-for-over-2000-investors/'
    },

    // 3 à 4 arguments chiffrés pour le pays
    pourquoi: [
      { chiffre: '2 000+', texte: 'investisseurs et décideurs attendus à l’Invest Ghana Summit' },
      { chiffre: '4 h 30', texte: 'de vol direct Royal Air Maroc entre Casablanca et Accra' },
      { chiffre: 'ZLECAf', texte: 'Accra accueille le secrétariat de la Zone de libre-échange continentale africaine' },
      { chiffre: 'ETA', texte: 'autorisation de voyage électronique pour les ressortissants marocains, sans visa consulaire' }
    ],

    secteurs: ['Agro-industrie', 'Industrie manufacturière', 'Énergie', 'BTP & infrastructures', 'Logistique', 'Numérique', 'Tourisme & immobilier'],

    prix: {
      devise: 'MAD',
      standard: 9000,                 // forfait par entreprise (1er participant)
      deuxiemeParticipant: 4500,      // participant supplémentaire de la même entreprise
      earlyBird: null,                // ex. { montant: 8000, avant: '2026-10-25' } ou null
      mention: 'Hors billet d’avion et hébergement (payés directement par chaque participant). Frais d’accès au sommet éventuels refacturés au coût réel.'
    },

    inclus: [
      'Accompagnement à l’inscription de la délégation à l’Invest Ghana Summit',
      'Transferts aéroport – hôtel – sommet – aéroport',
      'Journée B2B dédiée : salle et consultant local qui identifie et confirme vos rendez-vous',
      'Agenda B2B personnalisé envoyé avant le départ',
      'Rencontres institutionnelles sollicitées (GIPA, promotion des exportations, zones franches, chambre de commerce)',
      'Visites d’entreprises et de sites',
      'Dîner de networking avec des chefs d’entreprise ghanéens',
      'Fiche entreprise dans le catalogue bilingue de la délégation',
      'Dossier pays : climat des affaires, fiscalité, incitations, contacts utiles',
      'Coordination sur place par l’équipe Global Premium Events',
      'Point de suivi à J+30 sur vos contacts'
    ],

    pratique: {
      vol: 'Royal Air Maroc, vol direct Casablanca – Accra (environ 4 h 30). Tarif de groupe en cours de négociation, communiqué à l’inscription.',
      hotel: 'Hôtel de délégation à proximité du Kempinski Gold Coast City. Tarif négocié communiqué à l’inscription.',
      visa: 'Autorisation de voyage électronique (ETA) à demander en ligne avant le départ. Passeport valide 6 mois après le retour.',
      sante: 'Vaccin contre la fièvre jaune obligatoire (carnet international à présenter à l’arrivée).',
      monnaie: 'Cedi ghanéen (GHS). Cartes bancaires acceptées dans les grands hôtels.',
      autres: 'Pays anglophone : documents de présentation en anglais recommandés. Interprète disponible sur demande.'
    },

    programme: [
      { jour: 'Dimanche 15 novembre', items: ['Vol Royal Air Maroc Casablanca – Accra', 'Accueil et transfert à l’hôtel', 'Soir : briefing de la délégation'] },
      { jour: 'Lundi 16 novembre', items: ['Invest Ghana Summit — cérémonie d’ouverture et panels', 'Rencontre avec la GIPA en marge du sommet', 'Soir : dîner avec la représentation diplomatique marocaine (sous réserve)'] },
      { jour: 'Mardi 17 novembre', items: ['Invest Ghana Summit — jour 2', 'Rendez-vous B2B en marge du sommet', 'Soir : dîner de networking'] },
      { jour: 'Mercredi 18 novembre', items: ['Journée B2B de la délégation', 'Après-midi : visites institutionnelles et de sites (zones franches, port de Tema)', 'Soir : Ghana Club 100 Awards (sur invitation)'] },
      { jour: 'Jeudi 19 novembre', items: ['Rencontres institutionnelles (chambre de commerce, industriels)', 'Transfert et vol retour Accra – Casablanca'] }
    ],

    // Image de la page (optionnel) : chemin d'une image du site, ou null
    image: null
  }

  /* ------------------------------------------------------------------
     MODÈLE — copiez ce bloc, placez une virgule après le bloc précédent,
     puis remplacez chaque valeur.
  ,{
    id: 'pays-2027',
    statut: 'bientot',
    pays: 'Pays',
    ville: 'Ville',
    langue: 'Français',
    dateDebut: '2027-01-18',
    dateFin: '2027-01-22',
    dateLimite: '2027-01-05',
    places: 15,
    titre: 'Mission d’affaires en Pays',
    accroche: 'Une phrase qui donne envie.',
    evenement: null,
    pourquoi: [ { chiffre: '', texte: '' } ],
    secteurs: [],
    prix: { devise: 'MAD', standard: 6500, deuxiemeParticipant: 3250, earlyBird: null, mention: 'Hors billet d’avion et hébergement.' },
    inclus: [],
    pratique: { vol: '', hotel: '', visa: '', sante: '', monnaie: '', autres: '' },
    programme: [ { jour: 'Lundi 18 janvier', items: [''] } ],
    image: null
  }
  ------------------------------------------------------------------ */
];
