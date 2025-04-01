<template>
  <div class="app">
    <TheNavbar />
    <main class="main">
      <div class="container">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <p>© 2024 公司名称. 保留所有权利</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
</script>

<style lang="scss">
@use '@/assets/styles/variables.scss' as *;

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding: $spacing-xl 0;
  background-color: $bg-primary;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $spacing-md;
}

.footer {
  padding: $spacing-md 0;
  text-align: center;
  background-color: darken-color($bg-primary, 5%);
  color: $text-secondary;
}

/* 页面过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>