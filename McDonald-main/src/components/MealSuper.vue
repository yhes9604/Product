<script >
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    function router_shop(item) {
      store.commit("remove_router");
      store.commit("addrouter_shop", item);
    }
    const meallist = ref([
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/1220signature832x822_1:1-4-product-tile-desktop",
        card_title: "BLT 安格斯牛肉堡",
        card_kcal: "544",
        card_desc:
          "麥當勞獻上漢堡界的「饗宴三重奏」！ 頂級厚實4盎司安格斯牛肉配上經典BLT三大食材， 本產香Q培根的煙燻味，交疊在地鮮採牛番茄的清甜，以及整片當季原葉生菜的爽脆。 精心烘烤的香軟布里歐麵包，包覆著厚實、多汁、有勁、鮮甜、爽口等層次滋味， 每一口，都是美味之最！",
        card_info:
          "布利歐壓花麵包,安格斯牛肉餅,厚切培根,原葉生菜,番茄片,BLT燒烤醬,番茄醬",
        card_nutritional: [
          {
            kcal: "544",
            protein: "29",
            fat: "29",
            car: "41",
            sugar: "10",
            sodium: "942",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/1220signature8832x822_2:1-4-product-tile-desktop",
        card_title: "BLT 辣脆鷄腿堡",
        card_kcal: "555",
        card_desc:
          "三種食材的英文字首為名的經典之味 – BLT，獻上不一樣的豐富層次！ 嚴選本產煙燻培根、台灣鮮採牛番茄、當季原葉生菜，配上辣脆鷄腿排， 一口咬下，先感受到布里歐麵包的柔軟，然後是生菜與番茄的清爽， 接著席捲而來的是，香Q培根的煙燻味與酥脆鷄腿排的微辣刺激， 經典滋味，化身極選之味！",
        card_info:
          "布利歐壓花麵包,BLT燒烤,醬番茄醬,原葉生菜,番茄片,勁辣鷄腿排,厚切培根",
        card_nutritional: [
          {
            kcal: "555",
            protein: "26",
            fat: "26",
            car: "56",
            sugar: "10",
            sodium: "1164",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/1220signature8832x822_3:1-4-product-tile-desktop",
        card_title: "BLT 嫩煎鷄腿堡",
        card_kcal: "456",
        card_desc:
          "濃郁與清爽能並存嗎？極選系列一次獻上兩種味蕾饗宴！ 嚴選本產培根的香Q與嫩煎鷄腿排的多汁，搭配煙燻BBQ醬，疊出層層濃郁香氣， 同時，當季原葉生菜與台灣鮮採番茄，為味蕾注入清爽鮮甜。 濃郁與清爽相互襯托，每樣食材完美呈現各自的極致美味， 層層講究入口後，便停不下來。",
        card_info:
          "布利歐壓花麵包,BLT燒烤醬,番茄醬,原葉生菜,番茄片,嫩煎鷄腿排,厚切培根",
        card_nutritional: [
          {
            kcal: "456",
            protein: "27",
            fat: "20",
            car: "42",
            sugar: "11",
            sodium: "972",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/1220signature8832x822_4:1-4-product-tile-desktop",
        card_title: "蕈菇安格斯牛肉堡",
        card_kcal: "584",
        card_desc:
          "「蔬菜界的牛排」－蕈菇，奢華入堡！ 大火翻炒厚切蕈菇，搭配高溫鎖汁的頂級4盎司安格斯牛肉， 鋪上當季爽脆原葉生菜、疊上柔滑起司，再淋上法式香草醬， 最後蓋上奶香布里歐麵包，層層講究，一氣呵成！ 鮮甜與濃郁交織出的極選美味，請享用",
        card_info:
          "布利歐壓花麵包,安格斯牛肉餅,吉事片,原葉生菜,法式香草蕈菇醬,法式香草醬",
        card_nutritional: [
          {
            kcal: "584",
            protein: "30",
            fat: "34",
            car: "39",
            sugar: "7.2",
            sodium: "1050",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/caesar-salad-with-spicy-fried-chicken-filet_832x822:1-4-product-tile-desktop",
        card_title: "凱撒辣脆鷄沙拉",
        card_kcal: "360",
        card_desc:
          "簡單的沙拉，也能有不簡單的講究！ 在最新鮮多汁的時期採收的台灣牛番茄，搭配清脆鮮甜的當季原葉生菜， 再鋪上香濃巧達吉事片與帶點微辣的酥脆鷄腿排，輕輕挑起味蕾並增添飽足感。 不只口感豐富、層次分明，更賞心悅目， 簡單沙拉，躍升味覺與視覺的饗宴！",
        card_info: "切片生菜,原葉生菜,玉米粒,番茄片,葡萄乾,勁辣鷄腿排,吉事片",
        card_nutritional: [
          {
            kcal: "360",
            protein: "21",
            fat: "20",
            car: "26",
            sugar: "5.6",
            sodium: "676",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/italian-salad-with-grilled-chicken-filet_832x822:1-4-product-tile-desktop",
        card_title: "義式烤鷄沙拉",
        card_kcal: "261",
        card_desc:
          "輕食也能講究吃！ 極選系列義式烤鷄沙拉嚴選各種新鮮食材， 從清脆鮮甜的當季原葉生菜到在地鮮採牛番茄， 再搭配吉事片與獨家香料醃製入味的鷄腿排，多汁脆嫩堆疊出層層無負擔的美味， 每口都是講究，每口都是安心。",
        card_info: "原葉生菜,玉米粒,番茄片,葡萄乾,嫩煎鷄腿排,吉事片,切片生菜",
        card_nutritional: [
          {
            kcal: "261",
            protein: "23",
            fat: "15",
            car: "12",
            sugar: "6.3",
            sodium: "483",
          },
        ],
      },
    ]);
    return { meallist, router_shop };
  },
};
</script>

<template>
  <div class="desc_main container">
    <div class="meal_title">極選系列</div>
    <div class="row row-cols-2 row-cols-md-3 g-4 p-3">
      <div class="col" v-for="(item, index) in meallist" :key="index">
        <router-link class="card" @click="router_shop(item)" to="/mealitem">
          <img :src="item.card_img" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.card_title }}</h5>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4 p-3">
      <div class="col">
        <div class="card h-100">
          <img
            src="https://www.mcdonalds.com/content/dam/sites/tw/featured-callout/desktop/whats-hot/Breakfast_Bagel/2021/1228/574x249%E6%AD%A1%E6%A8%82%E9%80%81.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">24HR​外送套餐到你家</h5>
            <p class="card-text">
              24hr外送服務，隨時用美味為你加油！現在就想吃麥當勞套餐？立即預約訂餐，美味套餐自動上門！
            </p>
            <button type="button" class="btn btn-warning">立即預訂</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://www.mcdonalds.com/content/dam/sites/tw/featured-callout/desktop/whats-hot/Breakfast_Bagel/2021/1228/574x249%E6%90%9C%E9%A4%90%E5%BB%B3.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">美味套餐就在你身邊</h5>
            <p class="card-text">
              想來份超值美味麥當勞套餐？快找到離你最近的麥當勞，多種套餐選擇讓你主餐配餐自由搭！
            </p>
            <button type="button" class="btn btn-warning">搜尋鄰近餐廳</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-3">
      <div class="col-12 col-md-6">
        <img
          class="test1"
          src="https://www.mcdonalds.com/content/dam/sites/tw/publication/desktop/2022/1220evm.jpeg"
          alt=""
        />
      </div>
      <div class="col-12 col-md-6">
        <div class="d-flex justify-content-center flex-column">
          <div class="meal_title">套餐自由配<br />超值美味多種選擇</div>
          <br />
          超值全餐供應時間為上午10:30至凌晨05:00；嫩煎鷄腿堡及牛肉類商品供應至凌晨01:00；麥香鷄、勁辣鷄腿堡、麥香魚供應至凌晨04:00；各產品供應時間請依餐廳實際供應為主；部份餐廳未供應，或僅供應部份品項​
          <br />
          1.麥克鷄塊沾醬供應規則：每份六塊麥克鷄塊餐提供沾醬1盒，每份十塊麥克鷄塊餐提供沾醬2盒，沾醬恕不提供加購
          <br />
          2.
          套餐搭配規則：配餐價格僅限於搭配主餐時有效，一份主餐限搭配一份配餐，主餐選擇以各餐廳價目表為準
          <br />
          3.套餐配餐選擇：經典配餐含中薯與38元冷/熱飲；清爽配餐含四季沙拉與38元冷/熱飲，供應時間為上午10:30至晚上10:00；勁脆配餐含麥脆鷄腿(原味/辣味)一塊與38元冷/熱飲；炫冰配餐含冰炫風®(OREO)、小薯一份與38元冷/熱飲；豪吃配餐含麥克鷄塊®六塊、小薯一份與38元冷/熱飲；地瓜配餐含金黃地瓜條與38元冷/熱飲；炫冰配餐、豪吃配餐之小薯恕不可補差額升級。以上配餐飲料皆可補差額升級其他冷/熱飲，若飲料選擇低於38元冷/熱飲，恕不退差額
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
a {
  text-decoration: none;
  color: #333;
}
.text {
  width: 80%;
  letter-spacing: 1px;
}

.meal_title {
  width: 100%;
  text-align: center;
  font-size: 36px;
  letter-spacing: 1px;
}
.card-title {
  text-align: center;
  font-weight: 400;
  font-size: 16px;
}
.test1 {
  width: 100%;
}
</style>
