<template>
  <div class="header-box">
    <div class="left">
      <i class="iconfont icon-icon_home" @click="gotoGithub"></i>
      <h1 class="title">不做简历</h1>
    </div>
    <div class="mid">
      <div class="icon-box">
        <a-tooltip effect="dark" content="导入" mini>
          <span @click="importJsonFile">+</span>
        </a-tooltip>
      </div>

      <a-divider direction="vertical" />
      <div
        class="icon-box"
        v-for="(item, index) in iconList"
        :class="nowSelectOp.type === item.type ? 'select-icon-box' : ''"
        :key="index"
        @click="selectOp(item)"
      >
        <a-tooltip effect="dark" :content="item.content" mini>
          <i
            class="iconfont"
            :class="item.name"
          ></i>
        </a-tooltip>
      </div>

      <a-divider direction="vertical" />
      <zoom />
    </div>
    <div class="right">
      <save-oper />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditor } from "@/views/Editor/app";
import { Platform, Group, Text, Line, Rect, Image } from "leafer-ui";
import { getDefaultName } from "@/views/Editor/utils/utils";
import Zoom from "./left/zoom.vue";
import SaveOper from "./right/saveOper.vue";
import { selectFiles } from "@/utils/designUtil";

Platform.image.suffix = "";
const {  canvas, editor } = useEditor();
const iconList = ref([
  { name: "icon-24gl-pointer", content: "选择", type: "point" },
  { name: "icon-editor-text", content: "文字", type: "text" },
  { name: "icon-fengexian", content: "线", type: "line" },
  { name: "icon-kuang", content: "框", type: "box" },
  { name: "icon-tupian", content: "图片", type: "img" },
]);
const nowSelectOp = ref({
  name: "icon-24gl-pointer",
  content: "选择",
  type: "point",
})

const selectOp = (item: any) => {
  nowSelectOp.value = item
  iconClick(item)
}

const gotoGithub = () => {
  window.open("https://github.com/shuangxunian/no-resume", "_blank");
}

const importJsonFile = () => {
  selectFiles({ accept: ".json" }).then((files: any) => {
    const [file] = files
    const reader = new FileReader()
    reader.readAsText(file, "UTF-8")
    reader.onload = () => {
      canvas.importJsonToCurrentPage(JSON.parse(<string>reader.result), true)
    }
  })
}

const addText = (item: any) => {
  let text;
  if (editor.objectIsTypes(item.json, "Text")) {
    text = new Text({
      name: getDefaultName(editor.contentFrame),
      editable: true,
      x: 50,
      y: 50,
      fill: [
        {
          type: "solid",
          color: "rgba(0,0,0,1)",
        },
      ],
      ...item.json,
    });
  } else {
    text = new Group(item.json);
  }
  editor.add(text)
}

const addLine = (item: any) => {
  let line = new Line({
    name: getDefaultName(editor.contentFrame),
    width: 100,
    stroke: 'rgb(50,205,121)',
    editable: true,
    x: 10,
    y: 10,
    ...item.json,
  })
  editor.add(line)
}

const addBox = (item: any) => {
  let box = new Rect({
    name: getDefaultName(editor.contentFrame),
    width: 100,
    height: 100,
    stroke: 'rgb(50,205,121)',
    editable: true,
    x: 10,
    y: 10,
    ...item.json,
  })
  editor.add(box)
}

const addImg = (item: any) => {
  let box = new Image({
    name:getDefaultName(editor.contentFrame),
    editable: true,
    x:0,
    y:0,
    url: 'https://www.听闻.cn:5244/d/本地/阿里云盘资料备份共享/图片/图床/2023/12/14/657aba4355874.png'
  })
  editor.add(box)
}

const iconClick = (item: any) => {
  if (item.type === "text") {
    addText({
      title: "+ 添加文字",
      json: {
        tag: "Text",
        text: "这里是用来作为正文使用的字段，建议您在使用的过程中使用较长的文字，如：工作经历、产出等",
        fontSize: 11,
        fontWeight: "normal",
      },
    })
  } else if (item.type === "line") {
    addLine({
      title: "+ 添加直线",
      json: {
        tag: "Line",
      },
    })
  } else if (item.type === 'box') {
    addBox({
      title: "+ 添加框",
      json: {
        tag: "Box",
      },
    })
  } else if (item.type === 'img') {
    addImg({
      title: "+ 添加图片",
      json: {
        tag: "Img",
      },
    })
  }
}
</script>
<style scoped lang="less">
@import "../../styles/layouts";

.header-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  .left {
    margin-left: 20px;
    width: 300px;
    line-height: 40px;
    display: flex;
    .iconfont {
      cursor: pointer;
    }
    .title {
      margin-left: 10px;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .mid {
    height: 40px;
    padding: 4px;
    // width: 300px;
    // margin: 4px;
    display: flex;
    .icon-box {
      width: 32px;
      height: 32px;
      margin: 0 2px;
      border-radius: 8px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
    }
    .select-icon-box {
      background-color: #e9e7ef;
    }
  }
  .mid :hover {
    background-color: #f0f0f4;
  }

  .right {
    margin-top: 4px;
    margin-right: 10px;
    .button {
      margin-top: 4px;
    }
  }
}
</style>
