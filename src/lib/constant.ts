export const images = Array.from({ length: 3 }, (_, i) => ({
  url: `/about/portrait-${i + 1}.webp`,
  alt: `Portrait ${i + 1}`,
}));

export const workExperiences = [
  {
    logo: "/about/Sunfund-logo.jpeg",
    title: "Junior Software Developer",
    company: "Sunfund PH",
    duration: "Nov 2024 - Present",
  },
  {
    logo: "/about/iBuild-logo.jpg",
    title: "Web Developer Intern",
    company: "i-Build.PH Web Services and Solutions",
    duration: "February - March 2024",
  },
];

export const skills = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Java", icon: "devicon-java-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
  { name: "PyQt", icon: "devicon-python-plain" },
  { name: "Flask", icon: "devicon-flask-original" },
  { name: "Drupal", icon: "devicon-drupal-plain" },
  { name: "MySQL", icon: "devicon-mysql-original" },
  { name: "SQLite", icon: "devicon-sqlite-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "Prisma", icon: "devicon-prisma-original" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Vercel", icon: "devicon-vercel-original" },
  { name: "Figma", icon: "devicon-figma-plain" },
];
