import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin={ 
  install(app) {
    // 配置此应用
    // 定义全局指令
    app.directive('img-lazy',{
      mounted(el, binding) {
        // console.log(el);
        // console.log(binding.value);
        // 使用VueUse工具库来实现监听元素
        const {stop}=  useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            // console.log(isIntersecting);
          if (isIntersecting) {
            el.src = binding.value
            stop()
          }
          },
        )
      }
    })
  }
}