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

Chaque page existe en français et en anglais. Ajoutez `&lang=en` à l'adresse, par exemple `/missions/mission/?id=ghana-2026&lang=en`, ou utilisez le bouton « English » de la page. Envoyez le lien anglais aux délégués du Golfe.

## Tarifs sur demande

La page publique présente la mission et le contenu des forfaits, sans prix. Elle peut donc être envoyée à des institutions comme la CGEM ou l'AMDIE.

- **Formulaire « Recevoir l'offre de participation ».** Un visiteur le remplit : vous recevez son contact par email (objet : « Demande d'offre — Mission … »), puis les prix et le formulaire d'inscription complet s'affichent immédiatement pour lui.
- **Lien direct vers les prix.** Pour envoyer les prix à un prospect déjà contacté, ajoutez `&acces=offre` à l'adresse, par exemple `/missions/mission/?id=ghana-2026&acces=offre`.

## Affiche et couleurs de l'événement

- `image` est l'affiche montrée en haut de la page. Placez le fichier dans `missions/img/`.
- `couleurs` contient les couleurs de l'événement (`fonce`, `principal`, `accent`, `rouge`). Supprimez la ligne pour revenir aux couleurs GPE.

## Les forfaits

Dans chaque mission :

- `formules` liste les forfaits : nom, prix, prix du participant supplémentaire, nombre de places, et lequel est « Recommandé ».
- `comparatif` liste les prestations, une ligne par prestation et une valeur par forfait. `'Y'` veut dire inclus, `'-'` veut dire non inclus. Sinon, c'est le texte à afficher.
- Le bloc `en` contient la traduction anglaise des textes. Les prix ne se traduisent pas.

Ces éléments apparaissent automatiquement sur la page, dans le formulaire (choix du forfait et calcul du total), dans la note d'information (tableau comparatif) et dans la fiche d'inscription (cases à cocher).

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
| `enLigne: false` | Mission masquée partout : calendrier, page et documents. Remettez `true` pour la republier |
| `statut: 'ouverte'` | Formulaire d'inscription complet |
| `statut: 'bientot'` | Page visible avec un formulaire « être informé en priorité » (pour annoncer une mission 2 à 3 mois avant) |
| `statut: 'complete'` | Formulaire de liste d'attente |
| `places: 'limitees'` | Affiche « Places limitées » au lieu d'un nombre d'entreprises (ex. `places: 15`) |
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
