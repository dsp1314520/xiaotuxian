import { getTopCategoryAPI } from '@/apis/category'
import { ref, watch } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id) => {
    const res = await getTopCategoryAPI(id)
    categoryData.value = res.result
  }
  
  // 获取导航导航
getCategory(route.params.id)
// 获取banner

// 使用watch监听路由变化
// watch(route, () => {
//   // console.log(132123);
//   getCategory(route.params.id)
// }, { deep: true })
// 使用vue-router自己的方法监听路由变化
onBeforeRouteUpdate((to) => {
  // console.log('路由变化了');
  // console.log(to.params.id, 123123);
  getCategory(to.params.id)
})
return{ 
  categoryData
}

  }