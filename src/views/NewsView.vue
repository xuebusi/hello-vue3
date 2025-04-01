<template>
    <div class="page-news">
        <h1>新闻动态</h1>

        <el-timeline>
            <el-timeline-item v-for="(news, index) in newsList" :key="index" :timestamp="news.date" placement="top">
                <el-card>
                    <h3>{{ news.title }}</h3>
                    <p>{{ news.content }}</p>
                    <el-button type="text" @click="showDetail(news)">阅读全文</el-button>
                </el-card>
            </el-timeline-item>
        </el-timeline>

        <el-pagination layout="prev, pager, next" :total="50" :page-size="5" @current-change="handlePageChange" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const newsList = ref([
    {
        id: 1,
        title: '公司荣获2023年度科技创新奖',
        date: '2023-12-15',
        content: '在近日举办的科技创新大会上，我公司凭借自主研发的智能分析系统荣获年度科技创新大奖...'
    },
    {
        id: 2,
        title: '新产品发布会圆满成功',
        date: '2023-11-20',
        content: '昨日，我公司成功举办了新一代产品发布会，吸引了行业内外众多专业人士参加...'
    },
    {
        id: 3,
        title: '与某大型企业达成战略合作',
        date: '2023-10-08',
        content: '近日，我公司与某知名企业正式签署战略合作协议，双方将在多个领域展开深度合作...'
    }
])

const showDetail = (news) => {
    // 实际项目中这里可以跳转到详情页
    ElMessage.info(`查看新闻: ${news.title}`)
}

const handlePageChange = (page) => {
    console.log('切换页码:', page)
    // 实际项目中这里可以加载对应页的数据
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.page-news {
    max-width: 800px;
    margin: 0 auto;

    h1 {
        text-align: center;
        margin-bottom: $spacing-xl;
    }

    .el-timeline {
        padding-left: 0;
    }

    .el-pagination {
        margin-top: $spacing-xl;
        justify-content: center;
    }
}
</style>