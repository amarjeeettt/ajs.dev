<template>
  <div class="py-16 sm:py-24 md:py-36 lg:py-44 xl:py-52">
    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray11 mb-2 sm:mb-3 md:mb-4">Hello, I'm</h1>
    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-red11 tracking-wider mb-4 sm:mb-6">Amarjeet C. Singh</h1>
    <p class="max-w-5xl text-sm sm:text-base md:text-lg font-normal text-left text-gray11 leading-relaxed mb-6 sm:mb-8">
      {{ description }}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs sm:text-sm font-bold">
      <div @click="previewPDF" class="cursor-pointer px-6 sm:px-8 md:px-10 py-3 sm:py-4 border sm:border-2 border-red11 text-red11 rounded-full text-center mb-4 sm:mb-0">DOWNLOAD CV</div>
      <div class="hidden sm:flex sm:flex-row gap-4 sm:gap-6">
        <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 border sm:border-2 border-gray11 text-gray11 rounded-full">
          <ion-icon :name="link.icon" class="text-lg sm:text-xl"></ion-icon>
          <span>{{ link.name }}</span>
        </a>
      </div>
      <div class="flex sm:hidden gap-6 font-bold justify-center">
        <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center text-gray11 hover:text-mauve12">
          <ion-icon :name="link.icon" class="text-3xl sm:text-4xl"></ion-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from 'vue'

    const description = ref(`Recent graduate with a passion for web development, ready to make my mark in the digital world.
                            Equiped with a strong foundation in HTML, CSS and JavaScript. I'm eager to create a responsive
                            and user-friendly websites. I'm constantly learning and exploring new technologies to stay up-to-date.`)

    const socialLinks = ref([
        { name: 'linkedin', url: 'https://www.linkedin.com/in/amarjeet-singh-8a768a202', icon: 'logo-linkedin'},
        { name: 'github', url: 'https://github.com/amarjeeettt', icon: 'logo-github'},
        { name: 'facebook', url: 'https://www.facebook.com/profile.php?id=100002578543889&mibextid=ZbWKwL', icon: 'logo-facebook'},
    ])

    const previewPDF = () => {
      const pdfPath = `${import.meta.env.BASE_URL}Singh, Amarjeet C.pdf`
      window.open(pdfPath, '_blank')
    }

</script>