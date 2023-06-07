<template>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 home-cards">
      <div class="col">
        <img src="https://i.ibb.co/zVqhWn2/card5.png" alt="" />
        <h3>Microsoft Teams</h3>
        <p>釋放團隊的力量。</p>
        <router-link to="#"
          >立即購買 <i class="fas fa-chevron-right"></i
        ></router-link>
      </div>
      <div class="col">
        <img src="https://i.ibb.co/mGZcxcn/card6.jpg" alt="" />
        <h3>Unlock the power of learning</h3>
        <p>使用 Windows 10 設備讓學生為未來做好準備。起價 219 美元。</p>
        <router-link to="#"
          >立即購買 <i class="fas fa-chevron-right"></i
        ></router-link>
      </div>
      <div class="col">
        <img src="https://i.ibb.co/NpPvVHj/card7.png" alt="" />
        <h3>Windows 10 Enterprise</h3>
        <p>下載 IT 專業人員的 90 天免費評估版。</p>
        <router-link to="#"
          >立即購買 <i class="fas fa-chevron-right"></i
        ></router-link>
      </div>
      <div class="col">
        <img src="https://i.ibb.co/LkP4L5T/card8.png" alt="" />
        <h3>Explore Kubernetes</h3>
        <p>立即了解 Kubernetes 的工作原理並開始雲原生應用程序開發。</p>
        <router-link to="#"
          >立即購買 <i class="fas fa-chevron-right"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css");
.container-fluid {
  width: 100%;
  margin: 0;
  padding: 0;
}
.home-cards {
  width: 100%;
  margin: 0;
}
.col {
  padding: 2px;
}
.home-cards img {
  width: 100%;
  margin-bottom: 20px;
}
.home-cards h3 {
  margin-bottom: 5px;
}

.home-cards a {
  display: inline-block;
  padding-top: 10px;
  color: #0067b8;
  text-transform: uppercase;
  font-weight: bold;
}
.home-cards a:hover i {
  margin-left: 10px;
}
</style>
