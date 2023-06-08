import  http  from '@/utils/http'
export function getBannerAPI (){
  return http({
    url:'home/banner'
  })
}
export const findNewAPI = () => {
  return  http({ 
    url:'/home/new',
    method:'GET'
  })
}

export const getHotAPI = () => {
  return  http('home/hot', {})
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return http({
    url: '/home/goods'
  })
}