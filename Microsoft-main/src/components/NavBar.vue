<template>
  <div class="container">
    <div class="menu-btn" @click="toggleMenu">
      <i class="fas fa-bars fa-2x"></i>
    </div>
    <nav class="main-nav">
      <router-link to="/"
        ><img
          src="https://i.ibb.co/wwLhz98/logo.png"
          alt="Microsoft"
          class="logo"
      /></router-link>
      <ul class="main-menu" :class="{ show: isMenuVisible }">
        <li><router-link to="/">首頁</router-link></li>
        <li><router-link to="/shop">商品頁面</router-link></li>
        <li><router-link to="/login">會員中心</router-link></li>
      </ul>

      <div class="right-menu">
        <div>
          <router-link to="/login" id="user">
            <i class="fa fa-user"></i>
          </router-link>
        </div>
        <button @click="logout" v-show="logout_show" id="logout">登出</button>
        <div>
          <a id="cart" @click="nav_close()">
            <i class="fa fa-shopping-cart"></i>
          </a>
        </div>
        <Countnum />
        <div class="nav_shoplist" v-show="nav_close_item">
          <ul class="nav_Allshoplist">
            <li
              class="nav_shoplist_item"
              v-for="(item, index) in nav_shoplist_store"
              :key="index"
            >
              <p class="nav_shoplist_name">{{ item.name }}</p>
              <div class="nav_shoplist_right">
                <p class="nav_shoplist_price">{{ item.price }}</p>
                <p class="nav_shoplist_price">數量*{{ item.num }}</p>
                <button class="nav_shoplist_remove" @click="nav_remove(index)">
                  X
                </button>
              </div>
            </li>
          </ul>

          <div v-show="shoplist_total() != 0">
            <hr />
            <p class="nav_total">訂單總額：{{ shoplist_total() }}</p>
            <router-link to="/shopcart" class="nav_goShopcart"
              >結帳</router-link
            >
          </div>
          <div v-show="shoplist_total() == 0">
            <p class="nav_shoplist_none">目前購物車中沒有商品！</p>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import Countnum from "./Countnum.vue";
import { RouterLink } from "vue-router";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    onMounted(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          logout_show.value = true;
        } else {
          logout_show.value = false;
        }
      });
      console.log(logout_show.value);
    });
    const logout_show = ref(false);
    const store = useStore();
    const isMenuVisible = ref(false);
    const nav_close_item = ref(false);
    function toggleMenu() {
      isMenuVisible.value = !isMenuVisible.value;
    }
    const nav_shoplist_store = store.state.count;

    function shoplist_total() {
      let total = 0;
      for (let i = 0; i < store.state.count.length; i++) {
        let amount = store.state.count[i].price.replace(/[^0-9]/g, "");
        total += parseInt(amount);
      }
      let format = total.toLocaleString();
      return format;
    }
    console.log(shoplist_total());
    function nav_remove(index) {
      store.commit("remove", index);
    }
    function nav_close() {
      nav_close_item.value = !nav_close_item.value;
    }
    function logout() {
      const auth = getAuth();
      if (confirm("確定要登出?")) {
        signOut(auth).then(() => {
          alert("已登出");
          router.push("/");
        });
      } else {
      }
    }
    return {
      isMenuVisible,
      logout,
      logout_show,
      toggleMenu,
      nav_shoplist_store,
      nav_remove,
      nav_close,
      nav_close_item,
      shoplist_total,
    };
  },
  components: { Countnum, RouterLink },
};
</script>
<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}
#user,
#cart,
#logout {
  position: relative;
  margin-left: 5px;
  font-size: 15px;
  left: -50px;
  border: none;
  background-color: white;
}
#logout {
  font-size: 16px;
}
.right-menu {
  position: relative;
}
.nav_shoplist_none {
  margin: 30px;
}
.cart_container {
  margin: auto;
  width: 80%;
}

.shopping-cart {
  top: 200px;
  margin: 20px 0;
  float: right;
  background: rgb(209, 206, 206);
  width: 300px;
  position: relative;
  border-radius: 3px;
  padding: 20px;
}
.shopping-cart-header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}
.shopping-cart-total {
  float: right;
}
.shopping-cart-items {
  padding-top: 20px;
}
.shopping-cart-items li {
  margin-bottom: 18px;
}
.shopping-cart-items img {
  float: left;
  margin-right: 12px;
}
.item-name {
  display: block;
  padding-top: 10px;
  font-size: 16px;
}
.item-price {
  color: #6394f8;
  margin-right: 8px;
}
.item-quantity {
  color: #abb0be;
}
.shopping-cart:after {
  bottom: 100%;
  left: 89%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: white;
  border-width: 8px;
  margin-left: -8px;
}
.cart-icon {
  color: #515783;
  font-size: 24px;
  margin-right: 7px;
  float: left;
}
.button {
  background: #6394f8;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;
}
.button:hover {
  background: #729ef9;
}

.right-menu {
  display: flex;
}
.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 20px 0;
  font-size: 13px;
  box-shadow: 0px 2px 0px 0px rgba(214, 213, 213, 0.2);
  margin-bottom: 10px;
}
.logo {
  width: 70%;
}
.main-menu {
  height: 50px;
  margin: 0;
  padding: 0;
  align-items: center;
  display: flex;
}
.main-nav ul li {
  padding: 0 10px;
}
.main-nav ul li a {
  padding-bottom: 2px;
}
.main-nav ul li a:hover {
  border-bottom: 2px solid #262626;
}
.main-nav ul.main-menu {
  flex: 1;
  margin-left: 20px;
}
.menu-btn {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 2;
  display: none;
}
.main-nav ul.main-menu.show {
  transform: translateX(-20px);
  z-index: 3;
}
.nav_shoplist {
  position: absolute;
  left: -250px;
  top: 50px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  z-index: 2;
}
.nav_Allshoplist {
  border-radius: 10px;
}
.nav_shoplist_item {
  background-color: #f5f5f5;
  position: relative;
  border-radius: 5px;
  margin-right: 30px;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.nav_shoplist_name {
  margin-top: 10px;
  font-size: 12px;
  white-space: nowrap;
}
.nav_shoplist_price {
  color: rgb(103, 144, 233);
  font-size: 10px;
}
.nav_shoplist_right {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.nav_shoplist_right p {
  width: 80%;
}
.nav_shoplist_right button {
  width: 20%;
  top: -8px;
  position: relative;
  font-size: 12px;
}
.nav_goShopcart {
  display: inline-block;
  color: #0067b8;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid #2979c3;
  width: 80%;
  text-align: center;
  padding: 10px;
  border-radius: 12px;
  left: 10%;
  margin-bottom: 15px;
  position: relative;
}

.nav_goShopcart:hover {
  background-color: #2979c3;
  color: white;
}
.nav_shoplist_remove {
  border: none;
}
.nav_total {
  text-align: center;
  font-size: 16px;
}
@media (max-width: 700px) {
  .menu-btn {
    display: block;
  }
}
</style>
