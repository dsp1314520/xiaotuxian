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