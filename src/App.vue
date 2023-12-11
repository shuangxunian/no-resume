<script setup>
import MainHeader from './views/MainHeader.vue'

</script>

<template>
  <div class="main">
    <div class="header">
      <MainHeader/>
    </div>
    <div class="body"></div>
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
  }
}
</style>
