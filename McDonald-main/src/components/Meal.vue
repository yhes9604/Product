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
          "https://s7d1.scene7.com/is/image/mcdonalds/big-mac_832x822_2:1-4-product-tile-desktop",
        card_title: "大麥克®",
        card_kcal: "602",
        card_desc:
          "麥當勞永遠的一號餐， 全球狂熱50年， 紐澳100%雙層純牛肉， 淋上大麥克招牌醬料， 加上生菜、吉事、洋蔥、酸黃瓜， 美味層層堆疊，口感樂趣無窮。 從美國總統到素人都是鐵粉， 經濟學家還發明「大麥克指數」致敬，果然，只有大麥克，才是大麥克！",
        card_info:
          "大麥克麵包,1/10牛肉餅,吉事片,切絲生菜,大麥克醬,脫水洋蔥,酸黃瓜",
        card_nutritional: [
          {
            kcal: "602",
            protein: "28",
            fat: "32",
            car: "51",
            sugar: "8.2",
            sodium: "902",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/double-cheese-burger_832x822:1-4-product-tile-desktop",
        card_title: "雙層牛肉吉事堡",
        card_kcal: "475",
        card_desc:
          "紐澳雙層100%優質牛肉， 搭配雙層切達吉事片， 酸黃瓜、洋蔥在裡面， 芥末醬、番茄醬淋上去， 層出不窮的經典滋味， 真的沒在跟你客氣的。",
        card_info: "漢堡麵包,1/10牛肉餅,吉事片,芥末醬,脫水洋蔥,酸黃瓜,番茄醬",
        card_nutritional: [
          {
            kcal: "475",
            protein: "26",
            fat: "26",
            car: "35",
            sugar: "7.2",
            sodium: "855",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/grilled-bbq-chicken-burger_832x822:1-4-product-tile-desktop",
        card_title: "嫩煎雞腿堡",
        card_kcal: "386",
        card_desc:
          "低熱量的清爽美味，捨我其誰。 獨特的BBQ風味醬，搭配多汁去骨鷄腿肉，以慢火嫩煎入味，意料之外的絕配。 加上大片牛番茄與三道水洗新鮮生菜，清爽感加乘，喜歡就醬吃，越吃越順口！",
        card_info: "滿意麵包,嫩煎燒烤醬,切片生菜,番茄片,嫩煎鷄腿排",
        card_nutritional: [
          {
            kcal: "386",
            protein: "25",
            fat: "13",
            car: "43",
            sugar: "13",
            sodium: "738",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/mcchicken_832x822:1-4-product-tile-desktop",
        card_title: "麥香雞®",
        card_kcal: "387",
        card_desc:
          "清脆爽口新鮮生菜，外酥內嫩麥香鷄排，淋上特製醬料，通通夾進撒上芝麻顆粒的滿意麵包！熟悉的經典美味， 不只超值，更有品質。",
        card_info: "滿意麵包,麥香鷄排,麥香鷄,醬切絲生菜",
        card_nutritional: [
          {
            kcal: "387",
            protein: "14",
            fat: "17",
            car: "45",
            sugar: "6.6",
            sodium: "796",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/%E9%9B%99%E5%B1%A4%E9%BA%A5%E9%A6%99%E9%B7%84:1-4-product-tile-desktop",
        card_title: "雙層麥香雞",
        card_kcal: "520",
        card_desc:
          "兩片麥香鷄排超滿足，經典美味再加倍!酥嫩麥香鷄排搭配新鮮生菜，淋上特製醬料，通通夾進撒上芝麻顆粒的滿意麵包!熟悉經典美味，雙層口感，大大滿足。",
        card_info: "滿意麵包,麥香鷄排,麥香鷄,醬切絲生菜",
        card_nutritional: [
          {
            kcal: "520",
            protein: "22",
            fat: "25",
            car: "54",
            sugar: "6.6",
            sodium: "1125",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/chicken-mcnuggets-6-pieces_832x822:1-4-product-tile-desktop",
        card_title: "麥克鷄塊®(6塊)",
        card_kcal: "266",
        card_desc:
          "大家都愛麥克鷄塊！ 100%嚴選健康優質鷄肉， 調配鷄胸和鷄腿黃金比例， 口感外酥內軟， 男女老少都愛吃， 每年熱銷超過3億片， 疊起來有6000棟台北101。 搭上經典的醣醋醬， 酸酸甜甜的越吃越順口。 你呢？今天麥克鷄塊了嗎？",
        card_info: "麥克鷄塊®   ",
        card_nutritional: [
          {
            kcal: "266",
            protein: "16",
            fat: "17",
            car: "13",
            sugar: "0",
            sodium: "429",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/chicken-mcnuggets-10-pieces_832x822:1-4-product-tile-desktop",
        card_title: "麥克鷄塊®(10塊)",
        card_kcal: "444",
        card_desc:
          "對麥克鷄塊愛不釋手嗎？ 一次點10塊更滿足！ 口感外酥內軟， 男女老少都愛吃，這樣的滋味，真好！",
        card_info: "麥克鷄塊®",
        card_nutritional: [
          {
            kcal: "444",
            protein: "26",
            fat: "28",
            car: "22",
            sugar: "0",
            sodium: "716",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/spicy-chicken-filet-burger_832x822:1-4-product-tile-desktop",
        card_title: "勁辣鷄腿堡",
        card_kcal: "516",
        card_desc:
          "整塊勁辣鷄腿排，未吃份量先得分。 滿滿生菜搭配特製美乃滋，口感豐富多層次。 芝麻漢堡蓋上去，一口咬下過足癮。 夠辣夠帶勁！意猶未盡、就是吃不膩。",
        card_info: "滿意麵包,勁辣鷄腿排,麥香鷄醬,切絲生菜",
        card_nutritional: [
          {
            kcal: "516",
            protein: "24",
            fat: "25",
            car: "51",
            sugar: "6.4",
            sodium: "919",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/chicken-mccrispy-2-pieces_832x822:1-4-product-tile-desktop",
        card_title: "原味麥脆鷄腿(2塊)",
        card_kcal: "507",
        card_desc:
          "炸雞，就要麥脆鷄。 獨一無二「黃金美味3要點」，大腿棒腿一起來！ 麥當勞炸雞使用嚴選帶骨雞腿，堅持三道裹粉五道翻滾，表皮酥脆有層次！ 首創先烤後炸工法，高溫鎖住肉汁，給你嫩、脆、爽的好滋味！ 吃過了，你也會這樣說。",
        card_info: "原味麥脆鷄腿(大腿),原味麥脆鷄腿(棒腿)",
        card_nutritional: [
          {
            kcal: "507",
            protein: "31",
            fat: "34",
            car: "20",
            sugar: "0",
            sodium: "783",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/spicy-chicken-mccrispy-2-pieces_0321-3:1-4-product-tile-desktop",
        card_title: "辣味麥脆鷄腿(2塊)",
        card_kcal: "520",
        card_desc:
          "炸雞加辣更夠味！麥當勞獨家「黃金美味3要點」，火辣的凱恩辣椒，搭配秘製炸雞辛香料，香辣夠味；使用嚴選優質雞腿，大口咬下超過癮；經歷先烤後炸工法，高溫鎖住肉汁，外脆內嫩又多汁的麥脆鷄，讓人一口接一口，欲罷不能！炸雞，就要麥脆鷄！",
        card_info: "辣味麥脆鷄腿(大腿),辣味麥脆鷄腿(棒腿)",
        card_nutritional: [
          {
            kcal: "520",
            protein: "30",
            fat: "35",
            car: "23",
            sugar: "0",
            sodium: "1021",
          },
        ],
      },
      {
        card_img:
          "https://s7d1.scene7.com/is/image/mcdonalds/filet-o-fish_832x822:1-4-product-tile-desktop",
        card_title: "麥香魚®",
        card_kcal: "338",
        card_desc:
          "選用來自純淨海域的100%真鱈魚製成現炸魚排，佐以濃郁酸甜塔塔醬與1/2片切達起司，再蓋上柔軟「蒸」麵包，麥香魚的美味魔力，讓所有人都不自覺著迷！",
        card_info: "漢堡麵包,麥香魚片,吉事片,麥香魚醬",
        card_nutritional: [
          {
            kcal: "338",
            protein: "15",
            fat: "16",
            car: "36",
            sugar: "4.6",
            sodium: "602",
          },
        ],
      },
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
          "布利歐壓花麵包,勁辣鷄腿排,厚切培根,原葉生菜,番茄片,BLT燒烤醬,番茄醬",
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
          "布利歐壓花麵包,勁辣鷄腿排,厚切培根,原葉生菜,番茄片,BLT燒烤醬,番茄醬",
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
    ]);
    return { meallist, router_shop };
  },
};
</script>

<template>
  <div class="desc_main container">
    <div class="meal_title">超值全餐</div>
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
