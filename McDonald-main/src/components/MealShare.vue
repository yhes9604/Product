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
          "https://s7d1.scene7.com/is/image/mcdonalds/chicken-mccrispy-sharing-box-6-pieces_832x822:1-4-product-tile-desktop",
        card_title: "麥脆鷄腿分享盒(6塊)",
        card_kcal: "3298",
        card_desc:
          "炸雞想吃腿不用再大打出手！ 嚴選帶骨雞腿，炸雞大腿棒腿，整盒都是腿！ 大人小孩都熱愛的黃金美味麥脆鷄， 三道裹粉五道翻滾，酥脆喀滋口感真是炸雞之最！ 首創先烤後炸工法，只為在你唇齒留香。高溫鎖汁，肉質鮮嫩，獨特滋味讓人吮指回味！ 麥脆鷄黃金美味3要點讓美味與你同行！任一分享盒之大薯，可更換為金黃地瓜條，歡聚就要麥當勞分享盒！",
        card_info:
          "麥脆鷄腿(6塊),原味麥脆鷄腿(大腿),原味麥脆鷄腿(棒腿),薯條(大)2包,薯條",
        card_nutritional: [
          {
            kcal: "3298",
            protein: "154",
            fat: "201",
            car: "220",
            sugar: "3.2",
            sodium: "4269",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/tender-chicken-wing-sharing-box_832x822:1-4-product-tile-desktop",
        card_title: "酥嫩鷄翅分享盒",
        card_kcal: "1628",
        card_desc:
          "老饕們站出來！ 酥嫩外皮加上鷄肉的細嫩口感，咬一口留出滿嘴肉汁，不只燙手也燙口，獨特滋味徹底攻佔味蕾！ 好朋友相聚聊天怎能少了這一味? 快揪上同好們，開一場嘖嘖作響的鷄翅派對。任一分享盒之大薯，可更換為金黃地瓜條，歡聚就要麥當勞分享盒！",
        card_info:
          "酥嫩鷄翅(12塊),酥嫩鷄翅(二節翅),酥嫩鷄翅(翅小腿),薯條(大),薯條",
        card_nutritional: [
          {
            kcal: "1628",
            protein: "116",
            fat: "95",
            car: "78",
            sugar: "1.6",
            sodium: "2556",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/spicy-chicken-wing-sharing-box_832x822:1-4-product-tile-desktop",
        card_title: "勁辣香鷄翅分享盒",
        card_kcal: "2278",
        card_desc:
          " 獨特辣味口感，實在辣得深得人心！加上酥脆外皮及咬下後流出的肉汁，絕對是你追劇的最佳配角！ 12塊勁辣香鷄翅，加1包大薯，超唰嘴、令人欲罷不能，一塊一塊再一塊！任一分享盒之大薯，可更換為金黃地瓜條，歡聚就要麥當勞分享盒！",
        card_info: "勁辣香鷄翅(12塊), 薯條 (large)",
        card_nutritional: [
          {
            kcal: "2278",
            protein: "93",
            fat: "147",
            car: "148",
            sugar: "1.6",
            sodium: "3164",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/chicken-mcnuggets-sharing-box_832x822:1-4-product-tile-desktop",
        card_title: "麥克鷄塊分享盒(20塊)",
        card_kcal: "1417",
        card_desc:
          "麥當勞經典不敗的好選擇！ 與朋友共享滿滿20塊麥克鷄塊+1包大薯，不但份量十足，面子更十足！ 無論打手遊或打牌， 就選你最好的朋友「麥克」！ 邊打邊吃超方便。 聚會唱歌也不能少， 派對最搶手的「麥克」瘋！任一分享盒之大薯，可更換為金黃地瓜條，歡聚就要麥當勞分享盒！",
        card_info: "麥克鷄塊(20塊), 薯條 (large)",
        card_nutritional: [
          {
            kcal: "1417",
            protein: "61",
            fat: "82",
            car: "110",
            sugar: "1.6",
            sodium: "1831",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/chicken-mcnuggets-sharing-box-6-pieces_832x822:1-4-product-tile-desktop",
        card_title: "麥克鷄塊分享盒(30塊)",
        card_kcal: "1861",
        card_desc:
          "男女老少最愛的麥克鷄塊，一塊接一塊永遠吃不夠，麥當勞聽到大家的心聲了，給大家更澎湃的組合！ 30塊麥克鷄塊+1包大薯，更多的麥克鷄塊等於更多的歡樂，人手一塊麥克鷄塊，讓氣氛更澎湃！任一分享盒之大薯，可更換為金黃地瓜條，歡聚就要麥當勞分享盒！",
        card_info: "麥克鷄塊(30塊), 薯條 (large)",
        card_nutritional: [
          {
            kcal: "1861",
            protein: "87",
            fat: "111",
            car: "132",
            sugar: "1.6",
            sodium: "2548",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/chicken-mcnuggets-n-mccrispy-sharing-box_832x822:1-4-product-tile-desktop",
        card_title: "鷄塊鷄腿分享盒",
        card_kcal: "3742",
        card_desc:
          "與家人朋友歡聚，有這盒炸雞和雞塊就對了！ 無論遇到各種場合， 家庭聚餐、吃貨派對、歡聚唱歌、一起看劇、草地野餐…，有「鷄塊鷄腿分享盒」就一盒搞定！ 不管炸雞腿控還是忠實的鷄塊粉，一盒滿足所有人的味蕾！任一分享盒之大薯，可更換為金黃地瓜條，歡聚就要麥當勞分享盒！",
        card_info: "麥脆鷄腿(6塊), 麥克鷄塊®(10塊), 薯條(大)2包",
        card_nutritional: [
          {
            kcal: "3742",
            protein: "180",
            fat: "229",
            car: "242",
            sugar: "3.2",
            sodium: "4985",
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
    <div class="meal_title">麥當勞分享盒</div>
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
