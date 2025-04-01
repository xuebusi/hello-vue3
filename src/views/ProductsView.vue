<template>
    <div class="page-products">
        <el-page-header title="返回" @back="$router.go(-1)">
            <template #content>
                <h1>产品中心</h1>
            </template>
        </el-page-header>

        <el-tabs v-model="activeTab" class="product-tabs">
            <el-tab-pane v-for="category in categories" :key="category.id" :label="category.name">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="12" :md="8" v-for="product in category.products" :key="product.id">
                        <el-card :body-style="{ padding: '0px' }">
                            <img :src="`https://picsum.photos/400/300?random=${product.id}`" class="product-image">
                            <div style="padding: 14px;">
                                <h3>{{ product.name }}</h3>
                                <div class="product-desc">{{ product.desc }}</div>
                                <div class="product-footer">
                                    <span class="price">¥{{ product.price }}</span>
                                    <el-button type="primary" size="small">立即购买</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('1')

const categories = [
    {
        id: '1',
        name: '软件产品',
        products: [
            { id: 1, name: '企业ERP系统', desc: '集成化企业管理解决方案', price: 98000 },
            { id: 2, name: 'CRM客户管理', desc: '客户关系管理专业软件', price: 68000 },
            { id: 3, name: 'OA办公系统', desc: '智能化协同办公平台', price: 48000 }
        ]
    },
    {
        id: '2',
        name: '硬件产品',
        products: [
            { id: 4, name: '智能终端', desc: '工业级智能终端设备', price: 12800 },
            { id: 5, name: '数据采集器', desc: '高精度数据采集设备', price: 9800 }
        ]
    }
]
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.page-products {
    .product-tabs {
        margin-top: $spacing-xl;
    }

    .product-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .product-desc {
        color: $text-secondary;
        margin: $spacing-sm 0;
        font-size: 14px;
        height: 40px;
        overflow: hidden;
    }

    .product-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: $spacing-md;

        .price {
            color: $primary-color;
            font-weight: bold;
        }
    }
}
</style>