// data/courses.ts
const courses = [
  {
    slug: "strategy-twin",
    title: "Strategy Twin — Simulatore di scelte",
    category: "Strategia",
    description: "Impara a costruire il gemello digitale della tua impresa e testare scenari.",
    lessons: [
      { title: "Introduzione al modello", type: "video", length: "12 min" },
      { title: "Setup dati essenziali", type: "pdf", length: "8 pag" },
      { title: "Esercitazione pratica", type: "task", length: "30 min" }
    ]
  },
  {
    slug: "marketing-booster",
    title: "Marketing Booster — da dati ad azioni",
    category: "Marketing + AI",
    description: "Cruscotto AI e sprint operativi per far crescere le tue campagne.",
    lessons: [
      { title: "Dashboard KPI", type: "video", length: "10 min" },
      { title: "Setup strumenti", type: "pdf", length: "6 pag" }
    ]
  },
  {
    slug: "counseling-psico-spirituale",
    title: "Counseling psico-spirituale — basi",
    category: "Coaching & Counseling",
    description: "Fondamenti, etica e strumenti pratici per sessioni efficaci.",
    lessons: [
      { title: "Setting e confini", type: "video", length: "14 min" },
      { title: "Schede pratiche", type: "pdf", length: "10 pag" }
    ]
  }
];
export default courses;
