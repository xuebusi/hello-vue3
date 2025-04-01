<template>
    <div class="page-services">
        <h1>服务项目</h1>

        <el-steps direction="vertical" :active="activeStep" space="100px">
            <el-step v-for="(step, index) in steps" :key="index" :title="step.title">
                <template #description>
                    <p>{{ step.desc }}</p>
                    <el-image :src="`https://picsum.photos/800/400?random=${index}`" fit="cover"
                        style="width:100%; max-height:300px; margin-top:20px;" />
                </template>
            </el-step>
        </el-steps>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeStep = ref(1)

const steps = [
    {
        title: '需求分析',
        desc: '深入了解客户业务需求，进行系统化需求梳理和分析'
    },
    {
        title: '方案设计',
        desc: '基于需求分析结果，设计最优技术解决方案'
    },
    {
        title: '开发实施',
        desc: '按照设计方案进行系统开发和实施部署'
    },
    {
        title: '测试验收',
        desc: '全面系统测试和客户验收流程'
    },
    {
        title: '运维支持',
        desc: '提供长期运维支持和技术保障'
    }
]
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.page-services {
    padding: 0 10%;

    h1 {
        text-align: center;
        margin-bottom: $spacing-xl;
    }

    :deep(.el-step__description) {
        padding-right: 20%;
    }
}
</style>