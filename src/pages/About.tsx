import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const images = [
    {
      url: "/src/assets/about/portrait-1.webp",
      alt: "Portrait 1",
    },
    {
      url: "/src/assets/about/portrait-2.webp",
      alt: "Portrait 2",
    },
    {
      url: "/src/assets/about/portrait-3.webp",
      alt: "Portrait 3",
    },
  ];

  const workExperiences = [
    {
      logo: "/src/assets/about/Sunfund-logo.jpeg",
      title: "Junior Software Developer",
      company: "Sunfund PH",
      duration: "Nov 2024 - Present",
    },
    {
      logo: "/src/assets/about/iBuild-logo.jpg",
      title: "Web Developer Intern",
      company: "i-Build.PH Web Services and Solutions",
      duration: "February - March 2024",
    },
  ];

  const skills = [
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

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      {/* About Section */}
      <section className="mb-12 sm:mb-16">
        <div data-aos="fade-up" data-aos-once="true">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600">About</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 font-light">
            A glimpse into me.
          </p>
        </div>

        <div className="flex justify-between gap-4 mb-6">
          {images.map((image, index) => {
            const isMiddle = index === 1;
            const containerClass = isMiddle
              ? "w-[75%] mx-auto md:w-[32%] md:mx-0"
              : "hidden md:block w-[32%]";

            return (
              <div
                key={index}
                className={`aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden group ${containerClass}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        <p className="text-gray-600 text-justify text-md leading-relaxed">
          Hey there! I'm Amarjeet Singh, a Junior Software Engineer focused on
          building full-stack web applications using Next.js, TypeScript, and
          Prisma. My role involves developing user-friendly features, working
          with databases, and writing clean and maintainable code. I enjoy
          learning new technologies and building practical solutions that make
          everyday tasks easier.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="mb-12 sm:mb-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-red-600">
          Work Experience
        </h2>
        {workExperiences.map((experience, index) => (
          <Card
            key={index}
            className="p-4 border border-red-200 rounded-lg transition-all duration-300 ease-in-out mb-4 hover:shadow-[0_5px_10px_rgba(240,128,128,0.15)] hover:border-red-300"
          >
            <CardContent className="flex items-center p-2">
              <div className="flex-shrink-0 self-center mr-3">
                <img
                  src={experience.logo}
                  alt={`${experience.company}-logo`}
                  className="w-12 h-12 border rounded-full"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-lg">{experience.title}</h3>
                <p className="text-sm font-light text-gray-500">
                  {experience.company}
                </p>
                <span className="text-sm font-light text-gray-500 block sm:hidden mt-1">
                  {experience.duration}
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="text-sm font-light text-gray-500">
                  {experience.duration}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Education Section */}
      <section className="mb-12 sm:mb-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-red-600">
          Education
        </h2>
        <Card className="p-4 border border-red-200 rounded-lg transition-all duration-300 ease-in-out mb-4 hover:shadow-[0_5px_10px_rgba(240,128,128,0.15)] hover:border-red-300">
          <CardContent className="flex items-center p-2">
            <div className="flex-shrink-0 self-center mr-3">
              <img
                src="/src/assets/about/SLSU-logo.png"
                alt="SLSU-logo"
                className="w-12 h-12"
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">
                Bachelor of Science in Computer Engineering
              </h3>
              <p className="text-sm font-light text-gray-500">
                Southern Luzon State University
              </p>
              <span className="text-sm text-gray-500 font-light block sm:hidden mt-1">
                2020 - 2024
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm text-gray-500 font-light">
                2020 - 2024
              </span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-red-600">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="rounded-full px-4 sm:px-5 py-1.5 sm:py-1.5 flex items-center gap-1 sm:gap-1.5 bg-gray-100 border hover:bg-gray-200 transition-colors"
            >
              <span className="text-base sm:text-lg flex items-center justify-center leading-none">
                <i className={`${skill.icon} colored`} />
              </span>
              <span className="text-sm sm:text-base font-medium text-black leading-none">
                {skill.name}
              </span>
            </Badge>
          ))}
        </div>
      </section>
    </main>
  );
}
