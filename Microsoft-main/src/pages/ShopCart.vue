<template>
  <div class="container">
    <div class="cart_list">
      <form class="cart_list_form">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">姓名</span>
          <input
            type="text"
            class="form-control"
            v-model="user_list.name"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">手機</span>
          <input
            type="text"
            class="form-control"
            v-model="user_list.phone"
            placeholder="Phone"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">電子郵件</span>
          <input
            type="text"
            class="form-control"
            v-model="user_list.email"
            placeholder="Username"
            aria-label="Username"
          />
          <span class="input-group-text">@</span>
          <input
            type="text"
            class="form-control"
            v-model="user_list.emailAddress"
            placeholder="example.com"
            aria-label="Server"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">地址</span>
          <input
            type="text"
            class="form-control"
            v-model="user_list.address"
            placeholder="Adress"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button class="order" @click="add">送出訂單</button>
      </form>
    </div>

    <div class="list">
      <ul class="list-ul">
        <li
          class="list_model"
          v-for="(item, index) in shoplist_final"
          :key="index"
        >
          <img :src="item.img" class="list_pic" />
          <div class="list_croup">
            <h4 class="list_title">{{ item.name }}</h4>
            <p class="list_price">{{ item.price }}</p>
          </div>

          <div class="list_button">
            <button class="list_plus" @click="item.num++">+</button>
            <div class="list_num">{{ item.num }}</div>
            <button
              class="list_increase"
              v-if="item.num > 0"
              @click="
                item.num--;
                list_num0(item.num, index);
              "
            >
              -
            </button>
            <button class="list_remove" @click="list_remove(index)">X</button>
          </div>
        </li>
        <p class="list_total">結帳金額:{{ shoplist_total() }}</p>
      </ul>
    </div>
  </div>
</template>
<script>
import { onUpdated, reactive, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";
import { async } from "@firebase/util";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const user_list = ref({
      name: "",
      phone: "",
      email: "",
      emailAddress: "",
      address: "",
    });
    const store = useStore();
    const shoplist_final = store.state.count;
    function list_remove(index) {
      console.log(index);
      store.commit("remove", index);
    }
    function list_num0(e, index) {
      if (e <= 0) {
        return list_remove(index);
      }
    }
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("登入帳號" + user.email);
      } else {
        console.log("沒有登入");
      }
    });

    async function add() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const user = auth.currentUser;
          const docRef = addDoc(collection(firestore, user.email), {
            user: shoplist_final,
            order: user_list.value,
            total: shoplist_total(),
          });
        } else {
          alert("尚未登入");
          router.push("/login");
        }
      });
    }

    function shoplist_total() {
      let total = 0;
      for (let i = 0; i < store.state.count.length; i++) {
        let amount = store.state.count[i].price.replace(/[^0-9]/g, "");
        total = total + parseInt(amount) * store.state.count[i].num;
      }
      let format = total.toLocaleString();
      return format;
    }
    return {
      shoplist_final,
      list_remove,
      list_num0,
      shoplist_total,
      add,
      user_list,
    };
  },
};
</script>
<style scoped>
@media (max-width: 700px) {
  .container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    width: 90%;
    position: relative;
  }
  .list {
    margin-top: 30px;
  }
  .list-ul {
    margin: 0;
    padding: 0;
  }
  .list_croup {
    width: 100%;
  }
  .cart_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .list_model {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
  }
  .order {
    width: 30%;
    position: relative;
    text-align: left;
    background-color: #3c76d0;
    color: #ffffff;
    padding: 5px;
    font-size: 14px;
    letter-spacing: 2px;
    border-radius: 3px;
    text-align: center;
    margin: auto;
  }
  .cart_list_form {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;

    margin-bottom: 30px;
  }
}
@media (min-width: 700px) {
  .container {
    margin-top: 30px;
    position: relative;
    display: flex;
  }
  .list_model {
    width: 80%;
    height: 150px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
  }
  .list {
    width: 50%;
  }
  .list_croup {
    width: 50%;
  }
  .cart_list {
    width: 50%;
  }
  .order {
    width: 30%;
    position: relative;
    text-align: left;
    background-color: #3c76d0;
    color: #ffffff;
    padding: 5px;
    font-size: 14px;
    letter-spacing: 2px;
    border-radius: 3px;
    text-align: center;
  }
  .cart_list_form {
    width: 100%;
    position: relative;
  }
}
* {
  box-sizing: border-box;
}

.cart_list_form label {
  width: 100%;
}

.list_pic {
  width: 20%;
  margin-right: 20px;
}

.list_title {
  font-size: 13px;
}
.list_price {
  font-size: 13px;
  color: blue;
}
.list_button {
  width: 20%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  vertical-align: baseline;
  margin: 10px;
}
button {
  width: 20px;
  font-size: 15px;
  font-weight: bolder;
  border: none;
  margin: 5px;
  background: none;
}
.list_num {
  font-size: 20px;
}
.list_total {
  width: 80%;
  margin: auto;
  position: relative;
  text-align: center;
  background-color: #3c76d0;
  color: white;
  padding: 5px;
  font-size: 14px;
  letter-spacing: 2px;
  border-radius: 3px;
}
</style>
