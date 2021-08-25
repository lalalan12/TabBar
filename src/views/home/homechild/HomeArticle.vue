<!-- home文章汇总-->
<template>
  <div class="home-article">
    <home-contact />
  </div>
</template>

<script>
import HomeContact from "./HomeContact.vue";
export default {
  components: { HomeContact },
  data() {
    return {};
  },
};
</script>

<style  scoped>
.home-article {
  width: 1000px;
  padding: 20px;
}
</style>
