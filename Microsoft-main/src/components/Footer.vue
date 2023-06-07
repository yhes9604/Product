<template>
  <div class="container">
    <footer class="footer">
      <div class="footer-inner">
        <div><i class="fas fa-globe fa-2x"></i> English (United States)</div>
        <ul>
          <li><router-link to="#">Sitemap</router-link></li>
          <li><router-link to="#">Contact Microsoft</router-link></li>
          <li><router-link to="#">Privacy & cookies</router-link></li>
          <li><router-link to="#">Terms of use</router-link></li>
          <li><router-link to="#">Trademarks</router-link></li>
          <li><router-link to="#">Safety & eco</router-link></li>
          <li><router-link to="#">About our ads</router-link></li>
          <li><router-link to="#">&copy; Microsoft 2023</router-link></li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script setup></script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css");
.footer {
  background: #f2f2f2;
  color: #616161;
  font-size: 12px;
  padding: 20px 0;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer div {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.footer div i {
  margin-right: 10px;
}
.footer ul {
  display: flex;
  flex-wrap: wrap;
}
.footer li {
  margin-right: 30px;
  margin-bottom: 20px;
}
</style>
