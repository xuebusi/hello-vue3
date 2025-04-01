<template>
    <div class="page-home">
      <el-card shadow="hover">
        <template #header>
          <h2>欢迎来到我们的网站</h2>
        </template>
        <p>这里是首页内容区域，您可以添加轮播图、特色服务等内容</p>
        <el-button type="primary">了解更多</el-button>
      </el-card>
      
      <div class="feature-section">
        <h3 class="section-title">核心特色</h3>
        <el-row :gutter="20">
          <el-col :span="8" v-for="i in 3" :key="i">
            <el-card shadow="never">
              <h4>特色服务 {{ i }}</h4>
              <p>这里是特色服务的简要描述内容</p>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </template>
  
  <script setup>
  // 可以在这里添加组件逻辑
  </script>
  
  <style scoped lang="scss">
  @use '@/assets/styles/variables.scss' as *;
  
  .page-home {
    .el-card {
      margin-bottom: $spacing-xl;
    }
    
    .feature-section {
      margin-top: $spacing-xl;
      
      .section-title {
        margin-bottom: $spacing-lg;
        color: $text-primary;
        font-weight: normal;
      }
    }
  }
  </style>