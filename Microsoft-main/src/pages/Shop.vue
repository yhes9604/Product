<template>
  <div class="container">
    <section class="shopsearch">
      <div class="search_radio">
        <div class="radio">
          型號
          <br />
          <label for="13"
            ><input
              type="radio"
              name="size"
              value="13"
              id="13"
              v-model="selectedOption_size"
            /><span class="round button">13</span></label
          >
          <label for="15"
            ><input
              type="radio"
              name="size"
              value="15"
              id="15"
              v-model="selectedOption_size"
            /><span class="round button">15</span></label
          >
        </div>
        <hr />

        <div class="radio">
          儲存空間
          <br />
          <label for="256"
            ><input
              type="radio"
              name="save"
              value="256"
              id="256"
              v-model="selectedOption_save"
            /><span class="round button">256GB</span></label
          >
          <label for="512"
            ><input
              type="radio"
              name="save"
              value="512"
              id="512"
              v-model="selectedOption_save"
            /><span class="round button">512GB</span></label
          >
        </div>
        <hr />

        <div class="radio">
          記憶體
          <br />
          <label for="8"
            ><input
              type="radio"
              name="memoory"
              value="8"
              id="8"
              v-model="selectedOption_memoory"
            /><span class="round button">8G</span></label
          >
          <label for="16"
            ><input
              type="radio"
              name="memoory"
              value="16"
              id="16"
              v-model="selectedOption_memoory"
            /><span class="round button">16G</span></label
          >
        </div>
        <hr />

        <div class="radio">
          處理器
          <br />
          <label for="5"
            ><input
              type="radio"
              name="processor"
              value="5"
              id="5"
              v-model="selectedOption_processor"
            /><span class="round button">i5</span></label
          >
          <label for="7"
            ><input
              type="radio"
              name="processor"
              value="7"
              id="7"
              v-model="selectedOption_processor"
            /><span class="round button">i7</span></label
          >
        </div>
        <hr />
      </div>

      <div class="search_done">
        <button class="checkbox_done" @click="checkbox_done_fun">完成</button>
        <button class="checkbox_cancle" @click="checkbox_cancle_fun">
          取消
        </button>
      </div>
    </section>
    <section class="home-cards" v-show="shopList_show">
      <div class="cards-mod" v-for="(item, index) in shopList3" :key="index">
        <router-link @click="router_shop(item)" :to="`/shopitem`">
          <img :src="item.img" alt="" />
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </router-link>
        <button @click="AddCart(item)">
          加入購物車 <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>

    <section class="home-cards" v-show="filter_show">
      <div class="cards-mod" v-for="(item, index) in filter_liset" :key="index">
        <router-link @click="router_shop(item)" :to="`/shopitem`">
          <img :src="item.img" alt="" />
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </router-link>
        <button @click="AddCart(item)">
          加入購物車 <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
    <section v-show="filter_show_none">
      <p class="filter_text">目前沒有此商品!</p>
      <br />
      <p>將自動跳轉．．．</p>
    </section>
  </div>
