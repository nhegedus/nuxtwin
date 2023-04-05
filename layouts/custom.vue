<template>
    <div class="flex flex-col w-full h-screen overflow-hidden bg-black">
      <header class="w-full h-16 bg-gray-800">
        <nav class="flex items-center justify-center w-full h-full text-center text-black">
          <h2 class="text-2xl font-bold text-white">NuxtWin</h2>
        </nav>
      </header>
      <main class="flex-grow w-full h-full p-4 mx-auto max-w-7xl">
        <slot />
      </main>
      <footer class="flex items-center justify-center w-full h-16 text-black">
          <p class="text-gray-700">
          </p>
      </footer>
    </div>
  </template>