/* Éditeur de mission (outil interne) : formulaire -> bloc de données à coller
   dans missions-data.js, avec aperçu local de la page et des documents. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var KEY = (window.GPEMissions && window.GPEMissions.PREVIEW_KEY) || 'gpe-mission-apercu';
  var ALL = window.GPE_MISSIONS || [];

  function lines(v) { return (v || '').split('\n').map(function (s) { return s.trim(); }).filter(Boolean); }
  function num(v) { return v === '' || v === null || v === undefined ? null : Number(v); }

  var BASE = {};
  function read() {
    var out = readFields();
    var b = JSON.parse(JSON.stringify(BASE || {}));
    var prix = Object.assign({}, b.prix || {}, out.prix);
    Object.keys(prix).forEach(function (k) { if (prix[k] === null || prix[k] === '') delete prix[k]; });
    var res = Object.assign(b, out); res.prix = prix;
    if (!out.inclus.length) delete res.inclus;
    return res;
  }
  function readFields() {
    var programme = ($('e-programme').value || '').split(/\n\s*\n/).map(function (block) {
      var l = lines(block); if (!l.length) return null;
      return { jour: l[0], items: l.slice(1).map(function (s) { return s.replace(/^[-•*]\s*/, ''); }) };
    }).filter(Boolean);
    var evNom = $('e-ev-nom').value.trim();
    var eb = num($('e-eb').value);
    return {
      id: $('e-id').value.trim() || slug($('e-pays').value) + '-' + ($('e-debut').value || '').slice(0, 4),
      statut: $('e-statut').value,
      pays: $('e-pays').value.trim(),
      ville: $('e-ville').value.trim(),
      langue: $('e-langue').value.trim(),
      dateDebut: $('e-debut').value,
      dateFin: $('e-fin').value,
      dateLimite: $('e-limite').value,
      places: num($('e-places').value),
      titre: $('e-titre').value.trim(),
      accroche: $('e-accroche').value.trim(),
      evenement: evNom ? {
        nom: evNom, organisateur: $('e-ev-org').value.trim(), dates: $('e-ev-dates').value.trim(),
        lieu: $('e-ev-lieu').value.trim(), description: $('e-ev-desc').value.trim(), lien: $('e-ev-lien').value.trim()
      } : null,
      pourquoi: lines($('e-pourquoi').value).map(function (l) { var p = l.split('|'); return { chiffre: (p[0] || '').trim(), texte: p.slice(1).join('|').trim() }; }),
      secteurs: lines($('e-secteurs').value),
      prix: {
        devise: $('e-devise').value.trim() || 'MAD',
        standard: num($('e-prix').value),
        deuxiemeParticipant: num($('e-prix2').value),
        earlyBird: eb && $('e-eb-date').value ? { montant: eb, avant: $('e-eb-date').value } : null,
        mention: $('e-mention').value.trim()
      },
      inclus: lines($('e-inclus').value),
      pratique: {
        vol: $('e-vol').value.trim(), hotel: $('e-hotel').value.trim(), visa: $('e-visa').value.trim(),
        sante: $('e-sante').value.trim(), monnaie: $('e-monnaie').value.trim(), autres: $('e-autres').value.trim()
      },
      programme: programme,
      image: $('e-image').value.trim() || null
    };
  }

  function slug(s) {
    return (s || 'pays').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function fill(m) {
    m = m || {};
    BASE = JSON.parse(JSON.stringify(m));
    var ev = m.evenement || {}, pr = m.prix || {}, pt = m.pratique || {};
    $('e-id').value = m.id || ''; $('e-statut').value = m.statut || 'ouverte';
    $('e-pays').value = m.pays || ''; $('e-ville').value = m.ville || ''; $('e-langue').value = m.langue || '';
    $('e-debut').value = m.dateDebut || ''; $('e-fin').value = m.dateFin || ''; $('e-limite').value = m.dateLimite || '';
    $('e-places').value = m.places || ''; $('e-titre').value = m.titre || ''; $('e-accroche').value = m.accroche || '';
    $('e-image').value = m.image || '';
    $('e-ev-nom').value = ev.nom || ''; $('e-ev-org').value = ev.organisateur || ''; $('e-ev-dates').value = ev.dates || '';
    $('e-ev-lieu').value = ev.lieu || ''; $('e-ev-desc').value = ev.description || ''; $('e-ev-lien').value = ev.lien || '';
    $('e-pourquoi').value = (m.pourquoi || []).map(function (p) { return p.chiffre + ' | ' + p.texte; }).join('\n');
    $('e-secteurs').value = (m.secteurs || []).join('\n');
    $('e-prix').value = pr.standard || ''; $('e-prix2').value = pr.deuxiemeParticipant || ''; $('e-devise').value = pr.devise || 'MAD';
    $('e-eb').value = pr.earlyBird ? pr.earlyBird.montant : ''; $('e-eb-date').value = pr.earlyBird ? pr.earlyBird.avant : '';
    $('e-mention').value = pr.mention || '';
    $('e-inclus').value = (m.inclus || []).join('\n');
    $('e-programme').value = (m.programme || []).map(function (d) { return [d.jour].concat(d.items || []).join('\n'); }).join('\n\n');
    $('e-vol').value = pt.vol || ''; $('e-hotel').value = pt.hotel || ''; $('e-visa').value = pt.visa || '';
    $('e-sante').value = pt.sante || ''; $('e-monnaie').value = pt.monnaie || ''; $('e-autres').value = pt.autres || '';
    update();
  }

  function check(m) {
    var miss = [];
    if (!m.pays) miss.push('pays'); if (!m.dateDebut) miss.push('date de début'); if (!m.dateFin) miss.push('date de fin');
    if (m.statut === 'ouverte' && !m.dateLimite) miss.push('clôture des inscriptions');
    if (!m.titre) miss.push('titre'); if (!m.prix.standard && !(m.formules && m.formules.length)) miss.push('forfait');
    if (m.dateDebut && m.dateFin && m.dateFin < m.dateDebut) miss.push('date de fin avant le début');
    if (m.dateLimite && m.dateDebut && m.dateLimite > m.dateDebut) miss.push('clôture après le début');
    return miss;
  }

  function update() {
    var m = read();
    $('e-code').textContent = '  ,' + JSON.stringify(m, null, 2).replace(/\n/g, '\n  ');
    var miss = check(m);
    $('e-msg').style.color = miss.length ? 'var(--warn)' : 'var(--ok)';
    $('e-msg').textContent = miss.length ? 'À compléter : ' + miss.join(', ') + '.' : 'Fiche complète, prête à être publiée.';
    try { localStorage.setItem(KEY, JSON.stringify(m)); } catch (e) {}
    try { localStorage.setItem(KEY + '-form', JSON.stringify(m)); } catch (e) {}
  }

  function open(url) { update(); window.open(url, '_blank', 'noopener'); }

  document.addEventListener('DOMContentLoaded', function () {
    var sel = $('e-load');
    ALL.forEach(function (m) { var o = document.createElement('option'); o.value = m.id; o.textContent = m.pays + ' — ' + m.dateDebut; sel.appendChild(o); });
    $('e-load-btn').addEventListener('click', function () {
      var m = ALL.filter(function (x) { return x.id === sel.value; })[0];
      fill(m ? JSON.parse(JSON.stringify(m)) : {});
    });
    document.querySelectorAll('.ed-wrap input, .ed-wrap textarea, .ed-wrap select').forEach(function (el) {
      if (el.id !== 'e-load') el.addEventListener('input', update);
    });
    $('e-preview').addEventListener('click', function () { open('/missions/mission/?id=apercu'); });
    $('e-prev-note').addEventListener('click', function () { open('/missions/docs/?id=apercu&doc=note'); });
    $('e-prev-fiche').addEventListener('click', function () { open('/missions/docs/?id=apercu&doc=fiche'); });
    $('e-prev-prog').addEventListener('click', function () { open('/missions/docs/?id=apercu&doc=programme'); });
    $('e-copy').addEventListener('click', function () {
      var txt = $('e-code').textContent;
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function () {
        $('e-msg').style.color = 'var(--ok)'; $('e-msg').textContent = 'Code copié. Collez-le dans missions-data.js.';
      }).catch(function () {
        var r = document.createRange(); r.selectNodeContents($('e-code')); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        $('e-msg').textContent = 'Sélectionné : faites Ctrl+C / Cmd+C.';
      });
    });
    // reprendre le brouillon en cours, sinon partir de la première mission
    var draft = null;
    try { draft = JSON.parse(localStorage.getItem(KEY + '-form') || 'null'); } catch (e) {}
    fill(draft || (ALL[0] ? JSON.parse(JSON.stringify(ALL[0])) : {}));
  });
})();
