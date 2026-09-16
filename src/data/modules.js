import {
  MessageSquare,
  UserSearch,
  Receipt,
  Mail,
  BarChart3,
  UserPlus,
  CalendarCheck,
  FileSearch,
  HardHat,
  ConciergeBell,
  Package,
  ShieldCheck,
  Inbox,
  Sparkles,
  Send,
  CheckCircle2,
  AlertTriangle,
  Camera,
  ClipboardList,
  FileWarning,
  TrendingUp
} from 'lucide-react'

// Construit la liste complète des modules à partir du jeu de données actif.
// Chaque module reste identique dans sa structure (icône, type de démo) mais
// tout son contenu texte est dérivé de `d` (le dataset sélectionné dans le header).
export function buildModules(d) {
  return [
    // ---- Modules génériques (applicables à toute PME) ----
    {
      id: 'sav-chatbot',
      icon: MessageSquare,
      title: 'Chatbot SAV / support client',
      benefit:
        'Vos clients obtiennent une réponse immédiate à toute heure, et vous ne gérez plus que les cas qui le méritent vraiment.',
      tags: ['Tous secteurs', 'Support client', 'Plusieurs heures/semaine'],
      sectors: ['btp', 'hotellerie', 'pharmacie', 'assurance', 'commerce'],
      badge: false,
      demoType: 'chat',
      demo: {
        channelLabel: d.supportChannel,
        messages: [
          { from: 'client', text: d.supportQuestion },
          { from: 'ia', text: `Bonjour, je vérifie cela pour vous tout de suite au nom de ${d.company}.` },
          { from: 'ia', text: buildSupportAnswer(d) },
          { from: 'client', text: 'Parfait, merci beaucoup pour la réactivité !' },
          { from: 'system', text: 'Conversation résumée et classée automatiquement — aucun ticket nécessaire.' }
        ]
      }
    },
    {
      id: 'leads',
      icon: UserSearch,
      title: 'Prospection & qualification de leads',
      benefit:
        "Chaque message entrant est lu, enrichi et noté automatiquement : plus aucun contact intéressé ne dort dans une boîte mail.",
      tags: ['Vente', 'Qualification automatique', "Plus de leads traités"],
      sectors: ['btp', 'hotellerie', 'assurance', 'commerce'],
      badge: false,
      demoType: 'workflow',
      demo: {
        steps: [
          { icon: Inbox, title: 'Message reçu', detail: `Via ${d.leadChannel} : « ${d.leadMessage} »` },
          { icon: Sparkles, title: 'Enrichissement du contact', detail: `Recherche des informations sur ${d.client.name}` },
          { icon: TrendingUp, title: 'Score attribué', detail: `Lead noté ${d.leadScore}/100 — priorité haute` },
          { icon: Send, title: 'Réponse proposée', detail: 'Un brouillon de réponse personnalisé est généré' },
          { icon: CheckCircle2, title: 'Transmis au commercial', detail: `${d.owner} reçoit la fiche complète, prête à traiter` }
        ]
      }
    },
    {
      id: 'facturation',
      icon: Receipt,
      title: 'Facturation & relance automatique',
      benefit:
        'Les factures se relancent seules au bon moment : vous récupérez votre trésorerie plus vite, sans geste commercial pénible.',
      tags: ['Finance', 'Trésorerie', 'Relances sans effort'],
      sectors: ['btp', 'hotellerie', 'pharmacie', 'assurance', 'commerce'],
      badge: false,
      demoType: 'workflow',
      demo: {
        steps: [
          { icon: Receipt, title: 'Facture émise', detail: `${d.invoice.number} — ${d.invoice.amount}, envoyée le ${d.invoice.issueDate}` },
          { icon: Send, title: 'Envoi au client', detail: `${d.client.name} reçoit la facture par email` },
          { icon: AlertTriangle, title: 'Relance automatique (J+15)', detail: `Échéance du ${d.invoice.dueDate} dépassée, relance envoyée automatiquement` },
          { icon: CheckCircle2, title: 'Paiement détecté', detail: 'Virement reçu et rapproché automatiquement' },
          { icon: ClipboardList, title: 'Écriture comptable', detail: 'La facture est marquée soldée dans la comptabilité' }
        ]
      }
    },
    {
      id: 'emails',
      icon: Mail,
      title: "Tri et réponse d'emails",
      benefit:
        'Votre boîte mail se trie et se pré-rédige toute seule : vous ne faites plus que relire et valider.',
      tags: ['Tous secteurs', 'Organisation', 'Boîte mail sous contrôle'],
      sectors: ['btp', 'hotellerie', 'pharmacie', 'assurance', 'commerce', 'rh'],
      badge: false,
      demoType: 'workflow',
      demo: {
        steps: [
          { icon: Inbox, title: 'Email reçu', detail: `Nouveau message de ${d.client.name}` },
          { icon: Sparkles, title: 'Catégorisation automatique', detail: 'Classé comme « demande client prioritaire »' },
          { icon: FileSearch, title: 'Résumé généré', detail: "L'essentiel du message est extrait en une ligne" },
          { icon: Send, title: 'Brouillon rédigé', detail: 'Une réponse complète est préparée, prête à personnaliser' },
          { icon: CheckCircle2, title: 'Prêt à valider', detail: `${d.owner} n'a plus qu'à relire et envoyer` }
        ]
      }
    },
    {
      id: 'reporting',
      icon: BarChart3,
      title: 'Reporting automatisé',
      benefit:
        'Un rapport hebdomadaire complet est prêt chaque lundi matin, sans que personne n\'ait eu à compiler de tableau.',
      tags: ['Pilotage', 'Direction', 'Zéro tableau Excel'],
      sectors: ['btp', 'hotellerie', 'pharmacie', 'assurance', 'commerce', 'rh'],
      badge: false,
      demoType: 'chart',
      demo: {
        steps: [
          { icon: Inbox, title: 'Connexion aux sources', detail: 'CRM, ventes et planning interrogés automatiquement' },
          { icon: Sparkles, title: 'Agrégation des données', detail: `Données de ${d.company} consolidées sur la semaine` },
          { icon: BarChart3, title: 'Calcul des indicateurs', detail: 'Chiffre d\'affaires, activité et délais moyens calculés' },
          { icon: Send, title: 'Rapport envoyé', detail: `${d.owner} reçoit la synthèse chaque lundi à 8h` }
        ],
        chartLabel: `Activité hebdomadaire — ${d.company}`,
        chartValues: [42, 55, 48, 63, 58, 71, 66]
      }
    },
    {
      id: 'onboarding',
      icon: UserPlus,
      title: 'Onboarding RH automatisé',
      benefit:
        "Chaque nouvel arrivant suit un parcours fluide et complet, sans oubli de document, d'accès ou de formation.",
      tags: ['RH', 'Ressources humaines', 'Aucun oubli'],
      sectors: ['rh', 'btp', 'hotellerie', 'commerce'],
      badge: false,
      demoType: 'workflow',
      demo: {
        steps: [
          { icon: Send, title: 'Contrat envoyé & signé', detail: `${d.employee.name} — ${d.employee.role}` },
          { icon: ShieldCheck, title: 'Accès créés', detail: 'Badge, boîte mail et outils métiers provisionnés automatiquement' },
          { icon: CalendarCheck, title: 'Formation planifiée', detail: 'Session sécurité programmée avant la prise de poste' },
          { icon: ClipboardList, title: 'Documents RH complétés', detail: 'Mutuelle, RIB et charte interne collectés automatiquement' },
          { icon: CheckCircle2, title: 'Parcours terminé', detail: `${d.employee.name} est opérationnel dès le premier jour` }
        ]
      }
    },
    {
      id: 'rdv',
      icon: CalendarCheck,
      title: 'Prise de rendez-vous automatisée',
      benefit:
        'Le planning se remplit sans appel manqué ni aller-retour de mails, jour et nuit.',
      tags: ['Organisation', 'Agenda toujours à jour', 'Rappels automatiques'],
      sectors: ['btp', 'hotellerie', 'pharmacie', 'assurance', 'commerce'],
      badge: false,
      demoType: 'workflow',
      demo: {
        steps: [
          { icon: Inbox, title: 'Demande reçue', detail: `Par ${d.rdv.channel} : « ${d.rdv.motif} »` },
          { icon: CalendarCheck, title: 'Créneaux proposés', detail: `Disponibilités transmises pour le ${d.rdv.date}` },
          { icon: CheckCircle2, title: 'Client confirme', detail: `Rendez-vous validé à ${d.rdv.time}` },
          { icon: ClipboardList, title: 'Agenda mis à jour', detail: `Créneau bloqué automatiquement chez ${d.company}` },
          { icon: Send, title: 'Rappel programmé', detail: 'Un SMS de rappel partira la veille du rendez-vous' }
        ]
      }
    },
    {
      id: 'extraction',
      icon: FileSearch,
      title: 'Extraction de données de documents',
      benefit:
        'Vos devis et bons de commande se transforment en données exploitables, sans ressaisie manuelle.',
      tags: ['Finance', 'Sans ressaisie', 'Documents traités'],
      sectors: ['btp', 'hotellerie', 'pharmacie', 'assurance', 'commerce'],
      badge: false,
      demoType: 'workflow',
      demo: {
        steps: [
          { icon: FileSearch, title: 'Document reçu', detail: `${d.document.name} (${d.document.type})` },
          { icon: Sparkles, title: 'Lecture automatique', detail: 'Le contenu du document est analysé ligne par ligne' },
          { icon: ClipboardList, title: 'Données extraites', detail: 'Montants, références et dates identifiés' },
          { icon: Send, title: 'Injection dans le tableau', detail: 'Les données sont ajoutées au suivi sans ressaisie' },
          { icon: CheckCircle2, title: 'Vérification proposée', detail: `${d.owner} valide en un coup d'œil avant archivage` }
        ]
      }
    },

    // ---- Cas sectoriels vedettes ----
    {
      id: 'btp-chantier',
      icon: HardHat,
      title: 'Suivi de chantier automatisé',
      benefit:
        'Une photo prise depuis le terrain suffit à générer le compte-rendu et à signaler un retard avant qu\'il ne coûte cher.',
      tags: ['BTP', 'Cas client', 'Retards détectés tôt'],
      sectors: ['btp'],
      badge: true,
      demoType: 'workflow',
      demo: {
        steps: [
          { icon: Camera, title: 'Photo terrain envoyée', detail: `Chantier « ${d.chantier.name} » — ${d.chantier.location}` },
          { icon: Sparkles, title: "Analyse de l'avancement", detail: 'Comparaison avec les photos des semaines précédentes' },
          { icon: ClipboardList, title: 'Compte-rendu généré', detail: 'Synthèse automatique envoyée au conducteur de travaux' },
          { icon: FileWarning, title: 'Comparaison au planning', detail: `Écart détecté : ${d.chantier.delayDays} jours de retard` },
          { icon: AlertTriangle, title: 'Alerte envoyée', detail: `${d.owner} est notifié avant que le retard ne s'aggrave` }
        ]
      }
    },
    {
      id: 'hotel-concierge',
      icon: ConciergeBell,
      title: 'Conciergerie IA multicanal',
      benefit:
        'Réservations et questions trouvent une réponse immédiate, jour et nuit, avec une suggestion commerciale en plus.',
      tags: ['Hôtellerie', 'Cas client', 'Upsell suggéré'],
      sectors: ['hotellerie'],
      badge: true,
      demoType: 'chat',
      demo: {
        channelLabel: 'WhatsApp / email',
        messages: [
          { from: 'client', text: d.serviceRequest.request },
          { from: 'ia', text: `Bonjour, c'est noté avec plaisir au nom de ${d.company}.` },
          { from: 'ia', text: `${d.serviceRequest.suggestion} — souhaitez-vous que je l'ajoute à votre réservation ?` },
          { from: 'client', text: 'Oui, avec plaisir, merci pour la suggestion !' },
          { from: 'system', text: 'Réservation mise à jour automatiquement, aucune intervention humaine nécessaire.' }
        ]
      }
    },
    {
      id: 'pharma-stock',
      icon: Package,
      title: 'Gestion de stock prédictive',
      benefit:
        'Le réapprovisionnement se déclenche avant la rupture, en tenant compte des habitudes de vente et de la saison.',
      tags: ['Pharmacie', 'Cas client', 'Ruptures évitées'],
      sectors: ['pharmacie'],
      badge: true,
      demoType: 'workflow',
      demo: {
        steps: [
          { icon: BarChart3, title: 'Analyse des ventes', detail: `Suivi des sorties de « ${d.stock.product} »` },
          { icon: Sparkles, title: 'Tendance saisonnière détectée', detail: 'La demande augmente plus vite que la moyenne habituelle' },
          { icon: AlertTriangle, title: 'Seuil critique atteint', detail: `Il ne reste que ${d.stock.daysLeft} jours de stock` },
          { icon: ClipboardList, title: 'Commande générée', detail: `Réapprovisionnement de ${d.stock.reorderQty} préparé` },
          { icon: Send, title: 'Fournisseur notifié', detail: `Commande transmise automatiquement à ${d.stock.supplier}` }
        ]
      }
    },
    {
      id: 'assurance-dossier',
      icon: ShieldCheck,
      title: 'Pré-qualification de dossier',
      benefit:
        'Chaque dossier est vérifié dès sa réception : les pièces manquantes sont réclamées sans attendre.',
      tags: ['Assurance', 'Cas client', 'Dossiers traités plus vite'],
      sectors: ['assurance'],
      badge: true,
      demoType: 'workflow',
      demo: {
        steps: [
          { icon: Inbox, title: 'Dossier reçu', detail: `${d.dossier.type} — ${d.dossier.clientName}` },
          { icon: FileSearch, title: 'Lecture automatique des pièces', detail: 'Le contenu du dossier est vérifié pièce par pièce' },
          { icon: FileWarning, title: 'Pièces manquantes détectées', detail: d.dossier.missingDocs.join(', ') },
          { icon: Send, title: 'Relance automatique', detail: `${d.dossier.clientName} reçoit la liste des pièces à fournir` },
          { icon: CheckCircle2, title: 'Dossier mis à jour', detail: 'Traitement repris dès réception des documents' }
        ]
      }
    }
  ]
}

function buildSupportAnswer(d) {
  if (d.stock && d.supportQuestion.toLowerCase().includes('stock')) {
    return `Oui, « ${d.stock.product} » est disponible actuellement.`
  }
  if (d.supportQuestion.toLowerCase().includes('petit-déjeuner')) {
    return 'Oui, le petit-déjeuner est inclus dans votre formule de séjour.'
  }
  if (d.supportQuestion.toLowerCase().includes('béton') || d.supportQuestion.toLowerCase().includes('livraison')) {
    return `La livraison pour le chantier « ${d.chantier.name} » est confirmée pour demain matin.`
  }
  return `Voici la réponse : votre demande a bien été prise en compte par ${d.company}.`
}
