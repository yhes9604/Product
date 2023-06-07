<template>
  <div class="container">
    <div class="m-5">
      <div class="img-css">
        <div>
          <img
            src="https://www02.dimension.com.tw/static/img/product/Microsoft/microsoft_logo.png"
            alt=""
          />
          <p>創建帳戶有好多好處 : 結帳速度更快、保留多個地址、跟蹤訂單等等</p>
          <button class="btn btn-sm btn-block">
            <router-link to="/register"> 建立新帳戶 </router-link>
          </button>
        </div>
      </div>
      <div class="form-css">
        <form>
          <p class="form-member">會員登入</p>
          <div class="form-group">
            <label class="form-title">電子郵件</label>
            <input
              type="email"
              class="form-control form-control-lg"
              v-model="user.email"
            />
          </div>

          <div class="form-group">
            <label class="form-title">密碼</label>
            <input
              type="password"
              class="form-control form-control-lg"
              v-model="user.password"
            />
          </div>

          <button
            type="submit"
            class="btn btn-sm btn-block"
            @click.prevent="userLogin"
          >
            登入
          </button>

          <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/forgotPassword">忘記密碼了嗎?</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    onMounted(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push("/center");
        } else {
          router.push("/login");
        }
      });
    });
    const router = useRouter();
    const user = ref({
      email: "",
      password: "",
    });
    const userLogin = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, user.value.email, user.value.password)
        .then(() => {
          router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    };
    return { user, userLogin };
  },
};
</script>
<style scoped>
@media (max-width: 700px) {
  .m-5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .form-css {
    margin-top: 50px;
  }
  .btn {
    display: inline-block;
    width: 55% !important;
  }
}
@media (min-width: 700px) {
  .m-5 {
    display: flex;
    justify-content: center;
  }
  .img-css {
    position: relative;
    width: 45%;
  }
  .form-css {
    display: flex;
    width: 45%;
    justify-content: center;
    position: relative;
    align-items: center;
  }
}

.img-css img {
  width: 100%;
}

.form-css form {
  position: relative;
}
.btn {
  background-color: #3c76d0;
  color: white;
  width: 30%;
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 10px;
  padding: 6px;
}
.btn:hover {
  background-color: #3569b8;
}
.btn a {
  color: white;
}
.forgot-password a {
  color: #3c76d0;
}
.form-member {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 3px;
}
.form-title {
  margin: 10px 0px 10px 0px;
  font-size: 16px;
  font-weight: 600;
}
</style>