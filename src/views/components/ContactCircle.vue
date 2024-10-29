<template>
  <div
    v-motion
    :initial="{ opacity: 0, scale: 0 }"
    :enter="{
      opacity: 1,
      scale: 1,
      transition: {
        duration: 600,
        ease: 'easeOut',
      },
    }"
    :delay="3000"
    class="flex flex-col items-center space-y-4 p-4"
  >
    <div v-motion-slide-visible class="flex flex-col space-y-4">
      <template v-if="isOpen">
        <a
          v-for="(contact, index) in contacts"
          :key="contact.name"
          :href="contact.url"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
          :aria-label="`Visit ${contact.name}`"
          v-motion
          :initial="{
            opacity: 0,
            y: 20,
            scale: 0.5,
            rotate: -180,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 15,
            },
          }"
          :leave="{
            opacity: 0,
            y: 20,
            scale: 0.5,
            rotate: 180,
            transition: {
              duration: 200,
            },
          }"
          :visible="{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
          }"
          :delay="index * 100"
        >
          <component :is="contact.icon" class="w-5 h-5 text-gray-600" />
        </a>
      </template>
    </div>
    <button
      @click="toggleOpen"
      class="w-12 h-12 bg-gradient-to-br from-red-600 to-red-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none"
      aria-label="Toggle contact links"
      v-motion
      :initial="{ scale: 0.8, rotate: -180 }"
      :enter="{
        scale: 1,
        rotate: 0,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 17,
        },
      }"
      :leave="{
        scale: 0.8,
        rotate: -180,
        transition: {
          duration: 300,
        },
      }"
      :hover="{
        scale: 1.1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 17,
        },
      }"
      :tap="{ scale: 0.95 }"
      :delay="3000 + 600"
    >
      <XIcon v-if="isOpen" class="w-6 h-6 text-white" />
      <UserIcon v-else class="w-6 h-6 text-white" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { UserIcon, XIcon, GithubIcon, LinkedinIcon } from "lucide-vue-next";

const contacts = [
  { name: "GitHub", icon: GithubIcon, url: "https://github.com/amarjeeettt" },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/amarjeet-singh-8a768a202/",
  },
];

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>
