<template>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/products">产品中心</el-menu-item>
      <el-menu-item index="/services">服务项目</el-menu-item>
      <el-menu-item index="/news">新闻动态</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>
    </el-menu>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const activeIndex = ref(route.path)
  </script>
  
  <style scoped>
  .el-menu {
    padding: 0 20px;
  }
  </style>