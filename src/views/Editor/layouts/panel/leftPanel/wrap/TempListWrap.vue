<template>
  <div class="wrap">
    <!-- <search-header :cateList="cateList" v-model="keyword" @changeCate="changeCate" @search="onSearch"/> -->
    <div v-if="page.dataList.length === 0">
        当前暂无模板！
    </div>
    <div v-else class="temp-wrap">
      <comp-list-wrap
        :data="page.dataList"
        :config="config"
        :noMore="page.noMore"
        max-height="calc(100vh - 115px)"
      >
        <template #item="{ item, url, index }">
          {{ item }}
          {{ url }}
          <a-card
            hoverable
            @click="handleClick(item)"
            class="cursor-pointer drop-shadow"
            :body-style="{ padding: '0px' }"
          >
            <div class="">
              <!-- <div class="tags">
                <div class="tag">免费</div>
              </div> -->
              <LazyImg :url="url" class="img" />
            </div>
          </a-card>
        </template>
      </comp-list-wrap>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LazyImg, Waterfall } from "@/components/vue-waterfall-plugin-next";
// import loading from '@/assets/images/loading.png'
import error from "@/assets/images/error.png";
import searchHeader from "@/components/editorModules/searchHeader.vue";
const config = {
  imgSelector: "cover",
};

import { useEditor } from "@/views/Editor/app";
import { Group, Image } from "leafer-ui";
const { editor } = useEditor();
import { getDefaultName } from "@/views/Editor/utils/utils";
import CompListWrap from "@/views/Editor/layouts/panel/leftPanel/wrap/CompListWrap.vue";
// import usePageMixin from "@/views/Editor/layouts/panel/leftPanel/wrap/mixins/pageMixin";
import { pageData } from "@/views/Editor/layouts/panel/leftPanel/wrap/mixins/data"
import { queryTemplateList } from "@/api/editor/materials";
const keyword = ref();
const cateList = reactive([
  { label: "全部", value: "-1" },
  { label: "风景图片", value: "1111" },
  { label: "插画图片", value: "1111" },
]);
const changeCate = (e) => {
  console.log("e=", e);
};
const onSearch = (value, ev) => {
  console.log("value=", value);
  console.log("keyword=", keyword.value);
  console.log("ev=", ev);
};
const { page } = pageData()
console.log(page)
// const fetchData = () => {
//   queryTemplateList(page).then((res) => {
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
const handleClick = (item) => {
  console.log(item.json);
  editor.importJsonToCurrentPage(item.json, true);
};
</script>

<style lang="less" scoped></style>
