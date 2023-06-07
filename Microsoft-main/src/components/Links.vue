<template>
  <section class="links">
    <div class="links-inner">
      <ul>
        <li><h3>What's New</h3></li>
        <li><router-link to="#">Surface Pro </router-link></li>
        <li><router-link to="#">Surface Laptop </router-link></li>
        <li><router-link to="#">Surface Pro </router-link></li>
        <li><router-link to="#">Windows 10 app</router-link></li>
        <li><router-link to="#">Office app</router-link></li>
      </ul>
      <ul>
        <li><h3>Microsoft Store</h3></li>
        <li><router-link to="#">Account Profil</router-link></li>
        <li><router-link to="#">Download Cente</router-link></li>
        <li><router-link to="#">Microsoft Store suppor</router-link></li>
        <li><router-link to="#">Return</router-link></li>
        <li><router-link to="#">Older trackin</router-link></li>
      </ul>
      <ul>
        <li><h3>Education</h3></li>
        <li><router-link to="#">Microsfot in educatio</router-link></li>
        <li><router-link to="#">Office for student</router-link></li>
        <li><router-link to="#">Office 365 for school</router-link></li>
        <li><router-link to="#">Deals for students</router-link></li>
        <li><router-link to="#">Microsfot Azur</router-link></li>
      </ul>
      <ul>
        <li><h3>Enterprise</h3></li>
        <li><router-link to="#">Azur</router-link></li>
        <li><router-link to="#">AppSourc</router-link></li>
        <li><router-link to="#">Automotiv</router-link></li>
        <li><router-link to="#">Governmen</router-link></li>
        <li><router-link to="#">Healthcar</router-link></li>
      </ul>

      <ul>
        <li><h3>Company</h3></li>
        <li><router-link to="#">Career</router-link></li>
        <li><router-link to="#">About Microsof</router-link></li>
        <li><router-link to="#">Company new</router-link></li>
        <li><router-link to="#">Privacy at Microsof</router-link></li>
        <li><router-link to="#">Inverstor</router-link></li>
      </ul>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.links {
  background: #f2f2f2;
  color: #616161;
  font-size: 12px;
  padding: 35px 0;
}
.links-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  align-items: flex-start;
}
.links li {
  line-height: 2.8;
}
</style>
