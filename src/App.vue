<template>
    <div class="flex flex-col max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-geist">
        <SiteNavigation />
        <RouterView />
    </div>
    
</template>

<script setup>
    import { RouterView } from "vue-router"
    import SiteNavigation from "./components/SiteNavigation.vue"
</script>