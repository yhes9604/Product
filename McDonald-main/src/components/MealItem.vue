<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    console.log(store.state.router_shop);
    const router_shoplist = store.state.router_shop;
    function addCalculator(item) {
      store.commit("addcalulator_items", item);
      console.log(store.state.calculator_items);
    }
    return { router_shoplist, addCalculator };
  },
};
</script>
<template>
  <div class="container2" v-for="(item, index) in router_shoplist" :key="index">
    <div class="container">
      <div class="left">
        <div class="left_img">
          <img :src="item.card_img" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="desc">
          <div class="right_title">{{ item.card_title }}</div>
          <div class="right_kcal">{{ item.card_kcal }}Kcal</div>
          <div class="right_desc">
            {{ item.card_desc }}
          </div>
        </div>
      </div>
    </div>

    <div class="container_desc">
      <div class="container_info">
        <div class="container_info_title">營養資訊</div>
        <hr />
        <button
          class="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          查看成分
        </button>
        <hr />

        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            {{ item.card_info }}
          </div>
        </div>
        <button
          class="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample1"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          查看營養資訊與過敏原
        </button>
        <hr />

        <div class="collapse" id="collapseExample1">
          <div class="card card-body">
            <table>
              <tr>
                <td>營養資訊</td>
                <td>每份</td>
                <td>每日參考值百分比</td>
              </tr>
              <tr>
                <td>熱量</td>
                <td>{{ item.card_nutritional[0].kcal }}</td>
                <td>30% DV</td>
              </tr>
              <tr>
                <td>蛋白質</td>
                <td>{{ item.card_nutritional[0].protein }}</td>
                <td>46% DV</td>
              </tr>
              <tr>
                <td>脂肪</td>
                <td>{{ item.card_nutritional[0].fat }}</td>
                <td>54% DV</td>
              </tr>
              <tr>
                <td>碳水化合物</td>
                <td>{{ item.card_nutritional[0].car }}</td>
                <td>72% DV</td>
              </tr>

              <tr>
                <td>糖</td>
                <td>{{ item.card_nutritional[0].sugar }}</td>
                <td>17% DV</td>
              </tr>
              <tr>
                <td>鈉</td>
                <td>{{ item.card_nutritional[0].sodium }}</td>
                <td>45% DV</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <button @click="addCalculator(item)">加入營養計算器</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  position: relative;
  top: 40px;
  width: 75%;
}
.container2 {
  width: 75%;
}
.left {
  width: 50%;
}
.left_img {
  width: 100%;
  text-align: center;
}
.left_img > img {
  width: 80%;
}
.right {
  width: 50%;
}
.desc {
  text-align: left;
}
.right_title {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 2px;
}
.container_desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 50px;
  height: 100vh;
  background-color: rgb(221, 220, 219);
}
.container_info {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.card {
  width: 100%;
}
.container_info_title {
  display: block;
  text-align: center;
  font-size: 24px;
  position: relative;
  top: 10px;
  letter-spacing: 1px;
}
.container_info > button {
  text-align: left;
}
.right_kcal {
  font-size: 16px;
  margin: 10px 10px 10px 0px;
  font-weight: 500;
}
@media (max-width: 540px) {
  .container {
    width: 100%;
    margin-top: 60px;
  }
  .container2 {
    width: 100%;
  }
}
</style>