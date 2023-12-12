<script setup>
import { ref } from 'vue'
const iconList = [
  { name: 'icon-editor-text', content: '文字', type: 'text' },
  { name: 'icon-fengexian', content: '线', type: 'line' },
  { name: 'icon-kuang', content: '框', type: 'box' },
  { name: 'icon-tupian', content: '图片', type: 'img' },
]

const nowSelectOp = ref({})
function selectOp(item) {
  nowSelectOp.value = item
}


function gotoGithub () {
  window.open('https://github.com/shuangxunian/no-resume','_blank')
}

</script>

<template>
  <div class="header">
    <div class="left">
      <i class="iconfont icon-icon_home" @click="gotoGithub"></i>
      <h1 class="title">不做简历</h1>
    </div>
    <div class="mid">
      <div class="icon-box" :class="nowSelectOp.type === item.type ? 'select-icon-box' : ''" v-for="(item, index) in iconList" :key="index" @click="selectOp(item)">
        <el-tooltip
          effect="dark"
          :content="item.content"
          placement="bottom"
        >
          <i class="iconfont" :class="item.name"></i>
        </el-tooltip>
      </div>
    </div>
    <div class="right">
      <div class="button">
        <el-button type="primary">代码导出</el-button>
        <el-button type="primary">图片导出</el-button>
      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
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
    width: 300px;
    display: flex;
    .icon-box {
      width: 32px;
      height: 32px;
      margin: 4px 2px;
      border-radius: 4px;
      line-height: 32px;
      text-align: center;
    }
    .select-icon-box {
      background-color: #e9e7ef;
    }
  }
  .mid :hover {
    background-color: #f0f0f4;
  }
  .right {
    margin-right: 10px;
    .button {
      margin-top: 4px;
    }
  }
}
</style>
