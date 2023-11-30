<script setup>
import { Leafer, Rect, Frame, Text, Line, Image } from 'leafer-ui'
import { ref, onMounted } from 'vue'
// const resumeWidth = ref(0)
// const resumeAllData = ref([])
// const dataList = ref([])
const mapList = ref({
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
})
const nowClickMap = ref({})
let leafer



function compareResumeWidth() {
  // const dpi = window.devicePixelRatio || 96
  // const inch = 21 / 2.54 * 96
  // console.log(inch)
  // const pixel = 29.7 / 2.54 * 96
  // console.log(pixel)
  // console.log(resumeWidth.value)
}

 // const rect = Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200)
  // testMap.value = {
  //   fill: 'rgb(50,205,121)',
  //   text: 'Welcome to LeaferJS',
  //   draggable: true
  // }
  // const text = new Text({
  //   fill: 'rgb(50,205,121)',
  //   text: 'Welcome to LeaferJS',
  //   draggable: true
  // })
  // const text = new Text(testMap.value)
  // leafer.add(text)
  // console.log(111)

function getImgDom(newDomInfo) {
  const img = new Image({
    // draggable: true
  })
  newDomInfo.data = img
}

function getTextDom(newDomInfo) {
  const text = new Text({
    fill: 'rgb(0,0,0)',
    text: '这里是一串文字',
    // draggable: true
  })
  newDomInfo.data = text
}

function getLineDom(newDomInfo) {
  const line = new Line({

    // draggable: true
  })
  newDomInfo.data = line
}

function addDom(op) {
  const newDomName = `${op}_${ mapList.value[op].num}`
  mapList.value[op].num++
  const newDomInfo = {
    name: newDomName,
    data: {}
  }
  const frame = new Frame({  
    width: 100,
    height: 100,
    fill: 'rgb(50,205,121)',
    draggable: true
  })
  switch(op) {
    case 'img':
      getImgDom(newDomInfo)
      break
    case 'text':
      getTextDom(newDomInfo)
      break
    case 'line':
      getLineDom(newDomInfo)
      break
  }
  mapList.value[op].list.push(newDomInfo)
  frame.add(newDomInfo.data)
  leafer.add(frame)
}

function buildLeafer () {
  leafer = new Leafer({
    view: 'resume', // 支持 window 、div、canvas 标签对象， 可使用id字符串(不用加 # 号)
    width: 793, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: 'gray'
  })

}

onMounted(() => {
  compareResumeWidth()
  buildLeafer()
})

</script>

<template>
  <div class="main">
    <div class="left-body"></div>
    <div class="mid-body">
      <div class="resume" id="resume">
        <!-- <lfLeafer :width="793" :height="1122">
          <lfFrame :width="300" :height="300" fill="#0f0">
            <lfRect
              :width="100" :height="100" fill="#f00"
              @tap="console.log('tag')"
            />
          </lfFrame>
        </lfLeafer> -->
      </div>
    </div>
    <div class="right-body">
      <p @click="addDom('img')">图片</p>
      <p @click="addDom('text')">文字</p>
      <p @click="addDom('line')">分割线</p>
    </div>
  </div>
  <!-- <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row> -->
  <!-- <div>
    123
  </div> -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>

<style lang="less" scoped>
.main {
  min-width: 1500px;
  margin-top: 75px;
  display: flex;
  overflow: auto;
  justify-content: space-between;
  .left-body {
    width: 350px;
    height: 100px;
    background-color: red;
  }
  .mid-body {
    // 算出来的21cm
    min-width: 793px;
    height: 1122px;
    background-color: green;
    .resume {
      width: 100%;
    }
  }
  .right-body {
    width: 350px;
    height: 100px;
    // background-color: blue;
  }
}
</style>
