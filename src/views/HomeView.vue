<template>
  <div class="page-home">
    <!-- 轮播图 -->
    <el-carousel height="400px" indicator-position="outside">
      <el-carousel-item v-for="item in 3" :key="item">
        <div class="carousel-item"
          :style="{ background: `url(https://picsum.photos/1200/400?random=${item}) center/cover` }">
          <h2 class="carousel-title">欢迎标题 {{ item }}</h2>
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- 特色服务 -->
    <div class="section">
      <h2 class="section-title"><el-icon>
          <Star />
        </el-icon> 核心服务</h2>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" v-for="(service, index) in services" :key="index">
          <el-card shadow="hover">
            <el-icon size="40" :color="service.color">
              <component :is="service.icon" />
            </el-icon>
            <h3>{{ service.title }}</h3>
            <p>{{ service.desc }}</p>
            <el-button type="primary" text>了解更多</el-button>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 客户评价 -->
    <div class="section bg-gray">
      <h2 class="section-title"><el-icon>
          <ChatLineRound />
        </el-icon> 客户评价</h2>
      <el-carousel :interval="5000" height="200px" arrow="never">
        <el-carousel-item v-for="item in 3" :key="item">
          <div class="testimonial">
            <p>"非常专业的服务团队，解决了我们的核心问题，强烈推荐！"</p>
            <div class="client">— 某科技公司CEO</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { Star, ChatLineRound, TrendCharts, Monitor, Setting } from '@element-plus/icons-vue'

const services = [
  { icon: TrendCharts, title: '数据分析', desc: '专业的大数据分析服务', color: '#409EFF' },
  { icon: Monitor, title: '系统开发', desc: '定制化企业级系统开发', color: '#67C23A' },
  { icon: Setting, title: 'IT咨询', desc: '资深专家技术咨询服务', color: '#E6A23C' }
]
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.page-home {
  .carousel-item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  .section {
    padding: $spacing-xl 0;

    &-title {
      text-align: center;
      margin-bottom: $spacing-xl;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  }

  .bg-gray {
    background-color: lighten-color($bg-primary, 5%);
  }

  .testimonial {
    text-align: center;
    padding: 0 20%;
    font-size: 18px;
    font-style: italic;

    .client {
      margin-top: $spacing-md;
      font-weight: bold;
    }
  }
}
</style>