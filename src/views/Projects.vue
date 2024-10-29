<template>
  <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 800,
          ease: 'easeOut',
        },
      }"
      :delay="200"
    >
      <h2
        class="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600 mb-2 sm:mb-3 lg:mb-4 text-center"
      >
        Projects
      </h2>
    </div>
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 800,
          ease: 'easeOut',
        },
      }"
      :delay="400"
    >
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-600 mb-8 sm:mb-10 lg:mb-12 text-center"
      >
        My Previous Works
      </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        v-motion
        :initial="{
          opacity: 0,
          x: index % 2 === 0 ? -40 : 40,
          scale: 0.9,
        }"
        :enter="{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 800,
            ease: 'easeOut',
          },
        }"
        :delay="600 + index * 200"
        class="w-full"
      >
        <ProjectCard :project="project" class="h-full" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "./components/ProjectCard.vue";

const projects = ref([
  {
    id: 1,
    title: "Pay-per-Print: Kiosk Desktop Application",
    image: "/projects/pay-per-print.jpg",
    tags: ["Python", "PyQt", "SQLite"],
    link: "https://github.com/amarjeeettt/kiosk",
  },
  {
    id: 2,
    title: "CS50X's Stock Finance Simulator",
    image: "/projects/finance.jpg",
    tags: ["Flask", "HTML", "CSS", "Jinja", "SQLite"],
    link: "https://github.com/amarjeeettt/CS50X-finance",
  },
]);
</script>
