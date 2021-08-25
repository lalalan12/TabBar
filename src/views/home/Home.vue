<!--  -->
<template>
  <div class="home">
    <home-top />
    <home-article />
    <footer-bar />
  </div>
</template>

<script>
import HomeTop from "./homechild/HomeTop.vue";
import HomeArticle from "./homechild/HomeArticle.vue";
import FooterBar from "components/content/FooterBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    HomeTop,
    HomeArticle,
    FooterBar,
  },
};
</script>

<style  scoped>
.home {
  width: 1000px;
  margin: 0 auto;
}
</style>
