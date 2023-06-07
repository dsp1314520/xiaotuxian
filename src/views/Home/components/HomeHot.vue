<script setup>
import HomePanel from "./HomePanel.vue";
import { getHotAPI } from '@/apis/home'
import { ref } from 'vue'
const hotList = ref([])
const getHotList = async () => {
  const res = await getHotAPI()
  console.log(res);
  hotList.value = res.result
}
getHotList()


</script>

<template>
  <HomePanel title="人气推荐" sub-title="新鲜出炉 品质靠谱">
    <template v-slot:main>
      <!-- 下面是插槽主体内容模版 -->
      <ul class="goods-list">
        <li v-for="item in hotList" :key="item.id">
          <RouterLink to="/">
            <RouterLink to="/">
              <!-- 使用全局指令 v-img-lazy -->
              <img v-img-lazy="item.picture" alt="">
              <p class="name">{{ item.title }}</p>
              <p class="desc">{{ item.alt }}</p>
            </RouterLink>
          </RouterLink>
        </li>
      </ul>
    </template>

  </HomePanel>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }

  }
}
</style>