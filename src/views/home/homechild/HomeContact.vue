<!-- home文章链接-->
<template>
  <div class="home-article-all">
    <div class="nav">
      <div class="all">
        <div>全部文章</div>
        <slot name="home-all-items"></slot>
      </div>
      <div class="label">
        <slot name="home-label-items"></slot>
      </div>
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
.home-article-all {
  width: 1000px;
}
.home-article-all .nav {
  display: flex;
  font-size: 20px;
}
.home-article-all .nav .all {
  flex: 2;
  margin-right: 20px;
}
.home-article-all .nav .label {
  flex: 1;
}
</style>
