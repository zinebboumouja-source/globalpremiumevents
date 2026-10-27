/* Global Premium Events — moteur des pages Missions B2B (FR / EN).
   Lit window.GPE_MISSIONS (missions-data.js) et génère : le calendrier,
   la page de chaque pays avec ses forfaits et son formulaire, et les
   documents imprimables. Rien à modifier ici pour ajouter un pays. */
(function () {
  'use strict';

  var CFG = window.GPE_CONFIG || {};
  // enLigne: false masque une mission partout (calendrier, page, documents)
  var ALL = (window.GPE_MISSIONS || []).filter(function (m) { return m.enLigne !== false; });
  var PREVIEW_KEY = 'gpe-mission-apercu';

  /* ---------------- langue ---------------- */
  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : '';
  }
  var LANG = (function () {
    var p = param('lang');
    if (p === 'en' || p === 'fr') { try { localStorage.setItem('gpe-lang', p); } catch (e) {} return p; }
    try { var s = localStorage.getItem('gpe-lang'); if (s === 'en' || s === 'fr') return s; } catch (e) {}
    return 'fr';
  })();
  var EN = LANG === 'en';

  var UI = {
    fr: {
      open: 'Inscriptions ouvertes', soon: 'Bientôt', full: 'Complet', closed: 'Inscriptions closes', done: 'Terminée',
      kicker: 'Mission B2B', dates: 'Dates', place: 'Lieu', deleg: 'Délégation', companiesMax: 'entreprises maximum', limited: 'Places limitées', deadline: 'Clôture des inscriptions',
      notify: 'Être informé en priorité', notifyNext: 'Être informé des prochaines missions', infoNote: 'Note d’information',
      why: 'Pourquoi le {p} maintenant', anchor: 'Événement d’ancrage', moreEvent: 'Site officiel de l’événement',
      organiser: 'Organisateur', programme: 'Programme', dlProg: 'Télécharger le programme (PDF)',
      progNote: 'Programme indicatif, susceptible d’évoluer selon les confirmations des institutions et partenaires.',
      sectors: 'Secteurs du sommet', packages: 'Nos forfaits', recommended: 'Recommandé', perCompany: 'HT par entreprise',
      extraP: 'Participant supplémentaire', places: 'places', availability: 'Selon disponibilité', choose: 'Choisir ce forfait',
      notIncluded: 'Non compris', terms: 'Conditions', practical: 'Infos pratiques',
      flight: 'Vol', hotel: 'Hébergement', visa: 'Entrée et passeport', health: 'Santé', money: 'Monnaie', good: 'Bon à savoir',
      docs: 'Documents de la mission', docNote: 'Note d’information', docNoteD: 'Programme, forfaits, formalités et conditions.',
      docForm: 'Fiche d’inscription', docFormD: 'Version à imprimer, signer et cacheter si vous préférez l’inscription papier.',
      docProg: 'Programme', docProgD: 'Le déroulé jour par jour de la mission.', openPdf: 'Ouvrir et télécharger en PDF',
      regKicker: 'Inscription', regTitle: 'Réservez votre place dans la délégation',
      regText: 'Les places sont attribuées par ordre de réception des paiements. Clôture le',
      step1: 'Vous remplissez ce formulaire', step1b: '(5 minutes).', step2: 'Nous vous appelons sous 48 h', step2b: 'pour valider vos objectifs et vous envoyer la facture.',
      step3: 'Vous envoyez les pièces', step4: 'Nous préparons votre agenda B2B', step4b: ', envoyé avant le départ.', question: 'Une question ?',
      fsPackage: 'Votre forfait', fsPerson: 'Participant', fsCompany: 'Entreprise', fsGoals: 'Vos objectifs pour cette mission', fsPart: 'Participation',
      name: 'Nom et prénom', role: 'Fonction', rolePh: 'ex. Directeur export', email: 'Email', phone: 'Téléphone / WhatsApp',
      company: 'Raison sociale', city: 'Ville', country: 'Pays', sector: 'Secteur', website: 'Site web', size: 'Effectif', exportShare: 'Part du chiffre d’affaires à l’export',
      products: 'Produits / services proposés', productsPh: 'Ce que vous voulez vendre, acheter ou développer dans le pays',
      lookFor: 'Ce que vous recherchez', interest: 'Secteurs qui vous intéressent sur place',
      profile: 'Profil des partenaires que vous voulez rencontrer', profilePh: 'ex. distributeurs de matériaux de construction à Accra, importateurs de produits agroalimentaires…',
      inst: 'Rencontres institutionnelles souhaitées', instPh: 'ex. agence de promotion des investissements, zones franches, ministère…',
      contacts: 'Avez-vous déjà des contacts dans le pays ?', yes: 'Oui', no: 'Non', source: 'Comment avez-vous connu la mission ?',
      nb: 'Nombre de participants', others: 'Nom et fonction des autres participants', optional: 'optionnel', choosePh: 'Choisir…',
      total: 'Frais de participation estimés (HT)',
      consent: 'J’ai lu la {note}. Je comprends que ma place est confirmée à réception du paiement, et que Global Premium Events utilise ces informations pour organiser mes rendez-vous B2B ({priv}).',
      privacy: 'confidentialité', send: 'Envoyer mon inscription', sending: 'Envoi en cours…',
      errReq: 'Merci de compléter les champs marqués d’un astérisque.', errGoal: 'Cochez au moins un objectif pour cette mission.', errMail: 'Adresse email invalide.', errPkg: 'Choisissez un forfait.',
      okTitle: 'Merci, votre inscription est bien reçue.', okText: 'Nous vous appelons sous 48 heures pour valider vos objectifs et vous envoyer la facture. Votre place est confirmée à réception du paiement.',
      okPrep: 'En attendant, préparez :', reread: 'Relire la note d’information',
      waitTitle: 'Liste d’attente', notifyTitle: 'Être informé en priorité',
      soonMsg: 'Les inscriptions ouvrent bientôt. Laissez vos coordonnées : vous recevrez le programme et les tarifs avant tout le monde.',
      fullMsg: 'La délégation est complète. Inscrivez-vous sur la liste d’attente ou pour être prévenu des prochaines missions.',
      closedMsg: 'Les inscriptions à cette mission sont closes. Laissez vos coordonnées pour être prévenu des prochaines missions.',
      keepMe: 'Me tenir informé', noted: 'C’est noté.', notedText: 'Vous serez parmi les premiers informés.',
      preview: 'Aperçu : cette page n’est visible que sur votre ordinateur.', backEditor: 'Retour à l’éditeur',
      notFound: 'Mission introuvable', notFoundText: 'Cette mission n’existe pas ou n’est plus en ligne.', allMissions: 'Voir toutes les missions',
      from: 'À partir de', seeMission: 'Voir la mission', closes: 'Clôture le', emptyList: 'Le prochain calendrier est en préparation. Laissez-nous votre email ci-dessous pour le recevoir en avant-première.',
      pastTitle: 'Missions réalisées', previewNoSend: 'Mode aperçu : le formulaire fonctionne mais rien n’est envoyé.',
      calOkTitle: 'Merci, c’est noté.', calOkText: 'Vous recevrez le calendrier des prochaines missions et les ouvertures d’inscription en avant-première.',
      dTitle: { note: 'Note d’information', fiche: 'Fiche d’inscription', programme: 'Programme de la délégation' },
      dBack: 'Page de la mission', dPrint: 'Télécharger en PDF / Imprimer',
      dIntro: 'Dans le cadre de votre participation à la mission, nous vous prions de noter les informations suivantes.',
      dDest: 'Destination', dMDates: 'Dates de la mission', dEvent: 'Événement', dLang: 'Langue de travail',
      dPieces: 'Pièces à nous transmettre', dOnline: 'Inscription en ligne :', dOr: '— ou fiche d’inscription signée à retourner à',
      dReturn: 'À retourner au plus tard le', dOrOnline: '— ou inscription en ligne sur',
      dId: 'Identification de l’entreprise', dActs: 'Activités / produits', dAddr: 'Adresse', dTel: 'Téléphone', dRep: 'Représentée par', dGsm: 'GSM / WhatsApp',
      dOthers: 'Autres participants', dNeeds: 'Vos besoins', dSectors: 'Secteurs ciblés sur place :', dProfile: 'Profil des partenaires recherchés',
      dPkg: 'Forfait choisi', dPay: 'Règlement', dBank: 'Banque', dSend: 'Merci de nous envoyer :', dConfirm: 'Je confirme ma participation.',
      dDone: 'Fait à ...................... le ...... / ...... /', dSign: 'Signature et cachet', dAlong: 'En marge de',
      dPkgTitle: 'Forfaits de participation', dService: 'Prestations', dPrice: 'Prix HT', dYes: '✓', dNo: '—',
      langSwitch: 'English', langHref: 'en',
      register: 'Rejoindre la délégation', requestOffer: 'Recevoir l\u2019offre de participation',
      priceOnRequest: 'Conditions de participation communiquées avec l\u2019offre',
      docLocked: 'Ce document est envoyé aux entreprises qui ont demandé l’offre de participation.', docLockedBtn: 'Recevoir l’offre de participation', leadKicker: 'Offre de participation', leadTitle: 'Recevez l\u2019offre de participation',
      leadText: 'Indiquez vos coordonnées : les conditions de participation de chaque formule s\u2019affichent immédiatement, et notre équipe vous contacte pour vous conseiller.',
      leadBtn: 'Afficher l\u2019offre', leadOk: 'Merci. Voici les conditions de participation de chaque formule. Notre équipe vous contactera sous 24 heures.',
      lead1: 'Présentation détaillée de la mission', lead2: 'Conditions de participation par formule', lead3: 'Conseil personnalisé par notre équipe',
      packagesTitle: 'Formules de participation', proceed: 'Finaliser mon inscription',
      contactUs: 'Nous contacter', sponsorBtn: 'Offres de sponsoring', sponsorTop: 'Visibilité maximale', level: 'Niveau', onRequest: 'Conditions sur demande',
      ixKicker: 'Délégation d’affaires', ixTitle: 'Manifestez votre intérêt', ixText: 'Laissez vos coordonnées : notre équipe vous recontacte pour vous présenter les modalités de participation à la délégation.', ixBtn: 'Manifester mon intérêt', wantMission: 'Rejoindre la délégation B2B', wantSponsor: 'Sponsoring', interestedIn: 'Vous êtes intéressé par', message: 'Message',
      contactKicker: 'Mission & sponsoring', contactTitle: 'Recevez les détails', contactText: 'Indiquez ce qui vous intéresse : notre équipe vous envoie les conditions de participation ou de sponsoring et vous rappelle sous 24 heures.',
      contactBtn: 'Envoyer ma demande', contactOk: 'Merci. Notre équipe vous envoie les détails et vous contacte sous 24 heures.', errInterest: 'Cochez au moins une option : mission B2B ou sponsoring.'
    },
    en: {
      open: 'Registration open', soon: 'Coming soon', full: 'Fully booked', closed: 'Registration closed', done: 'Completed',
      kicker: 'B2B Mission', dates: 'Dates', place: 'Location', deleg: 'Delegation', companiesMax: 'companies maximum', limited: 'Limited places', deadline: 'Registration deadline',
      notify: 'Get priority information', notifyNext: 'Hear about upcoming missions', infoNote: 'Information note',
      why: 'Why {p}, why now', anchor: 'Anchor event', moreEvent: 'Official event website',
      organiser: 'Organiser', programme: 'Programme', dlProg: 'Download the programme (PDF)',
      progNote: 'Indicative programme, subject to change based on confirmations from institutions and partners.',
      sectors: 'Summit sectors', packages: 'Our packages', recommended: 'Recommended', perCompany: 'excl. VAT per company',
      extraP: 'Additional participant', places: 'places', availability: 'Subject to availability', choose: 'Choose this package',
      notIncluded: 'Not included', terms: 'Terms', practical: 'Practical information',
      flight: 'Flights', hotel: 'Accommodation', visa: 'Entry and passport', health: 'Health', money: 'Currency', good: 'Good to know',
      docs: 'Mission documents', docNote: 'Information note', docNoteD: 'Programme, packages, travel formalities and terms.',
      docForm: 'Registration form', docFormD: 'Printable version to sign and stamp if you prefer to register on paper.',
      docProg: 'Programme', docProgD: 'The day-by-day schedule of the mission.', openPdf: 'Open and download as PDF',
      regKicker: 'Registration', regTitle: 'Book your place in the delegation',
      regText: 'Places are allocated in order of payment received. Registration closes on',
      step1: 'Complete this form', step1b: '(5 minutes).', step2: 'We call you within 48 hours', step2b: 'to confirm your objectives and send the invoice.',
      step3: 'Send us your documents', step4: 'We prepare your B2B agenda', step4b: ', sent before departure.', question: 'Any questions?',
      fsPackage: 'Your package', fsPerson: 'Participant', fsCompany: 'Company', fsGoals: 'Your objectives for this mission', fsPart: 'Participation',
      name: 'Full name', role: 'Position', rolePh: 'e.g. Export Director', email: 'Email', phone: 'Phone / WhatsApp',
      company: 'Company name', city: 'City', country: 'Country', sector: 'Sector', website: 'Website', size: 'Number of employees', exportShare: 'Share of turnover from exports',
      products: 'Products / services offered', productsPh: 'What you want to sell, buy or develop in the country',
      lookFor: 'What you are looking for', interest: 'Sectors of interest on site',
      profile: 'Profile of the partners you want to meet', profilePh: 'e.g. building materials distributors in Accra, food product importers…',
      inst: 'Institutional meetings requested', instPh: 'e.g. investment promotion agency, free zones, ministry…',
      contacts: 'Do you already have contacts in the country?', yes: 'Yes', no: 'No', source: 'How did you hear about the mission?',
      nb: 'Number of participants', others: 'Name and position of other participants', optional: 'optional', choosePh: 'Select…',
      total: 'Estimated participation fee (excl. VAT)',
      consent: 'I have read the {note}. I understand that my place is confirmed upon payment, and that Global Premium Events uses this information to organise my B2B meetings ({priv}).',
      privacy: 'privacy', send: 'Submit my registration', sending: 'Sending…',
      errReq: 'Please complete the fields marked with an asterisk.', errGoal: 'Please tick at least one objective for this mission.', errMail: 'Invalid email address.', errPkg: 'Please choose a package.',
      okTitle: 'Thank you, your registration has been received.', okText: 'We will call you within 48 hours to confirm your objectives and send the invoice. Your place is confirmed upon payment.',
      okPrep: 'In the meantime, please prepare:', reread: 'Read the information note again',
      waitTitle: 'Waiting list', notifyTitle: 'Get priority information',
      soonMsg: 'Registration opens soon. Leave your details and receive the programme and prices before anyone else.',
      fullMsg: 'The delegation is fully booked. Join the waiting list or be informed of upcoming missions.',
      closedMsg: 'Registration for this mission is closed. Leave your details to hear about upcoming missions.',
      keepMe: 'Keep me informed', noted: 'Noted, thank you.', notedText: 'You will be among the first to know.',
      preview: 'Preview: this page is only visible on your computer.', backEditor: 'Back to the editor',
      notFound: 'Mission not found', notFoundText: 'This mission does not exist or is no longer online.', allMissions: 'See all missions',
      from: 'From', seeMission: 'View the mission', closes: 'Closes on', emptyList: 'The next calendar is being prepared. Leave your email below to receive it first.',
      pastTitle: 'Past missions', previewNoSend: 'Preview mode: the form works but nothing is sent.',
      calOkTitle: 'Thank you, noted.', calOkText: 'You will receive the calendar of upcoming missions and registration openings first.',
      dTitle: { note: 'Information note', fiche: 'Registration form', programme: 'Delegation programme' },
      dBack: 'Mission page', dPrint: 'Download PDF / Print',
      dIntro: 'As part of your participation in the mission, please note the following information.',
      dDest: 'Destination', dMDates: 'Mission dates', dEvent: 'Event', dLang: 'Working language',
      dPieces: 'Documents to send us', dOnline: 'Online registration:', dOr: '— or return the signed registration form to',
      dReturn: 'To be returned no later than', dOrOnline: '— or register online at',
      dId: 'Company details', dActs: 'Activities / products', dAddr: 'Address', dTel: 'Phone', dRep: 'Represented by', dGsm: 'Mobile / WhatsApp',
      dOthers: 'Other participants', dNeeds: 'Your needs', dSectors: 'Target sectors on site:', dProfile: 'Profile of partners sought',
      dPkg: 'Package selected', dPay: 'Payment', dBank: 'Bank', dSend: 'Please send us:', dConfirm: 'I confirm my participation.',
      dDone: 'Place ...................... date ...... / ...... /', dSign: 'Signature and company stamp', dAlong: 'On the sidelines of',
      dPkgTitle: 'Participation packages', dService: 'Services', dPrice: 'Price excl. VAT', dYes: '✓', dNo: '—',
      langSwitch: 'Français', langHref: 'fr',
      register: 'Join the delegation', requestOffer: 'Request the participation offer',
      priceOnRequest: 'Participation terms provided with the offer',
      docLocked: 'This document is sent to companies that have requested the participation offer.', docLockedBtn: 'Receive the participation offer', leadKicker: 'Participation offer', leadTitle: 'Receive the participation offer',
      leadText: 'Leave your details: the participation terms for each package are displayed immediately, and our team will contact you to advise you.',
      leadBtn: 'Show the offer', leadOk: 'Thank you. Here are the participation terms for each package. Our team will contact you within 24 hours.',
      lead1: 'Detailed presentation of the mission', lead2: 'Participation terms for each package', lead3: 'Personalised advice from our team',
      packagesTitle: 'Participation packages', proceed: 'Complete my registration',
      contactUs: 'Contact us', sponsorBtn: 'Sponsorship', sponsorTop: 'Maximum visibility', level: 'Level', onRequest: 'Terms on request',
      ixKicker: 'Business delegation', ixTitle: 'Express your interest', ixText: 'Leave your details: our team will get back to you to present the terms of participation in the delegation.', ixBtn: 'Express my interest', wantMission: 'Joining the B2B delegation', wantSponsor: 'Sponsorship', interestedIn: 'You are interested in', message: 'Message',
      contactKicker: 'Mission & sponsorship', contactTitle: 'Receive the details', contactText: 'Tell us what interests you: our team will send you the participation or sponsorship terms and call you back within 24 hours.',
      contactBtn: 'Send my request', contactOk: 'Thank you. Our team will send you the details and contact you within 24 hours.', errInterest: 'Tick at least one option: B2B mission or sponsorship.'
    }
  };
  var U = UI[LANG];

  var SECTEURS_GENERAUX = {
    fr: ['Agro-alimentaire & agro-industrie', 'Agriculture & intrants', 'BTP & matériaux de construction', 'Énergie & environnement', 'Industrie & équipements', 'Mines & minerais', 'Automobile & pièces', 'Textile & cuir', 'Santé & pharmacie', 'Numérique & télécoms', 'Banque, assurance & finance', 'Transport & logistique', 'Éducation & formation', 'Tourisme & hôtellerie', 'Immobilier', 'Conseil & services aux entreprises', 'Autre'],
    en: ['Food & agro-industry', 'Agriculture & inputs', 'Construction & building materials', 'Energy & environment', 'Industry & equipment', 'Mining & minerals', 'Automotive & parts', 'Textile & leather', 'Health & pharmaceuticals', 'Digital & telecoms', 'Banking, insurance & finance', 'Transport & logistics', 'Education & training', 'Tourism & hospitality', 'Real estate', 'Consulting & business services', 'Other']
  }[LANG];
  var OBJECTIFS = {
    fr: ['Exporter mes produits / services', 'Trouver un distributeur ou un agent', 'Importer / m’approvisionner', 'M’implanter (filiale, bureau, usine)', 'Investir / co-investir', 'Partenariat technique ou industriel', 'Répondre à des marchés publics'],
    en: ['Export my products / services', 'Find a distributor or agent', 'Import / source products', 'Set up locally (subsidiary, office, plant)', 'Invest / co-invest', 'Technical or industrial partnership', 'Bid for public contracts']
  }[LANG];
  var EFFECTIFS = { fr: ['Moins de 10', '10 à 49', '50 à 249', '250 et plus'], en: ['Fewer than 10', '10 to 49', '50 to 249', '250 or more'] }[LANG];
  var EXPORTS = { fr: ['Aucune pour l’instant', 'Moins de 10 %', '10 à 30 %', 'Plus de 30 %'], en: ['None yet', 'Less than 10%', '10 to 30%', 'More than 30%'] }[LANG];
  var SOURCES = { fr: ['Email / newsletter', 'LinkedIn', 'WhatsApp', 'Recommandation', 'Fédération / association professionnelle', 'Ancien participant', 'Site web', 'Autre'], en: ['Email / newsletter', 'LinkedIn', 'WhatsApp', 'Referral', 'Business federation / association', 'Former participant', 'Website', 'Other'] }[LANG];

  /* ---------------- utilitaires ---------------- */
  var MOIS = {
    fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }[LANG];
  function parts(iso) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || ''); return m ? { y: +m[1], m: +m[2], d: +m[3] } : null; }
  function fmtDate(iso) {
    var p = parts(iso); if (!p) return iso || '';
    return (!EN && p.d === 1 ? '1er' : p.d) + ' ' + MOIS[p.m - 1] + ' ' + p.y;
  }
  function fmtRange(a, b) {
    var p = parts(a), q = parts(b);
    if (!p) return ''; if (!q) return fmtDate(a);
    if (p.y === q.y && p.m === q.m) return p.d + ' – ' + q.d + ' ' + MOIS[q.m - 1] + ' ' + q.y;
    if (p.y === q.y) return p.d + ' ' + MOIS[p.m - 1] + ' – ' + q.d + ' ' + MOIS[q.m - 1] + ' ' + q.y;
    return fmtDate(a) + ' – ' + fmtDate(b);
  }
  function money(n, cur) {
    if (n === null || n === undefined || n === '') return '';
    var s = String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, EN ? ',' : ' ');
    return EN ? (cur || 'MAD') + ' ' + s : s + ' ' + (cur || 'MAD');
  }
  function esc(s) { return String(s === undefined || s === null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function today() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function daysUntil(iso) {
    var p = parts(iso); if (!p) return null;
    var n = new Date();
    return Math.round((Date.UTC(p.y, p.m - 1, p.d) - Date.UTC(n.getFullYear(), n.getMonth(), n.getDate())) / 864e5);
  }
  function fill(tpl, map) { return tpl.replace(/\{(\w+)\}/g, function (_, k) { return map[k] !== undefined ? map[k] : ''; }); }

  /* Fusion de la traduction : objets fusionnés champ par champ,
     tableaux d'objets fusionnés élément par élément, le reste remplacé. */
  function merge(base, over) {
    if (over === undefined || over === null) return base;
    if (Array.isArray(base) && Array.isArray(over)) {
      if (base.length && typeof base[0] === 'object' && !Array.isArray(base[0]) && over.length && typeof over[0] === 'object' && !Array.isArray(over[0])) {
        return base.map(function (b, i) { return i < over.length ? merge(b, over[i]) : b; });
      }
      return over;
    }
    if (base && typeof base === 'object' && !Array.isArray(base) && typeof over === 'object' && !Array.isArray(over)) {
      var out = {}; Object.keys(base).forEach(function (k) { out[k] = base[k]; });
      Object.keys(over).forEach(function (k) { out[k] = merge(base[k], over[k]); });
      return out;
    }
    return over;
  }
  function loc(m) { if (!m) return m; return EN && m.en ? merge(m, m.en) : m; }

  function statut(m) {
    if (m.dateFin && m.dateFin < today()) return 'terminee';
    if (m.statut === 'ouverte' && m.dateLimite && m.dateLimite < today()) return 'cloturee';
    return m.statut || 'bientot';
  }
  // places: un nombre ("15 entreprises maximum") ou 'limitees' ("Places limitées")
  function seatsTxt(m) { return typeof m.places === 'number' ? esc(m.places) + ' ' + U.companiesMax : U.limited; }
  function statutLabel(s) { return { ouverte: U.open, bientot: U.soon, complete: U.full, cloturee: U.closed, terminee: U.done }[s]; }

  function getMission(id) {
    if (id === 'apercu') {
      try { var raw = localStorage.getItem(PREVIEW_KEY); if (raw) { var pm = JSON.parse(raw); pm.id = 'apercu'; return loc(pm); } } catch (e) {}
      return null;
    }
    for (var i = 0; i < ALL.length; i++) if (ALL[i].id === id) return loc(ALL[i]);
    return null;
  }

  function unlockKey(m) { return 'gpe-offre-' + m.id; }
  function unlocked(m) {
    if (m.id === 'apercu' || param('acces') === 'offre') return true;
    try { return localStorage.getItem(unlockKey(m)) === '1'; } catch (e) { return false; }
  }
  function unlock(m) { try { localStorage.setItem(unlockKey(m), '1'); } catch (e) {} UNLOCKED_NOW = true; }
  var UNLOCKED_NOW = false;
  function isOpen(m) { return !m.surDemande && (UNLOCKED_NOW || unlocked(m)); }

  function formules(m) {
    if (m.formules && m.formules.length) return m.formules;
    var p = m.prix || {};
    return [{ id: 'standard', nom: EN ? 'Mission package' : 'Forfait mission', prix: p.standard, prixSup: p.deuxiemeParticipant, places: m.places, recommande: true }];
  }
  function prixMin(m) { return Math.min.apply(null, formules(m).map(function (f) { return f.prix || Infinity; })); }

  var langQ = EN ? '&lang=en' : '';
  function docUrl(m, doc) { return '/missions/docs/?id=' + encodeURIComponent(m.id) + '&doc=' + doc + langQ; }
  function pageUrl(m) { return '/missions/mission/?id=' + encodeURIComponent(m.id) + langQ; }
  function switchUrl() {
    var s = window.location.search.replace(/([?&])lang=[^&]*&?/, '$1').replace(/[?&]$/, '');
    return window.location.pathname + (s ? s + '&' : '?') + 'lang=' + U.langHref + window.location.hash;
  }

  var ICON = {
    cal: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="1.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    seat: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    doc: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    plane: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 13.5l7-1.5 4-8h2l-1.5 8.2 5.5 1.3v2l-5.8-.6L13 20h-1.5l-.8-4.6L3 15.5z"/></svg>',
    bed: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18V7M3 14h18v4M21 14v-2.5a3 3 0 0 0-3-3h-7v5.5"/><circle cx="7" cy="11" r="1.8"/></svg>',
    pass: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="1.5"/><circle cx="12" cy="10" r="3"/><path d="M9 17h6"/></svg>',
    health: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.5 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/><path d="M12 10.5v4M10 12.5h4"/></svg>',
    coin: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1.1 0-2-.4-2.5-1.2M12 6.5V8M12 16v1.5"/></svg>',
    info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.4"/></svg>'
  };

  function langToggle() {
    return '<a class="ms-lang" href="' + esc(switchUrl()) + '" hreflang="' + U.langHref + '" lang="' + U.langHref + '">' + U.langSwitch + '</a>';
  }

  /* =====================================================================
     1. CALENDRIER  (/missions/)
     ===================================================================== */
  function renderList(root) {
    var list = ALL.map(loc).sort(function (a, b) { return (a.dateDebut || '').localeCompare(b.dateDebut || ''); });
    var avenir = list.filter(function (m) { return statut(m) !== 'terminee'; });
    var passees = list.filter(function (m) { return statut(m) === 'terminee'; }).reverse();
    function card(m) {
      var s = statut(m), j = daysUntil(m.dateLimite), urgent = s === 'ouverte' && j !== null && j >= 0 && j <= 14;
      var pm = prixMin(m), cur = (m.prix && m.prix.devise) || 'MAD';
      return '<a class="ms-card" href="' + pageUrl(m) + '">' +
        '<div class="ms-card-top"><span class="ms-badge ms-badge-' + s + '">' + statutLabel(s) + '</span>' +
        (m.evenement ? '<span class="ms-card-event">' + esc(m.evenement.nom) + '</span>' : '') + '</div>' +
        '<h3 class="ms-card-country serif">' + esc(m.pays) + '</h3><p class="ms-card-city">' + esc(m.ville) + '</p>' +
        '<ul class="ms-card-meta"><li>' + ICON.cal + '<span>' + esc(fmtRange(m.dateDebut, m.dateFin)) + '</span></li>' +
        (m.places ? '<li>' + ICON.seat + '<span>' + seatsTxt(m) + '</span></li>' : '') +
        (s === 'ouverte' && m.dateLimite ? '<li class="' + (urgent ? 'is-urgent' : '') + '">' + ICON.clock + '<span>' + U.closes + ' ' + esc(fmtDate(m.dateLimite)) + (urgent ? ' — ' + (EN ? 'D-' : 'J-') + j : '') + '</span></li>' : '') +
        '</ul>' +
        (m.secteurs && m.secteurs.length ? '<p class="ms-card-sectors">' + m.secteurs.slice(0, 3).map(esc).join(' · ') + (m.secteurs.length > 3 ? ' …' : '') + '</p>' : '') +
        '<div class="ms-card-foot"><span class="ms-card-price">' + (isFinite(pm) && unlocked(m) ? U.from + ' <b>' + money(pm, cur) + '</b>' : '') + '</span>' +
        '<span class="ms-card-link">' + (s === 'ouverte' ? U.register.split(' ')[0] + (EN ? '' : '') : U.seeMission) + ' &rarr;</span></div></a>';
    }
    var html = avenir.length ? '<div class="ms-grid">' + avenir.map(card).join('') + '</div>' : '<p class="ms-empty">' + U.emptyList + '</p>';
    if (passees.length) html += '<h2 class="ms-h2 serif ms-past-title">' + U.pastTitle + '</h2><div class="ms-grid ms-grid-past">' + passees.map(card).join('') + '</div>';
    root.innerHTML = html;
  }

  /* =====================================================================
     2. PAGE D'UNE MISSION  (/missions/mission/?id=…)
     ===================================================================== */
  function packagesHtml(m, s) {
    var open = isOpen(m);
    var F = formules(m), cur = (m.prix && m.prix.devise) || 'MAD', rows = m.comparatif || [];
    var cards = F.map(function (f, i) {
      var feats = rows.map(function (g) {
        var items = (g.lignes || []).filter(function (l) { return l[i + 1] && l[i + 1] !== '-'; }).map(function (l) {
          var v = l[i + 1];
          return '<li>' + ICON.check + '<span>' + (v === 'Y' ? esc(l[0]) : '<b>' + esc(l[0]) + '</b>' + (EN ? ': ' : ' : ') + esc(v)) + '</span></li>';
        }).join('');
        return items ? '<p class="ms-pk-group">' + esc(g.groupe) + '</p><ul class="ms-pk-list">' + items + '</ul>' : '';
      }).join('');
      if (!rows.length && m.inclus) feats = '<ul class="ms-pk-list">' + m.inclus.map(function (x) { return '<li>' + ICON.check + '<span>' + esc(x) + '</span></li>'; }).join('') + '</ul>';
      return '<div class="ms-pk' + (f.recommande ? ' is-reco' : '') + '">' +
        (f.recommande ? '<span class="ms-pk-badge">' + U.recommended + '</span>' : '') +
        '<h3 class="ms-pk-name serif">' + esc(f.nom) + '</h3>' +
        (open ? '<p class="ms-pk-price serif">' + money(f.prix, cur) + '</p><p class="ms-pk-sub">' + U.perCompany + '</p>' +
          '<ul class="ms-pk-meta">' + (f.prixSup ? '<li>' + U.extraP + (EN ? ': ' : ' : ') + '<b>' + money(f.prixSup, cur) + '</b></li>' : '') +
          '<li>' + (f.places ? f.places + ' ' + U.places : U.availability) + '</li></ul>'
          : '<ul class="ms-pk-meta ms-pk-meta-locked"><li>' + (f.places ? f.places + ' ' + U.places : U.availability) + '</li></ul>') +
        (s === 'ouverte' ? (open
          ? '<a class="ms-btn' + (f.recommande ? ' ms-btn-gold' : ' ms-btn-ghost') + ' ms-pk-cta" href="#inscription" data-pick="' + esc(f.id) + '">' + U.choose + ' &rarr;</a>'
          : '<a class="ms-btn' + (f.recommande ? ' ms-btn-gold' : ' ms-btn-ghost') + ' ms-pk-cta" href="#inscription" data-interest="mission">' + (m.surDemande ? U.contactUs : U.requestOffer) + ' &rarr;</a>') : '') +
        '<div class="ms-pk-feats">' + feats + '</div></div>';
    }).join('');
    var after = '';
    if (m.nonCompris || (m.conditions && m.conditions.length)) {
      after = '<div class="ms-pk-after">' +
        (m.nonCompris ? '<div><h3 class="ms-h3 serif">' + U.notIncluded + '</h3><p>' + esc(m.nonCompris) + '</p></div>' : '') +
        (m.conditions && m.conditions.length ? '<div><h3 class="ms-h3 serif">' + U.terms + '</h3><ul>' + m.conditions.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></div>' : '') +
        '</div>';
    }
    return '<section class="ms-sec ms-sec-panel" id="forfaits"><div class="wrap"><h2 class="ms-h2 serif">' + U.packagesTitle + '</h2>' +
      (UNLOCKED_NOW ? '<p class="ms-unlocked" role="status">' + U.leadOk + '</p>' : '') +
      '<p class="ms-small ms-pk-note">' + (open || m.surDemande ? esc(m.prix && m.prix.mention) : U.priceOnRequest + '.') + '</p>' +
      '<div class="ms-pks ms-pks-' + F.length + '">' + cards + '</div>' + after + '</div></section>';
  }

  function renderMission(root) {
    var id = param('id'), m = getMission(id);
    if (!m) {
      root.innerHTML = '<div class="wrap ms-notfound"><h1 class="serif">' + U.notFound + '</h1><p>' + U.notFoundText + '</p><p><a class="ms-btn" href="/missions/' + (EN ? '?lang=en' : '') + '">' + U.allMissions + ' &rarr;</a></p></div>';
      return;
    }
    var s = statut(m), j = daysUntil(m.dateLimite);
    document.title = m.titre + ' — Global Premium Events';
    document.documentElement.lang = LANG;
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', m.accroche || '');

    var h = '';
    if (id === 'apercu') h += '<div class="ms-preview-bar">' + U.preview + ' <a href="/missions/editeur/">' + U.backEditor + '</a></div>';

    var C = m.couleurs;
    if (C) {
      root.classList.add('ms-themed');
      root.style.setProperty('--ev-dark', C.fonce || '#075C32');
      root.style.setProperty('--ev-main', C.principal || '#12884A');
      root.style.setProperty('--ev-accent', C.accent || '#F8CB0E');
      root.style.setProperty('--ev-red', C.rouge || '#E8484F');
    } else { root.classList.remove('ms-themed'); }
    h += '<section class="ms-hero' + (m.image ? ' has-img' : '') + '"><div class="wrap ms-hero-grid"><div class="ms-hero-in">' +
      '<div class="hero-kicker"><span class="rule"></span><span>' + U.kicker + ' · ' + esc(m.pays) + '</span><span class="ms-badge ms-badge-' + s + '">' + statutLabel(s) + '</span>' + langToggle() + '</div>' +
      '<h1 class="ms-title serif">' + esc(m.titre) + '</h1><p class="ms-lede">' + esc(m.accroche) + '</p>' +
      (m.annonce ? '<p class="ms-annonce"><span>' + (EN ? 'Announced' : 'Annonce') + '</span>' + esc(m.annonce) + '</p>' : '') +
      '<ul class="ms-facts"><li>' + ICON.cal + '<span><b>' + U.dates + '</b>' + esc(fmtRange(m.dateDebut, m.dateFin)) + '</span></li>' +
      '<li>' + ICON.pin + '<span><b>' + U.place + '</b>' + esc(m.ville) + ', ' + esc(m.pays) + '</span></li>' +
      (m.places ? '<li>' + ICON.seat + '<span><b>' + U.deleg + '</b>' + seatsTxt(m) + '</span></li>' : '') +
      (m.dateLimite ? '<li>' + ICON.clock + '<span><b>' + U.deadline + '</b>' + esc(fmtDate(m.dateLimite)) + (s === 'ouverte' && j !== null && j >= 0 ? ' (' + (EN ? 'D-' : 'J-') + j + ')' : '') + '</span></li>' : '') +
      '</ul><div class="ms-ctas">' +
      '<a class="ms-btn ms-btn-gold" href="#' + (s === 'ouverte' ? (isOpen(m) ? 'forfaits' : 'inscription') : 'inscription') + '">' + (m.surDemande && s === 'ouverte' ? (m.sponsoring ? U.contactUs : U.ixBtn) : s === 'ouverte' ? (isOpen(m) ? U.register : U.requestOffer) : (s === 'bientot' ? U.notify : U.notifyNext)) + ' &rarr;</a>' +
      (m.sponsoring ? '<a class="ms-btn ms-btn-ghost" href="#sponsoring">' + U.sponsorBtn + '</a>' : '') +
      '<a class="ms-btn ms-btn-ghost" href="' + docUrl(m, 'programme') + '" target="_blank" rel="noopener">' + ICON.doc + U.docProg + '</a></div>' +
      '</div>' + (m.image ? '<figure class="ms-hero-img"><img src="' + esc(m.image) + '" alt="' + esc(m.evenement ? m.evenement.nom : m.titre) + '" width="900" height="1125"></figure>' : '') + '</div></section>';

    if (m.pourquoi && m.pourquoi.length) {
      h += '<section class="ms-sec"><div class="wrap"><h2 class="ms-h2 serif">' + (m.pourquoiTitre ? esc(m.pourquoiTitre) : fill(U.why, { p: esc(m.pays) })) + '</h2><div class="ms-stats">' +
        m.pourquoi.map(function (p) { return '<div class="ms-stat reveal"><b class="serif">' + esc(p.chiffre) + '</b><span>' + esc(p.texte) + '</span></div>'; }).join('') + '</div></div></section>';
    }

    if (m.evenement) {
      var e = m.evenement;
      h += '<section class="ms-sec ms-sec-tight"><div class="wrap"><div class="ms-event reveal">' +
        '<div><p class="ms-event-k">' + U.anchor + '</p><h2 class="serif">' + esc(e.nom) + '</h2>' +
        (e.slogan ? '<p class="ms-event-slogan">' + esc(e.slogan) + '</p>' : '') +
        (e.theme ? '<p class="ms-event-theme"><b>' + (EN ? 'Theme' : 'Thème') + '</b>' + esc(e.theme) + '</p>' : '') +
        '<p>' + esc(e.description) + '</p>' +
        (e.lien ? '<a class="ms-event-link" href="' + esc(e.lien) + '" target="_blank" rel="noopener">' + U.moreEvent + ' &rarr;</a>' : '') + '</div>' +
        '<ul class="ms-event-facts"><li><b>' + U.dates + '</b>' + esc(e.dates) + '</li><li><b>' + U.place + '</b>' + esc(e.lieu) + '</li><li><b>' + U.organiser + '</b>' + esc(e.organisateur) + '</li></ul>' +
        '</div></div></section>';
    }

    if (m.sponsoring) h += sponsoringHtml(m, s);

    // Accompagnement : ce que la délégation apporte au-delà de l'événement
    if (m.accompagnement && (m.accompagnement.items || []).length) {
      var ac = m.accompagnement;
      h += '<section class="ms-sec ms-sec-panel" id="accompagnement"><div class="wrap">' +
        (ac.surtitre ? '<p class="hero-kicker"><span class="rule"></span><span>' + esc(ac.surtitre) + '</span></p>' : '') +
        '<h2 class="ms-h2 serif">' + esc(ac.titre) + '</h2>' + (ac.intro ? '<p class="ms-acc-intro">' + esc(ac.intro) + '</p>' : '') +
        '<div class="ms-acc">' + ac.items.map(function (it, i) {
          return '<div class="ms-acc-item reveal"><span class="ms-acc-n serif">' + String(i + 1).padStart(2, '0') + '</span><h3>' + esc(it.titre) + '</h3><p>' + esc(it.texte) + '</p></div>';
        }).join('') + '</div></div></section>';
    }

    // Opportunités par secteur (remplace la liste simple des secteurs)
    if (m.opportunites && m.opportunites.length) {
      h += '<section class="ms-sec"><div class="wrap"><h2 class="ms-h2 serif">' + esc(m.opportunitesTitre || U.sectors) + '</h2>' +
        (m.opportunitesIntro ? '<p class="ms-acc-intro">' + esc(m.opportunitesIntro) + '</p>' : '') +
        '<div class="ms-opp">' + m.opportunites.map(function (o) {
          return '<div class="ms-opp-item reveal"><h3>' + esc(o.secteur) + '</h3><p>' + esc(o.texte) + '</p></div>';
        }).join('') + '</div></div></section>';
    } else if (m.secteurs && m.secteurs.length) {
      h += '<section class="ms-sec ms-sec-tight"><div class="wrap"><h2 class="ms-h2 serif">' + (m.secteursTitre ? esc(m.secteursTitre) : U.sectors) + '</h2><ul class="ms-chips">' +
        m.secteurs.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div></section>';
    }

    // Référence : une réalisation passée liée au pays (photo + texte)
    if (m.reference && m.reference.image) {
      var rf = m.reference;
      h += '<section class="ms-sec"><div class="wrap ms-ref reveal"><figure class="ms-ref-img"><img src="' + esc(rf.image) + '" alt="' + esc(rf.legende || rf.titre || '') + '" loading="lazy">' +
        (rf.legende ? '<figcaption>' + esc(rf.legende) + '</figcaption>' : '') + '</figure><div class="ms-ref-txt">' +
        (rf.surtitre ? '<p class="ms-ref-kicker">' + esc(rf.surtitre) + '</p>' : '') + '<h2 class="ms-h2 serif">' + esc(rf.titre) + '</h2>' +
        (rf.textes || []).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div></div></section>';
    }

    if (m.programme && m.programme.length) {
      h += '<section class="ms-sec"><div class="wrap"><div class="ms-sec-head"><h2 class="ms-h2 serif">' + U.programme + '</h2>' +
        '<a class="ms-textlink" href="' + docUrl(m, 'programme') + '" target="_blank" rel="noopener">' + U.dlProg + ' &rarr;</a></div><ol class="ms-days">' +
        m.programme.map(function (d, i) {
          return '<li class="ms-day reveal"><div class="ms-day-n serif">' + String(i + 1).padStart(2, '0') + '</div><div><h3>' + esc(d.jour) + '</h3><ul>' +
            (d.items || []).map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('') + '</ul></div></li>';
        }).join('') + '</ol><p class="ms-small">' + U.progNote + '</p></div></section>';
    }

    // masquerFormules : aucun forfait affiché (formulaire d'intérêt seulement)
    if (!m.masquerFormules) h += packagesHtml(m, s);

    var pr = m.pratique || {};
    var prItems = [['vol', U.flight, ICON.plane], ['hotel', U.hotel, ICON.bed], ['visa', U.visa, ICON.pass], ['sante', U.health, ICON.health], ['monnaie', U.money, ICON.coin], ['autres', U.good, ICON.info]].filter(function (x) { return pr[x[0]]; });
    if (prItems.length) {
      h += '<section class="ms-sec"><div class="wrap"><h2 class="ms-h2 serif">' + U.practical + '</h2><div class="ms-prat">' +
        prItems.map(function (x) { return '<div class="ms-prat-item reveal"><span class="ms-ic">' + x[2] + '</span><div><h3>' + x[1] + '</h3><p>' + esc(pr[x[0]]) + '</p></div></div>'; }).join('') + '</div></div></section>';
    }

    h += '<section class="ms-sec ms-sec-tight"><div class="wrap"><h2 class="ms-h2 serif">' + U.docs + '</h2><div class="ms-docs">' +
      (isOpen(m) ? [['note', U.docNote, U.docNoteD], ['fiche', U.docForm, U.docFormD], ['programme', U.docProg, U.docProgD]] : [['programme', U.docProg, U.docProgD]]).map(function (d) {
        return '<a class="ms-doc" href="' + docUrl(m, d[0]) + '" target="_blank" rel="noopener"><span class="ms-ic">' + ICON.doc + '</span><div><h3>' + d[1] + '</h3><p>' + d[2] + '</p><span class="ms-textlink">' + U.openPdf + ' &rarr;</span></div></a>';
      }).join('') + '</div></div></section>';

    h += '<section class="ms-sec ms-sec-form" id="inscription"><div class="wrap">' + (m.surDemande && s === 'ouverte' ? contactHtml(m) : s === 'ouverte' ? (isOpen(m) ? formHtml(m) : leadHtml(m)) : interestHtml(m, s)) + '</div></section>';

    root.innerHTML = h;
    if (m.surDemande && s === 'ouverte') bindContact(m); else if (s === 'ouverte') { if (isOpen(m)) bindForm(m); else bindLead(m, root); } else bindInterest(m);
    revealInit();
  }

  /* ---------------- formulaire d'inscription ---------------- */
  function pdNote() {
    return '<p class="ms-small" style="font-size:12px;line-height:1.55;margin:4px 0 12px">' + (EN
      ? 'Your data is used only to answer your request. Under Moroccan Law No. 09-08, you have the right to access, correct and object to the processing of your personal data: '
      : 'Vos donn\u00e9es servent uniquement \u00e0 r\u00e9pondre \u00e0 votre demande. Conform\u00e9ment \u00e0 la loi n\u00b0 09-08, vous disposez d\u2019un droit d\u2019acc\u00e8s, de rectification et d\u2019opposition au traitement de vos donn\u00e9es personnelles : ') +
      '<a href="mailto:' + esc(CFG.email) + '">' + esc(CFG.email) + '</a>. <a href="/privacy-policy/">' + (EN ? 'Privacy policy' : 'Politique de confidentialit\u00e9') + '</a>.</p>';
  }
  function opt(list) { return list.map(function (x) { return '<option value="' + esc(x) + '">' + esc(x) + '</option>'; }).join(''); }
  function checks(name, list) {
    return '<div class="ms-checks">' + list.map(function (x, i) {
      var idv = name + '-' + i;
      return '<label class="ms-check" for="' + idv + '"><input type="checkbox" id="' + idv + '" name="' + name + '" value="' + esc(x) + '"><span>' + esc(x) + '</span></label>';
    }).join('') + '</div>';
  }
  function pieces() { return (EN ? CFG.piecesDemandeesEn : CFG.piecesDemandees) || CFG.piecesDemandees || []; }

  function formHtml(m) {
    var F = formules(m), cur = (m.prix && m.prix.devise) || 'MAD';
    var reco = F.filter(function (f) { return f.recommande; })[0] || F[0];
    var pkg = '<fieldset><legend>' + U.fsPackage + ' *</legend><div class="ms-pick">' + F.map(function (f) {
      return '<label class="ms-pick-opt" for="pk-' + esc(f.id) + '"><input type="radio" name="forfait" id="pk-' + esc(f.id) + '" value="' + esc(f.id) + '"' + (f === reco ? ' checked' : '') + '>' +
        '<span class="ms-pick-body"><b>' + esc(f.nom) + '</b><span>' + money(f.prix, cur) + ' ' + (EN ? 'excl. VAT' : 'HT') + '</span></span></label>';
    }).join('') + '</div></fieldset>';
    return '<div class="ms-form-grid"><div class="ms-form-aside">' +
      '<p class="hero-kicker"><span class="rule"></span><span>' + U.regKicker + '</span></p>' +
      '<h2 class="ms-h2 serif">' + U.regTitle + '</h2>' +
      '<p>' + U.regText + ' <b>' + esc(fmtDate(m.dateLimite)) + '</b>.</p>' +
      '<ol class="ms-steps"><li><b>' + U.step1 + '</b> ' + U.step1b + '</li><li><b>' + U.step2 + '</b> ' + U.step2b + '</li>' +
      '<li><b>' + U.step3 + '</b>' + (EN ? ': ' : ' : ') + pieces().map(function (p) { return esc(p.split(' (')[0].toLowerCase()); }).join(', ') + '.</li><li><b>' + U.step4 + '</b>' + U.step4b + '</li></ol>' +
      '<p class="ms-small">' + U.question + ' <a href="mailto:' + esc(CFG.email) + '">' + esc(CFG.email) + '</a> · <a href="tel:' + esc((CFG.telephone || '').replace(/\s/g, '')) + '">' + esc(CFG.telephone) + '</a></p>' +
      '</div><form class="ms-form" id="msForm" novalidate>' + pkg +
      '<fieldset><legend>' + U.fsPerson + '</legend>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-nom">' + U.name + ' *</label><input id="f-nom" name="nom" required autocomplete="name"></div>' +
        '<div class="cf-field"><label for="f-fonction">' + U.role + ' *</label><input id="f-fonction" name="fonction" required autocomplete="organization-title" placeholder="' + U.rolePh + '"></div></div>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-email">' + U.email + ' *</label><input id="f-email" name="email" type="email" required autocomplete="email"></div>' +
        '<div class="cf-field"><label for="f-tel">' + U.phone + ' *</label><input id="f-tel" name="telephone" type="tel" required autocomplete="tel" placeholder="+212 6…"></div></div>' +
      '</fieldset><fieldset><legend>' + U.fsCompany + '</legend>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-ent">' + U.company + ' *</label><input id="f-ent" name="entreprise" required autocomplete="organization"></div>' +
        '<div class="cf-field"><label for="f-ville">' + U.city + ' / ' + U.country + '</label><input id="f-ville" name="ville_pays" autocomplete="address-level2"></div></div>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-secteur">' + U.sector + ' *</label><select id="f-secteur" name="secteur" required><option value="">' + U.choosePh + '</option>' + opt(SECTEURS_GENERAUX) + '</select></div>' +
        '<div class="cf-field"><label for="f-site">' + U.website + '</label><input id="f-site" name="site" type="url" placeholder="https://"></div></div>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-taille">' + U.size + '</label><select id="f-taille" name="effectif"><option value="">' + U.choosePh + '</option>' + opt(EFFECTIFS) + '</select></div>' +
        '<div class="cf-field"><label for="f-export">' + U.exportShare + '</label><select id="f-export" name="part_export"><option value="">' + U.choosePh + '</option>' + opt(EXPORTS) + '</select></div></div>' +
        '<div class="cf-field"><label for="f-produits">' + U.products + ' *</label><textarea id="f-produits" name="produits" required rows="3" placeholder="' + U.productsPh + '"></textarea></div>' +
      '</fieldset><fieldset><legend>' + U.fsGoals + '</legend>' +
        '<div class="cf-field"><span class="ms-label">' + U.lookFor + ' *</span>' + checks('objectifs', OBJECTIFS) + '</div>' +
        (m.secteurs && m.secteurs.length ? '<div class="cf-field"><span class="ms-label">' + U.interest + '</span>' + checks('secteurs_cibles', m.secteurs) + '</div>' : '') +
        '<div class="cf-field"><label for="f-profil">' + U.profile + ' *</label><textarea id="f-profil" name="profil_partenaires" required rows="3" placeholder="' + U.profilePh + '"></textarea></div>' +
        '<div class="cf-field"><label for="f-inst">' + U.inst + '</label><input id="f-inst" name="rencontres_institutionnelles" placeholder="' + U.instPh + '"></div>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-contacts">' + U.contacts + '</label><select id="f-contacts" name="contacts_existants"><option value="' + U.no + '">' + U.no + '</option><option value="' + U.yes + '">' + U.yes + '</option></select></div>' +
        '<div class="cf-field"><label for="f-source">' + U.source + '</label><select id="f-source" name="source"><option value="">' + U.choosePh + '</option>' + opt(SOURCES) + '</select></div></div>' +
      '</fieldset><fieldset><legend>' + U.fsPart + '</legend>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-nb">' + U.nb + '</label><select id="f-nb" name="nombre_participants"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div>' +
        '<div class="cf-field"><label for="f-p2">' + U.others + '</label><input id="f-p2" name="autres_participants" placeholder="' + U.optional + '"></div></div>' +
        '<div class="ms-total" aria-live="polite"><span>' + U.total + '</span><b id="msTotal"></b><small id="msTotalDetail"></small></div>' +
        '<label class="ms-check ms-consent" for="f-ok"><input type="checkbox" id="f-ok" name="accord" value="' + U.yes + '" required><span>' +
          fill(U.consent, { note: '<a href="' + docUrl(m, 'note') + '" target="_blank" rel="noopener">' + U.infoNote.toLowerCase() + '</a>', priv: '<a href="/privacy-policy/">' + U.privacy + '</a>' }) + '</span></label>' +
      '</fieldset><p class="ms-error" id="msError" role="alert"></p>' +
      pdNote() + '<button type="submit" class="cf-submit">' + U.send + ' <span aria-hidden="true">&rarr;</span></button></form></div>';
  }

  function collect(form) { var data = {}, fd = new FormData(form); fd.forEach(function (v, k) { data[k] = data[k] ? data[k] + ', ' + v : v; }); return data; }

  function send(form, payload, subject, okHtml, softFail) {
    if (param('id') === 'apercu') { var pe = form.querySelector('.ms-error'); if (pe) pe.textContent = U.previewNoSend; return; }
    var btn = form.querySelector('button[type=submit]'), label = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.textContent = U.sending; }
    payload._subject = subject; payload._captcha = 'false'; payload._template = 'table';
    if (payload.email) payload._replyto = payload.email;
    var lines = Object.keys(payload).filter(function (k) { return k.charAt(0) !== '_'; }).map(function (k) { return k + ' : ' + payload[k]; });
    var to = CFG.emailInscriptions || CFG.email;
    var mailto = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    fetch('https://formsubmit.co/ajax/' + to, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(payload) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok || String(j.success) === 'false') throw j; return j; }); })
      .then(function () { if (typeof okHtml === 'function') { okHtml(); return; } form.outerHTML = okHtml; var t = document.getElementById('inscription'); if (t) window.scrollTo({ top: t.offsetTop - 80 }); })
      .catch(function () { if (softFail && typeof okHtml === 'function') { okHtml(); return; } if (btn) { btn.disabled = false; btn.innerHTML = label; } window.location.href = mailto; });
  }

  function bindForm(m) {
    var form = document.getElementById('msForm'); if (!form) return;
    var F = formules(m), cur = (m.prix && m.prix.devise) || 'MAD';
    var nb = document.getElementById('f-nb'), tot = document.getElementById('msTotal'), det = document.getElementById('msTotalDetail');
    function chosen() { var r = form.querySelector('input[name=forfait]:checked'); return r ? F.filter(function (f) { return f.id === r.value; })[0] : null; }
    function total() {
      var f = chosen(), n = +nb.value || 1;
      if (!f) { tot.textContent = '—'; det.textContent = ''; return 0; }
      var sum = (f.prix || 0) + (n - 1) * (f.prixSup || f.prix || 0);
      tot.textContent = money(sum, cur);
      det.textContent = f.nom + (n > 1 ? ' · ' + n + (EN ? ' participants' : ' participants') : '') + ' — ' + (m.prix && m.prix.mention || '');
      return sum;
    }
    nb.addEventListener('change', total);
    form.querySelectorAll('input[name=forfait]').forEach(function (r) { r.addEventListener('change', total); });
    total();
    document.querySelectorAll('[data-pick]').forEach(function (a) {
      a.addEventListener('click', function () { var r = document.getElementById('pk-' + a.getAttribute('data-pick')); if (r) { r.checked = true; total(); } });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = document.getElementById('msError'); err.textContent = '';
      form.querySelectorAll('.is-invalid').forEach(function (el) { el.classList.remove('is-invalid'); });
      var bad = Array.prototype.filter.call(form.querySelectorAll('[required]'), function (el) { return el.type === 'checkbox' ? !el.checked : !el.value.trim(); });
      var noObj = !form.querySelector('input[name=objectifs]:checked'), f = chosen();
      bad.forEach(function (el) { el.classList.add('is-invalid'); });
      if (!f) { err.textContent = U.errPkg; form.querySelector('input[name=forfait]').focus(); return; }
      if (bad.length || noObj) { err.textContent = noObj && !bad.length ? U.errGoal : U.errReq; (bad[0] || form.querySelector('input[name=objectifs]')).focus(); return; }
      var email = document.getElementById('f-email');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.classList.add('is-invalid'); err.textContent = U.errMail; email.focus(); return; }
      var d = collect(form);
      d.forfait = f.nom;
      d.mission = m.titre + ' (' + fmtRange(m.dateDebut, m.dateFin) + ')';
      d.montant_estime_HT = money(total(), cur);
      d.langue = LANG.toUpperCase();
      var subject = (EN ? 'Registration' : 'Inscription') + ' — Mission ' + m.pays + ' ' + (m.dateDebut || '').slice(0, 4) + ' — ' + f.nom + ' — ' + d.entreprise;
      send(form, d, subject,
        '<div class="gpe-form-ok ms-ok" role="status"><div class="gpe-form-ok-icon">&#10003;</div><h3>' + U.okTitle + '</h3><p>' + U.okText + '</p>' +
        '<p class="ms-ok-next"><b>' + U.okPrep + '</b> ' + pieces().map(esc).join(' · ') + '.</p>' +
        '<p><a class="ms-btn ms-btn-ghost" href="' + docUrl(m, 'note') + '" target="_blank" rel="noopener">' + U.reread + '</a></p></div>');
    });
  }

  function leadHtml(m) {
    return '<div class="ms-form-grid"><div class="ms-form-aside">' +
      '<p class="hero-kicker"><span class="rule"></span><span>' + U.leadKicker + '</span></p>' +
      '<h2 class="ms-h2 serif">' + U.leadTitle + '</h2><p>' + U.leadText + '</p>' +
      '<ul class="ms-incl">' + [U.lead1, U.lead2, U.lead3].map(function (x) { return '<li>' + ICON.check + '<span>' + x + '</span></li>'; }).join('') + '</ul>' +
      '<p class="ms-small">' + U.question + ' <a href="mailto:' + esc(CFG.email) + '">' + esc(CFG.email) + '</a> \u00b7 <a href="tel:' + esc((CFG.telephone || '').replace(/\s/g, '')) + '">' + esc(CFG.telephone) + '</a></p>' +
      '</div><form class="ms-form" id="msLead" novalidate>' +
      '<div class="cf-row"><div class="cf-field"><label for="l-nom">' + U.name + ' *</label><input id="l-nom" name="nom" required autocomplete="name"></div>' +
      '<div class="cf-field"><label for="l-fonction">' + U.role + ' *</label><input id="l-fonction" name="fonction" required autocomplete="organization-title"></div></div>' +
      '<div class="cf-row"><div class="cf-field"><label for="l-ent">' + U.company + ' *</label><input id="l-ent" name="entreprise" required autocomplete="organization"></div>' +
      '<div class="cf-field"><label for="l-secteur">' + U.sector + '</label><select id="l-secteur" name="secteur"><option value="">' + U.choosePh + '</option>' + opt(SECTEURS_GENERAUX) + '</select></div></div>' +
      '<div class="cf-row"><div class="cf-field"><label for="l-email">' + U.email + ' *</label><input id="l-email" name="email" type="email" required autocomplete="email"></div>' +
      '<div class="cf-field"><label for="l-tel">' + U.phone + ' *</label><input id="l-tel" name="telephone" type="tel" required autocomplete="tel"></div></div>' +
      '<p class="ms-error" id="msError" role="alert"></p>' +
      pdNote() + '<button type="submit" class="cf-submit">' + U.leadBtn + ' <span aria-hidden="true">&rarr;</span></button></form></div>';
  }
  function bindLead(m, root) {
    var form = document.getElementById('msLead'); if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = document.getElementById('msError'); err.textContent = '';
      form.querySelectorAll('.is-invalid').forEach(function (el) { el.classList.remove('is-invalid'); });
      var bad = Array.prototype.filter.call(form.querySelectorAll('[required]'), function (el) { return !el.value.trim(); });
      bad.forEach(function (el) { el.classList.add('is-invalid'); });
      if (bad.length) { err.textContent = U.errReq; bad[0].focus(); return; }
      var email = document.getElementById('l-email');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.classList.add('is-invalid'); err.textContent = U.errMail; email.focus(); return; }
      var d = collect(form); d.mission = m.titre; d.langue = LANG.toUpperCase();
      var subject = (EN ? 'Offer request' : 'Demande d\u2019offre') + ' \u2014 Mission ' + m.pays + ' ' + (m.dateDebut || '').slice(0, 4) + ' \u2014 ' + d.entreprise;
      send(form, d, subject, function () {
        unlock(m);
        renderMission(root);
        var t = document.getElementById('forfaits'); if (t) window.scrollTo({ top: t.offsetTop - 70 });
      }, true);
    });
  }

  /* ---------------- sponsoring + demande de contact (missions « sur demande ») ---------------- */
  function sponsoringHtml(m, s) {
    var sp = m.sponsoring, N = sp.niveaux || [];
    return '<section class="ms-sec ms-sec-panel" id="sponsoring"><div class="wrap"><h2 class="ms-h2 serif">' + esc(sp.titre) + '</h2>' +
      (sp.intro ? '<p class="ms-small ms-pk-note">' + esc(sp.intro) + '</p>' : '') +
      '<div class="ms-pks ms-pks-' + N.length + '">' + N.map(function (n, i) {
        return '<div class="ms-pk' + (n.recommande ? ' is-reco' : '') + '">' +
          (n.recommande ? '<span class="ms-pk-badge">' + U.sponsorTop + '</span>' : '') +
          '<p class="ms-pk-group">' + U.level + ' ' + (i + 1) + '</p><h3 class="ms-pk-name serif">' + esc(n.nom) + '</h3>' +
          '<ul class="ms-pk-meta ms-pk-meta-locked"><li>' + U.onRequest + '</li></ul>' +
          '<a class="ms-btn' + (n.recommande ? ' ms-btn-gold' : ' ms-btn-ghost') + ' ms-pk-cta" href="#inscription" data-interest="sp-' + i + '">' + U.contactUs + ' &rarr;</a>' +
          '<div class="ms-pk-feats"><ul class="ms-pk-list">' + (n.avantages || []).map(function (a) { return '<li>' + ICON.check + '<span>' + esc(a) + '</span></li>'; }).join('') + '</ul></div></div>';
      }).join('') + '</div>' +
      '<p class="ms-small" style="margin-top:18px">' + esc(sp.cta || '') + ' : <a href="mailto:' + esc(CFG.email) + '">' + esc(CFG.email) + '</a> · <a href="tel:' + esc((CFG.telephone || '').replace(/\s/g, '')) + '">' + esc(CFG.telephone) + '</a></p>' +
      '</div></section>';
  }
  function contactHtml(m) {
    var opts = [['mission', U.wantMission]].concat(((m.sponsoring && m.sponsoring.niveaux) || []).map(function (n, i) { return ['sp-' + i, U.wantSponsor + ' — ' + n.nom]; }));
    return '<div class="ms-form-grid"><div class="ms-form-aside">' +
      '<p class="hero-kicker"><span class="rule"></span><span>' + (m.sponsoring ? U.contactKicker : U.ixKicker) + '</span></p>' +
      '<h2 class="ms-h2 serif">' + (m.sponsoring ? U.contactTitle : U.ixTitle) + '</h2><p>' + (m.sponsoring ? U.contactText : U.ixText) + '</p>' +
      '<p class="ms-small">' + U.question + ' <a href="mailto:' + esc(CFG.email) + '">' + esc(CFG.email) + '</a> · <a href="tel:' + esc((CFG.telephone || '').replace(/\s/g, '')) + '">' + esc(CFG.telephone) + '</a></p>' +
      '</div><form class="ms-form" id="msContact" novalidate>' +
      (opts.length === 1 ? '<input type="checkbox" name="interet" value="' + esc(opts[0][1]) + '" data-key="' + opts[0][0] + '" checked hidden>' :
      '<div class="cf-field"><span class="ms-label">' + U.interestedIn + ' *</span><div class="ms-checks">' + opts.map(function (o) {
        return '<label class="ms-check"><input type="checkbox" name="interet" value="' + esc(o[1]) + '" data-key="' + o[0] + '"> <span>' + esc(o[1]) + '</span></label>';
      }).join('') + '</div></div>') +
      '<div class="cf-row"><div class="cf-field"><label for="c-nom">' + U.name + ' *</label><input id="c-nom" name="nom" required autocomplete="name"></div>' +
      '<div class="cf-field"><label for="c-fonction">' + U.role + '</label><input id="c-fonction" name="fonction" autocomplete="organization-title"></div></div>' +
      '<div class="cf-row"><div class="cf-field"><label for="c-ent">' + U.company + ' *</label><input id="c-ent" name="entreprise" required autocomplete="organization"></div>' +
      '<div class="cf-field"><label for="c-tel">' + U.phone + ' *</label><input id="c-tel" name="telephone" type="tel" required autocomplete="tel"></div></div>' +
      '<div class="cf-field"><label for="c-email">' + U.email + ' *</label><input id="c-email" name="email" type="email" required autocomplete="email"></div>' +
      '<div class="cf-field"><label for="c-msg">' + U.message + '</label><textarea id="c-msg" name="message" rows="3"></textarea></div>' +
      '<p class="ms-error" id="msError" role="alert"></p>' +
      pdNote() + '<button type="submit" class="cf-submit">' + (m.sponsoring ? U.contactBtn : U.ixBtn) + ' <span aria-hidden="true">&rarr;</span></button></form></div>';
  }
  function bindContact(m) {
    var form = document.getElementById('msContact'); if (!form) return;
    document.querySelectorAll('[data-interest]').forEach(function (a) {
      a.addEventListener('click', function () { var c = form.querySelector('input[data-key="' + a.getAttribute('data-interest') + '"]'); if (c) c.checked = true; });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = document.getElementById('msError'); err.textContent = '';
      form.querySelectorAll('.is-invalid').forEach(function (el) { el.classList.remove('is-invalid'); });
      var bad = Array.prototype.filter.call(form.querySelectorAll('[required]'), function (el) { return !el.value.trim(); });
      bad.forEach(function (el) { el.classList.add('is-invalid'); });
      if (bad.length) { err.textContent = U.errReq; bad[0].focus(); return; }
      if (!form.querySelector('input[name=interet]:checked')) { err.textContent = U.errInterest; return; }
      var email = document.getElementById('c-email');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.classList.add('is-invalid'); err.textContent = U.errMail; email.focus(); return; }
      var d = collect(form); d.mission = m.titre; d.langue = LANG.toUpperCase();
      send(form, d, (EN ? 'Request' : 'Demande') + ' — ' + m.ville + ' ' + (m.dateDebut || '').slice(0, 4) + ' (' + d.interet + ') — ' + d.entreprise,
        '<div class="gpe-form-ok" role="status"><div class="gpe-form-ok-icon">&#10003;</div><h3>' + U.noted + '</h3><p>' + U.contactOk + '</p></div>');
    });
  }

  function interestHtml(m, s) {
    var msg = s === 'bientot' ? U.soonMsg : s === 'complete' ? U.fullMsg : U.closedMsg;
    return '<div class="ms-interest"><h2 class="ms-h2 serif">' + (s === 'complete' ? U.waitTitle : U.notifyTitle) + '</h2><p>' + msg + '</p>' +
      '<form class="ms-form ms-form-inline" id="msInterest" novalidate>' +
      '<div class="cf-field"><label for="i-nom">' + U.name + ' *</label><input id="i-nom" name="nom" required></div>' +
      '<div class="cf-field"><label for="i-ent">' + U.company + ' *</label><input id="i-ent" name="entreprise" required></div>' +
      '<div class="cf-field"><label for="i-email">' + U.email + ' *</label><input id="i-email" name="email" type="email" required></div>' +
      '<div class="cf-field"><label for="i-tel">' + U.phone + '</label><input id="i-tel" name="telephone" type="tel"></div>' +
      '<p class="ms-error" id="msError" role="alert"></p>' + pdNote() + '<button type="submit" class="cf-submit">' + U.keepMe + ' <span aria-hidden="true">&rarr;</span></button></form></div>';
  }
  function bindInterest(m) {
    var form = document.getElementById('msInterest'); if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = Array.prototype.filter.call(form.querySelectorAll('[required]'), function (el) { return !el.value.trim(); });
      if (bad.length) { document.getElementById('msError').textContent = U.errReq; bad[0].focus(); return; }
      var d = collect(form); d.mission = m.titre;
      send(form, d, (EN ? 'Interest' : 'Intérêt') + ' — Mission ' + m.pays + ' — ' + d.entreprise,
        '<div class="gpe-form-ok" role="status"><div class="gpe-form-ok-icon">&#10003;</div><h3>' + U.noted + '</h3><p>' + U.notedText + '</p></div>');
    });
  }
  function bindCalendarForm() {
    var form = document.getElementById('msCalForm'); if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = Array.prototype.filter.call(form.querySelectorAll('[required]'), function (el) { return !el.value.trim(); });
      if (bad.length) { document.getElementById('msCalError').textContent = U.errReq; bad[0].focus(); return; }
      var d = collect(form);
      send(form, d, (EN ? 'Mission calendar' : 'Calendrier des missions') + ' — ' + (d.entreprise || d.nom),
        '<div class="gpe-form-ok" role="status"><div class="gpe-form-ok-icon">&#10003;</div><h3>' + U.calOkTitle + '</h3><p>' + U.calOkText + '</p></div>');
    });
  }

  /* =====================================================================
     3. DOCUMENTS IMPRIMABLES  (/missions/docs/?id=…&doc=note|fiche|programme)
     ===================================================================== */
  function renderDoc(root) {
    var m = getMission(param('id')), doc = param('doc') || 'note';
    if (!m) { root.innerHTML = '<p style="padding:40px">' + U.notFound + '.</p>'; return; }
    document.documentElement.lang = LANG;
    var cur = (m.prix && m.prix.devise) || 'MAD', F = formules(m), TT = U.dTitle;
    document.title = TT[doc] + ' — ' + m.titre;
    var city = EN ? (CFG.villeEn || CFG.ville) : CFG.ville;
    var head = '<header class="dc-head"><img src="/assets/logo.webp" alt="" class="dc-logo"><div><p class="dc-org">' + esc(CFG.organisation) + '</p><p class="dc-contact">' + esc(city) + ' · ' + esc(CFG.telephone) + ' · ' + esc(CFG.email) + ' · ' + esc(CFG.site) + '</p></div></header>' +
      '<div class="dc-titlebox"><p class="dc-doctype">' + TT[doc] + '</p><h1 class="serif">' + esc(m.titre) + '</h1><p class="dc-dates">' + esc(m.ville) + ', ' + esc(m.pays) + ' · ' + esc(fmtRange(m.dateDebut, m.dateFin)) + '</p></div>';
    // Note et fiche (prix, RIB) : réservées aux entreprises qui ont demandé l'offre
    var allowed = unlocked(m) ? ['note', 'fiche', 'programme'] : ['programme'];
    if (allowed.indexOf(doc) < 0) {
      root.innerHTML = '<div class="dc-toolbar"><a href="' + pageUrl(m) + '">&larr; ' + U.dBack + '</a><span></span><span>' + langToggle() + '</span></div>' +
        '<article class="dc-page">' + head + '<p class="dc-intro" style="margin-top:28px">' + U.docLocked + '</p><p><a class="ms-btn ms-btn-gold" href="' + pageUrl(m) + '#inscription">' + U.docLockedBtn + ' &rarr;</a></p></article>';
      return;
    }
    var foot = '<footer class="dc-foot">' + esc(CFG.organisation) + ' · ' + esc(CFG.email) + ' · ' + esc(CFG.telephone) + '</footer>';
    var body = '';

    if (doc === 'note') {
      var pr = m.pratique || {};
      var rows = [
        [U.dDest, m.ville + ', ' + m.pays], [U.dMDates, fmtRange(m.dateDebut, m.dateFin)],
        m.evenement ? [U.dEvent, m.evenement.nom + ' — ' + m.evenement.dates + ', ' + m.evenement.lieu] : null,
        [U.dLang, m.langue], [U.flight, pr.vol], [U.hotel, pr.hotel], [U.visa, pr.visa], [U.health, pr.sante], [U.money, pr.monnaie], [U.good, pr.autres],
        [U.deadline, fmtDate(m.dateLimite)]
      ].filter(function (r) { return r && r[1]; });
      body += '<p class="dc-intro">' + U.dIntro + '</p><table class="dc-table">' + rows.map(function (r) { return '<tr><th>' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</table>';
      body += '<h2 class="dc-h2">' + U.dPkgTitle + '</h2><p class="dc-small" style="margin:0 0 6px">' + esc(m.prix && m.prix.mention) + '</p>';
      body += '<table class="dc-table dc-cmp"><thead><tr><th>' + U.dService + '</th>' + F.map(function (f) { return '<th class="c">' + esc(f.nom) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        '<tr class="dc-cmp-price"><td>' + U.dPrice + '</td>' + F.map(function (f) { return '<td class="c"><b>' + money(f.prix, cur) + '</b></td>'; }).join('') + '</tr>' +
        (m.comparatif || []).map(function (g) {
          return '<tr class="dc-cmp-g"><td colspan="' + (F.length + 1) + '">' + esc(g.groupe) + '</td></tr>' + (g.lignes || []).map(function (l) {
            return '<tr><td>' + esc(l[0]) + '</td>' + F.map(function (f, i) { var v = l[i + 1]; return '<td class="c">' + (v === 'Y' ? U.dYes : v === '-' || !v ? U.dNo : esc(v)) + '</td>'; }).join('') + '</tr>';
          }).join('');
        }).join('') +
        '<tr class="dc-cmp-price"><td>' + U.extraP + '</td>' + F.map(function (f) { return '<td class="c">' + money(f.prixSup, cur) + '</td>'; }).join('') + '</tr></tbody></table>';
      if (m.nonCompris) body += '<h2 class="dc-h2">' + U.notIncluded + '</h2><p class="dc-p">' + esc(m.nonCompris) + '</p>';
      if (m.conditions && m.conditions.length) body += '<h2 class="dc-h2">' + U.terms + '</h2><ul class="dc-list">' + m.conditions.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      body += '<h2 class="dc-h2">' + U.dPieces + '</h2><ul class="dc-list">' + pieces().map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      body += '<p class="dc-cta">' + U.dOnline + ' <b>' + esc(CFG.site) + '/missions</b> ' + U.dOr + ' ' + esc(CFG.email) + '</p>';
    }

    if (doc === 'fiche') {
      var line = function (label) { return '<div class="dc-line"><span>' + label + '</span><i></i></div>'; };
      var box = function (x) { return '<span class="dc-box"></span>' + esc(x); };
      body += '<p class="dc-intro"><b>' + U.dReturn + ' ' + esc(fmtDate(m.dateLimite)) + '</b> — ' + esc(CFG.emailInscriptions || CFG.email) + ' ' + U.dOrOnline + ' ' + esc(CFG.site) + '/missions</p>';
      body += '<h2 class="dc-h2">' + U.dPkg + '</h2><div class="dc-checks dc-checks-pk">' + F.map(function (f) { return '<span>' + box(f.nom + ' — ' + money(f.prix, cur) + ' ' + (EN ? 'excl. VAT' : 'HT')) + '</span>'; }).join('') + '</div>';
      body += '<h2 class="dc-h2">' + U.dId + '</h2>' + line(U.company) + line(U.sector) + line(U.dActs) + line(U.dAddr) + '<div class="dc-cols">' + line(U.dTel) + line(U.website) + '</div>' + line(U.email);
      body += '<h2 class="dc-h2">' + U.dRep + '</h2><div class="dc-cols">' + line(U.name) + line(U.role) + '</div><div class="dc-cols">' + line(U.dGsm) + line(U.email) + '</div>' + line(U.dOthers);
      body += '<h2 class="dc-h2">' + U.dNeeds + '</h2><div class="dc-checks">' + OBJECTIFS.map(function (o) { return '<span>' + box(o) + '</span>'; }).join('') + '</div>';
      body += '<p class="dc-q">' + U.contacts + ' <span>' + box(U.yes) + '</span> <span>' + box(U.no) + '</span></p>';
      if (m.secteurs && m.secteurs.length) body += '<p class="dc-q">' + U.dSectors + '</p><div class="dc-checks dc-checks-2">' + m.secteurs.map(function (x) { return '<span>' + box(x) + '</span>'; }).join('') + '</div>';
      body += line(U.dProfile) + line(U.inst);
      body += '<p class="dc-p dc-small">' + esc(m.prix && m.prix.mention) + '</p>';
      body += '<div class="dc-cols dc-pay"><div><h2 class="dc-h2">' + U.dPay + '</h2><div class="dc-checks dc-checks-col">' + (((EN ? CFG.paiement.modesEn : CFG.paiement.modes) || CFG.paiement.modes) || []).map(function (x) { return '<span>' + box(x) + '</span>'; }).join('') + '</div>' +
        '<p class="dc-small">' + (CFG.paiement.titulaire ? esc(CFG.paiement.titulaire) + ' \u00b7 ' : '') + esc(CFG.paiement && CFG.paiement.banque) + '<br>RIB' + (EN ? ': ' : ' : ') + esc(CFG.paiement && CFG.paiement.rib) + (CFG.paiement.iban ? '<br>IBAN' + (EN ? ': ' : ' : ') + esc(CFG.paiement.iban) : '') + (CFG.paiement.swift ? ' \u00b7 SWIFT' + (EN ? ': ' : ' : ') + esc(CFG.paiement.swift) : '') + '</p>' +
        '<p class="dc-send"><b>' + U.dSend + '</b> ' + pieces().map(function (x) { return esc(x.split(' (')[0]); }).join(' · ') + '.</p></div>' +
        '<div class="dc-sign"><p>' + U.dConfirm + '</p><p>' + U.dDone + ' ' + esc((m.dateDebut || '').slice(0, 4)) + '</p><p class="dc-sign-box">' + U.dSign + '</p></div></div>';
    }

    if (doc === 'programme') {
      if (m.evenement) body += '<p class="dc-intro">' + U.dAlong + ' <b>' + esc(m.evenement.nom) + '</b> (' + esc(m.evenement.dates) + ', ' + esc(m.evenement.lieu) + ').</p>';
      body += (m.programme || []).map(function (d) { return '<div class="dc-day"><h2 class="dc-h2">' + esc(d.jour) + '</h2><ul class="dc-list">' + (d.items || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>'; }).join('');
      body += '<p class="dc-small">' + U.progNote + '</p>';
    }

    root.innerHTML = '<div class="dc-toolbar"><a href="' + pageUrl(m) + '">&larr; ' + U.dBack + '</a><span>' +
      allowed.map(function (k) { return '<a class="' + (k === doc ? 'on' : '') + '" href="' + docUrl(m, k) + '">' + TT[k] + '</a>'; }).join('') +
      '</span><span>' + langToggle() + '<button type="button" onclick="window.print()">' + U.dPrint + '</button></span></div>' +
      '<article class="dc-page dc-' + esc(doc) + '">' + head + body + foot + '</article>';
  }

  /* ---------------- animations ---------------- */
  function revealInit() {
    var els = document.querySelectorAll('.reveal:not(.is-visible)');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('is-visible'); }); return; }
    var io = new IntersectionObserver(function (entries) { entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } }); }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Textes fixes des pages (data-fr / data-en) */
  function applyStaticLang() {
    document.querySelectorAll('[data-en]').forEach(function (el) {
      if (!el.hasAttribute('data-fr')) el.setAttribute('data-fr', el.innerHTML);
      el.innerHTML = EN ? el.getAttribute('data-en') : el.getAttribute('data-fr');
    });
    document.querySelectorAll('[data-en-ph]').forEach(function (el) { if (EN) el.setAttribute('placeholder', el.getAttribute('data-en-ph')); });
    var lt = document.getElementById('msLangSlot'); if (lt) lt.innerHTML = langToggle();
    document.querySelectorAll('a[href="/missions/"]').forEach(function (a) { if (EN) a.setAttribute('href', '/missions/?lang=en'); });
  }

  window.GPEMissions = { fmtDate: fmtDate, fmtRange: fmtRange, money: money, PREVIEW_KEY: PREVIEW_KEY, statut: statut, lang: LANG };
  document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.lang = LANG;
    applyStaticLang();
    var page = document.body.getAttribute('data-ms-page'), root = document.getElementById('msRoot');
    if (page === 'list' && root) { renderList(root); bindCalendarForm(); }
    if (page === 'mission' && root) renderMission(root);
    if (page === 'doc' && root) renderDoc(root);
    revealInit();
    var bar = document.getElementById('scrollProgressBar');
    if (bar) { var upd = function () { var d = document.documentElement, h = d.scrollHeight - d.clientHeight; bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%'; }; window.addEventListener('scroll', upd, { passive: true }); upd(); }
  });
})();
