# Automatisation IA — Dashboard de démo

Outil de présentation pour rendez-vous et événements networking : un dashboard
présentant des cas d'usage concrets d'automatisation IA pour PME, avec des
démos interactives simulées (aucun backend, tout tourne en local).

## Lancer le projet

```bash
npm install
npm run dev
```

## Structure

- `src/data/datasets.js` — les 3 jeux de données factices (BTP, Hôtellerie,
  Santé). Changer de jeu de données dans le header met à jour tout le contenu
  de l'app (cards + démos) instantanément.
- `src/data/modules.js` — la liste des 12 modules (8 génériques + 4 cas
  sectoriels vedettes). Pour ajouter un module, ajouter une entrée dans le
  tableau retourné par `buildModules(d)`.
- `src/components/WorkflowDemo.jsx` — démo animée en étapes (diagramme qui
  s'exécute).
- `src/components/ChatDemo.jsx` — démo de conversation simulée avec
  indicateur "en train d'écrire".
- `src/components/ReportChart.jsx` — mini graphique qui se dessine, utilisé
  par le module de reporting.

## Ajouter un jeu de données

Dupliquer un objet dans `DATASETS` (`src/data/datasets.js`) et remplir tous
les champs : ils alimentent l'ensemble des modules, y compris les cas
sectoriels vedettes qui ne correspondent pas au secteur du jeu de données.
