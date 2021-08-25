<!--  -->
<template>
  <div class="home-label-items">
    <div class="label">
      <span>标签</span>
      <div></div>
    </div>
    <div class="article">
      <span>随机文章</span>
      <div></div>
    </div>
    <div class="comment">
      <span>最新评论</span>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style  scoped>
.home-label-items .label div,
.home-label-items .article div,
.home-label-items .comment div {
  margin: 15px 0;
  border-radius: 5px;
  background-color: #fff;
}
.home-label-items .label div {
  height: 80px;
}
.home-label-items .article div {
  height: 180px;
}
.home-label-items .comment div {
  height: 480px;
}
</style>
