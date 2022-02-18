<template>
  <transition>
    <div
      class="car-item"
      v-if="selfIndex === currentIndex"
    >
      <slot />
  </div>
  </transition>
</template>

<script>
import { getCurrentInstance, reactive, toRefs, watch } from '@vue/runtime-core'
export default {
  name: 'CarItem',
  setup() {
    const instance = getCurrentInstance()

    const state = reactive({
      // 自身索引
      selfIndex: instance.vnode.key,
      // 当前索引
      currentIndex: instance.parent.ctx.currentIndex
    })

    watch(() => {
      return instance.parent.ctx.currentIndex
    }, (val) => {
      state.currentIndex = val
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss">
.car-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all .3s linear;
  }

  .v-enter-active {
    transform: translateX(100%)
  }

  .v-enter-to {
    transform: translateX(0);
  }

  .v-leave-active {
    transform: translateX(0);
  }

  .v-leave-to {
    transform: translateX(-100%)
  }
 
  img {
    width: 100%;
  }
</style>
