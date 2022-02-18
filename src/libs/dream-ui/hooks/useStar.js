import { ref } from 'vue'
export default function useStar(num, cb) {
  const starNum = ref(num)

  const setStarNum = (num) => {
    starNum.value = num
    cb()
  }

  return {
    starNum,
    setStarNum
  }
}