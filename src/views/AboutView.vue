<template>
    <div class="page-about">
        <el-row :gutter="40">
            <el-col :md="12">
                <h1>关于我们</h1>
                <div class="about-content">
                    <p>我们是一家专注于企业信息化解决方案的高科技公司，成立于2010年，拥有超过10年的行业经验。</p>

                    <el-divider />

                    <h3>公司使命</h3>
                    <p>通过技术创新，助力企业数字化转型，提升运营效率。</p>

                    <h3>核心价值</h3>
                    <el-tag v-for="value in values" :key="value" type="info"
                        style="margin-right:10px;margin-bottom:10px;">
                        {{ value }}
                    </el-tag>
                </div>
            </el-col>

            <el-col :md="12">
                <el-image :src="'https://picsum.photos/800/600?random=1'" fit="cover"
                    style="width:100%; height:100%; min-height:400px; border-radius:8px;" />
            </el-col>
        </el-row>

        <div class="team-section">
            <h2>核心团队</h2>
            <el-row :gutter="40">
                <el-col :xs="24" :sm="12" :md="8" v-for="member in team" :key="member.name">
                    <el-card :body-style="{ padding: '0px', textAlign: 'center' }">
                        <el-avatar style="margin-top: 20px;" :size="120" :src="`https://picsum.photos/200/200?random=${member.id}`" />
                        <div style="padding: 20px;">
                            <h3>{{ member.name }}</h3>
                            <p>{{ member.position }}</p>
                            <p class="member-desc">{{ member.desc }}</p>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
const values = ['创新', '专业', '诚信', '合作', '卓越']

const team = [
    { id: 1, name: '张总', position: '创始人/CEO', desc: '20年行业经验，资深技术专家' },
    { id: 2, name: '李经理', position: '技术总监', desc: '负责核心技术研发与团队管理' },
    { id: 3, name: '王总监', position: '产品总监', desc: '主导产品规划与设计' }
]
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.page-about {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 $spacing-md;

    h1 {
        margin-bottom: $spacing-xl;
    }

    .about-content {
        padding: $spacing-md;
        background-color: lighten-color($bg-primary, 2%);
        border-radius: $border-radius-md;

        p {
            margin: $spacing-md 0;
        }
    }

    .team-section {
        margin-top: $spacing-xl;

        h2 {
            margin-bottom: $spacing-xl;
        }
    }
}
</style>