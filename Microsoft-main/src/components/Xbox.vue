<template>
  <section class="xbox">
    <div class="content">
      <h2>Xbox Game Pass Ultimate</h2>
      <p>
        Xbox Game Pass Ultimate Xbox Live Gold 和超過 100 款高品質主機和 PC
        遊戲。與朋友一起玩，發現你下一個最喜歡的遊戲。
      </p>
      <router-link to="#" class="btn">
        立即加入<i class="fas fa-chevron-right"></i>
      </router-link>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css");
.xbox {
  width: 100%;
  height: 350px;
  background: url("https://i.ibb.co/tBJGPD9/xbox.png") no-repeat center
    center/cover;
  margin-bottom: 20px;
}
.xbox .content {
  width: 40%;
  padding: 50px 0 0 30px;
}
.xbox p {
  margin: 10px 0 20px;
}
</style>
