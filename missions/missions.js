/* Global Premium Events — moteur des pages Missions B2B.
   Lit window.GPE_MISSIONS (missions-data.js) et génère : la liste,
   la page de chaque pays avec son formulaire, et les documents imprimables.
   Rien à modifier ici pour ajouter un pays : voir missions-data.js. */
(function () {
  'use strict';

  var CFG = window.GPE_CONFIG || {};
  var ALL = window.GPE_MISSIONS || [];
  var PREVIEW_KEY = 'gpe-mission-apercu';

  /* ---------------- utilitaires ---------------- */
  var MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  var MOIS_COURT = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

  function parts(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    return m ? { y: +m[1], m: +m[2], d: +m[3] } : null;
  }
  function fmtDate(iso) {
    var p = parts(iso); if (!p) return iso || '';
    return (p.d === 1 ? '1er' : p.d) + ' ' + MOIS[p.m - 1] + ' ' + p.y;
  }
  function fmtRange(a, b) {
    var p = parts(a), q = parts(b);
    if (!p) return '';
    if (!q) return fmtDate(a);
    if (p.y === q.y && p.m === q.m) return p.d + ' – ' + q.d + ' ' + MOIS[q.m - 1] + ' ' + q.y;
    if (p.y === q.y) return p.d + ' ' + MOIS[p.m - 1] + ' – ' + q.d + ' ' + MOIS[q.m - 1] + ' ' + q.y;
    return fmtDate(a) + ' – ' + fmtDate(b);
  }
  function money(n, cur) {
    if (n === null || n === undefined || n === '') return '';
    return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ' + (cur || 'MAD');
  }
  function esc(s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function daysUntil(iso) {
    var p = parts(iso); if (!p) return null;
    var t = Date.UTC(p.y, p.m - 1, p.d), n = new Date();
    var now = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate());
    return Math.round((t - now) / 864e5);
  }
  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : '';
  }

  /* Statut effectif : une mission "ouverte" dont la date limite est passée
     passe en "clôturée" ; une mission dont la date de fin est passée, en "terminée". */
  function statut(m) {
    if (m.dateFin && m.dateFin < today()) return 'terminee';
    if (m.statut === 'ouverte' && m.dateLimite && m.dateLimite < today()) return 'cloturee';
    return m.statut || 'bientot';
  }
  var STATUT_LABEL = {
    ouverte: 'Inscriptions ouvertes',
    bientot: 'Bientôt',
    complete: 'Complet',
    cloturee: 'Inscriptions closes',
    terminee: 'Terminée'
  };

  function getMission(id) {
    if (id === 'apercu') {
      try {
        var raw = localStorage.getItem(PREVIEW_KEY);
        if (raw) { var pm = JSON.parse(raw); pm.id = 'apercu'; return pm; }
      } catch (e) {}
      return null;
    }
    for (var i = 0; i < ALL.length; i++) if (ALL[i].id === id) return ALL[i];
    return null;
  }

  function prixEffectif(m) {
    var p = m.prix || {};
    if (p.earlyBird && p.earlyBird.montant && p.earlyBird.avant && today() <= p.earlyBird.avant) {
      return { montant: p.earlyBird.montant, early: true };
    }
    return { montant: p.standard, early: false };
  }

  function docUrl(m, doc) { return '/missions/docs/?id=' + encodeURIComponent(m.id) + '&doc=' + doc; }
  function pageUrl(m) { return '/missions/mission/?id=' + encodeURIComponent(m.id); }

  /* ---------------- icônes ---------------- */
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

  /* =====================================================================
     1. LISTE DES MISSIONS  (/missions/)
     ===================================================================== */
  function renderList(root) {
    var list = ALL.slice().sort(function (a, b) { return (a.dateDebut || '').localeCompare(b.dateDebut || ''); });
    var avenir = list.filter(function (m) { return statut(m) !== 'terminee'; });
    var passees = list.filter(function (m) { return statut(m) === 'terminee'; }).reverse();

    function card(m) {
      var s = statut(m), pe = prixEffectif(m), j = daysUntil(m.dateLimite);
      var urgent = s === 'ouverte' && j !== null && j >= 0 && j <= 14;
      return '<a class="ms-card glow-card" href="' + pageUrl(m) + '">' +
        '<div class="ms-card-top"><span class="ms-badge ms-badge-' + s + '">' + STATUT_LABEL[s] + '</span>' +
        (m.evenement ? '<span class="ms-card-event">' + esc(m.evenement.nom) + '</span>' : '') + '</div>' +
        '<h3 class="ms-card-country serif">' + esc(m.pays) + '</h3>' +
        '<p class="ms-card-city">' + esc(m.ville) + '</p>' +
        '<ul class="ms-card-meta">' +
          '<li>' + ICON.cal + '<span>' + esc(fmtRange(m.dateDebut, m.dateFin)) + '</span></li>' +
          (m.places ? '<li>' + ICON.seat + '<span>' + esc(m.places) + ' entreprises maximum</span></li>' : '') +
          (s === 'ouverte' && m.dateLimite ? '<li class="' + (urgent ? 'is-urgent' : '') + '">' + ICON.clock + '<span>Clôture le ' + esc(fmtDate(m.dateLimite)) + (urgent ? ' — J-' + j : '') + '</span></li>' : '') +
        '</ul>' +
        (m.secteurs && m.secteurs.length ? '<p class="ms-card-sectors">' + m.secteurs.slice(0, 4).map(esc).join(' · ') + (m.secteurs.length > 4 ? ' …' : '') + '</p>' : '') +
        '<div class="ms-card-foot"><span class="ms-card-price">' + (pe.montant ? 'À partir de <b>' + money(pe.montant, m.prix.devise) + '</b>' : '') + '</span>' +
        '<span class="ms-card-link">' + (s === 'ouverte' ? 'S’inscrire' : 'Voir la mission') + ' &rarr;</span></div>' +
        '</a>';
    }

    var html = '';
    html += avenir.length
      ? '<div class="ms-grid">' + avenir.map(card).join('') + '</div>'
      : '<p class="ms-empty">Le prochain calendrier est en préparation. Laissez-nous votre email ci-dessous pour le recevoir en avant-première.</p>';
    if (passees.length) {
      html += '<h2 class="ms-h2 serif ms-past-title">Missions réalisées</h2><div class="ms-grid ms-grid-past">' + passees.map(card).join('') + '</div>';
    }
    root.innerHTML = html;
  }

  /* =====================================================================
     2. PAGE D'UNE MISSION  (/missions/mission/?id=…)
     ===================================================================== */
  function renderMission(root) {
    var id = param('id');
    var m = getMission(id);
    if (!m) {
      root.innerHTML = '<div class="wrap ms-notfound"><h1 class="serif">Mission introuvable</h1><p>Cette mission n’existe pas ou n’est plus en ligne.</p><p><a class="ms-btn" href="/missions/">Voir toutes les missions &rarr;</a></p></div>';
      return;
    }
    var s = statut(m), pe = prixEffectif(m), j = daysUntil(m.dateLimite);
    var cur = (m.prix && m.prix.devise) || 'MAD';
    document.title = m.titre + ' — Global Premium Events';
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', m.accroche || '');

    var h = '';

    if (id === 'apercu') h += '<div class="ms-preview-bar">Aperçu : cette page n’est visible que sur votre ordinateur. <a href="/missions/editeur/">Retour à l’éditeur</a></div>';

    /* HERO */
    h += '<section class="ms-hero"><div class="wrap"><div class="ms-hero-in">' +
      '<div class="hero-kicker"><span class="rule"></span><span>Mission B2B · ' + esc(m.pays) + '</span><span class="ms-badge ms-badge-' + s + '">' + STATUT_LABEL[s] + '</span></div>' +
      '<h1 class="ms-title serif">' + esc(m.titre) + '</h1>' +
      '<p class="ms-lede">' + esc(m.accroche) + '</p>' +
      '<ul class="ms-facts">' +
        '<li>' + ICON.cal + '<span><b>Dates</b>' + esc(fmtRange(m.dateDebut, m.dateFin)) + '</span></li>' +
        '<li>' + ICON.pin + '<span><b>Lieu</b>' + esc(m.ville) + ', ' + esc(m.pays) + '</span></li>' +
        (m.places ? '<li>' + ICON.seat + '<span><b>Délégation</b>' + esc(m.places) + ' entreprises maximum</span></li>' : '') +
        (m.dateLimite ? '<li>' + ICON.clock + '<span><b>Clôture des inscriptions</b>' + esc(fmtDate(m.dateLimite)) + (s === 'ouverte' && j !== null && j >= 0 ? ' (J-' + j + ')' : '') + '</span></li>' : '') +
      '</ul>' +
      '<div class="ms-ctas">' +
        (s === 'ouverte' ? '<a class="ms-btn ms-btn-gold" href="#inscription">S’inscrire à la mission &rarr;</a>' : '<a class="ms-btn ms-btn-gold" href="#inscription">' + (s === 'bientot' ? 'Être informé en priorité' : 'Être informé des prochaines missions') + ' &rarr;</a>') +
        '<a class="ms-btn ms-btn-ghost" href="' + docUrl(m, 'note') + '" target="_blank" rel="noopener">' + ICON.doc + 'Note d’information</a>' +
      '</div>' +
    '</div></div></section>';

    /* POURQUOI */
    if (m.pourquoi && m.pourquoi.length) {
      h += '<section class="ms-sec"><div class="wrap"><h2 class="ms-h2 serif">Pourquoi le ' + esc(m.pays) + ' maintenant</h2><div class="ms-stats">' +
        m.pourquoi.map(function (p) { return '<div class="ms-stat reveal"><b class="serif">' + esc(p.chiffre) + '</b><span>' + esc(p.texte) + '</span></div>'; }).join('') +
        '</div></div></section>';
    }

    /* ÉVÉNEMENT D'ANCRAGE */
    if (m.evenement) {
      var e = m.evenement;
      h += '<section class="ms-sec ms-sec-tight"><div class="wrap"><div class="ms-event reveal glow-card-dark">' +
        '<div><p class="ms-event-k">Événement d’ancrage</p><h2 class="serif">' + esc(e.nom) + '</h2><p>' + esc(e.description) + '</p>' +
        (e.lien ? '<a class="ms-event-link" href="' + esc(e.lien) + '" target="_blank" rel="noopener">En savoir plus sur l’événement &rarr;</a>' : '') + '</div>' +
        '<ul class="ms-event-facts"><li><b>Dates</b>' + esc(e.dates) + '</li><li><b>Lieu</b>' + esc(e.lieu) + '</li><li><b>Organisateur</b>' + esc(e.organisateur) + '</li></ul>' +
      '</div></div></section>';
    }

    /* PROGRAMME */
    if (m.programme && m.programme.length) {
      h += '<section class="ms-sec"><div class="wrap"><div class="ms-sec-head"><h2 class="ms-h2 serif">Programme</h2>' +
        '<a class="ms-textlink" href="' + docUrl(m, 'programme') + '" target="_blank" rel="noopener">Télécharger le programme (PDF) &rarr;</a></div><ol class="ms-days">' +
        m.programme.map(function (d, i) {
          return '<li class="ms-day reveal"><div class="ms-day-n serif">' + String(i + 1).padStart(2, '0') + '</div><div><h3>' + esc(d.jour) + '</h3><ul>' +
            (d.items || []).map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('') + '</ul></div></li>';
        }).join('') +
        '</ol><p class="ms-small">Programme indicatif, susceptible d’évoluer selon les confirmations des institutions et partenaires.</p></div></section>';
    }

    /* SECTEURS */
    if (m.secteurs && m.secteurs.length) {
      h += '<section class="ms-sec ms-sec-tight"><div class="wrap"><h2 class="ms-h2 serif">Secteurs ciblés</h2><ul class="ms-chips">' +
        m.secteurs.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div></section>';
    }

    /* TARIF + INCLUS */
    h += '<section class="ms-sec ms-sec-panel"><div class="wrap"><div class="ms-price-grid">' +
      '<div class="ms-price reveal"><p class="ms-price-k">Frais de participation</p>' +
        '<p class="ms-price-v serif">' + money(pe.montant, cur) + '</p>' +
        '<p class="ms-price-sub">par entreprise' + (pe.early ? ' — tarif early bird jusqu’au ' + esc(fmtDate(m.prix.earlyBird.avant)) + ' (ensuite ' + money(m.prix.standard, cur) + ')' : '') + '</p>' +
        (m.prix && m.prix.deuxiemeParticipant ? '<p class="ms-price-extra">+ ' + money(m.prix.deuxiemeParticipant, cur) + ' par participant supplémentaire de la même entreprise</p>' : '') +
        '<p class="ms-small">' + esc(m.prix && m.prix.mention) + '</p>' +
        (s === 'ouverte' ? '<a class="ms-btn" href="#inscription">Réserver ma place &rarr;</a>' : '') +
      '</div>' +
      '<div class="reveal"><h2 class="ms-h3 serif">Ce qui est inclus</h2><ul class="ms-incl">' +
        (m.inclus || []).map(function (x) { return '<li>' + ICON.check + '<span>' + esc(x) + '</span></li>'; }).join('') +
      '</ul></div></div></div></section>';

    /* INFOS PRATIQUES */
    var pr = m.pratique || {};
    var prItems = [['vol', 'Vol', ICON.plane], ['hotel', 'Hébergement', ICON.bed], ['visa', 'Visa & passeport', ICON.pass], ['sante', 'Santé', ICON.health], ['monnaie', 'Monnaie', ICON.coin], ['autres', 'Bon à savoir', ICON.info]]
      .filter(function (x) { return pr[x[0]]; });
    if (prItems.length) {
      h += '<section class="ms-sec"><div class="wrap"><h2 class="ms-h2 serif">Infos pratiques</h2><div class="ms-prat">' +
        prItems.map(function (x) { return '<div class="ms-prat-item reveal"><span class="ms-ic">' + x[2] + '</span><div><h3>' + x[1] + '</h3><p>' + esc(pr[x[0]]) + '</p></div></div>'; }).join('') +
        '</div></div></section>';
    }

    /* DOCUMENTS */
    h += '<section class="ms-sec ms-sec-tight"><div class="wrap"><h2 class="ms-h2 serif">Documents de la mission</h2><div class="ms-docs">' +
      [['note', 'Note d’information', 'Vols, hébergement, formalités, frais et contenu de la mission.'],
       ['fiche', 'Fiche d’inscription', 'Version à imprimer, signer et cacheter si vous préférez l’inscription papier.'],
       ['programme', 'Programme', 'Le déroulé jour par jour de la mission.']]
      .map(function (d) { return '<a class="ms-doc glow-card" href="' + docUrl(m, d[0]) + '" target="_blank" rel="noopener"><span class="ms-ic">' + ICON.doc + '</span><div><h3>' + d[1] + '</h3><p>' + d[2] + '</p><span class="ms-textlink">Ouvrir et télécharger en PDF &rarr;</span></div></a>'; }).join('') +
      '</div></div></section>';

    /* INSCRIPTION */
    h += '<section class="ms-sec ms-sec-form" id="inscription"><div class="wrap">' + (s === 'ouverte' ? formHtml(m) : interestHtml(m, s)) + '</div></section>';

    root.innerHTML = h;
    if (s === 'ouverte') bindForm(m); else bindInterest(m);
    revealInit();
  }

  /* ---------------- formulaire d'inscription ---------------- */
  var SECTEURS_GENERAUX = ['Agro-alimentaire & agro-industrie', 'Agriculture & intrants', 'BTP & matériaux de construction', 'Énergie & environnement', 'Industrie & équipements', 'Automobile & pièces', 'Textile & cuir', 'Santé & pharmacie', 'Numérique & télécoms', 'Banque, assurance & finance', 'Transport & logistique', 'Éducation & formation', 'Tourisme & hôtellerie', 'Immobilier', 'Conseil & services aux entreprises', 'Autre'];
  var OBJECTIFS = ['Exporter mes produits / services', 'Trouver un distributeur ou un agent', 'Importer / m’approvisionner', 'M’implanter (filiale, bureau, usine)', 'Investir / co-investir', 'Partenariat technique ou industriel', 'Répondre à des marchés publics'];

  function opt(list) { return list.map(function (x) { return '<option value="' + esc(x) + '">' + esc(x) + '</option>'; }).join(''); }
  function checks(name, list) {
    return '<div class="ms-checks">' + list.map(function (x, i) {
      var idv = name + '-' + i;
      return '<label class="ms-check" for="' + idv + '"><input type="checkbox" id="' + idv + '" name="' + name + '" value="' + esc(x) + '"><span>' + esc(x) + '</span></label>';
    }).join('') + '</div>';
  }

  function formHtml(m) {
    return '<div class="ms-form-grid"><div class="ms-form-aside">' +
      '<p class="hero-kicker"><span class="rule"></span><span>Inscription</span></p>' +
      '<h2 class="ms-h2 serif">Réservez votre place dans la délégation</h2>' +
      '<p>Les places sont attribuées par ordre de réception des inscriptions confirmées par le paiement. Clôture le <b>' + esc(fmtDate(m.dateLimite)) + '</b>.</p>' +
      '<ol class="ms-steps"><li><b>Vous remplissez ce formulaire</b> (5 minutes).</li><li><b>Nous vous appelons sous 48 h</b> pour valider vos objectifs et vous envoyer la facture.</li><li><b>Vous envoyez les pièces</b> : ' + (CFG.piecesDemandees || []).map(function (p) { return esc(p.split(' (')[0].toLowerCase()); }).join(', ') + '.</li><li><b>Nous préparons votre agenda B2B</b>, envoyé avant le départ.</li></ol>' +
      '<p class="ms-small">Une question ? <a href="mailto:' + esc(CFG.email) + '">' + esc(CFG.email) + '</a> · <a href="tel:' + esc((CFG.telephone || '').replace(/\s/g, '')) + '">' + esc(CFG.telephone) + '</a></p>' +
    '</div>' +
    '<form class="ms-form" id="msForm" novalidate>' +
      '<fieldset><legend>Participant</legend>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-nom">Nom et prénom *</label><input id="f-nom" name="nom" required autocomplete="name"></div>' +
        '<div class="cf-field"><label for="f-fonction">Fonction *</label><input id="f-fonction" name="fonction" required autocomplete="organization-title" placeholder="ex. Directeur export"></div></div>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-email">Email *</label><input id="f-email" name="email" type="email" required autocomplete="email"></div>' +
        '<div class="cf-field"><label for="f-tel">Téléphone / WhatsApp *</label><input id="f-tel" name="telephone" type="tel" required autocomplete="tel" placeholder="+212 6…"></div></div>' +
      '</fieldset>' +
      '<fieldset><legend>Entreprise</legend>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-ent">Raison sociale *</label><input id="f-ent" name="entreprise" required autocomplete="organization"></div>' +
        '<div class="cf-field"><label for="f-ville">Ville</label><input id="f-ville" name="ville" autocomplete="address-level2"></div></div>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-secteur">Secteur *</label><select id="f-secteur" name="secteur" required><option value="">Choisir…</option>' + opt(SECTEURS_GENERAUX) + '</select></div>' +
        '<div class="cf-field"><label for="f-site">Site web</label><input id="f-site" name="site" type="url" placeholder="https://"></div></div>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-taille">Effectif</label><select id="f-taille" name="effectif"><option value="">Choisir…</option>' + opt(['Moins de 10', '10 à 49', '50 à 249', '250 et plus']) + '</select></div>' +
        '<div class="cf-field"><label for="f-export">Part du chiffre d’affaires à l’export</label><select id="f-export" name="part_export"><option value="">Choisir…</option>' + opt(['Aucune pour l’instant', 'Moins de 10 %', '10 à 30 %', 'Plus de 30 %']) + '</select></div></div>' +
        '<div class="cf-field"><label for="f-produits">Produits / services proposés *</label><textarea id="f-produits" name="produits" required rows="3" placeholder="Ce que vous voulez vendre, acheter ou développer dans le pays"></textarea></div>' +
      '</fieldset>' +
      '<fieldset><legend>Vos objectifs pour cette mission</legend>' +
        '<div class="cf-field"><span class="ms-label">Ce que vous recherchez *</span>' + checks('objectifs', OBJECTIFS) + '</div>' +
        (m.secteurs && m.secteurs.length ? '<div class="cf-field"><span class="ms-label">Secteurs qui vous intéressent sur place</span>' + checks('secteurs_cibles', m.secteurs) + '</div>' : '') +
        '<div class="cf-field"><label for="f-profil">Profil des partenaires que vous voulez rencontrer *</label><textarea id="f-profil" name="profil_partenaires" required rows="3" placeholder="ex. distributeurs de matériaux de construction à Accra et Kumasi, importateurs de produits agroalimentaires…"></textarea></div>' +
        '<div class="cf-field"><label for="f-inst">Rencontres institutionnelles souhaitées</label><input id="f-inst" name="rencontres_institutionnelles" placeholder="ex. agence de promotion des investissements, zones franches, ministère…"></div>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-contacts">Avez-vous déjà des contacts dans le pays ?</label><select id="f-contacts" name="contacts_existants"><option value="Non">Non</option><option value="Oui">Oui</option></select></div>' +
        '<div class="cf-field"><label for="f-source">Comment avez-vous connu la mission ?</label><select id="f-source" name="source"><option value="">Choisir…</option>' + opt(['Email / newsletter', 'LinkedIn', 'WhatsApp', 'Recommandation', 'Fédération / association professionnelle', 'Ancien participant', 'Site web', 'Autre']) + '</select></div></div>' +
      '</fieldset>' +
      '<fieldset><legend>Participation</legend>' +
        '<div class="cf-row"><div class="cf-field"><label for="f-nb">Nombre de participants</label><select id="f-nb" name="nombre_participants"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div>' +
        '<div class="cf-field"><label for="f-p2">Nom et fonction des autres participants</label><input id="f-p2" name="autres_participants" placeholder="optionnel"></div></div>' +
        '<div class="ms-total" aria-live="polite"><span>Frais de participation estimés</span><b id="msTotal"></b><small>' + esc(m.prix && m.prix.mention) + '</small></div>' +
        '<label class="ms-check ms-consent" for="f-ok"><input type="checkbox" id="f-ok" name="accord" value="Oui" required><span>J’ai lu la <a href="' + docUrl(m, 'note') + '" target="_blank" rel="noopener">note d’information</a>. Je comprends que ma place est confirmée à réception du paiement, et que Global Premium Events utilise ces informations pour organiser mes rendez-vous B2B (<a href="/privacy-policy/">confidentialité</a>).</span></label>' +
      '</fieldset>' +
      '<p class="ms-error" id="msError" role="alert"></p>' +
      '<button type="submit" class="cf-submit">Envoyer mon inscription <span aria-hidden="true">&rarr;</span></button>' +
    '</form></div>';
  }

  function collect(form) {
    var data = {}, fd = new FormData(form);
    fd.forEach(function (v, k) { data[k] = data[k] ? data[k] + ', ' + v : v; });
    return data;
  }

  function send(form, payload, subject, okHtml) {
    if (param('id') === 'apercu') {
      var pe = form.querySelector('.ms-error');
      if (pe) pe.textContent = 'Mode aperçu : le formulaire fonctionne mais rien n’est envoyé.';
      return;
    }
    var btn = form.querySelector('button[type=submit]'), label = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Envoi en cours…'; }
    payload._subject = subject;
    payload._captcha = 'false';
    payload._template = 'table';
    if (payload.email) payload._replyto = payload.email;
    var lines = Object.keys(payload).filter(function (k) { return k.charAt(0) !== '_'; }).map(function (k) { return k + ' : ' + payload[k]; });
    var mailto = 'mailto:' + (CFG.emailInscriptions || CFG.email) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    fetch('https://formsubmit.co/ajax/' + (CFG.emailInscriptions || CFG.email), {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(payload)
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok || String(j.success) === 'false') throw j; return j; }); })
      .then(function () { form.outerHTML = okHtml; window.scrollTo({ top: document.getElementById('inscription').offsetTop - 80 }); })
      .catch(function () { if (btn) { btn.disabled = false; btn.innerHTML = label; } window.location.href = mailto; });
  }

  function bindForm(m) {
    var form = document.getElementById('msForm'); if (!form) return;
    var cur = (m.prix && m.prix.devise) || 'MAD';
    var nb = document.getElementById('f-nb'), tot = document.getElementById('msTotal');
    function total() {
      var n = +nb.value || 1, base = prixEffectif(m).montant || 0, extra = (m.prix && m.prix.deuxiemeParticipant) || base;
      tot.textContent = money(base + (n - 1) * extra, cur);
      return base + (n - 1) * extra;
    }
    nb.addEventListener('change', total); total();

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = document.getElementById('msError'); err.textContent = '';
      var bad = Array.prototype.filter.call(form.querySelectorAll('[required]'), function (el) { return el.type === 'checkbox' ? !el.checked : !el.value.trim(); });
      var noObj = !form.querySelector('input[name=objectifs]:checked');
      form.querySelectorAll('.is-invalid').forEach(function (el) { el.classList.remove('is-invalid'); });
      bad.forEach(function (el) { el.classList.add('is-invalid'); });
      if (bad.length || noObj) {
        err.textContent = noObj && !bad.length ? 'Cochez au moins un objectif pour cette mission.' : 'Merci de compléter les champs marqués d’un astérisque.';
        (bad[0] || form.querySelector('input[name=objectifs]')).focus();
        return;
      }
      var email = document.getElementById('f-email');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.classList.add('is-invalid'); err.textContent = 'Adresse email invalide.'; email.focus(); return; }
      var d = collect(form);
      d.mission = m.titre + ' (' + fmtRange(m.dateDebut, m.dateFin) + ')';
      d.montant_estime = money(total(), cur);
      var subject = 'Inscription — Mission ' + m.pays + ' ' + (m.dateDebut || '').slice(0, 4) + ' — ' + d.entreprise;
      send(form, d, subject,
        '<div class="gpe-form-ok ms-ok" role="status"><div class="gpe-form-ok-icon">&#10003;</div><h3>Merci, votre inscription est bien reçue.</h3>' +
        '<p>Nous vous appelons sous 48 heures pour valider vos objectifs et vous envoyer la facture. Votre place est confirmée à réception du paiement.</p>' +
        '<p class="ms-ok-next"><b>En attendant, préparez :</b> ' + (CFG.piecesDemandees || []).map(esc).join(' · ') + '.</p>' +
        '<p><a class="ms-btn ms-btn-ghost" href="' + docUrl(m, 'note') + '" target="_blank" rel="noopener">Relire la note d’information</a></p></div>');
    });
  }

  function interestHtml(m, s) {
    var msg = s === 'bientot'
      ? 'Les inscriptions ouvrent bientôt. Laissez vos coordonnées : vous recevrez le programme et le tarif avant tout le monde.'
      : s === 'complete' ? 'La délégation est complète. Inscrivez-vous sur la liste d’attente ou pour être prévenu des prochaines missions.'
      : 'Les inscriptions à cette mission sont closes. Laissez vos coordonnées pour être prévenu des prochaines missions.';
    return '<div class="ms-interest"><h2 class="ms-h2 serif">' + (s === 'complete' ? 'Liste d’attente' : 'Être informé en priorité') + '</h2><p>' + msg + '</p>' +
      '<form class="ms-form ms-form-inline" id="msInterest" novalidate>' +
        '<div class="cf-field"><label for="i-nom">Nom et prénom *</label><input id="i-nom" name="nom" required></div>' +
        '<div class="cf-field"><label for="i-ent">Entreprise *</label><input id="i-ent" name="entreprise" required></div>' +
        '<div class="cf-field"><label for="i-email">Email *</label><input id="i-email" name="email" type="email" required></div>' +
        '<div class="cf-field"><label for="i-tel">Téléphone</label><input id="i-tel" name="telephone" type="tel"></div>' +
        '<p class="ms-error" id="msError" role="alert"></p>' +
        '<button type="submit" class="cf-submit">Me tenir informé <span aria-hidden="true">&rarr;</span></button>' +
      '</form></div>';
  }

  function bindInterest(m) {
    var form = document.getElementById('msInterest'); if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = Array.prototype.filter.call(form.querySelectorAll('[required]'), function (el) { return !el.value.trim(); });
      if (bad.length) { document.getElementById('msError').textContent = 'Merci de compléter les champs obligatoires.'; bad[0].focus(); return; }
      var d = collect(form); d.mission = m.titre;
      send(form, d, 'Intérêt — Mission ' + m.pays + ' — ' + d.entreprise,
        '<div class="gpe-form-ok" role="status"><div class="gpe-form-ok-icon">&#10003;</div><h3>C’est noté.</h3><p>Vous serez parmi les premiers informés.</p></div>');
    });
  }

  /* Formulaire "recevoir le calendrier" de la page liste */
  function bindCalendarForm() {
    var form = document.getElementById('msCalForm'); if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = Array.prototype.filter.call(form.querySelectorAll('[required]'), function (el) { return !el.value.trim(); });
      if (bad.length) { document.getElementById('msCalError').textContent = 'Merci de compléter les champs obligatoires.'; bad[0].focus(); return; }
      var d = collect(form);
      send(form, d, 'Calendrier des missions — ' + (d.entreprise || d.nom),
        '<div class="gpe-form-ok" role="status"><div class="gpe-form-ok-icon">&#10003;</div><h3>Merci, c’est noté.</h3><p>Vous recevrez le calendrier des prochaines missions et les ouvertures d’inscription en avant-première.</p></div>');
    });
  }

  /* =====================================================================
     3. DOCUMENTS IMPRIMABLES  (/missions/docs/?id=…&doc=note|fiche|programme)
     ===================================================================== */
  function renderDoc(root) {
    var m = getMission(param('id')), doc = param('doc') || 'note';
    if (!m) { root.innerHTML = '<p style="padding:40px">Mission introuvable.</p>'; return; }
    var cur = (m.prix && m.prix.devise) || 'MAD';
    var TITRES = { note: 'Note d’information', fiche: 'Fiche d’inscription', programme: 'Programme de la délégation' };
    document.title = TITRES[doc] + ' — ' + m.titre;

    var head = '<header class="dc-head"><img src="/assets/logo.webp" alt="" class="dc-logo"><div><p class="dc-org">' + esc(CFG.organisation) + '</p><p class="dc-contact">' + esc(CFG.ville) + ' · ' + esc(CFG.telephone) + ' · ' + esc(CFG.email) + ' · ' + esc(CFG.site) + '</p></div></header>' +
      '<div class="dc-titlebox"><p class="dc-doctype">' + TITRES[doc] + '</p><h1 class="serif">' + esc(m.titre) + '</h1><p class="dc-dates">' + esc(m.ville) + ', ' + esc(m.pays) + ' · ' + esc(fmtRange(m.dateDebut, m.dateFin)) + '</p></div>';
    var foot = '<footer class="dc-foot">' + esc(CFG.organisation) + ' · ' + esc(CFG.email) + ' · ' + esc(CFG.telephone) + '</footer>';
    var body = '';

    if (doc === 'note') {
      var pr = m.pratique || {};
      var rows = [
        ['Destination', m.ville + ', ' + m.pays],
        ['Dates de la mission', fmtRange(m.dateDebut, m.dateFin)],
        m.evenement ? ['Événement', m.evenement.nom + ' — ' + m.evenement.dates + ', ' + m.evenement.lieu] : null,
        ['Langue de travail', m.langue],
        ['Vol', pr.vol], ['Hébergement', pr.hotel], ['Visa et passeport', pr.visa], ['Santé', pr.sante], ['Monnaie', pr.monnaie], ['Bon à savoir', pr.autres],
        ['Clôture des inscriptions', fmtDate(m.dateLimite)],
        ['Places', m.places ? m.places + ' entreprises maximum' : '']
      ].filter(function (r) { return r && r[1]; });
      body += '<p class="dc-intro">Dans le cadre de votre participation à la mission, nous vous prions de noter les informations suivantes.</p>';
      body += '<table class="dc-table">' + rows.map(function (r) { return '<tr><th>' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</table>';
      body += '<h2 class="dc-h2">Frais de participation</h2><table class="dc-table">' +
        '<tr><th>Forfait par entreprise</th><td><b>' + money(m.prix.standard, cur) + '</b>' + (m.prix.earlyBird && m.prix.earlyBird.montant ? ' (early bird : ' + money(m.prix.earlyBird.montant, cur) + ' jusqu’au ' + esc(fmtDate(m.prix.earlyBird.avant)) + ')' : '') + '</td></tr>' +
        (m.prix.deuxiemeParticipant ? '<tr><th>Participant supplémentaire</th><td>' + money(m.prix.deuxiemeParticipant, cur) + '</td></tr>' : '') +
        '<tr><th>Non compris</th><td>' + esc(m.prix.mention) + '</td></tr></table>';
      body += '<h2 class="dc-h2">Le forfait comprend</h2><ul class="dc-list">' + (m.inclus || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      body += '<h2 class="dc-h2">Pièces à nous transmettre</h2><ul class="dc-list">' + (CFG.piecesDemandees || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      body += '<p class="dc-cta">Inscription en ligne : <b>' + esc(CFG.site) + '/missions</b> — ou fiche d’inscription signée à retourner à ' + esc(CFG.email) + '</p>';
    }

    if (doc === 'fiche') {
      var line = function (label) { return '<div class="dc-line"><span>' + label + '</span><i></i></div>'; };
      var box = function (x) { return '<span class="dc-box"></span>' + esc(x); };
      body += '<p class="dc-intro"><b>À retourner au plus tard le ' + esc(fmtDate(m.dateLimite)) + '</b> à ' + esc(CFG.emailInscriptions || CFG.email) + ' — ou inscription en ligne sur ' + esc(CFG.site) + '/missions</p>';
      body += '<h2 class="dc-h2">Identification de l’entreprise</h2>' + line('Raison sociale') + line('Secteur') + line('Activités / produits') + line('Adresse') +
        '<div class="dc-cols">' + line('Téléphone') + line('Site web') + '</div>' + line('Email');
      body += '<h2 class="dc-h2">Représentée par</h2><div class="dc-cols">' + line('Nom et prénom') + line('Fonction') + '</div><div class="dc-cols">' + line('GSM / WhatsApp') + line('Email') + '</div>' + line('Autres participants');
      body += '<h2 class="dc-h2">Vos besoins</h2><div class="dc-checks">' + OBJECTIFS.map(function (o) { return '<span>' + box(o) + '</span>'; }).join('') + '</div>';
      body += '<p class="dc-q">Avez-vous déjà des contacts dans le pays ? <span>' + box('Oui') + '</span> <span>' + box('Non') + '</span></p>';
      if (m.secteurs && m.secteurs.length) body += '<p class="dc-q">Secteurs ciblés sur place :</p><div class="dc-checks">' + m.secteurs.map(function (x) { return '<span>' + box(x) + '</span>'; }).join('') + '</div>';
      body += line('Profil des partenaires recherchés') + line('Rencontres institutionnelles souhaitées');
      body += '<h2 class="dc-h2">Frais de participation</h2><p class="dc-p">' + money(m.prix.standard, cur) + ' par entreprise' + (m.prix.deuxiemeParticipant ? ', + ' + money(m.prix.deuxiemeParticipant, cur) + ' par participant supplémentaire' : '') + '. ' + esc(m.prix.mention) + '</p>' +
        '<p class="dc-p dc-small">Le détail des prestations incluses figure dans la note d\u2019information.</p>';
      body += '<div class="dc-cols dc-pay"><div><h2 class="dc-h2">Règlement</h2><div class="dc-checks dc-checks-col">' + ((CFG.paiement && CFG.paiement.modes) || []).map(function (x) { return '<span>' + box(x) + '</span>'; }).join('') + '</div>' +
        '<p class="dc-small">Banque : ' + esc(CFG.paiement && CFG.paiement.banque) + '<br>RIB : ' + esc(CFG.paiement && CFG.paiement.rib) + '</p>' +
        '<p class="dc-send"><b>Merci de nous envoyer :</b> ' + (CFG.piecesDemandees || []).map(function (x) { return esc(x.split(' (')[0]); }).join(' \u00b7 ') + '.</p></div>' +
        '<div class="dc-sign"><p>Je confirme ma participation.</p><p>Fait à ...................... le ...... / ...... / ' + esc((m.dateDebut || '').slice(0, 4)) + '</p><p class="dc-sign-box">Signature et cachet</p></div></div>';
    }

    if (doc === 'programme') {
      if (m.evenement) body += '<p class="dc-intro">En marge de <b>' + esc(m.evenement.nom) + '</b> (' + esc(m.evenement.dates) + ', ' + esc(m.evenement.lieu) + ').</p>';
      body += (m.programme || []).map(function (d) {
        return '<div class="dc-day"><h2 class="dc-h2">' + esc(d.jour) + '</h2><ul class="dc-list">' + (d.items || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
      }).join('');
      body += '<p class="dc-small">Programme indicatif, susceptible d’évoluer selon les confirmations des institutions et partenaires.</p>';
    }

    root.innerHTML = '<div class="dc-toolbar"><a href="' + pageUrl(m) + '">&larr; Page de la mission</a><span>' +
      ['note', 'fiche', 'programme'].map(function (k) { return '<a class="' + (k === doc ? 'on' : '') + '" href="' + docUrl(m, k) + '">' + TITRES[k] + '</a>'; }).join('') +
      '</span><button type="button" onclick="window.print()">Télécharger en PDF / Imprimer</button></div>' +
      '<article class="dc-page dc-' + esc(doc) + '">' + head + body + foot + '</article>';
  }

  /* ---------------- animations (comme le reste du site) ---------------- */
  function revealInit() {
    var els = document.querySelectorAll('.reveal:not(.is-visible)');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('is-visible'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
    document.querySelectorAll('.glow-card, .glow-card-dark').forEach(function (el) {
      el.addEventListener('mousemove', function (e) { var r = el.getBoundingClientRect(); el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
    });
  }

  /* ---------------- point d'entrée ---------------- */
  window.GPEMissions = { fmtDate: fmtDate, fmtRange: fmtRange, money: money, PREVIEW_KEY: PREVIEW_KEY, statut: statut };
  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-ms-page');
    var root = document.getElementById('msRoot');
    if (page === 'list' && root) { renderList(root); bindCalendarForm(); }
    if (page === 'mission' && root) renderMission(root);
    if (page === 'doc' && root) renderDoc(root);
    revealInit();
    var bar = document.getElementById('scrollProgressBar');
    if (bar) {
      var upd = function () { var d = document.documentElement, h = d.scrollHeight - d.clientHeight; bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%'; };
      window.addEventListener('scroll', upd, { passive: true }); upd();
    }
  });
})();
