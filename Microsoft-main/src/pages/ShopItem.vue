<template>
  <div class="container1" v-for="(item, index) in router_shoplist" :key="index">
    <div class="pic_left">
      <div id="carouselExampleControls" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="item.img" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src="https://msescdn.azureedge.net/mgt/catalog/product/cache/a9fb80e376f621b699655b805682ee61/p/d/pd-1_2_61.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://msescdn.azureedge.net/mgt/catalog/product/cache/a9fb80e376f621b699655b805682ee61/p/d/pd-3_2_31.png"
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
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <div class="pic_right">
      <div class="pic_total">
        <div class="pic_name">{{ item.name }}</div>
        <p class="pic_text">即日起-04/06 送電腦包和獨家延長保固！</p>
        <div class="pic_butn">
          數量
          <button class="pic_butAdd" @click="item.num++">+</button>
          <button class="pic_butNum">{{ item.num }}</button>
          <button class="pic_butInc" v-if="item.num > 1" @click="item.num--">
            -
          </button>
        </div>
        <p class="pic_price">{{ item.price }}</p>
        <div class="pic_butnShop">
          <button class="pic_goCart" @click="Add(item)">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
  <nav id="nav_container">
    <p class="nav_name">{{ nav_name }}</p>
    <div class="nav_total">
      <a href="">概要</a>
      <a href="">技術規格</a>
      <a href="">直接購買</a>
    </div>
  </nav>
  <div class="pic_img">
    <img
      src="https://msescdn.azureedge.net/mgt/wysiwyg/Surface_Laptop_5_PDP_TW1040_Black15.jpg"
      alt=""
    />
    <img
      src="https://msescdn.azureedge.net/mgt/wysiwyg/Surface_Laptop_5_PDP__17.jpg"
      alt=""
    />
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const store = useStore();
    const router_shoplist = store.state.router_shop;

    const nav_name = router_shoplist[0].name;
    console.log(nav_name);
    const Add = (item) => {
      store.commit("addcount", item);
    };
    return { router_shoplist, nav_name, Add };
  },
};
</script>
  
<style scoped>
@media (max-width: 700px) {
  .pic_name {
    font-size: 24px;
  }
  .pic_total {
    margin: 10px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .pic_text {
    margin-top: 10px;
  }
  .pic_butn {
    font-size: 20px;
    margin-top: 20px;
  }
  .pic_butn button {
    border: none;
    font-size: 16px;
    letter-spacing: 4px;
  }

  .pic_price {
    font-size: 20px;
    color: #3c76d0;
    margin-top: 20px;
    font-weight: bolder;
  }
  .pic_butnShop {
    margin-top: 10px;
  }
  .butn_1 {
    width: 40%;
    display: inline-block;
    color: #ffffff;
    font-weight: bold;
    border: 1px solid #2979c3;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: #2979c3;
  }
  .pic_goCart {
    width: 50%;
    display: inline-block;
    color: #2979c3;
    font-weight: bold;
    border: 1px solid #2979c3;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    background-color: #ffffff;
    margin-bottom: 10px;
  }
  .pic_img {
    width: 80%;
    margin: auto;
  }
  .pic_img img {
    width: 100%;
  }
  .nav_name {
    margin: auto;
    font-size: 20px;
  }
  .nav_total a {
    margin-left: 10px;
    letter-spacing: 3px;
    font-size: 10px;
    display: none;
  }
  #nav_container {
    width: 100%;
    display: flex;
    font-size: 16px;
    justify-content: space-around;
    border-bottom: 1px solid #999797;
    background-color: #ffffff;
    padding: 10px;
    top: 0px;
    position: sticky;
    box-shadow: 0 -1px #ffffff;
    margin-bottom: 10px;
  }
  .container1 {
    display: flex;
    background-color: #f5f5f5;
    width: 100%;
    margin: auto;
    flex-wrap: wrap;
  }

  .pic_left {
    width: 100%;
    margin: 20px;
  }
  .pic_right {
    width: 100%;
  }
  .pic_name {
    font-size: 22px;
  }
}
@media (min-width: 700px) {
  #nav_container {
    width: 100%;
    display: flex;
    font-size: 25px;
    justify-content: space-around;
    border-bottom: 1px solid #999797;
    background-color: #ffffff;
    padding: 20px;
    top: 0px;
    position: sticky;
    box-shadow: 0 -1px #ffffff;
    margin-bottom: 10px;
  }
  .nav_total a {
    margin-left: 10px;
    letter-spacing: 3px;
    font-size: 20px;
  }
  .pic_name {
    font-size: 36px;
  }
  .pic_total {
    margin: 10px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .pic_text {
    margin-top: 10px;
  }
  .pic_butn {
    font-size: 20px;
    margin-top: 20px;
  }
  .pic_butn button {
    border: none;
    font-size: 24px;
    letter-spacing: 4px;
  }

  .pic_price {
    font-size: 30px;
    color: #3c76d0;
    margin-top: 50px;
    font-weight: bolder;
  }
  .pic_butnShop {
    margin-top: 50px;
  }
  .butn_1 {
    width: 40%;
    display: inline-block;
    color: #ffffff;
    font-weight: bold;
    border: 1px solid #2979c3;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: #2979c3;
  }
  .pic_goCart {
    width: 40%;
    display: inline-block;
    color: #2979c3;
    font-weight: bold;
    border: 1px solid #2979c3;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    margin-left: 20px;
  }
  .pic_img {
    width: 80%;
    margin: auto;
  }
  .pic_img img {
    width: 100%;
  }
  .container1 {
    display: flex;
    flex: 1 1;
    background-color: #f5f5f5;
    width: 100%;
    margin: auto;
    flex-wrap: wrap;
  }

  .pic_left {
    position: relative;
    width: 50%;
  }
  .pic_right {
    position: relative;
    width: 50%;
  }
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #0a0a0a;
}
</style>
  