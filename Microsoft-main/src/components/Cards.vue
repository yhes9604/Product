<template>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 home-cards">
      <div class="col">
        <img src="https://i.ibb.co/LZPVKq9/card1.png" alt="" />
        <h3>New Surface Pro 7</h3>
        <p>
          看看 Katie Sowers，助理。 49 人隊的教練使用 Surface Pro 7
          來實施她的計劃。
        </p>
        <router-link to="#"
          >了解更多 <i class="fas fa-chevron-right"></i
        ></router-link>
      </div>

      <div class="col">
        <img src="https://i.ibb.co/KjGFHVJ/card2.png" alt="" />
        <h3>New Surface Laptop 3</h3>
        <p>
          通過輕薄優雅的設計、更快的性能和長達 11.5
          小時的電池續航時間，有力地表達自己。
        </p>
        <router-link to="#"
          >了解更多 <i class="fas fa-chevron-right"></i
        ></router-link>
      </div>

      <div class="col">
        <img src="https://i.ibb.co/2cnshH6/card3.png" alt="" />
        <h3>Save $150 + free controller</h3>
        <p>
          購買一台 Xbox One X
          主機，使用一個免費的精選額外控制器，讓您的樂趣加倍。起價 349 美元。
        </p>
        <router-link to="#"
          >了解更多 <i class="fas fa-chevron-right"></i
        ></router-link>
      </div>

      <div class="col">
        <img src="https://i.ibb.co/G57P0Pb/card4.png" alt="" />
        <h3>The new Microsoft Edge</h3>
        <p>期待更多。世界一流的性能，更多的隱私，更高的生產力和更多的價值。</p>
        <router-link to="#"
          >了解更多 <i class="fas fa-chevron-right"></i
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
