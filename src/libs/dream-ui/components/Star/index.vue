<template>
  <div class="stars">
    <span
      v-for="(num, index) of 5"
      :key="index"
      :class="num <= starNum ? 'iconfont icon-star active' : 'iconfont icon-star'"
      :style="{ size: size + 'px' }"
      @click="setStarNum(num)"
    >
    </span>
  </div>
</template>

<script>
import useStar from '../../hooks/useStar'
export default {
  name: 'Star',
  props: {
    num: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 25
    }
  },
  setup(props, ctx) {
    const { starNum, setStarNum } = useStar(props.num, () => { ctx.emit('setStarNum', starNum.value) })

    return {
      starNum,
      setStarNum
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "iconfont"; /* Project id 3192115 */
  src: url('//at.alicdn.com/t/font_3192115_trp7w769i29.woff2?t=1645195308524') format('woff2'),
       url('//at.alicdn.com/t/font_3192115_trp7w769i29.woff?t=1645195308524') format('woff'),
       url('//at.alicdn.com/t/font_3192115_trp7w769i29.ttf?t=1645195308524') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &.icon-star:before {
    content: "\e61d";
  }

  &.icon-star {
    transition: color linear;
  }

  &.active {
    color: #f4ea2a;
  }
}
</style>