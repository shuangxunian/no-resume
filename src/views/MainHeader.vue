<script setup>
const iconList = [
  { name: 'icon-editor-text' },
  { name: 'icon-fengexian' },
  { name: 'icon-kuang' },
  { name: 'icon-tupian_huaban' },
]

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
      <div class="icon-box" v-for="(item, index) in iconList" :key="index">
        <i class="iconfont" :class="item.name"></i>
      </div>
    </div>
    <div class="right"></div>
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
    line-height: 40px;
    display: flex;
    .icon-box {
      width: 32px;
      height: 32px;
      margin: 4px 2px;
      border-radius: 4px;
    }
  }
  .mid :hover {
    background-color: red;
  }
  .right {
    width: 300px;
  }
}
</style>
