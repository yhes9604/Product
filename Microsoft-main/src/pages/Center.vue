<template>
  <div class="container">
    <div class="center-main">
      <div>
        會員資料：
        <p>{{ userEmail }}</p>
      </div>
    </div>

    <div class="center-right">
      <div>
        <button @click="order">訂單資訊</button>
        <li
          class="list_model"
          v-for="(item, index) in shoplist3_final"
          :key="index"
        >
          <p class="product_title">訂單</p>
          <hr />
          <div class="test" v-for="product in item.user" :key="index">
            <div class="product_list">
              <img :src="product.img" class="list_pic" />
              <div class="product_p">
                <h4 class="list_title">{{ product.name }}</h4>
                <p class="list_price">{{ product.price }}</p>
              </div>
            </div>
          </div>
          <hr />
          <p class="product_total">總金額:{{ item.total }}</p>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, onMounted } from "vue";
import {
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

import { firestore } from "../firebase/firebaseConfig";
import { async } from "@firebase/util";
export default {
  setup() {
    const userEmail = ref("");
    const shoplist3_final = ref();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userEmail.value = user.email;
        console.log(userEmail.value);
      } else {
        console.log("沒有登入");
      }
    });
    async function order() {
      const user = auth.currentUser;
      const querySnapshot = await getDocs(collection(firestore, user.email));
      const fbshoplist = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        console.log(doc.data().user);

        fbshoplist.push(doc.data());
      });
      shoplist3_final.value = fbshoplist;
      console.log(shoplist3_final.value);
    }
    return { userEmail, order, shoplist3_final };
  },
};
</script>
<style scoped>
@media (max-width: 700px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
  .center-main {
    width: 80%;
    position: relative;
  }
  .center-right {
    width: 100%;
    position: relative;
  }
  .list_model {
    background-color: #f9f9f9;
    list-style-type: none;
    width: 100%;
  }
}
@media (min-width: 700px) {
  .container {
    display: flex;
  }
  .center-main {
    width: 50%;
    position: relative;
  }
  .center-right {
    width: 50%;
    position: relative;
  }
  .list_model {
    background-color: #f9f9f9;
    margin: 20px;
    list-style-type: none;
  }
}

.product_title {
  font-size: 24px;
  font-weight: 600;
}
.test {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 3px;
}
.product_list {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.product_total {
  font-size: 16px;
  font-weight: 600;
}
.product_p {
  width: 100%;
}
.test img {
  width: 20%;
  margin-right: 50px;
  margin-left: 10px;
}
.test h4 {
  font-size: 16px;
  position: relative;
  width: 100%;
}
.test p {
  font-size: 14px;
  color: #e03838;
}
</style>