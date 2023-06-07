<script setup>
import Sider from "./components/Sider.vue";
import SiderPhone from "./components/SiderPhone.vue";
</script>

<template>
  <SiderPhone class="menu" />
  <div class="main">
    <Sider class="left" />
    <router-view class="right"></router-view>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.main {
  display: flex;
}
.left {
  width: 25%;
  float: left;
}
.right {
  width: 75%;
  float: right;
}
@media (max-width: 540px) {
  .left {
    display: none;
    width: 0;
  }
  .right {
    width: 100%;
    position: relative;
    top: 100px;
  }
}
@media (min-width: 540px) {
  .menu {
    display: none;
  }
}
</style>
