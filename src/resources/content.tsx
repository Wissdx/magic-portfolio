import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Julien",
  lastName: "Gutierrez",
  name: `Julien Gutierrez`,
  role: "Athlète, Coach & Arbitre en Force Athlétique",
  avatar: "/images/avatar.jepg",
  email: "juliengutierrez96@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>S'abonner à la newsletter de {person.firstName}</>,
  description: <>Une newsletter hebdomadaire sur l'entraînement, la performance et le coaching</>,
};

const social: Social = [
  // Les liens sont affichés automatiquement.
  // Importez de nouvelles icônes dans /resources/icons.ts
  {
    name: "Myprotein",
    icon: "myprotein",
    link: "https://tidd.ly/3E7Wrl3",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/julienguti",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://www.tiktok.com/@juliengutierrez57",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio de ${person.name}`,
  description: `Site portfolio présentant mon travail en tant que ${person.role}`,
  headline: <>Partager ma passion et mon parcours</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">gutigang</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Travail à la une
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Je suis {person.firstName}, {person.role}. Je partage mes entraînements, mes projets
      <br /> et des conseils autour de la force athlétique.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Rencontrez ${person.name}, ${person.role} (${person.location})`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Julien est un passionné de force athlétique. Athlète, coach et arbitre, il partage un
        parcours dédié à la performance, à la pédagogie et à la communauté.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Expérience professionnelle",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Aujourd'hui",
        role: "Coach principal",
        achievements: [
          <>
            Accompagnement d'athlètes vers leurs objectifs avec des programmations personnalisées.
          </>,
          <>
            Organisation de sessions techniques et préparation aux compétitions officielles.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Coach",
        achievements: [
          <>
            Suivi de groupes et ateliers d'initiation à la force.
          </>,
          <>
            Mise en place de plans d'entraînement progressifs et individualisés.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Études",
    institutions: [
      {
        name: "Université de Montpellier",
        description: <>Études en sciences du sport.</>,
      },
      {
        name: "Certifications",
        description: <>Formations en préparation physique et arbitrage.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences techniques",
    skills: [
      {
        title: "Programmation d'entraînement",
        description: (
          <>Planification, suivi et ajustements de programmes orientés force.</>
        ),
        tags: [
          {
            name: "Coaching",
            icon: "person",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Préparation à la compétition",
        description: (
          <>Périodisation, affûtage et gestion de la performance le jour J.</>
        ),
        tags: [
          {
            name: "Force",
            icon: "rocket",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Articles",
  description: `Lisez les dernières publications de ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets et travaux de ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie photo – ${person.name}`,
  description: `Une collection de photos par ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
