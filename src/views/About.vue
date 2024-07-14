<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col lg:flex-row lg:space-x-8">
      <!-- Left column (Profile) - Increased width -->
      <div class="lg:w-2/5 mb-8 lg:mb-0">
        <div class="max-w-md mx-auto border-4 border-red-500 rounded-xl p-8 flex flex-col items-center">
          <img src="/about/About-image.jpg" alt="Amarjeet Singh" class="w-full mb-6 rounded-lg">
          <h2 class="text-4xl font-bold text-red-500 mb-6 text-center">Amarjeet<br/>Singh</h2>
          <div class="flex space-x-8">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer">
              <ion-icon :name="link.icon" class="text-3xl"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      <!-- Right column (Content) -->
      <div class="lg:w-3/5">
        <!-- About section -->
        <section class="mb-8">
          <h3 class="text-xl font-bold mb-3">About</h3>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore blanditiis, adipisci voluptatum explicabo quo iste facilis quos.
            Placeat distinctio aliquid repellendus sint, eligendi illum quo beatae, quasi officia, sapiente dolor optio cupiditate cumque. Quos
            dolor, fuga obcaecati pariatur possimus reprehenderit esse,
          </p>
        </section>

        <!-- Education section -->
        <section class="mb-8">
          <h3 class="text-xl font-bold mb-3">Education</h3>
          <div class="flex items-center">
            <img src="/about/SLSU-logo.png" alt="SLSU-logo" class="w-16 h-16 mr-4 flex-shrink-0">
            <div class="flex-grow">
              <div class="flex flex-col sm:flex-row sm:justify-between">
                <h4 class="font-bold">Bachelor of Science in Computer Engineering</h4>
                <p class="text-gray-600 sm:ml-2">2020 - 2024</p>
              </div>
              <p class="text-gray-600">Southern Luzon State University</p>
            </div>
          </div>
        </section>

        <!-- Work Experience section -->
        <section class="mb-8">
          <h3 class="text-xl font-bold mb-3">Work Experience</h3>
          <div class="flex items-center">
            <img src="/about/iBuild-logo.jpg" alt="iBuild-logo" class="w-16 h-16 mr-4 flex-shrink-0 border-2 border-mauve12 rounded-full">
            <div class="flex-grow">
              <div class="flex flex-col sm:flex-row sm:justify-between">
                <h4 class="font-bold">Web Developer Intern</h4>
                <p class="text-gray-600 sm:ml-2">Feb - Mar 2024</p>
              </div>
              <p class="text-gray-600">iBuild.PH Web Solutions and Services</p>
            </div>
          </div>
        </section>

        <!-- Skills & Expertise section -->
        <section class="mb-8">
          <h3 class="text-xl font-bold mb-3">Skills & Expertise</h3>
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            <div v-for="skill in skills" :key="skill.type" class="bg-white border-2 border-red-500 rounded-lg px-2 py-2 flex flex-col items-center space-y-1">
              <span class="text-lg"><i :class="skill.icon"></i></span>
              <span class="text-xs font-medium">{{ skill.name }}</span>
              <div class="bg-red-500 rounded-full h-1 w-8"></div>
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