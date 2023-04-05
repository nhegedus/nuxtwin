<template>
  <div :class="{ 'dark': darkMode }">
    <NuxtPage></NuxtPage>
  </div>
</template>
<script setup>
  const darkMode = ref(true);
</script>
