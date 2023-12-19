<template>
  <div class="text-list-wrap">
    <div v-if="page.dataList.length === 0">
        当前暂无文字模板！
    </div>
    <div v-else class="other-text-wrap">
      <div class="text-class" v-for="(item, index) in page.dataList" :key="item.id">
        <div class="show-text" @click="handleClick(item)">
          <p :class="item.class">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Group, Text } from "leafer-ui";
import { useEditor } from "@/views/Editor/app";
import { getDefaultName } from "@/views/Editor/utils/utils";
import { textData } from "@/views/Editor/layouts/panel/leftPanel/wrap/mixins/data"

const { editor } = useEditor()
const { page } = textData()

const handleClick = (item: any) => {
  let text
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
    })
  } else {
    text = new Group(item.json)
  }
  editor.add(text)
}
</script>

<style lang="less" scoped>
@color0: #3b74f1; // Appears 2 times

.text-list-wrap {
  width: 100%;
  height: 100%;
  .other-text-wrap {
    max-height: 100%;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    .text-class {
      width: 50%;
      height: 40px;
      text-align: center;
      margin-top: 10px;
      .show-text {
        margin: 0 10px;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
        background-color: #f4f4f4;
        .big-h {
          font-size: 21px;
        }
        .mid-h {
          font-size: 18px;
        }
        .main-text {
          font-size: 11px;
        }
      }
      .show-text :hover {
        cursor: pointer;
        border-radius: 10px;
        background-color: #e9e9e9;
      }
    }
  }
}
</style>
