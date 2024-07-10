<template>
    <div class="p-4 sm:p-6 md:p-8 mt-10 sm:mt-16 md:mt-24">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-red11 mb-4 text-center items-center">Contact</h1>
      <p class="text-gray11 mb-8 sm:mb-14 text-center text-sm sm:text-base md:text-lg font-normal max-w-2xl mx-auto">
        {{ description }}
      </p>
      <div class="space-y-4 sm:space-y-6 md:space-y-8 max-w-xl mx-auto">
        <div v-for="item in contactItems" :key="item.type"
             class="flex items-center space-x-2 sm:space-x-4 md:space-x-8 border-2 border-red11 rounded-full py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-10">
          <div class="flex justify-center items-center w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-red11 rounded-full">
            <ion-icon :name="item.icon" class="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white"></ion-icon>
          </div>
          <span class="flex-grow">
            <div class="text-xs md:text-sm text-gray11">{{ item.label }}</div>
            <div class="text-sm sm:text-base md:text-lg text-mauve12">{{ item.value }}</div>
          </span>
          <span v-if="item.type === 'phone'" @click.stop="handleCopy" class="flex justify-center items-center">
            <ion-icon :name="item.actionIcon" class="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-mauve12 cursor-pointer"></ion-icon>
          </span>
          <a v-else :href="item.actionLink" target="_blank" rel="noopener noreferrer" class="flex justify-center items-center">
            <ion-icon :name="item.actionIcon" class="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-mauve12 cursor-pointer"></ion-icon>
          </a>
        </div>
      </div>
      <div v-show="showCopied" class="w-40 mx-auto text-center text-xs md:text-text-base p-2 mt-12 rounded-full bg-mauve12 text-white">
        Copied to Clipboard
      </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const showCopied = ref(false)
    const description = ref(`Wheter you have a question, a project idea, or just want to say hello, feel free to reach out! I'm always open to new opportunities
      and collaborations. You can contact me through the following:`)
    const contactItems = ref([
        { type: 'email', icon: 'mail-outline', label: 'E-Mail', value: 'amarjeet060730@gmail.com', actionIcon: 'send-outline', actionLink: 'mailto:amarjeet060730@gmail.com' },
        { type: 'facebook', icon: 'chatbubble-ellipses-outline', label: 'Facebook Messenger', value: 'Amarjeet Singh', actionIcon: 'send-outline', actionLink: 'https://m.me/100002578543889'  },
        { type: 'phone', icon: 'call-outline', label: 'Mobile Number', value: '(+63) 946 977 9529', actionIcon: 'copy-outline', actionLink: '#'  }
    ])

    const handleCopy = () => {
      const phoneNumber = "09469779529"
      navigator.clipboard.writeText(phoneNumber).then(() => {
        showCopied.value = true
        setTimeout(() => {
        showCopied.value = false
        }, 2000)
      }).catch(err => {
        console.error('Failed to copy text: ' + err.message)
      })
    }
</script>