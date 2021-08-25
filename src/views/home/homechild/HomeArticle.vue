<!-- home文章汇总-->
<template>
  <div class="home-article">
    <home-contact>
      <template #home-all-items><home-all-items /></template>
      <template #home-label-items><home-label-items /></template>
    </home-contact>
  </div>
</template>

<script>
import HomeAllItems from "./HomeAllItems.vue";
import HomeLabelItems from "./HomeLabelItems.vue";
import HomeContact from "./HomeContact.vue";
export default {
  components: { HomeContact, HomeAllItems, HomeLabelItems },
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
