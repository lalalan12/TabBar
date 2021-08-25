<!--  -->
<template>
  <div class="home">
    <home-top />
    <home-article />
  </div>
</template>

<script>
import HomeTop from "./homechild/HomeTop.vue";
import HomeActicle from "./homechild/HomeArticle.vue";
import HomeArticle from "./homechild/HomeArticle.vue";
export default {
  data() {
    return {};
  },
  components: {
    HomeTop,
    HomeArticle,
  },
};
</script>

<style  scoped>
.home {
  width: 1000px;
  margin: 0 auto;
}
</style>
