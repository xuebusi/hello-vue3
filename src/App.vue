<template>
  <div class="app">
    <TheNavbar />
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <!-- 页脚内容 -->
    </footer>
  </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
</script>

<style lang="scss">
@use '@/assets/styles/variables.scss' as *;
@use '@/assets/styles/global.scss';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>