// Contenu éditorial des pages sectorielles dédiées (hero, description).
// Indépendant du jeu de données actif : ce texte cadre le secteur, tandis que
// les modules affichés sur la page restent alimentés par le dataset en cours.
export const SECTOR_CONTENT = {
  btp: {
    label: 'BTP',
    tagline: 'Chantiers suivis, retards anticipés, factures qui se relancent seules.',
    description:
      "Entre les visites de chantier, les devis fournisseurs et les relances impayés, l'administratif prend souvent plus de temps que prévu. Les automatisations ci-dessous reprennent les tâches répétitives pour que vos équipes restent sur le terrain."
  },
  hotellerie: {
    label: 'Hôtellerie',
    tagline: 'Réservations traitées jour et nuit, upsell suggéré, clients jamais laissés sans réponse.',
    description:
      "Une demande de réservation à 23h, une question sur le petit-déjeuner, un client qui attend une confirmation : ce sont des dizaines de micro-interactions par jour. L'IA y répond en continu et vous suggère l'upsell au bon moment."
  },
  pharmacie: {
    label: 'Pharmacie',
    tagline: 'Stock anticipé, ruptures évitées, réappro déclenché avant qu\'il ne soit trop tard.',
    description:
      "Entre la saisonnalité, les pics de demande et les délais fournisseurs, gérer un stock d'officine à la main laisse toujours une marge d'erreur. L'automatisation surveille les ventes en continu et déclenche le réapprovisionnement au bon moment."
  },
  assurance: {
    label: 'Assurance',
    tagline: 'Dossiers vérifiés à réception, pièces manquantes réclamées automatiquement.',
    description:
      "Un dossier incomplet qui dort trois jours avant d'être relu, c'est trois jours de retard pour le client. L'IA vérifie chaque dossier dès son arrivée et relance immédiatement pour les pièces manquantes."
  },
  commerce: {
    label: 'Commerce & Services',
    tagline: "Les tâches répétitives de gestion tournent seules, votre équipe reste sur le service client.",
    description:
      "Facturation, prise de rendez-vous, tri des emails, reporting : ce sont les mêmes tâches administratives dans la plupart des commerces et sociétés de service. Voici les automatisations qui s'appliquent directement à votre activité."
  },
  rh: {
    label: 'RH',
    tagline: "Onboarding fluide, boîte mail sous contrôle, reporting prêt sans tableur.",
    description:
      "Un nouvel arrivant qui attend ses accès, un document oublié, un rapport RH compilé à la main en fin de mois : ce sont des heures perdues chaque semaine. Voici comment les automatiser sans perdre le contact humain."
  }
}
