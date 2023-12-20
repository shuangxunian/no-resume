<template>
  <div class="wrap">
    <div v-if="page.dataList.length === 0">
        当前暂无模板！
    </div>
    <div v-else class="temp-wrap">
      <div class="card-body" v-for="(item,index) in page.dataList" :key="item.id">
        <div class="card-main" @click="handleClick(item)">
          <div class="img">
            <img :src="item.cover">
          </div>
          <div class="title">
            <p>{{ item.title }}</p>
          </div>
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
    max-height: 100%;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    .card-body {
      width: 50%;
      height: 240px;
      margin-top: 10px;
      justify-self: center;
      .card-main {
        margin: 0 10px;
        background-color: #f4f4f4;
        .img {
          width: 145px;
        }
        .title {
          margin-top: 3px;
          text-align: center;
        }
      }

    }
    .card-body :hover {
      cursor: pointer;
      background-color: #e9e9e9;
    }
  }
}
</style>
