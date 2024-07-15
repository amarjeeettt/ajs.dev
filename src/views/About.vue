<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col lg:flex-row lg:space-x-8">
      <!-- Left column (Profile) - Increased width -->
      <div class="lg:w-2/5 mb-8 lg:mb-0">
        <div class="max-w-sm sm:max-w-md mx-auto border-4 border-red11 rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col items-center">
          <img src="/about/About-image.jpg" alt="Amarjeet Singh" class="w-full max-w-xs sm:max-w-sm mb-4 sm:mb-6 rounded-lg" loading="lazy">
          <h2 class="text-3xl sm:text-4xl font-bold text-red11 mb-4 sm:mb-6 text-center">Amarjeet<br/>Singh</h2>
          <div class="flex space-x-6 sm:space-x-8">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer" class="hover:text-red11 transition-colors duration-200">
              <ion-icon :name="link.icon" class="text-2xl sm:text-3xl"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      <!-- Right column (Content) -->
      <div class="lg:w-3/5">
        <!-- About section -->
        <section class="mb-8">
          <h2 class="text-lg text-mauve12 font-bold mb-2">About</h2>
          <p class="text-gray11 text-sm">
            Hello, I'm Amarjeet, a recent graduate from the Philippines with a Bachelor's Degree in Computer Engineering.
            As an aspiring backend developer, I'm excited to start on my journey in the world of software development.
            <br/><br/>
            Throughout my professional and personal life, I strive to live by the following motto:
            <br/><br/>
            <i>"Be the best version of yourself in anything that you do. You don't have to live anybody else's story."</i> - Stephen Curry
          </p>
        </section>

        <!-- Education section -->
        <section class="mb-8">
          <h2 class="text-lg text-mauve12 font-bold mb-2">Education</h2>
          <div class="flex items-center">
            <img src="/about/SLSU-logo.png" alt="SLSU-logo" class="w-12 h-12 mr-3 flex-shrink-0">
            <div class="flex-grow">
              <div class="flex flex-col sm:flex-row sm:justify-between">
                <h4 class="font-bold text-base text-mauve12">Bachelor of Science in Computer Engineering</h4>
                <p class="text-gray11 text-xs sm:ml-2">2020 - 2024</p>
              </div>
              <p class="text-gray11 text-xs">Southern Luzon State University</p>
            </div>
          </div>
        </section>

        <!-- Work Experience section -->
        <section class="mb-8">
          <h2 class="text-lg text-mauve12 font-bold mb-2">Work Experience</h2>
          <div class="flex items-center">
            <img src="/about/iBuild-logo.jpg" alt="iBuild-logo" class="w-12 h-12 mr-3 flex-shrink-0 border-2 border-mauve12 rounded-full">
            <div class="flex-grow">
              <div class="flex flex-col sm:flex-row sm:justify-between">
                <h4 class="text-mauve12 text-base font-bold">Web Developer Intern</h4>
                <p class="text-gray11 text-xs sm:ml-2">Feb - Mar 2024</p>
              </div>
              <p class="text-gray11 text-xs">iBuild.PH Web Solutions and Services</p>
            </div>
          </div>
        </section>  

        <!-- Skills & Expertise section -->
        <section class="mb-8">
          <h2 class="text-lg font-bold mb-3">Skills & Expertise</h2>
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            <div v-for="skill in skills" :key="skill.type" class="bg-white border-2 border-gray11 rounded-lg px-2 py-2 flex flex-col items-center space-y-1">
              <span class="text-base text-mauve12"><i :class="skill.icon"></i></span>
              <span class="text-xs text-gray11 font-medium">{{ skill.name }}</span>
              <div class="bg-gray11 rounded-full h-0.5 w-6"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from 'vue'

    const skills = ref([
      // Programming Languages
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'C++', icon: 'devicon-cplusplus-plain' },
      { name: 'PHP', icon: 'devicon-php-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },

      // Web Development
      { name: 'HTML5', icon: 'devicon-html5-plain' },
      { name: 'CSS', icon: 'devicon-css3-plain' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
      { name: 'Flask', icon: 'devicon-flask-original' },

      // Tools
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'VS Code', icon: 'devicon-vscode-plain' },
      { name: 'Figma', icon: 'devicon-figma-plain' },

      // Databases
      { name: 'SQLite', icon: 'devicon-sqlite-plain' },
      { name: 'MySQL', icon: 'devicon-mysql-original' },
    ])

    const socialLinks = ref([
        { name: 'facebook', url: 'https://www.facebook.com/profile.php?id=100002578543889&mibextid=ZbWKwL', icon: 'logo-facebook'},
        { name: 'instagram', url: 'https://www.instagram.com/amarjeeettt_/', icon: 'logo-instagram'},
        { name: 'twitter', url: 'https://x.com/amarjeeettt_', icon: 'logo-twitter'},
    ])

</script>