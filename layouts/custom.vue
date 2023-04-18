<template>
    <div class="flex flex-col w-full h-screen overflow-hidden bg-white dark:bg-black">
      <header class="w-full h-16 bg-gray-800">
        <nav class="flex items-center justify-center w-full h-full text-center text-black">
          <h2 class="text-2xl font-bold text-white">NuxtWin</h2>
          <button
            class="h-10 px-6 font-semibold text-right rounded-md text-white"
            @click="toggleDarkMode"
          >
            <Icon v-if="isDark" name="heroicons-outline:sun" />
            <Icon v-else name="heroicons-outline:moon" />
            {{ buttonLabel }}
          </button>
        </nav>
      </header>
      <main class="flex-grow h-full p-4 mx-auto max-w-7xl">
        <slot />
      </main>
      <footer class="flex items-center justify-center w-full h-16 text-black">
          <p class="text-gray-700">
          </p>
      </footer>
    </div>
  </template>

  <script lang="ts" setup>
    const isDark = ref(true);

    onMounted(() => {
      setTheme();
    });
    
    const toggleDarkMode = () => {
      isDark.value = !isDark.value
      setTheme();
    }
    
    const buttonLabel = computed(() => {
      return isDark.value ? 'Light' : 'Dark';
    });

    const setTheme = () => {
      if (isDark.value) {
        document.documentElement.setAttribute('data-theme', 'dark');
        const el = document.getElementById('container');
        el.classList.add('dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        const el = document.getElementById('container');
        el.classList.remove('dark');
      }
    }
  </script>