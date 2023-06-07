<template>
  <NavBar />
  <Bread />
  <router-view></router-view>
  <Footer />
</template>
<script setup>
import Bread from "./components/Bread.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

</script>

<style></style>
