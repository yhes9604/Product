<template>
  <div class="container m-5">
    <form @submit.prevent="userRegistration">
      <p class="rigister_title">會員註冊</p>

      <div class="form-group">
        <label class="rigister_form">名字</label>
        <input
          type="text"
          class="form-control form-control-lg"
          v-model="user.name"
        />
      </div>

      <div class="form-group">
        <label class="rigister_form">電子郵件</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="user.email"
        />
      </div>

      <div class="form-group">
        <label class="rigister_form">密碼</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="user.password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">註冊</button>

      <p class="register_p rigister_form">
        已經註冊過了?
        <router-link to="/login">登入</router-link>
      </p>
    </form>
  </div>
</template>
  <script>
import { reactive } from "vue";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const user = reactive({
      name: "",
      email: "",
      password: "",
    });

    const userRegistration = async () => {
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        router.push("/login");
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      user,
      userRegistration,
    };
  },
};
</script>  
<style scoped>
.rigister_form {
  margin: 10px 0 10px 0px;
  font-size: 13px;
  font-weight: 600;
}
.rigister_title {
  font-size: 30px;
  font-weight: bolder;
  letter-spacing: 2px;
}
.form-control {
  width: 50%;
}

.btn {
  background-color: #3c76d0;
  color: white;
  width: 30%;
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 10px;
  padding: 6px;
  border: none;
}
.btn:hover {
  background-color: #3569b8;
}
.register_p {
  color: #3569b8;
}

.register_p a {
  color: #4282e2;
  border-bottom: 1px solid #333;
}
.register_p a:hover {
  color: black;
}
</style>