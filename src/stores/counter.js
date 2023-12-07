import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useDomMapStore = defineStore('domMap', {
  state: () => {
    return {
      mapList: {
        img : {
          num: 0,
          list: []
        },
        text : {
          num: 0,
          list: []
        },
        line : {
          num: 0,
          list: []
        },
      }
    }
  }
})
