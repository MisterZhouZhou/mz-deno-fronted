<template>
  <div class="detail-page">
    <docs-header>
      <template #menu>
        <a class="nav-link" href="#/docs">首页</a>
        <a class="nav-link" href="#/about">关于</a>
      </template>
      <div class="header-title">{{ apiData.name }}</div>
      <div class="header-subtitle">{{ apiData.desc }}</div>
    </docs-header>
    <div class="detail-content">
      <el-tabs v-model="activeTabName">
        <el-tab-pane label="API文档" name="api">
          <div class="content-api" v-html="markDownData.api"></div>
        </el-tab-pane>
        <el-tab-pane label="示例代码" name="example">
          <div class="content-example" v-html="markDownData.example"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <docs-footer />
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  // @ts-ignore tabs
  import type { TabsPaneContext } from 'element-plus'
  import { useRoute } from 'vue-router'
  import DocsHeader from '../../components/DocsHeader'
  import DocsFooter from '../../components/DocsFooter'
  import DocsList from '../../config/docs.json'
  // 路由信息
  const route = useRoute()
  const { id: apiId } = route.query
  // 当前api信息
  let apiData = reactive<{name?: string, desc?: string}>({})
  // tab选项
  const activeTabName = ref('api')
  const markDownData = reactive<{api?: string, example?: string}>({})

  // 查找当前api信息
  const loadApiInfo = () => {
    for (const group of DocsList) {
      for (const item of group.items) {
          if (apiId && +item.id === +apiId) {
            apiData = item
            break
          }
      }
    }
  }

  // 加载api文档
  const loadComponent = async () => {
    const markdownApi = await import(`./markdown/${apiId}.api.md`)
    const markdownExample = await import(`./markdown/${apiId}.example.md`)
    markDownData.api = markdownApi.html as any as string
    markDownData.example = markdownExample.html as any as string
  };

  loadApiInfo()
  loadComponent()
</script>


<style lang="less" scoped>
.detail-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
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
    font-size: 18px;
    color: #ccc;
  }
  .detail-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    :deep(.el-tabs) {
      width: 100%;
      height: 100%;
      .el-tabs__nav-wrap {
        background-color: #f5f5f5;
        .el-tabs__nav-scroll {
          display: flex;
          justify-content: center;
        }
      }
      .el-tabs__content {
        padding: 0 30px 0 30px;
      }
    }
    .content-api {
      color: #333;
      font-size: 16px;
    }
    .content-example {
      :deep(p) {
        font-weight: 600;
      }
    }
  }
}
</style>