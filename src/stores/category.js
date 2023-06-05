import { ref } from 'vue'
import { getCategoryAPI } from "@/apis/layout";
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('counter', () => {
  // state放巷列表数据
  const categoryList = ref([])

  // action 获取导航数据的方法
  // 获取分类
  const getCategory = async () => {
    const res = await getCategoryAPI()
    if (!res.code === 1) return console.log('获取失败');
    // console.log(res);
    categoryList.value = res.result
  
  }

  return { categoryList,getCategory }
})
