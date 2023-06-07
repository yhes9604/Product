<template>
  <div v-for="(item, index) in shoplist_num">
    <span class="badge" v-if="index === shoplist_num.length - 1">{{
      index + 1
    }}</span>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const shoplist_num = store.state.count;

    return { shoplist_num };
  },
};
</script>
<style scoped>
.badge {
  background-color: #6394f8;
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 3px 7px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  margin-left: 5px;
  position: relative;
  left: -40px;
}
</style>