<template>
  <a-layout-sider class="sider-box active">
    <div ref="widgetPanel" id="s-widget-panel">
      <div class="s-widget-classify">
        <ul class="s-classify-wrap">
          <li
            v-for="(item, index) in widgetClassifyList"
            :key="index"
            :class="[
              's-classify-item',
              { 's-active-classify-item': activeWidgetClassify === index },
            ]"
            @click="clickClassify(index)"
          >
            <component :is="item.icon" class="icon" :size="24" />
            <span class="title">{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div ref="widgetWrap" class="s-widget-wrap">
        <temp-list-wrap
          v-show="+activeWidgetClassify === 0"
          :active="+activeWidgetClassify === 0"
        />
        <text-list-wrap
          v-show="+activeWidgetClassify === 1"
          :active="+activeWidgetClassify === 1"
        />
        <background-wrap
          v-show="+activeWidgetClassify === 2"
          :active="+activeWidgetClassify === 2"
        />
      </div>
    </div>
  </a-layout-sider>
</template>
<script setup lang="ts">
import TempListWrap from "./wrap/TempListWrap.vue";
import TextListWrap from "./wrap/TextListWrap.vue";
import BackgroundWrap from "./wrap/BackgroundWrap.vue";

const widgetClassifyList = [
  {
    name: "模板",
    icon: "icon-apps",
    show: false,
  },
  {
    name: "文字",
    icon: "icon-edit",
    show: false,
  },
  {
    name: "背景",
    icon: "icon-mosaic",
    show: false,
  },
];
const activeWidgetClassify = ref(0);
const clickClassify = (index: number) => {
  activeWidgetClassify.value = index;
};
</script>
<style lang="less" scoped>
@import "../../../styles/layouts";
@color1: #3e4651; // Appears 2 times
@menuWidth: 67px; // 默认菜单宽度
@active-text-color: #2254f4; // #1195db;
.sider-box {
  width: @menuWidth !important;
  :deep(.arco-layout-sider-children) {
    overflow: initial;
  }
}
.sider-box.active {
  width: calc(@menuWidth + 329px) !important;
}
#s-widget-panel {
  transition: all 1s;
  color: @color1;
  display: flex;
  flex-direction: row;
  font-weight: 600;
  height: calc(100vh - 20px);
  position: relative;
  .s-widget-classify {
    border-right: 1px solid rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    height: 100%;
    text-align: center;
    display: grid;
    align-content: space-between;
    width: calc(@menuWidth - 1px); //减去边框1px
    .icon {
      font-size: 24px;
      color: #070707c9;
    }
    .s-classify-wrap {
      margin: 0;
      padding-top: 3px;
      user-select: none;
      width: 100%;
      justify-items: center;
      padding-left: 0;
      max-height: calc(100vh - 90px);
      overflow: auto;
      .s-classify-item {
        position: relative;
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 500;
        height: 68px;
        justify-content: center;
        width: 100%;
        .title {
          color: var(--color-text-2);
          margin-top: 5px;
        }
        .icon {
        }
      }
      .s-classify-item:hover > .icon {
      }
      .s-active-classify-item {
        position: relative;
        .icon,
        .title {
          color: rgb(var(--primary-6));
        }
      }
      .s-active-classify-item::after,
      .s-classify-item:hover::after {
        position: absolute;
        content: "";
        left: 0;
        top: 13px;
        width: 4px;
        height: 65%;
        background: rgb(var(--primary-6));
      }
    }
    .b-classify-wrap {
      //margin: 0;
      padding-top: 3px;
      margin-bottom: 20px;
      user-select: none;
      width: 100%;
      justify-items: center;
      padding-left: 0;
      .b-classify-item {
        position: relative;
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 500;
        height: 68px;
        justify-content: center;
        width: 100%;
        .title {
          color: var(--color-text-2);
          margin-top: 5px;
        }
        .icon {
        }
      }
      .b-classify-item:hover {
        .icon,
        .title {
          color: rgb(var(--primary-6));
        }
      }
      .b-active-classify-item {
        position: relative;
        .icon,
        .title {
          color: rgb(var(--primary-6));
        }
      }
    }
  }
  .s-widget-wrap {
    width: @leftPanelWidth;
    background-color: #fff;
    flex: 1;
    height: 100%;
  }
}
</style>
