<template>
  <div class="site-page">
    <!-- header -->
    <docs-header>
      <template #menu>
        <a class="nav-link" href="#/docs">首页</a>
        <a class="nav-link" href="#/about">关于</a>
      </template>
      <div class="header-title">MZ Deno Api</div>
      <div class="header-subtitle">快速、免费的 API 接口服务</div>
      <div class="header-des">共收录了 14 个接口项目</div>
    </docs-header>
    <!-- content -->
    <div class="site-container">
      <el-collapse v-model="activeName" accordion class="api-list">
        <el-collapse-item v-for="(group, index) in DocsList" :key="index" :name="`${index}`">
          <template #title>
            <span class="api-group">{{ group.groupName }}</span>
          </template>
          <el-card shadow="hover" v-for="(item, idx) in group.items" :key="idx" class="api-item" @click="onApiClick(item)">
            <div class="api-title">{{ item.name }}</div>
            <div class="api-des">{{ item.desc }}</div>
          </el-card>
        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- footer -->
    <docs-footer />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  import DocsHeader from '../../components/DocsHeader';
  import DocsFooter from '../../components/DocsFooter';
  import DocsList from '../../config/docs.json'

  const activeName = ref('1')
  const router = useRouter()

  // api列表点击
  const onApiClick = (item: any) => {
    router.push({
      path: '/docs/detail',
      query: {
        id: item.id
      }
    })
  }
</script>


<style lang="less" scoped>
.site-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .nav-link {
    margin-right: 10px;
    font-size: 16px;
    color: #eee;
    text-decoration: none;
  }
  .header-title {
    font-size: 40px;
    color: #fff;
    font-weight: 600;
  }
  .header-subtitle {
    margin-top: 10px;
    font-size: 20px;
  }
  .header-des {
    margin-top: 10px;
    font-size: 14px;
  }
  .site-container {
    background-color: #fff;
    flex-grow: 1;
    padding: 20px;
    .api-list {
      .api-group {
        font-size: 18px;
        font-weight: 500;
      }
      .api-item {
        margin-bottom: 10px;
      }
      .api-title {
        font-size: 16px;
      }
      .api-des {
        color: #aaa;
      }
    }
  }
  
}
</style>