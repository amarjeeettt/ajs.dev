import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { AboutCard } from "@/components/about-card";
import { images, workExperiences, skills } from "@/lib/constant";

export default function About() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      {/* About Section */}
      <section className="mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { delay: 0.1, duration: 0.8, ease: "easeInOut" },
          }}
          className="text-3xl sm:text-4xl font-bold text-red-600"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" },
          }}
          className="text-md sm:text-lg text-gray-500 mb-6 sm:mb-8 font-extralight"
        >
          A glimpse into me.
        </motion.p>

        <div className="flex justify-between gap-4 mb-6">
          {images.map((image, index) => {
            const middleIndex = Math.floor(images.length / 2);
            const isMiddle = index === middleIndex;

            const containerClass = isMiddle
              ? "w-[75%] mx-auto md:w-[32%] md:mx-0"
              : "hidden md:block w-[32%]";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    delay: 0.5 + index * 0.1,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                className={`aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden group ${containerClass}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { delay: 1.0, duration: 0.8, ease: "easeInOut" },
          }}
          className="text-gray-500 text-justify text-md leading-relaxed"
        >
          Hey there! I'm Amarjeet Singh, a Junior Software Engineer focused on
          building full-stack web applications using Next.js, TypeScript, and
          Prisma. My role involves developing user-friendly features, working
          with databases, and writing clean and maintainable code. I enjoy
          learning new technologies and building practical solutions that make
          everyday tasks easier.
        </motion.p>
      </section>

      {/* Work Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="mb-12 sm:mb-16 px-6 max-w-7xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-red-600">
          Work Experience
        </h2>
        {workExperiences.map((experience, index) => {
          const direction = index % 2 !== 0 ? 1 : -1;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction * 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <AboutCard
                logo={experience.logo}
                title={experience.title}
                subtitle={experience.company}
                duration={experience.duration}
              />
            </motion.div>
          );
        })}
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-12 sm:mb-16 px-4 max-w-7xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-red-600">
          Education
        </h2>

        <AboutCard
          logo="/about/SLSU-logo.png"
          title="Bachelor of Science in Computer Engineering"
          subtitle="Southern Luzon State University"
          duration="2020 - 2024"
        />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-red-600">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.05,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Badge
                variant="secondary"
                className="rounded-full px-4 sm:px-5 py-1.75 sm:py-1.75 flex items-center gap-1 sm:gap-1.5"
              >
                <span className="text-sm sm:text-base flex items-center justify-center leading-none">
                  <i className={`${skill.icon} colored`} />
                </span>
                <span className="text-xs sm:text-sm font-medium leading-none">
                  {skill.name}
                </span>
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
