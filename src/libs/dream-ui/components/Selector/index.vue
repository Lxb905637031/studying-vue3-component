<template>
  <div class="selector" v-focus>
    <selector-input
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    />
    <selector-menu
      :data="data"
      :searchValue="searchValue"
      @setItemValue="setItemValue"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { focus } from '../../directives'
import SelectorInput from './Input.vue'
import SelectorMenu from './Menu.vue'
export default {
  name: 'Selector',
  directives: {
    focus
  },
  props: {
    // 下拉选项
    data: Array,
    placeholder: String
  },
  components: {
    SelectorInput,
    SelectorMenu
  },
  setup(props, ctx) {

    const state = reactive({
      inputValue: '',
      searchValue: ''
    })

    const searchOptions = (value) => {
      state.searchValue = value
    }

    const setItemValue = (item) => {
      state.inputValue = item.text
      ctx.emit('setItemValue', item.value)
    }

    return {
      ...toRefs(state),
      searchOptions,
      setItemValue
    }
  }
}
</script>

<style lang="scss">
.selector {
  position: relative;
  width: 300px;
}
</style>