<!--  -->
<template>
  <div>
    <nav-bar :title="title" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      title: [
        { name: "首页", path: "/home" },
        { name: "留言", path: "/message" },
        { name: "友邻", path: "/links" },
        { name: "圈子", path: "/friends" },
        { name: "归档", path: "/timelines" },
      ],
    };
  },
};
</script>

<style  scoped>
@import "assets/css/base.css";
@import "assets/css/normalize.css";
</style>
