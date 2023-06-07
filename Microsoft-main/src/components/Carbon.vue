<template>
  <section class="carbon dark">
    <div class="content">
      <h2>Commiting To Carbon Negative</h2>
      <p>
        到 2030 年，微軟將實現負碳排放，到 2050 年，我們將清除公司自 1975
        年成立以來排放的所有碳
      </p>
      <router-link to="#" class="btn">
        了解更多 <i class="fas fa-chevron-right"></i>
      </router-link>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css");
.carbon {
  width: 100%;
  height: 400px;
  background: url("https://i.ibb.co/72cgtsz/carbon.jpg") no-repeat center
    center/cover;
}
.carbon .content {
  width: 55%;
  padding: 100px 0 0 30px;
}
.carbon p {
  margin: 10px 0 20px;
}
.dark {
  color: #fff;
}

.dark .btn {
  background: #f4f4f4;
  color: #333;
}
</style>
