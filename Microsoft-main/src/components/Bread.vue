<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb" v-for="item in setbread" :key="item.path">
        <li class="breadcrumb-item" v-if="item.meta.title !== ''">
          <a href="/">首頁</a>
        </li>
        <li class="breadcrumb-item" v-if="item.meta.title == '購物頁'">
          <a href="/shop">商品頁面</a>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          {{ item.meta.title }}
        </li>
      </ol>
    </nav>
  </div>
</template>
<script >
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const setbread = computed(() => {
      return router.currentRoute.value.matched.filter(
        (item) => item.meta.title
      );
    });
    return { setbread };
  },
};
</script>
<style scoped></style>
