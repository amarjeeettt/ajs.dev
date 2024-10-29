<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300 ease-in-out container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center bg-gradient-to-r from-white/80 via-white/50 to-white/80 dark:from-gray-950/80 dark:via-gray-950/50 dark:to-gray-950/80 backdrop-blur-md"
  >
    <!-- Logo -->
    <div
      v-motion
      :initial="{ opacity: 0, y: -10 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 800,
          ease: 'easeOut',
        },
      }"
      :delay="100"
      class="text-2xl font-bold"
    >
      <RouterLink :to="{ name: 'Home' }" class="inline-flex tracking-tight">
        <span>ajs</span>
        <span class="text-red-600">.dev</span>
      </RouterLink>
    </div>

    <!-- Desktop Navigation -->
    <nav>
      <ul class="hidden lg:flex gap-6 text-sm font-medium">
        <li
          v-for="(link, index) in navLinks"
          :key="link.name"
          v-motion
          :initial="{ opacity: 0, y: -10 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 800,
              ease: 'easeOut',
            },
          }"
          :delay="200 + index * 100"
          class="relative"
        >
          <RouterLink
            :to="{ name: link.name }"
            class="transition-colors duration-200 hover:text-red-600"
            :class="[
              isActiveRoute(link.name) ? 'text-red-600' : '',
              'relative group',
            ]"
          >
            {{ link.text }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"
              :class="{ 'w-full': isActiveRoute(link.name) }"
            ></span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile Navigation -->
    <div class="relative lg:hidden">
      <Popover v-model:open="isOpen">
        <PopoverTrigger as-child>
          <div
            v-motion
            :initial="{ opacity: 0, y: -10 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 800,
                ease: 'easeOut',
              },
            }"
            :delay="500"
          >
            <Button
              variant="ghost"
              size="icon"
              class="hover:bg-gray-100 dark:hover:bg-gray-800 relative"
            >
              <div
                class="relative w-5 h-5"
                :style="{
                  transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
                  transition: 'transform 0.3s ease',
                }"
              >
                <Menu
                  class="h-5 w-5 absolute inset-0 transition-opacity duration-300"
                  :class="{ 'opacity-0': isOpen, 'opacity-100': !isOpen }"
                />
                <X
                  class="h-5 w-5 absolute inset-0 transition-opacity duration-300"
                  :class="{ 'opacity-100': isOpen, 'opacity-0': !isOpen }"
                />
              </div>
              <span class="sr-only">{{
                isOpen ? "Close menu" : "Open menu"
              }}</span>
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent
          v-motion
          :initial="{ opacity: 0, scale: 0.95, y: -20 }"
          :enter="{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 300,
              ease: 'easeOut',
            },
          }"
          :leave="{
            opacity: 0,
            scale: 0.95,
            y: -20,
            transition: {
              duration: 200,
              ease: 'easeIn',
            },
          }"
          class="w-56 p-2 border-none shadow-lg rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg"
          align="end"
        >
          <div
            class="flex flex-col space-y-1"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{
              opacity: 1,
              transition: {
                duration: 200,
                delay: 100,
              },
            }"
          >
            <RouterLink
              v-for="(link, index) in navLinks"
              :key="link.name"
              :to="{ name: link.name }"
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :enter="{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 300,
                  delay: index * 100,
                },
              }"
              class="relative block w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-red-600"
              :class="[
                isActiveRoute(link.name) &&
                  'bg-gray-50 dark:bg-gray-800/30 text-red-600',
              ]"
            >
              {{ link.text }}
            </RouterLink>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  </header>
</template>

<script setup>
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-vue-next";
import { RouterLink, useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const isOpen = ref(false);

const navLinks = [
  { name: "Home", text: "Home" },
  { name: "About", text: "About" },
  { name: "Projects", text: "Projects" },
];

const isActiveRoute = (routeName) => {
  return route.name === routeName;
};

watch(
  () => route.name,
  () => {
    isOpen.value = false;
  }
);
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.menu-icon {
  transform-origin: center;
}
</style>
