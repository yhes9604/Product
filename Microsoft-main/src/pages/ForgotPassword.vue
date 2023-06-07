<template>
  <div class="container m-5">
    <form @submit.prevent="forgetPassword">
      <p class="forgot-titile">忘記密碼了嗎?</p>
      <div class="form-group">
        <label class="forgot-email">電子郵件</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="user.email"
        />
      </div>

      <button type="submit" class="btn btn-sm btn-block">重置密碼</button>
    </form>
  </div>
</template>
  <script>
import { reactive } from "vue";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const user = reactive({
      email: "",
    });

    const forgetPassword = () => {
      sendPasswordResetEmail(auth, user.email)
        .then(() => {
          alert("請查看您的信箱以重設密碼");
          user.email = "";
        })
        .catch((error) => {
          alert(error);
        });
    };

    return {
      user,
      forgetPassword,
    };
  },
};
</script>  
<style scoped>
@media (max-width: 700px) {
  .btn {
    background-color: #3c76d0;
    color: white;
    width: 30%;
    font-size: 16px;
    letter-spacing: 2px;
    margin-top: 10px;
    padding: 6px;
  }
}
@media (min-width: 700px) {
  .btn {
    background-color: #3c76d0;
    color: white;
    width: 30%;
    font-size: 16px;
    letter-spacing: 2px;
    margin-top: 10px;
    padding: 6px;
  }
}
.forgot-titile {
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 3px;
}
.forgot-email {
  font-size: 14px;
  font-weight: 600;
  margin: 10px 10px 10px 0px;
}
.form-control {
  width: 50%;
}

.btn:hover {
  background-color: #3569b8;
}
</style>