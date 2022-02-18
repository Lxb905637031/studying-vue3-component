<template>
  <div 
    class="carousel"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <div class="inner">
      <car-dot
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      />
      <car-director
        dir="prev"
        @dirClick="dirClick"
      />
      <car-director
        dir="next"
        @dirClick="dirClick"
      />
      <slot />
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import CarDot from './Dot.vue'
import CarDirector from './Director.vue'
export default {
    name: 'Carousel',
    props: {
        // 是否自动播放
        autoPlay: {
            type: Boolean,
            default: true
        },
        // 延迟时间
        duration: {
          type: Number,
          default: 3000
        },
        // 展示哪张图片
        initial: {
          type: Number,
          default: 0
        },
        // 是否显示小圆点
        hasDot: {
          type: Boolean,
          default: true
        },
        // 是否显示左右按钮
        hasDirector: {
          type: Boolean,
          default: true
        },
        // 小圆点背景颜色
        dotBgColor: String
    },
    components: {
      CarDot,
      CarDirector
    },
    setup(props) {
      const instance = getCurrentInstance()
      
      const state = reactive({
        currentIndex: props.initial,
        itemLen: 0
      })

      let t = null

      const autoPlay = () => {
        if (props.autoPlay) {
          t = setInterval(() => {
            setIndex('next')
          }, props.duration)
        }
      }

      const setIndex = (dir) => {
        switch (dir) {
          case 'next':
            state.currentIndex += 1
            if (state.currentIndex === state.itemLen) {
              state.currentIndex = 0
            }
            break;
          case 'prev':
            state.currentIndex -= 1
            if (state.currentIndex === -1) {
              state.currentIndex = -1
            }
            break
          default:
            break
        }
      }

      onMounted(() => {
        state.itemLen = instance.slots.default()[0].children.length
        autoPlay()
      })

      onBeforeUnmount(() => {
        
        clear()
      })

      const clear = () => {
        clearInterval(t)
        t = null
      }

      const dotClick = (index) => {
        state.currentIndex = index
      }

      const dirClick = (dir) => {
        setIndex(dir)
      }

      const mouseEnter = () => {
        clear()
      } 

      const mouseLeave = () => {
        autoPlay();
      }

      return {
        ...toRefs(state),
        dotClick,
        dirClick,
        mouseEnter,
        mouseLeave
      }
    }
}
</script>

<style lang="scss">
  .carousel {
    margin: 50px auto;
    width: 590px;
    height: 470px;

    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>