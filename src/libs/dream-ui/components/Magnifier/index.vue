<template>
  <div
    v-magnifier
    class="img-wrap"
    :style="{
        width: imgWidth + 'px',
        height: imgHeight + 'px'
    }"
  >
    <a 
        class="mag-wrap"
        :href="link"
        :target="blank ? '_blank' : ''"
        :style="{
            width: magWidth + 'px',
            height: magHeight + 'px'
        }"
    >
        <img
            class="mag-img"
            :src="imgUrl"
            :alt="imgAlt"
            :style="{
                width: imgWidth + 'px',
                height: imgHeight + 'px'
            }"
        />
    </a>
    <a
        class="img-lk"
        :href="link"
    >
        <img
            class="static-img"
            :src="imgUrl"
            :alt="imgAlt"
        />
    </a>
  </div>
</template>

<script>
import { magnifier } from '../../directives/index'
export default {
    name: 'Magnifier',
    directives: {
        magnifier
    },
    props: {
        // 图片宽度
        imgWidth: {
            type: Number,
            default: 375
        },
        // 图片高度
        imgHeight: {
            type: Number,
            default: 500
        },
        // 放大镜宽度
        magWidth: {
            type: Number,
            default: 150
        },
        // 放大镜高度
        magHeight: {
            type: Number,
            default: 150
        },
        // 跳转
        blank: {
            type: Boolean,
            default: true
        },
        // 跳转链接
        link: String,
        // 图片链接
        imgUrl: String,
        // 图片描述
        imgAlt: String
    }
}
</script>

<style lang="scss">
  .img-wrap {
    position: relative;
    border: 1px solid #ddd;
    box-shadow: 0 0 5px #999;

    .static-img {
      width: 100%;
    }

    .mag-wrap {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      background-color: #fff;
      box-shadow: 0 0 3px #ccc;
      border-radius: 50%;
      cursor: move;
      overflow: hidden;

      &.show {
        display: block;
        transform: scale(1.5);
      }

      .mag-img {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
</style>
