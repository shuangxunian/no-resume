<script setup>
import { Leafer, Rect, Frame, Box, Text, Line, Image, PointerEvent } from 'leafer-ui'
import { ref, onMounted } from 'vue'
import LeftBody from './views/LeftBody.vue'

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
const pageInfo = ref({
  pageWidth: 793,
  pageHeight: 1400,
  fill: '#fff',
})
const activeName = ref('type')




let leafer
let frame

function compareResumeWidth() {}

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
  const box = new Box({  
    // width: 100,
    height: 50,
    fill: '#FF4B4B',
    stroke: 'black',
    // fill: 'rgb(50,205,121)',
    draggable: true
  })

  box.on(PointerEvent.DOWN, (e) => {
    console.log(e)
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
  box.add(newDomInfo.data)
  frame.add(box)
}

function buildLeafer () {
  leafer = new Leafer({
    view: 'resume', // 支持 window 、div、canvas 标签对象， 可使用id字符串(不用加 # 号)
    width: pageInfo.value.pageWidth,
    height: pageInfo.value.pageHeight,
    fill: pageInfo.value.fill,
    hittable: false
  })
  frame = new Frame({ 
    width: pageInfo.value.pageWidth,
    height: pageInfo.value.pageHeight,
    fill: pageInfo.value.fill,
    hittable: true
  })

  leafer.add(frame)

}

onMounted(() => {
  compareResumeWidth()
  buildLeafer()
})

</script>

<template>
  <div class="main">
    <div class="left-body">
      <LeftBody
        :pageInfo="pageInfo"
      />
    </div>
    <div class="mid-body">
      <el-scrollbar>
        <div class="resume" id="resume"></div>
      </el-scrollbar>
    </div>
    <div class="right-body">
      <div class="body">
        <el-tabs v-model="activeName" class="demo-tabs" :stretch="true" @tab-click="handleClick">
          <el-tab-pane class="type" label="字段属性" name="type">
            <p @click="addDom('img')">图片</p>
            <p @click="addDom('text')">文字</p>
            <p @click="addDom('line')">分割线</p>
          </el-tab-pane>
          <el-tab-pane class="info" label="详细信息" name="info"></el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main {
  min-width: 1500px;
  display: flex;
  height: 100vh;
  overflow: hidden;
  justify-content: space-between;
  .left-body {
    width: 350px;
    height: 100vh;
    position: relative;
    // height: 600px;
    // background-color: #fff;
    // flex: 0 0 auto;
  }
  .mid-body {
    // 算出来的21cm
    width: 793px;
    overflow: auto;
    // height: 1122px;
    // overflow: hidden;
    // flex: 1 1 auto;
    // overflow-y: auto;
    .resume {
      width: 100%;
    }
  }
  .right-body {
    width: 350px;
    height: 100vh;
    position: relative;
    .body {
      margin-top: 75px;
      width: 100%;
      background-color: #fff;
      border-radius: 5px;
      .demo-tabs {
        width: 100%;
        .info {
          margin: 10px;
          .page-height {
            width: 100%;
            display: flex;
            margin-bottom: 10px;
            .left {
              width: 30%;
              line-height: 32px;
            }
            .right {
              width: 70%;
            }
          }
          .page-width {
            width: 100%;
            display: flex;
            margin-bottom: 10px;
            .left {
              width: 30%;
              line-height: 32px;
            }
            .right {
              width: 70%;
            }
          }
        }
        .model {
          margin: 10px;
          .model-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .model-card {
              height: 100px;
              width: 75px;
              margin: 10px;
              background-color: red;
            }
          }
        }

      }
    }
  }
}
</style>
