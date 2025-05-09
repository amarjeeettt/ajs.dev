<template>
  <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
    <!-- About Section -->
    <section class="mb-12 sm:mb-16">
      <div data-aos="fade-up" data-aos-once="true">
        <h2 class="text-3xl sm:text-4xl font-bold text-red-600">About</h2>
        <p class="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 font-light">
          A glimpse into me.
        </p>
      </div>

      <div class="flex justify-between gap-4 mb-6">
        <div
          v-for="(image, index) in images"
          :key="index"
          :data-aos="'fade-up'"
          :data-aos-delay="200 * index"
          data-aos-once="true"
          :class="[
            'w-[32%] aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden group',
            index !== 1
              ? 'md:block hidden'
              : 'w-[75%] mx-auto md:w-[32%] md:mx-0',
          ]"
        >
          <img
            :src="image.url"
            :alt="image.alt"
            class="w-full h-full object-cover transition-all duration-500 ease-out hover:scale-105 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <p
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-once="true"
        class="text-gray-600 text-justify text-md leading-relaxed"
      >
        Hey there! I'm Amarjeet Singh, a Junior Software Engineer focused on
        building full-stack web applications using Next.js, TypeScript, and
        Prisma. My role involves developing user-friendly features, working with
        databases, and writing clean and maintainable code. I enjoy learning new
        technologies and building practical solutions that make everyday tasks
        easier.
      </p>
    </section>

    <!-- Work Experience Section -->
    <section
      data-aos="fade-up"
      data-aos-once="true"
      class="mb-12 sm:mb-16 px-4 max-w-7xl mx-auto"
    >
      <h2
        class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-red-600"
      >
        Work Experience
      </h2>
      <Card
        data-aos="fade-right"
        :data-aos-delay="100 * index"
        data-aos-once="true"
        class="p-4 border border-red-200 rounded-lg transition-all duration-300 ease-in-out mb-4 hover:shadow-[0_5px_10px_rgba(240,128,128,0.15)] hover:border-red-300"
        v-for="(experience, index) in workExperiences"
        :key="index"
      >
        <CardContent class="flex items-center p-2">
          <div class="flex-shrink-0 self-center mr-3">
            <img
              :src="experience.logo"
              alt="iBuild-logo"
              class="w-12 h-12 border rounded-full"
            />
          </div>
          <div class="flex-grow">
            <h3 class="font-semibold text-lg">{{ experience.title }}</h3>
            <p class="text-sm font-light text-gray-500">
              {{ experience.company }}
            </p>
            <span class="text-sm font-light text-gray-500 block sm:hidden mt-1">
              {{ experience.duration }}
            </span>
          </div>
          <div class="hidden sm:block">
            <span class="text-sm font-light text-gray-500">
              {{ experience.duration }}
            </span>
          </div>
        </CardContent>
      </Card>
    </section>

    <!-- Education Section -->
    <section
      data-aos="fade-up"
      data-aos-once="true"
      class="mb-12 sm:mb-16 px-4 max-w-7xl mx-auto"
    >
      <h2
        class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-red-600"
      >
        Education
      </h2>
      <Card
        data-aos="fade-left"
        data-aos-once="true"
        class="p-4 border border-red-200 rounded-lg transition-all duration-300 ease-in-out mb-4 hover:shadow-[0_5px_10px_rgba(240,128,128,0.15)] hover:border-red-300"
      >
        <CardContent class="flex items-center p-2">
          <div class="flex-shrink-0 self-center mr-3">
            <img src="/about/SLSU-logo.png" alt="SLSU-logo" class="w-12 h-12" />
          </div>
          <div class="flex-grow">
            <h3 class="font-semibold text-lg">
              Bachelor of Science in Computer Engineering
            </h3>
            <p class="text-sm font-light text-gray-500">
              Southern Luzon State University
            </p>
            <span class="text-sm text-gray-500 font-light block sm:hidden mt-1">
              2020 - 2024
            </span>
          </div>
          <div class="hidden sm:block">
            <span class="text-sm text-gray-500 font-light"> 2020 - 2024 </span>
          </div>
        </CardContent>
      </Card>
    </section>

    <!-- Skills Section -->
    <section data-aos="fade-up" data-aos-once="true">
      <h2
        class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-red-600"
      >
        Skills
      </h2>
      <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          data-aos="fade-right"
          :data-aos-delay="50 * index"
          data-aos-once="true"
          class="bg-gray-100 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 flex items-center hover:bg-gray-200 transition-colors"
        >
          <span
            class="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex items-center justify-center"
          >
            <i :class="[skill.icon, 'colored']"></i>
          </span>
          <span class="text-xs sm:text-sm font-light">{{ skill.name }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Card, CardContent } from "@/components/ui/card";
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
onMounted(() => {
  AOS.init({
    offset: 50,
    duration: 800,
    easing: "ease-out",
    once: true,
  });
});

const images = ref([
  {
    url: "/about/portrait-1.webp",
    alt: "Portrait 1",
  },
  {
    url: "/about/portrait-2.webp",
    alt: "Portrait 2",
  },
  {
    url: "/about/portrait-3.webp",
    alt: "Portrait 3",
  },
]);

const workExperiences = ref([
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
]);

const skills = ref([
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Java", icon: "devicon-java-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "C", icon: "devicon-c-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "Vue.js", icon: "devicon-vuejs-plain-wordmark" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
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
]);
</script>
