<script setup>
import MainHeader from './views/MainHeader.vue'
import leftBody from './views/leftBody/leftBody.vue'
import rightBody from './views/rightBody/rightBody.vue'
import midBody from './views/midBody/midBody.vue'

</script>

<template>
  <div class="main">
    <div class="header">
      <MainHeader/>
    </div>
    <div class="body">
      <div class="body-left">
        <leftBody/>
      </div>
      <div class="body-mid">
        <midBody/>
      </div>
      <div class="body-right">
        <rightBody/>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main {
  min-width: 1500px;
  height: 100vh;
  .header {
    height: 40px;
    width: 100%;
  }
  .body{
    height: calc(100% - 40px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    .body-left {
      width: 400px;
      height: 100%;
    }
    .body-mid {
      min-width: 800px;
      height: 100%;
    }
    .body-right {
      width: 300px;
      height: 100%;
    }
  }
}
</style>
