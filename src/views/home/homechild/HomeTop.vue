<!--helloworld-->
<template>
  <div class="home-top">
    <img src="~assets/img/upload/hello-world.png" alt="" />
    <div class="hello-world">
      <h1>Hello World!</h1>
      <button>阅读全文</button>
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
.home-top {
  position: relative;
  width: 1000px;
  margin: 0 auto;
  margin-top: 70px;
}
.home-top img {
  width: 100%;

  border-radius: 15px;
}
.hello-world {
  position: absolute;
  bottom: 60px;
  left: 50px;
}
.hello-world h1 {
  font-weight: 400;
}
.hello-world button {
  padding: 8px 15px;
  background-color: #ff5252;
  border: 1px solid #ff5252;
  color: #fff;
  border-radius: 18px;
  box-shadow: 0px 6px 8px -5px black;
}
</style>
