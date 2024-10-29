<template>
  <main
    class="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(90vh-88px)]"
  >
    <div class="text-center">
      <h1
        class="text-8xl font-black mb-4 flex items-center justify-center"
        aria-label="404 Error"
      >
        <span
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{ opacity: 1, x: 0 }"
          :transition="{ duration: 800 }"
        >
          4
        </span>
        <span
          class="w-20 h-20 bg-red-600 rounded-full text-white flex items-center justify-center mx-2"
          v-motion
          :initial="{ scale: 0, rotate: -180 }"
          :enter="{ scale: 1, rotate: 0 }"
          :transition="{ type: 'spring', stiffness: 100, delay: 300 }"
        >
          !
        </span>
        <span
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :enter="{ opacity: 1, x: 0 }"
          :transition="{ duration: 800 }"
        >
          4
        </span>
      </h1>
      <h2
        class="text-4xl font-bold mb-2"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800 }"
        :delay="800"
      >
        Oops! You're lost.
      </h2>
      <p
        class="text-xl mb-8 text-gray-600 font-light"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800 }"
        :delay="1000"
      >
        The page you are looking for was not found.
      </p>
      <div
        class="transition-transform duration-200 ease-in-out hover:scale-105"
      >
        <Button
          asChild
          class="bg-red-600 hover:bg-red-600/90 text-white font-semibold py-2 px-6 rounded-full gap-2"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="1200"
        >
          <RouterLink :to="{ name: 'Home' }">
            <HomeIcon class="h-4 w-4" />Back to Home
          </RouterLink>
        </Button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-vue-next";
</script>
