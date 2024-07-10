<template>
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-normal text-gray11 mb-8 text-center items-center">Projects</h1>
      <h2 class="text-4xl font-bold text-red11 mb-12 text-center items-center">My Previous Works</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            image: '/projects/pay-per-print.jpg',
            tags: ['Vue.js', 'Tailwind CSS', 'Radix Vue'],  
        },
        {
            id: 2,
            title: 'Pay-per-Print',
            image: '/projects/pay-per-print.jpg',
            tags: ['Python', 'PyQt'],  
        }
    ])

</script>