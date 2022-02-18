<template>
  <div class="no-data-tip">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'NoDataTip',
  props: {
    text: {
      type: String,
      default: '- 没有搜索到数据 -'
    }
  }
}
</script>

<style lang="scss">
  .no-data-tip {
    height: 300px;
    line-height: 300px;
    text-align: center;
    font-size: 16px;
    color: #666;
  }
</style>
