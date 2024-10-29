<template>
  <main
    class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(90vh-88px)] text-center"
  >
    <!-- Greeting -->
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
      :delay="100"
      :key="$route.path + '1'"
      appear
      class="w-full sm:w-4/5 lg:w-3/4"
    >
      <h1
        class="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4"
      >
        Hi, I'm
        <span
          class="text-red-600"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{
            opacity: 1,
            transition: {
              duration: 600,
              ease: 'easeOut',
            },
          }"
          :delay="600"
        >
          Amarjeet Singh
        </span>
      </h1>
    </div>

    <!-- Title -->
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{
        opacity: 1,
        transition: {
          duration: 800,
          ease: 'easeOut',
        },
      }"
      :delay="1200"
      :key="$route.path + '2'"
      appear
      class="w-full"
    >
      <h2 class="text-6xl sm:text-7xl md:text-8xl font-black mb-8 text-nowrap">
        <span
          class="text-red-600"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              duration: 800,
              ease: 'easeOut',
            },
          }"
          :delay="700"
        >
          Web
        </span>
        <span
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: {
              duration: 600,
              ease: 'easeOut',
            },
          }"
          :delay="1600"
        >
          Developer
        </span>
      </h2>
    </div>

    <!-- Buttons -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="2200"
      class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
    >
      <Button
        @click="sendEmail"
        variant="outline"
        class="px-4 sm:px-6 py-2 text-xs sm:text-sm font-light tracking-wide w-full sm:w-auto"
        v-motion
        :initial="{ x: -50 }"
        :enter="{ x: 0 }"
        :delay="2400"
      >
        <Mail class="mr-2 h-3 sm:h-4 w-3 sm:w-4" />
        <span class="hidden sm:inline">amarjeet060730@gmail.com</span>
        <span class="sm:hidden">Email Me</span>
      </Button>
      <Button
        @click="previewPDF"
        class="px-4 sm:px-6 py-2 text-xs sm:text-sm font-light tracking-wide bg-red-600 hover:bg-red-600/90 w-full sm:w-auto"
        v-motion
        :initial="{ x: 50 }"
        :enter="{ x: 0 }"
        :delay="2600"
      >
        Download CV
      </Button>
    </div>

    <!-- Contact Circle -->
    <ContactCircle
      class="fixed right-4 sm:right-8 lg:right-10 bottom-8 sm:bottom-10 lg:bottom-12 z-50"
    />
  </main>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-vue-next";
import { useRoute } from "vue-router";
import ContactCircle from "./components/ContactCircle.vue";

const route = useRoute();

const sendEmail = () => {
  window.location.href = "mailto:amarjeet060730@gmail.com";
};

const previewPDF = () => {
  const pdfPath = `${import.meta.env.BASE_URL}resume/Amarjeet-Singh-Resume.pdf`;
  window.open(pdfPath, "_blank");
};
</script>
