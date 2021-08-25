<!-- 导航栏-->
<template>
  <div class="nav-bar">
    <div class="left">
      <h2>blog</h2>
    </div>
    <div class="center">
      <ul>
        <li
          v-for="(item, index) in title"
          :key="index"
          :class="{ color: currentIndex == index }"
          @click="liClick(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="right">
      <img
        src="~assets/img/icon/search1.png"
        alt=""
        class="img-search"
        v-if="isShow"
        @click="search"
      />
      <img
        src="~assets/img/icon/search2.png"
        alt=""
        class="img-search"
        @click="search"
        v-else
      />
      <img
        src="~assets/img/icon/moon.png"
        alt=""
        class="img-moon"
        @click="moonChange"
        v-if="isShow"
      />
      <img
        src="~assets/img/icon/sun.png"
        alt=""
        class="img-sun"
        v-else
        @click="sunChange"
      />
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      currentIndex: 0,
      color: "",
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    // 背景更换
    moonChange() {
      this.isShow = false;
      document.querySelector(".nav-bar").style.backgroundColor = "#000";
      document.querySelector("body").style.color = "#fff";
      document.querySelector("body").style.backgroundColor = "#000";
    },
    sunChange() {
      this.isShow = true;
      document.querySelector(".nav-bar").style.backgroundColor = "#fff";
      document.querySelector("body").style.color = "#000";
      document.querySelector("body").style.backgroundColor = "#f4f4f4";
    },
    // 页面显示
    liClick(index) {
      this.currentIndex = index;
      this.$router.replace(this.title[index].path);
    },
    // 搜索页面显示
    search() {
      this.$router.replace("/search");
    },
    //登录页面
    login() {
      this.$router.replace("/login");
    },
  },
};
</script>

<style  scoped>
.nav-bar {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 56px;
  line-height: 56px;
  background-color: #fff;
  z-index: 9;
}
.left,
.right {
  flex: 1;
  float: left;
}
.left {
  text-align: center;
}
.center ul {
  width: 600px;
}
.center ul li {
  float: left;
  padding: 0 25px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
}
.right .img-search {
  height: 26px;
  margin-right: 30px;
  padding: 8px 15px;
  cursor: pointer;
}
.right .img-moon {
  height: 26px;
  padding: 8px 15px;
  cursor: pointer;
}
.right .img-sun {
  height: 26px;
  padding: 8px 15px;
  cursor: pointer;
}
.right button {
  padding: 8px 15px;
  background-color: #2196f3;
  border: 1px solid #2196f3;
  border-radius: 2px;
  color: #fff;
  margin-left: 25px;
  cursor: pointer;
}
.color {
  background-color: #d8d8d8;
}
</style>
