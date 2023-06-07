<template>
    <div class="container m-5">
      <form >
        <h3>登入</h3>
  
        <div class="form-group">
          <label>郵件地址</label>
          <input
            type="email"
            class="form-control form-control-lg"
            v-model="user.email"
          />
        </div>
  
        <div class="form-group">
          <label>密碼</label>
          <input
            type="password"
            class="form-control form-control-lg"
            v-model="user.password"
          />
        </div>
  
        <button type="submit" class="btn btn-dark btn-lg btn-block" @click.prevent="userLogin">登入</button>
        <button class="btn btn-dark btn-lg btn-block">
          <router-link to="/register">
            註冊
          </router-link>
        </button>
  
        <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/forgotPassword">忘記密碼?</router-link>
        </p>
      </form>
    </div>
  </template>
  
  <script>
  import {signInWithEmailAndPassword,getAuth} from 'firebase/auth';
  import {ref} from 'vue';
  import { useRouter } from "vue-router";
  import {auth} from "../firebase/firebaseConfig";

  export default {
    setup(){
        const router = useRouter();
        const user = ref({
            email:"",
            password:""
        })
        const userLogin = () => {
            signInWithEmailAndPassword(auth,user.value.email, user.value.password)
            .then(() => {
            router.push('/');
            })
            .catch((error) => {
                alert(error.message);
            });
            };
        return{ user,userLogin}
    }
  };
  </script>