<template>
  <header class="showcase">
    <h2>更多 Surfase</h2>
    <p>Surfaces 現已開始銷售 - 售完即止</p>
    <router-link to="/shop" class="btn"
      >立即購買 <i class="fas fa-chevron-right"></i
    ></router-link>
  </header>
</template>
<script setup></script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css");

.showcase {
  width: 100%;
  height: 400px;
  background: url("https://i.ibb.co/zGSDGCL/slide1.png") no-repeat center
    center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  padding-bottom: 50px;
  margin-bottom: 20px;
}
.showcase h2,
.showcase p {
  margin-bottom: 10px;
}
.btn {
  cursor: pointer;
  display: inline-block;
  border: 0;
  font-weight: bold;
  padding: 10px 20px;
  background: #262626;
  color: #fff;
  font-size: 15px;
}

.btn:hover {
  opacity: 0.9;
}
.showcase .btn {
  margin-top: 20px;
}
</style>
