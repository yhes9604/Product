<script setup>
import { onMounted } from "vue";

function nowfunction() {
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 15,
    });

    var request = {
      location: { lat: latitude, lng: longitude },
      radius: "500",
      query: "麥當勞",
    };

    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, function (results, status) {
      if (
        status == google.maps.places.PlacesServiceStatus.OK &&
        results.length > 0
      ) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
          });
        }
      }
    });
  });
}
onMounted(() => {
  nowfunction();
});
</script>

<template>
  <div class="desc_main container">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://www.mcdonalds.com/content/dam/sites/tw/carousel/2023/koreancarousel_2336x1040.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://www.mcdonalds.com/content/dam/sites/tw/carousel/desktop/safety+%E5%AE%98%E7%B6%B22336x1040.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card h-100">
          <img
            src="https://s7d1.scene7.com/is/image/mcdonalds/what-hot-PC-1:1-2-full-bleed-tile-desktop?resmode=sharp2"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">現正推出</h5>
            <p class="card-text">
              想了解麥當勞有哪些最新活動嗎？你不想錯過的美食、最即時的優惠內容...
              馬上探索、馬上行動！
            </p>
            <button type="button" class="btn btn-warning">了解更多</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://s7d1.scene7.com/is/image/mcdonalds/mcd-home-mds-pc-1:1-2-full-bleed-tile-desktop?resmode=sharp2"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">24hr歡樂送®</h5>
            <p class="card-text">
              不想出門？還是不方便出門？麥當勞歡樂送®APP提供24小時點餐服務，讓你想吃就點，歡樂不間斷
            </p>
            <button type="button" class="btn btn-warning">了解更多</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://s7d1.scene7.com/is/image/mcdonalds/McCafe-banner:1-2-full-bleed-tile-desktop?resmode=sharp2"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">一杯McCafé® 一段對話</h5>
            <p class="card-text">
              一杯咖啡創造一段時光，在這段時間，您可以開啟一段對話，享受香醇，興許會是一段故事的新開始
            </p>
            <button type="button" class="btn btn-warning">了解更多</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://s7d1.scene7.com/is/image/mcdonalds/%E8%A6%AA%E5%AD%90%E6%99%82%E5%85%89KV_PC:1-2-full-bleed-tile-desktop?resmode=sharp2"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">親子時光</h5>
            <p class="card-text">
              世界上還有什麼比和寶貝在一起更重要的呢？找時間帶他來麥當勞一起吃、一起玩，為寶貝上人生的第一堂課：快樂
            </p>
            <button type="button" class="btn btn-warning">了解更多</button>
          </div>
        </div>
      </div>

      <div id="map"></div>
    </div>
  </div>
</template>

<style scoped>
#carouselExampleControls {
  margin-bottom: 15px;
}
#map {
  height: 400px; /* The height is 400 pixels */
  width: 98%; /* The width is the width of the web page */
  margin: 20px;
}
</style>
