<template>
  <div class="wrap">
    <div v-if="page.dataList.length === 0">
        当前暂无模板！
    </div>
    <div v-else class="temp-wrap">
      <div class="card-body" v-for="(item,index) in page.dataList" :key="item.id" @click="handleClick(item)">
        <div class="img">
          <img :src="item.cover">
        </div>
        <div class="title">
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useEditor } from "@/views/Editor/app";
const { editor } = useEditor();
import { pageData } from "@/views/Editor/layouts/panel/leftPanel/wrap/mixins/data"

const { page } = pageData()
const handleClick = (item: any) => {
  console.log(item.json);
  editor.importJsonToCurrentPage(item.json, true);
};
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  .temp-wrap {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .card-body {
      margin-top: 10px;
      width: 150px;
      height: 240px;
      justify-self: center;
      background-color: #f4f4f4;
      .img {}
      .title {
        margin-top: 3px;
        text-align: center;
      }
    }
    .card-body :hover {
      background-color: #e9e9e9;
    }
  }
}
</style>
