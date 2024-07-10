<template>
    <header>
        <nav class="flex justify-between items-center py-6">
            <div class="text-4xl tracking-wider text-mauve12 font-bold">
                <RouterLink :to="{ name: 'Home' }">ajs<span class="text-red11">.dev</span></RouterLink>
            </div>
            <ul class="hidden lg:flex space-x-14 text-gray11 bg-white ">
                <li><RouterLink :to="{ name: 'Home' }">Home</RouterLink></li>
                <li><RouterLink :to="{ name: 'About' }">About</RouterLink></li>
                <li><RouterLink :to="{ name: 'Projects' }">Projects</RouterLink></li>
                <li><RouterLink :to="{ name: 'Contact' }">Contact</RouterLink></li>
            </ul>

            <div class="relative lg:hidden">
                <PopoverRoot>
                  <PopoverTrigger 
                    class="flex items-center justify-center rounded-lg text-mauve12"
                    aria-label="Menu"
                  >
                    <ion-icon name="menu-outline" class="cursor-pointer text-4xl text-mauve12 transition-colors hover:text-red11"></ion-icon>
                  </PopoverTrigger>
                  <PopoverPortal>`
                    <PopoverContent 
                        side="right" 
                        :side-offset="15"
                        class="absolute right-0 z-10 mt-4 w-40 origin-top-right overflow-auto rounded-xl bg-white p-2 text-base shadow-md focus:outline-none"
                    >
                        <ul class="grid gap-2">
                            <li><RouterLink :to="{ name: 'Home' }" class="block w-full h-full px-4 py-2">Home</RouterLink></li>
                            <li><RouterLink :to="{ name: 'About' }" class="block w-full h-full px-4 py-2">About</RouterLink></li>
                            <li><RouterLink :to="{ name: 'Projects' }" class="block w-full h-full px-4 py-2">Projects</RouterLink></li>
                            <li><RouterLink :to="{ name: 'Contact' }" class="block w-full h-full px-4 py-2">Contact</RouterLink></li>
                        </ul>
                    </PopoverContent>
                  </PopoverPortal>
                </PopoverRoot>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { RouterLink } from "vue-router"
    import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'
</script>