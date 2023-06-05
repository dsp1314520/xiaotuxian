<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeaderUl from "./components/LayoutHeaderUl.vue";
// 导入store 
import { useCategoryStore } from "@/stores/category";
import { onMounted } from 'vue';

const categoryStore = useCategoryStore()

onMounted(() => {
  // 使用方法获取分类
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutHeaderUl />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>