<template>
    <div class="bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-lg">
        <!-- Image section -->
        <img :src="project.image" :alt="project.title" class="w-full md:w-auto h-lg md:h-auto object-scale-down" loading="lazy">
        <!-- Content section -->
        <div class="p-4 flex justify-between items-center">
            <!-- Project details -->
            <div>
                <h3 class="text-2xl font-bold mb-2 text-mauve12">{{ project.title }}</h3>
                <div class="flex flex-wrap gap-1">
                    <span 
                        v-for="tag in project.tags"     
                        :key="tag" 
                        class="px-3 py-1 bg-gray-300 text-xs text-white rounded-full"
                    >
                        {{ tag }}
                    </span>
                </div>
            </div>

            <!-- GitHub link -->
            <a href="#" class="text-gray-600 hover:text-gray-900">
                <ion-icon name="logo-github" class="text-4xl"></ion-icon>
            </a>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        project: {
            type: Object,
            required: true,
        }
    })
</script>