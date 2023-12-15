<template>
  <div id="text-list-wrap" style="margin-top: 0.5rem">
    <div class="basic-text-wrap">
      <div
        v-for="(item, index) in basicTextList"
        :key="index"
        class="basic-text-item"
        :style="{
          fontSize: 14 + 'px',
          fontWeight: item.fontWeight,
        }"
        draggable="true"
        @click="handleClick(item)"
        @dragstart="dragStart($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div v-if="page.dataList.length === 0">
        当前暂无文字模板！
    </div>
    <div v-else class="other-text-wrap">
      <comp-list-wrap
        :config="config"
        :data="page.dataList"
        :noMore="page.noMore"
        max-height="calc(100vh - 115px)"
      >
        <template #item="{ item, url, index }">
          <a-card
            hoverable
            @click="handleClick(item)"
            class="cursor-pointer drop-shadow"
            :body-style="{ padding: '0px' }"
          >
            <div class="">
              <LazyImg :url="url" class="img" />
            </div>
            <!--                      <div class="p5px">-->
            <!--                          <span class="name truncated">{{ item.name }}</span>-->
            <!--                      </div>-->
          </a-card>
        </template>
      </comp-list-wrap>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Group, Text } from "leafer-ui";
import { useEditor } from "@/views/Editor/app";
import { getDefaultName } from "@/views/Editor/utils/utils";
import CompListWrap from "@/views/Editor/layouts/panel/leftPanel/wrap/CompListWrap.vue";
import { LazyImg } from "@/components/vue-waterfall-plugin-next";
import { queryTextMaterialList } from "@/api/editor/materials";
import { textData } from "@/views/Editor/layouts/panel/leftPanel/wrap/mixins/data"
// textData

const { editor } = useEditor();
const NAME = "text-list-wrap";
const config = {
  imgSelector: "cover",
  gutter: 2,
  breakpoints: {
    1200: {
      // 当屏幕宽度小于等于1200
      rowPerView: 4,
    },
    800: {
      // 当屏幕宽度小于等于800
      rowPerView: 3,
    },
    500: {
      // 当屏幕宽度小于等于500
      rowPerView: 3,
    },
  },
};
const basicTextList = ref([
  {
    title: "+ 添加文字",
    json: {
      tag: "Text",
      text: "输入文本",
      fontSize: 14,
      fontWeight: "normal",
    }
  }
])
const handleClick = (item: any) => {
  let text;
  if (editor.objectIsTypes(item.json, "Text")) {
    text = new Text({
      name: getDefaultName(editor.contentFrame),
      // draggable: true,
      editable: true,
      x: 0,
      y: 0,
      // TODO 2023-11-10 这里官方有bug，在new Text对象时fill参数传入数组后返回的fill值格式不对，已反馈 等待修复
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

  console.log("text=", text);
  editor.add(text);
};
const { page } = textData()
// page.pageSize = 30
// page.dataList = [
//   {
//     cover: "",
//     height: 50,
//     width: 100,
//     title: "姓名",
//     id: 100100,
//     json: {
//       tag: "Group",
//       x: 0,
//       y: 0,
//       scaleX: 1,
//       scaleY: 1,
//       rotation: 0,
//       skewX: 0,
//       skewY: 0,
//       draggable: true,
//       editable: true,
//       hitChildren: false,
//       children: [
//         {
//           tag: "Text",
//           padding: [0, 0, 0, 0],
//           fill: [
//             {
//               type: "solid",
//               color: "rgba(0,0,0,1)",
//             },
//           ],
//           text: "输入文本",
//           fontSize: 40,
//           fontWeight: "normal",
//           letterSpacing: {
//             type: "px",
//             value: 0,
//           },
//           lineHeight: {
//             type: "percent",
//             value: 150,
//           },
//           name: "图层1",
//           x: 0,
//           y: 0,
//           scaleX: 1,
//           scaleY: 1,
//           rotation: 0,
//           skewX: 0,
//           skewY: 0,
//           draggable: true,
//           editable: true,
//         },
//       ],
//     },
//     state: 1,
//   },
// ]

// cover
// :
// "https://n-oss.sourcenet.cc/gzm-design/txt-1.png"
// height
// :
// 526
// id
// :
// 714
// json
// :
// {tag: 'Text', editable: true, x: 0, y: 0, width: 400, …}
// state
// :
// 1
// title
// :
// "潮酷春节文字2"
// width
// :
// 719
// const fetchData = () => {
//   console.log("page.pageNum=", page.pageNum);
//   queryTextMaterialList(page).then((res) => {
//     if (res.success) {
//       const newDataList = res.data.records;
//       if (newDataList.length > 0) {
//         page.dataList.push(...newDataList);
//         page.pageNum += 1;
//       }
//       if (page.dataList.length >= res.data.total) {
//         page.noMore = true;
//       } else {
//         page.noMore = false;
//       }
//     }
//   });
// };
const dragStart = (e: Element, item: any) => {};
</script>

<style lang="less" scoped>
// Color variables (appears count calculates by raw css)
@color0: #3b74f1; // Appears 2 times

#text-list-wrap {
  .basic-text-wrap {
    padding: 10px;

    .basic-text-item {
      color: #33383e;
      background-color: #f1f2f4;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0);
      border-top: 1px solid rgba(255, 255, 255, 0);
      // color: @color-black;
      padding: 10px 0;
      text-align: center;

      &:hover {
        // background-color: rgba(0, 0, 0, 0.07);
        // border-bottom: 1px solid @color0;
        // border-top: 1px solid @color0;
      }
    }
  }
}
</style>
