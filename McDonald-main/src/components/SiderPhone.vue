<script>
import { ref } from "vue";
export default {
  setup() {
    const MenuBun = ref(false);
    function Menu() {
      MenuBun.value = !MenuBun.value;
      console.log(MenuBun.value);
    }
    return { Menu, MenuBun };
  },
};
</script>

<template>
  <div class="sider_main">
    <div class="sider_header">
      <div class="sider_logo">
        <router-link to="/" @click="MenuBun = false">
          <img
            src="https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-logo-brand-png-clip-art-30.png"
            alt=""
          />
        </router-link>
        <div class="sider_menu">
          <button @click="Menu">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div class="sider_content" v-if="MenuBun">
        <div class="sider_content_center">
          <ul>
            <li class="sider_list_title">別具滋味</li>
          </ul>
          <ul class="sider_list" @click="Menu">
            <router-link to="/meal">超值全餐</router-link>
            <router-link to="/super">極選系列</router-link>
            <router-link to="/share">麥當勞分享盒</router-link>
          </ul>
          <ul>
            <li class="sider_list_title">General</li>
          </ul>
          <ul class="sider_list" @click="Menu">
            <router-link to="/map">尋找餐廳 </router-link>
            <router-link to="/calculator">營養計算器</router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sider_main {
  background-color: #be3348;
  width: 100%;
  height: 60px;
  color: rgb(0, 0, 0);
  top: 0;
  display: inline-block;
  position: fixed;
  z-index: 2;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.12);
}
.sider_logo {
  position: relative;
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.sider_logo img {
  padding: 3px;
  margin: 2px;
  border-radius: 3px;
  width: 80px;
  height: 60px;
}
.sider_list > a {
  position: relative;
  color: #fffbfb;
}
.sider_content_center {
  top: 20px;
  position: relative;
  display: block;
  position: relative;
  left: 20%;
}

.sider_list {
  position: relative;
  list-style-type: none;
  line-height: 35px;
  letter-spacing: 1px;
}
.sider_list > a:hover {
  color: #b7afaf;
}
.sider_list > a {
  color: white;
  text-decoration: none;
  display: block;
}

.sider_header {
  display: flex;
}
.sider_content {
  position: fixed;
  top: 60px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #be3348;
}
.sider_menu > button {
  border: none;
  background: none;
  font-size: 30px;
  color: white;
  position: relative;
  left: -20px;
}
.sider_list_title {
  list-style-type: none;
  color: #2f2d2d;
  position: relative;
  left: -30px;
  letter-spacing: 1px;
}
</style>
