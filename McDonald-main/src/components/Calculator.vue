<template>
  <div class="container">
    <div class="row">
      <div class="col col2">
        <table>
          <tr>
            <th>營養資訊</th>
            <th>每份</th>
            <th>每日參考值百分比</th>
          </tr>
          <tr>
            <td>熱量(Kcal)</td>
            <td>{{ totalkcal }}</td>
            <td>{{ percentageKcal }}％DV</td>
          </tr>
          <tr>
            <td>蛋白質(g)</td>
            <td>{{ totalprotein }}</td>
            <td>{{ percentageProtein }}％DV</td>
          </tr>
          <tr>
            <td>脂肪(g)</td>
            <td>{{ totalfat }}</td>
            <td>{{ percentageFat }}％DV</td>
          </tr>
          <tr>
            <td>碳水化合物(g)</td>
            <td>{{ totalcar }}</td>
            <td>{{ percentageCar }}％DV</td>
          </tr>

          <tr>
            <td>糖(g)</td>
            <td>{{ totalsugar }}</td>
            <td>{{ percentageSugar }}％DV</td>
          </tr>
          <tr>
            <td>鈉(mg)</td>
            <td>{{ totalsodium }}</td>
            <td>{{ percentageSodium }}％DV</td>
          </tr>
        </table>
      </div>
      <div class="list">
        <p>列表清單：</p>
        <div class="row items" v-for="(item, index) in item_list" :key="index">
          <hr />
          <div class="col-3 listNum">
            <div>{{ index + 1 }}</div>
          </div>
          <div class="col-7 item">
            <img :src="item.card_img" alt="" />
            <div>
              <h2>{{ item.card_title }}</h2>
              <h6>{{ item.card_kcal }}Kcal</h6>
            </div>
          </div>
          <div class="col-1 listBun">
            <div>
              <a class="lista" @click="remove_item(index)">刪除</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const item_list = store.state.calculator_items;
    console.log(item_list);
    const totalkcal = ref(0);
    const totalprotein = ref(0);
    const totalfat = ref(0);
    const totalcar = ref(0);
    const totalsugar = ref(0);
    const totalsodium = ref(0);

    const percentageKcal = ref(0);
    const percentageProtein = ref(0);
    const percentageFat = ref(0);
    const percentageCar = ref(0);
    const percentageSugar = ref(0);
    const percentageSodium = ref(0);

    // const total_kcal2 = computed(() => {
    //   return item_list.value.reduce(
    //     (total, item) => total + parseInt(item),
    //     0
    //   );
    // });

    function calculator() {
      totalkcal.value = 0;
      totalprotein.value = 0;
      totalfat.value = 0;
      totalcar.value = 0;
      totalsugar.value = 0;
      totalsodium.value = 0;
      percentageKcal.value = 0;
      percentageProtein.value = 0;
      percentageFat.value = 0;
      percentageCar.value = 0;
      percentageSugar.value = 0;
      percentageSodium.value = 0;

      for (let i = 0; i < item_list.length; i++) {
        totalkcal.value = totalkcal.value + parseFloat(item_list[i].card_kcal);
        percentageKcal.value = ((totalkcal.value / 2000) * 100).toFixed(2);
        totalprotein.value =
          totalprotein.value +
          parseFloat(item_list[i].card_nutritional[0].protein);
        percentageProtein.value = ((totalprotein.value / 60) * 100).toFixed(2);

        totalfat.value =
          totalfat.value + parseFloat(item_list[i].card_nutritional[0].fat);
        percentageFat.value = ((totalfat.value / 60) * 100).toFixed(2);

        totalcar.value =
          totalcar.value + parseFloat(item_list[i].card_nutritional[0].car);
        percentageCar.value = ((totalcar.value / 300) * 100).toFixed(2);

        totalsugar.value =
          totalsugar.value + parseFloat(item_list[i].card_nutritional[0].sugar);
        percentageSugar.value = ((totalsugar.value / 50) * 100).toFixed(2);

        totalsodium.value =
          totalsodium.value +
          parseFloat(item_list[i].card_nutritional[0].sodium);
        percentageSodium.value = ((totalsodium.value / 2000) * 100).toFixed(2);
      }
      return {
        totalkcal,
        totalprotein,
        totalcar,
        totalfat,
        totalsodium,
        totalsugar,
        percentageCar,
        percentageFat,
        percentageKcal,
        percentageProtein,
        percentageSodium,
        percentageSugar,
      };
    }
    function remove_item(index) {
      store.commit("remove", index);

      calculator();
    }
    onMounted(() => {
      calculator();
    });
    return {
      item_list,
      totalkcal,
      totalprotein,
      totalcar,
      totalfat,
      totalsodium,
      totalsugar,
      remove_item,
      percentageCar,
      percentageFat,
      percentageKcal,
      percentageProtein,
      percentageSodium,
      percentageSugar,
    };
  },
};
</script>
<style scoped>
.col2 {
  display: flex;
  justify-content: center;
}
.list {
  position: relative;
  margin-top: 40px;
}
.list > p {
  display: block;
  text-align: left;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: 700;
}

.listNum {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
.listBun {
  display: flex;
  justify-content: center;
  align-items: center;
}
.lista {
  color: #be3348;
  cursor: pointer;
  text-decoration: none;
}
.lista:hover {
  color: #131312;
}
.item {
  display: flex;
  align-items: center;
  justify-content: left;
}
.item img {
  width: 30%;
}

table {
  position: relative;
  margin-top: 20px;
}
tr:last-of-type {
  border-bottom: 2px solid #131312;
}
tr {
  border-bottom: 1px solid #dddddd;
}
td {
  background-color: #ffffff;
  width: 25vw;
  height: 50px;
  text-align: center;
}
th {
  background-color: #be3348;
  color: #ffffff;
  width: 25vw;
  height: 75px;
  text-align: center;
}
</style>