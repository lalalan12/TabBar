<!--  -->
<template>
  <div class="friends">
    <friends-items :items="items" />
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from "components/content/FooterBar.vue";
import FriendsItems from "./FriendsItems.vue";
export default {
  components: { FriendsItems, FooterBar, FooterBar },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12],
    };
  },
};
</script>

<style  scoped>
.friends {
  width: 800px;
  margin: 0 auto;
}
</style>
