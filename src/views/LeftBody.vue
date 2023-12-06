<script setup>
import { ref } from 'vue'

const props = defineProps(['pageInfo'])

console.log(props.pageInfo.pageWidth)
const activeName = ref('info')
// const input = ref('')
// const value = ref('')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<template>
  <div class="body">
    <el-tabs v-model="activeName" class="demo-tabs" :stretch="true" @tab-click="handleClick">
      <el-tab-pane class="info" label="页面信息" name="info">
        <div class="page-height">
          <p class="left">页面长度</p>
          <el-input class="right" v-model="props.pageInfo.pageHeight" placeholder="长度值" />
        </div>
        <div class="page-width">
          <p class="left">页面宽度</p>
          <el-input class="right" v-model="props.pageInfo.pageWidth" placeholder="宽度值" />
        </div>
        <el-switch v-model="value" active-text="仅一页" inactive-text="分页" />
      </el-tab-pane>
      <el-tab-pane class="model" label="表单模板" name="model">
        <div class="model-list">
          <div class="model-card"></div>
          <div class="model-card"></div>
          <div class="model-card"></div>
          <div class="model-card"></div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="less" scoped>
.body {
  margin-top: 75px;
  width: 100%;
  // height: 200px;
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
</style>
