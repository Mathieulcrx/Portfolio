/**
 * PROJETS — LCRX Portfolio
 * ─────────────────────────────────────────────────────────────
 * Pour chaque projet :
 *
 *   image : chemin vers ton fichier dans src/assets/
 *           ex: import valImg from '../assets/val-disere.jpg'
 *           puis mettre  image: valImg
 *
 *   video : si tu préfères une vidéo en fond, utilise "video"
 *           au lieu de "image", et colle l'import de ton .mp4
 *
 *   tag   : catégorie affichée en haut à droite de la carte
 *   label : sous-titre doré (type · support)
 *   title : nom du projet
 *   desc  : courte description (1–2 lignes)
 * ─────────────────────────────────────────────────────────────
 */

const projects = [
  {
    id: 1,
    image: null,           // 👈 remplace par: import img from '../assets/val-disere.jpg'
    video: null,           // 👈 ou une vidéo .mp4
    placeholder: 'ph-val',
    placeholderIcon: '⛷',
    tag: 'Sport',
    label: 'Station alpine · Vidéo',
    title: "Val d'Isère",
    desc: "Captation immersive des paysages alpins et de l'adrénaline des pistes.",
  },
  {
    id: 2,
    image: null,
    video: null,
    placeholder: 'ph-athlete',
    placeholderIcon: '🏃',
    tag: 'Élite',
    label: 'Équipe de France · Photo & Vidéo',
    title: 'Athlètes EDF',
    desc: "Portraits cinématiques d'athlètes de haut niveau en action.",
  },
  {
    id: 3,
    image: null,
    video: null,
    placeholder: 'ph-marathon',
    placeholderIcon: '🍺',
    tag: 'Event',
    label: 'Saint-Étienne · Reportage',
    title: 'Marathon de la Bière',
    desc: 'Ambiance unique, énergie collective, récit visuel d\'un événement festif.',
  },
  {
    id: 4,
    image: null,
    video: null,
    placeholder: 'ph-event',
    placeholderIcon: '🎥',
    tag: null,
    label: 'Événementiel · Production',
    title: 'Événements corporate',
    desc: 'Couverture complète : teaser, after-movie, visuels promotionnels.',
  },
];

export default projects;
