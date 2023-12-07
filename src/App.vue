<script setup>
import { App, Leafer, Rect, Frame, Box, Text, Line, Image, PointerEvent } from 'leafer-ui'
import { ref, onMounted, watch } from 'vue'
import LeftBody from './views/LeftBody.vue'
import { EditorEvent } from '@leafer-in/editor'

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
const nowClickTarget = ref({})
const pageInfo = ref({
  pageWidth: 793,
  pageHeight: 1400,
  fill: '#fff',
})

watch(
  nowClickMap,
  (newValue, oldValue) => {
    if (newValue.current.leafList.list[0]?.children[0]) {
      nowClickTarget.value = newValue.current.leafList.list[0]?.children[0]
      activeName.value = 'info'
      console.log(nowClickTarget.value)
    } else {
      nowClickTarget.value = {}
      activeName.value = 'type'
    }
    // console.log(newValue.current.leafList.list[0]?.children[0])
    // console.log(newValue, oldValue)
  }
)

const activeName = ref('type')




let leafer
let frame
let app

function compareResumeWidth() {}

function getImgDom(newDomInfo) {
  const img = new Image({
    // draggable: true
  })
  newDomInfo.data = img
}

function getTextDom(newDomInfo) {
  const text = new Text({
    // width: 100,
    // height: 50,
    id: newDomInfo.name,
    fill: 'rgb(50,205,121)',
    text: '这里是一串文字',
    fontSize: '14',
    padding: [10, 0]
    // ITextDecoration: 'none',
    // textWrap: 'normal',
    // draggable: true
  })
  // text.on(PointerEvent.UP, (e) => {
  //   console.log('up', e)
  // })
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
    x: 100,
    y: 100,
    editable: true,
    draggable: true,
    children: []
  })

  // box.on(PointerEvent.DOWN, (e) => {})

  // box.on(PointerEvent.UP, (e) => {})

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
  // frame.add(newDomInfo.data)
  box.add(newDomInfo.data)
  app.tree.add(box)
}

function buildLeafer () {
  app = new App({
    view: 'resume',
    ground: { type: 'draw' },
    tree: { type: 'draw' },
    sky: { type: 'draw' },
    editor: {},
    id: 'app',
    width: pageInfo.value.pageWidth,
    height: pageInfo.value.pageHeight,
    fill: '#fff',
  })

  app.editor.on(EditorEvent.SELECT, e => {
    nowClickMap.value = e
  })

  // leafer = new Leafer({
  //   view: 'resume',
  //   width: pageInfo.value.pageWidth,
  //   height: pageInfo.value.pageHeight,
  //   fill: '#000',
  //   type: 'draw',
  //   editor: {},
  //   wheel: {
  //     preventDefault: false
  //   },
  //   move: {
  //     dragOut: false
  //   }
  //   // hittable: false
  // })
  // frame = new Frame({ 
  //   width: pageInfo.value.pageWidth,
  //   height: pageInfo.value.pageHeight,
  //   fill: pageInfo.value.fill,
  //   // hittable: true
  // })

  // leafer.add(frame)

}

onMounted(() => {
  // compareResumeWidth()
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
