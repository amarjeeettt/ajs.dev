<template>
  <main class="max-w-5xl mx-auto min-h-screen text-stone-800 font-geist">
    <NavBar />
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./views/components/NavBar.vue";
</script>
