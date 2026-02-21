import product1 from "@/assets/product1.png";
import product2 from "@/assets/product2.png";

export interface Review {
  name: string;
  initial: string;
  date: string;
  text: string;
}

export interface CourseChapter {
  title: string;
  description: string;
  lessonCount: number;
  lessons: string[];
}

export interface Product {
  id: number;
  slug: string;
  title: string;
  image: string;
  coverImage: string;
  discount: string;
  rating: string;
  ratingCount: number;
  originalPrice: string;
  salePrice: string;
  type: "course" | "downloadable";
  students?: number;
  sold?: number;
  remaining?: number;
  limitedOffer?: boolean;
  ctaLabel: string;
  reviews: Review[];
  chapters?: CourseChapter[];
  description: string[];
  faq?: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "avatar-content",
    title: "Apprends à créer du contenu vidéo avec ton AVATAR IA",
    image: product1,
    coverImage: "https://images.chariow.com/cdn-cgi/image/format=auto,onerror=redirect,quality=medium-high,slow-connection-quality=50/https://assets.cdn.chariow.com/cover_pictures/ZzKWhuQ9jBAfeW1ccchoHcrhppB3FZBY9mnVgD57.png",
    discount: "68% off",
    rating: "100%",
    ratingCount: 3,
    originalPrice: "$20.16",
    salePrice: "$6.48",
    type: "course",
    students: 94,
    ctaLabel: "Join the training",
    reviews: [
      {
        name: "Ousmane M.",
        initial: "OM",
        date: "a day ago",
        text: "Formation très très riche du fond à la forme. Il y'a rien a dire. Sans faute la meilleure des Formations.",
      },
      {
        name: "Frank Lirice K.",
        initial: "FK",
        date: "2 days ago",
        text: "Bonne formation.",
      },
      {
        name: "Arthur B.",
        initial: "AB",
        date: "2 days ago",
        text: "Très bonne formation. Je suis très content car grâce à cette formation, j'ai pu acquérir une nouvelle expérience très importante dans le cadre du business d'affaires. Vraiment \"MERCI\".",
      },
    ],
    chapters: [
      {
        title: "PRESENTATION DE LA FORMATION",
        description: "Dans cette vidéo, je te présente la formation, son fonctionnement et ce que tu vas apprendre étape par étape.",
        lessonCount: 1,
        lessons: ["INTRODUCTION"],
      },
      {
        title: "CHAPITRE 1 : Création de ton avatar avec Nano Banana de Gemini",
        description: "Dans ce chapitre, tu apprendras à créer ton propre avatar réaliste qui te ressemble avec Nano Banana de Gemini.",
        lessonCount: 1,
        lessons: ["Création de ton avatar avec Nano Banana de Gemini"],
      },
      {
        title: "CHAPITRE 2 : Rédaction de scripts captivants avec ChatGPT & Claude AI",
        description: "Dans ce chapitre, je te montre comment rédiger des scripts simples, clairs et efficaces avec ChatGPT ou Claude AI.",
        lessonCount: 1,
        lessons: ["Rédaction de scripts captivants avec ChatGPT & Claude AI"],
      },
      {
        title: "CHAPITRE 3 : Génération de vidéos avatar avec Google AI Flow",
        description: "Dans ce chapitre, tu apprendras à générer des vidéos de qualité avec Google AI Flow.",
        lessonCount: 1,
        lessons: ["Génération de vidéos avec Google AI Flow"],
      },
      {
        title: "CHAPITRE 4 : Montage vidéo captivant avec CapCut",
        description: "Dans ce chapitre, je t'explique comment monter correctement tes vidéos avec CapCut.",
        lessonCount: 1,
        lessons: ["Montage vidéo captivant avec CapCut"],
      },
      {
        title: "CHAPITRE 5 : Stratégies de contenu",
        description: "Dans ce chapitre, tu découvriras comment publier efficacement sur Facebook et TikTok.",
        lessonCount: 1,
        lessons: ["Stratégies de contenu"],
      },
      {
        title: "🎁 BONUS EXCLUSIFS",
        description: "Accès gratuit à la version Pro de Gemini, à Google Veo 3, et formation complète en montage vidéo sur CapCut.",
        lessonCount: 2,
        lessons: ["ACCES GRATUIT A VEO 3 ET GEMINI PRO", "FORMATION COMPLETE MONTAGE VIDEO AVEC CAPCUT"],
      },
    ],
    description: [
      "Crée facilement des vidéos avec ton avatar IA et transforme-les en vrai contenu, même si tu pars de zéro !",
      "Dans cette formation, je te montre pas à pas comment créer des vidéos avec un avatar IA et surtout comment les utiliser pour créer du contenu régulier et cohérent.",
    ],
    faq: [
      { question: "Je suis débutant, est-ce que je vais comprendre ?", answer: "Oui. La formation est pensée pour quelqu'un qui part de zéro." },
      { question: "Je ne veux pas me montrer à la caméra.", answer: "Justement. Tout repose sur l'avatar IA." },
      { question: "Est-ce que c'est compliqué techniquement ?", answer: "Non. Je simplifie tout." },
      { question: "Quand est-ce que j'ai accès ?", answer: "Immédiatement après l'achat." },
    ],
  },
  {
    id: 2,
    slug: "cours-rapide-videos-ia",
    title: "Cours rapide : créez des vidéos IA facilement et efficacement",
    image: product2,
    coverImage: "https://images.chariow.com/cdn-cgi/image/format=auto,onerror=redirect,quality=medium-high,slow-connection-quality=50/https://assets.cdn.chariow.com/assets/store_aqchl3thfksd/4S4rghpmPGBtTeab0Tu7gxyZqKVMKpd2gG5MY940.png",
    discount: "83% off",
    rating: "0%",
    ratingCount: 0,
    originalPrice: "$27.74",
    salePrice: "$4.63",
    type: "downloadable",
    sold: 21,
    remaining: 4,
    limitedOffer: true,
    ctaLabel: "Get the offer",
    reviews: [],
    description: [
      "Tu souhaites créer tes premières vidéos avec l'intelligence artificielle rapidement et sans te perdre dans des tutoriels complexes ?",
      "Tu es au bon endroit !",
      "Ce mini cours est disponible en vidéo, que tu peux suivre, à ton rythme, où que tu sois.",
    ],
    faq: [],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
