# Missions B2B — guide de l'équipe

Chaque mission (un pays, des dates) produit automatiquement :

| Ce qui est généré | Adresse |
| --- | --- |
| La carte de la mission dans le calendrier | `/missions/` |
| La page de la mission avec le formulaire d'inscription | `/missions/mission/?id=ghana-2026` |
| La note d'information (PDF) | `/missions/docs/?id=ghana-2026&doc=note` |
| La fiche d'inscription papier (PDF, 1 page A4) | `/missions/docs/?id=ghana-2026&doc=fiche` |
| Le programme (PDF) | `/missions/docs/?id=ghana-2026&doc=programme` |

Il n'y a qu'**un seul fichier à modifier** : `missions/missions-data.js`.

## Publier une nouvelle mission (10 minutes)

1. Ouvrez **globalpremiumevents.com/missions/editeur/** (page interne, non référencée par Google).
2. Choisissez une mission existante dans « Partir d'une mission existante », puis cliquez sur **Charger**. Le plus simple est de dupliquer la dernière mission.
3. Changez le pays, les dates, l'événement d'ancrage, le prix, le programme, etc.
4. Cliquez sur **Aperçu de la page** et sur les 3 boutons documents pour vérifier le résultat.
5. Cliquez sur **Copier le code**.
6. Sur GitHub, ouvrez `missions/missions-data.js`, puis cliquez sur l'icône crayon. Collez le code juste avant la ligne `];`, à la fin de la liste. Le code commence déjà par la virgule nécessaire.
7. Cliquez sur **Commit changes**. La page est en ligne en 1 à 2 minutes.

## Modifier une mission en cours

Dans `missions-data.js`, modifiez directement la valeur concernée, par exemple `places: 12` ou `dateLimite: '2026-10-30'`, puis faites un commit.

| Champ | Effet |
| --- | --- |
| `statut: 'ouverte'` | Formulaire d'inscription complet |
| `statut: 'bientot'` | Page visible avec un formulaire « être informé en priorité » (pour annoncer une mission 2 à 3 mois avant) |
| `statut: 'complete'` | Formulaire de liste d'attente |
| `dateLimite` passée | La mission passe automatiquement en « Inscriptions closes » |
| `dateFin` passée | La mission passe automatiquement dans « Missions réalisées » |
| `prix.earlyBird` | `{ montant: 8000, avant: '2026-10-25' }` affiche le tarif réduit jusqu'à cette date |

## Coordonnées et RIB

Le début du fichier (`GPE_CONFIG`) contient l'email qui reçoit les inscriptions, le téléphone, la banque, le **RIB** (à compléter) et la liste des pièces demandées. Ces informations sont imprimées sur toutes les fiches d'inscription.

## Où arrivent les inscriptions ?

Chaque inscription est envoyée par email à `info@globalpremiumevents.com`, via le service formsubmit.co déjà utilisé par le formulaire de contact. L'objet de l'email est le suivant : `Inscription — Mission Ghana 2026 — Nom de l'entreprise`. Si le service ne répond pas, la messagerie du participant s'ouvre avec l'inscription pré-remplie.

## Règles de qualité avant de publier

- Le programme doit utiliser les bons jours et la bonne ville. Les fiches TABC contenaient des erreurs de copier-coller, par exemple « Arrivée à Cotonou » sur la mission Éthiopie.
- La date de clôture doit tomber au moins 2 semaines avant le départ. C'est le délai minimum pour les visas, les billets de groupe et les agendas B2B.
- Le prix doit correspondre au fichier de rentabilité de la mission.
- Les rencontres institutionnelles sont écrites « sollicitées », jamais « garanties », tant qu'elles ne sont pas confirmées.
