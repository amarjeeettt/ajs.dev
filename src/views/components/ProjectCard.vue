<template>
  <Card
    class="overflow-hidden transition-all duration-300 shadow-lg bg-white flex flex-col h-full transform hover:scale-105 hover:shadow-xl"
  >
    <CardContent class="p-0 flex-1 flex flex-col">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full md:w-auto h-lg md:h-auto object-scale-down"
        loading="lazy"
      />
      <div class="p-6 flex-1">
        <h3 class="text-xl font-bold mb-2 text-gray-800">
          {{ project.title }}
        </h3>
        <div class="flex flex-wrap gap-2 mb-4">
          <Badge
            variant="secondary"
            v-for="tag in project.tags"
            :key="tag"
            class="text-xs font-normal rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
          >
            {{ tag }}
          </Badge>
        </div>
      </div>
    </CardContent>
    <CardFooter class="p-x-6 flex justify-between items-center">
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-gray-600 transition-colors"
        :aria-label="`View ${project.title} on GitHub`"
      >
        <span class="text-3xl"><i class="devicon-github-original"></i></span>
      </a>
      <a
        href="#"
        class="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1"
      >
        Learn More <ArrowRight class="h-4 w-4" />
      </a>
    </CardFooter>
  </Card>
</template>

<script setup>
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-vue-next";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
