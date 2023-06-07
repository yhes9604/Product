<script setup>
</script>

<template>
  <div class="sider_main">
    <div class="sider_header">
      <div class="sider_logo">
        <router-link to="/">
          <img
            src="https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-logo-brand-png-clip-art-30.png"
            alt=""
          />
          <p>McDonald's.</p>
        </router-link>
      </div>
      <div class="sider_content">
        <div class="sider_content_center">
          <ul>
            <li class="sider_list_title">別具滋味</li>
          </ul>
          <ul class="sider_list">
            <router-link to="/meal">超值全餐</router-link>
            <router-link to="/super">極選系列</router-link>
            <router-link to="/share">麥當勞分享盒</router-link>
          </ul>
          <ul>
            <li class="sider_list_title">General</li>
          </ul>
          <ul class="sider_list">
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
  width: 25%;
  color: aliceblue;
  height: 100vh;
  float: left;
  position: sticky;
  top: 0;
}
.sider_logo {
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.sider_logo img {
  padding: 3px;
  margin: 2px;
  border-radius: 3px;
  width: 100px;
  height: 80px;
}
.sider_logo p {
  font-weight: 800;
  font-size: 30px;
  letter-spacing: 1px;
}
.sider_content_center {
  top: 20px;
  position: relative;
  display: block;
  position: relative;
  left: 20%;
}
.sider_list_title {
  list-style-type: none;
  color: #2f2d2d;
  position: relative;
  left: -30px;
  letter-spacing: 1px;
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
.sider_logo > a {
  color: #333;
  text-decoration: none;
}
.sider_logo > a:hover {
  color: white;
}
</style>
