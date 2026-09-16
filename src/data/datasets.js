// Jeux de données factices pour la démo live.
// Chaque jeu alimente TOUS les modules (cards + démos), pas seulement les cas sectoriels vedettes.
// Pour ajouter un jeu : dupliquer un objet ci-dessous et remplir tous les champs.

export const DATASETS = [
  {
    id: 'btp',
    switcherLabel: 'BTP — Bâti Provence',
    sectorLabel: 'BTP',
    company: 'Bâti Provence',
    city: 'Aix-en-Provence',
    owner: 'Marc Journet',
    client: { name: 'SCI Les Terrasses du Roy', phone: '06 12 34 56 78' },
    leadChannel: 'message LinkedIn',
    leadMessage:
      "Bonjour, nous portons un projet de 12 logements à Aix, seriez-vous disponible pour un chiffrage gros œuvre ?",
    leadScore: 84,
    invoice: { number: 'FAC-2024-0342', amount: '18 400 €', issueDate: '3 septembre', dueDate: '18 septembre' },
    project: { name: 'Résidence Les Pins', amount: '184 000 €' },
    employee: { name: 'Karim Belaïd', role: 'Conducteur de travaux' },
    rdv: { motif: 'visite de chantier pour chiffrage extension', date: 'jeudi 19 septembre', time: '14h30', channel: 'téléphone' },
    document: { name: 'Devis_Fournisseur_BatiMat.pdf', type: 'devis fournisseur' },
    supportQuestion: 'Bonjour, à quelle date est prévue la livraison du béton pour la dalle ?',
    supportChannel: 'WhatsApp',
    chantier: { name: 'Résidence Les Pins', location: 'Aix-en-Provence', delayDays: 4 },
    serviceRequest: {
      request: 'Un client demande si nous intervenons aussi sur la rénovation énergétique',
      suggestion: 'Proposer un diagnostic thermique complémentaire'
    },
    stock: { product: 'Ciment CEM II 32,5 (sacs 35 kg)', daysLeft: 6, reorderQty: '40 sacs', supplier: 'BatiMat Provence' },
    dossier: {
      clientName: 'SCI Les Terrasses du Roy',
      missingDocs: ["Attestation d'assurance décennale", 'RIB'],
      type: 'dossier de garantie décennale'
    }
  },
  {
    id: 'hotellerie',
    switcherLabel: 'Hôtellerie — Hôtel des Calanques',
    sectorLabel: 'Hôtellerie',
    company: 'Hôtel des Calanques',
    city: 'Cassis',
    owner: 'Anaïs Guérin',
    client: { name: 'M. et Mme Dubreuil', phone: '06 45 12 78 90' },
    leadChannel: 'message WhatsApp',
    leadMessage: 'Bonjour, avez-vous une suite disponible avec vue mer du 12 au 15 octobre pour 2 personnes ?',
    leadScore: 91,
    invoice: { number: 'RES-2024-1187', amount: '740 €', issueDate: '2 septembre', dueDate: '17 septembre' },
    project: { name: 'Séjour Suite Vue Mer', amount: '740 €' },
    employee: { name: 'Léa Faure', role: 'Réceptionniste' },
    rdv: { motif: 'réservation table restaurant + accès spa', date: 'samedi 21 septembre', time: '20h00', channel: 'WhatsApp' },
    document: { name: 'Bon_Commande_Linge_Hotelier.pdf', type: 'bon de commande fournisseur' },
    supportQuestion: 'Bonjour, le petit-déjeuner est-il inclus dans notre réservation ?',
    supportChannel: 'email',
    chantier: { name: "Rénovation de l'aile Est", location: 'Cassis', delayDays: 3 },
    serviceRequest: {
      request: 'Demande de réservation pour un dîner en terrasse avec accès spa en soirée',
      suggestion: 'Proposer un surclassement en suite avec accès spa privatif'
    },
    stock: { product: "Kits d'accueil et linge de toilette", daysLeft: 5, reorderQty: '120 kits', supplier: 'Linvosges Pro' },
    dossier: {
      clientName: 'Groupe Événementiel Horizon',
      missingDocs: ['Devis signé', 'Acompte de réservation'],
      type: 'dossier réservation groupe'
    }
  },
  {
    id: 'sante',
    switcherLabel: 'Santé — Pharmacie du Vieux-Port',
    sectorLabel: 'Pharmacie',
    company: 'Pharmacie du Vieux-Port',
    city: 'Marseille',
    owner: 'Isabelle Roux',
    client: { name: 'Mme Rousseau', phone: '06 78 90 12 34' },
    leadChannel: 'formulaire du site',
    leadMessage: 'Bonjour, proposez-vous la téléconsultation et la livraison à domicile pour les personnes âgées ?',
    leadScore: 76,
    invoice: { number: 'FAC-2024-0521', amount: '312 €', issueDate: '1 septembre', dueDate: '16 septembre' },
    project: { name: 'Contrat de préparation des doses à domicile', amount: '312 €' },
    employee: { name: 'Sophie Martin', role: 'Préparatrice en pharmacie' },
    rdv: { motif: 'rendez-vous vaccination grippe', date: 'mardi 24 septembre', time: '10h15', channel: 'téléphone' },
    document: { name: 'Ordonnance_Rousseau_Sept.pdf', type: 'ordonnance' },
    supportQuestion: 'Bonjour, avez-vous du Doliprane 1000 mg en stock actuellement ?',
    supportChannel: 'téléphone',
    chantier: { name: "Extension du local officine", location: 'Marseille', delayDays: 2 },
    serviceRequest: {
      request: 'Demande de renseignement sur un traitement homéopathique',
      suggestion: 'Proposer un bilan de médication gratuit'
    },
    stock: { product: 'Doliprane 1000 mg (boîtes de 8)', daysLeft: 3, reorderQty: '60 boîtes', supplier: 'CERP Rouen' },
    dossier: {
      clientName: 'M. Nguyen',
      missingDocs: ['Justificatif mutuelle', 'Carte vitale à jour'],
      type: 'dossier tiers-payant'
    }
  }
]

export const DEFAULT_DATASET_ID = DATASETS[0].id
