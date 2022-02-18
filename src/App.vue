<template>
  <div>
    <!-- <Carousel>
      <CarItem
        v-for="(item, index) in imgDatas"
        :key="index"
      >
        <img :src="item" alt="">
      </CarItem>
    </Carousel> -->
    <!-- <Magnifier
      :link="link"
      :blank="blank"
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
    /> -->
    <!-- <Selector
      :data="selectData"
    /> -->
    <!-- <Star
      :num="2"
      @setStarNum="setStarNum"
    /> -->
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'App',
  setup() {
    const imgDatas = [
      'https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/10022073985853/FocusFullshop/CkRqZnMvdDEvMTA3MjkzLzM0LzE4MDA3LzE1MTkyOC82MTQxYjg5MEVhZDMxNTFmOS9kYzQwYmExZTEzZDFhZDgyLnBuZxIJNS10eV8wXzU2MAI47ot6QhMKD-eZvuW-l-eHg-awlOeBthAAQg4KCjfmipjnp5LmnYAQAUIQCgznq4vljbPmiqLotK0QAkIKCgbnsr7pgIkQB1i91qOR16MC/cr/s/q.jpg',
      'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100021772414/FocusFullshop/CkRqZnMvdDEvMTg1MjczLzE3LzEzMDgwLzI4NzY5MS82MGU2OTVlYkUyMmIyMDc2OC9iYTQ4MzQ4MTkwZjY3NGMwLnBuZxIJMi10eV8wXzUzMAI47ot6QhAKDOS5kOWuiOa5v-W3vhAAQhEKDeenkuadgOS7tzU2LjkQAUIQCgznq4vljbPmiqLotK0QAkIKCgbkvJjotKgQB1j-wIzO9AI/cr/s/q.jpg',
      'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/171522/1/26722/78049/61b1db66Eeed6a09c/71e268a5b01d0d80.jpg.webp',
      'https://imgcps.jd.com/ling4/100026667910/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6ee/55bb9d9a/cr/s/q.jpg'
    ]

    const state = reactive({
      imgUrl: 'https://img2.baidu.com/it/u=2585457000,160774737&fm=253&fmt=auto&app=138&f=JPEG?w=330&h=500',
      imgAlt: '李知恩',
      link: 'https://img2.baidu.com/it/u=2585457000,160774737&fm=253&fmt=auto&app=138&f=JPEG?w=330&h=500',
      blank: true,
      imgWidth: 330,
      imgHeight: 500,
      magWidth: 150,
      magHeight:150
    })

    const selectData = [
      {
        id: 1,
        value: 'react',
        text: 'ReactJS'
      },
      {
        id: 2,
        value: 'react-hooks',
        text: 'React Hooks'
      },
      {
        id: 3,
        value: 'vue2',
        text: 'Vue2.x'
      },
      {
        id: 4,
        value: 'vue3',
        text: 'Vue3.0'
      },
      {
        id: 5,
        value: 'angular',
        text: 'Angular'
      }
    ]

    const setStarNum = (num) => {
      console.log(num)
    }

    return {
      imgDatas,
      ...toRefs(state),
      selectData,
      setStarNum
    }
  }
}
</script>
