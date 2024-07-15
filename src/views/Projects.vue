<template>
    <div class="container mx-auto px-4 mt-4 sm:mt-6 lg:mt-8">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-normal text-gray11 mb-4 text-center">Projects</h2>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-red11 mb-8 sm:mb-10 md:mb-12 text-center">My Previous Works</h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-9">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import ProjectCard from '../components/ProjectCard.vue'

    const projects = ref([
        {
            id: 1,
            title: 'Web Portfolio',
            image: '/projects/ajs-dev.jpg',
            tags: ['Vue.js', 'Tailwind CSS', 'Radix Vue'],
            link: 'https://github.com/amarjeeettt/ajs.dev',  
        },
        {
            id: 2,
            title: 'Pay-per-Print',
            image: '/projects/pay-per-print.jpg',
            tags: ['Python', 'PyQt', 'SQLite'],
            link: 'https://github.com/amarjeeettt/kiosk',    
        },
        {
            id: 3,
            title: 'CS50\'s Stock Finance Simulator',
            image: '/projects/finance.jpg',
            tags: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
            link: 'https://github.com/amarjeeettt/CS50X-finance',  
        }
    ])

</script>