</template>
<script>
import { reactive, ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import {
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { firestore } from "../firebase/firebaseConfig";
import { async } from "@firebase/util";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const shopList3 = ref();
    onMounted(() => {
      onSnapshot(collection(firestore, "shoplist3"), (querySnapshot) => {
        const fbshoplist = [];
        querySnapshot.forEach((doc) => {
          const shoplist = {
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            num: doc.data().num,
            processor: doc.data().processor,
            router: doc.data().router,
            save: doc.data().save,
            size: doc.data().size,
            memoory: doc.data().memoory,
            img: doc.data().img,
          };
          fbshoplist.push(shoplist);
        });
        shopList3.value = fbshoplist;
        console.log(shopList3.value);
      });
    });
    const AddCart = (item) => {
      store.commit("addcount", item);
    };
    function router_shop(item) {
      store.commit("remove_router");
      store.commit("addrouter_shop", item);
    }
    const shopList_show = ref(true);
    const filter_show = ref(false);
    const filter_show_none = ref(false);

    const selectedOption_size = ref("15");
    const selectedOption_save = ref("256");
    const selectedOption_memoory = ref("8");
    const selectedOption_processor = ref("5");

    // const filter_liset = computed(()=>{

    //   return shopList3.filter(item => item.size == selectedOption_size.value && item.save == selectedOption_save.value && item.memoory == selectedOption_memoory.value && item.processor == selectedOption_processor.value)
    //   })
    const filter_liset = ref();

    async function checkbox_done_fun() {
      console.log(
        selectedOption_memoory.value,
        selectedOption_processor.value,
        selectedOption_save.value,
        selectedOption_size.value
      );
      // const filter_liset = computed(()=>{
      // return shopList3.value.filter(item => item.size == selectedOption_size.value && item.save == selectedOption_save.value && item.memoory == selectedOption_memoory.value && item.processor == selectedOption_processor.value)
      //  })
      const q = query(
        collection(firestore, "shoplist3"),
        where("size", "==", selectedOption_size.value),
        where("save", "==", selectedOption_save.value),
        where("memoory", "==", selectedOption_memoory.value),
        where("processor", "==", selectedOption_processor.value)
      );
      const querySnapshot1 = await getDocs(q);
      let fbfilter = [];
      querySnapshot1.forEach((doc) => {
        const filter_liset_done = {
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          num: doc.data().num,
          processor: doc.data().processor,
          router: doc.data().router,
          save: doc.data().save,
          size: doc.data().size,
          memoory: doc.data().memoory,
          img: doc.data().img,
        };
        fbfilter.push(filter_liset_done);
      });
      filter_liset.value = fbfilter;
      shopList_show.value = false;
      filter_show.value = true;
      console.log(filter_liset.value == "");
      if (filter_liset.value == "") {
        filter_show_none.value = true;
        filter_show.value = false;
        setTimeout(() => {
          shopList_show.value = true;
          filter_show_none.value = false;
        }, 2000);
      }
    }
    function checkbox_cancle_fun() {
      shopList_show.value = true;
      filter_show.value = false;
      selectedOption_memoory.value = "8";
      selectedOption_processor.value = "5";
      selectedOption_save.value = "256";
      selectedOption_size.value = "13";
      filter_show_none.value = false;
    }
    return {
      AddCart,
      shopList3,
      router_shop,
      selectedOption_size,
      checkbox_done_fun,
      selectedOption_memoory,
      selectedOption_processor,
      selectedOption_save,
      shopList_show,
      filter_show,
      checkbox_cancle_fun,
      filter_show_none,
      filter_liset,
    };
  },
};
</script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css");
@media (max-width: 700px) {
  .shopsearch {
    background-color: #f5f5f5;
    border-radius: 20px;
    display: flex;
    width: 100%;
    position: relative;
    padding: 10px;
    justify-content: center;
  }
  .search_done {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px;
    width: 20%;
  }
  .search_radio {
    display: flex;
    position: relative;
    width: 80%;
  }
  .home-cards {
    width: 100%;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .home-cards {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-bottom: 40px;
    position: relative;
    width: 100%;
  }
}
@media (min-width: 700px) {
  .shopsearch {
    position: relative;
    width: 20%;
    margin-right: 20px;
  }
  .home-cards {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-bottom: 40px;
    position: relative;
    width: 80%;
  }
}
.container {
  margin-top: 20px;
  display: flex;
  position: relative;
}
.radio input[type="radio"] {
  display: none;
}
.radio input:checked + .button {
  background: #0067b8;
  color: #fff;
  cursor: default;
}
.radio .button {
  display: inline-block;
  margin: 10px 5px 10px 0;
  padding: 5px 10px;
  background: #f7f7f7;
  color: #333;
  cursor: pointer;
  border: 1px solid #cecece;
}
.radio .button:hover {
  background: #dfdcdc;
  color: #fff;
}
.radio .round {
  border-radius: 5px;
}

.checkbox_done,
.checkbox_cancle {
  display: inline-block;
  margin: 0px 10px 10px 0;
  padding: 5px 10px;
  background: #0067b8;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #cecece;
}
.checkbox_cancle {
  background-color: #f5f5f5;
  color: #333;
}

.cards-mod {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 10px;
}
.home-cards img {
  width: 100%;
  margin-bottom: 20px;
}
.home-cards h3 {
  margin-bottom: 5px;
}
.home-cards button {
  display: inline-block;
  color: #0067b8;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid #2979c3;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  border-radius: 12px;
}
.home-cards button:hover i {
  margin-left: 10px;
}
.home-cards button:hover {
  background-color: #2979c3;
  color: white;
}
</style>
