<!--  -->
<template>
  <div class="send-message">
    <div>
      <a href="javascript:;">
        <img src="~assets/img/message/lianjie.png" alt="" />
      </a>
      <a href="javascript:;">
        <img src="~assets/img/message/tupian.png" alt="" />
      </a>
      <a href="javascript:;">
        <img src="~assets/img/message/delete.png" alt="" />
      </a>
    </div>
    <form action="post">
      <textarea type="text" placeholder="请输入..." />
    </form>
    <a href="javascript:;" class="login">请登录</a>
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
.send-message {
  margin-top: 120px;
}
.send-message div {
  width: 100%;
  height: 40px;
  background-color: #fff;
  margin-bottom: 1px;
  border-radius: 5px 5px 0 0;
}
.send-message div a img {
  height: 20px;
  padding: 5px;
  margin: 5px 5px;
}
.send-message form textarea {
  width: 760px;
  height: 150px;
  border: 0;
  border-radius: 0 0 5px 5px;
  padding: 20px;
}
.send-message .login {
  display: block;
  margin: 10px;
  margin-bottom: 25px;
  text-align: right;
  color: #b5b5b5;
}
</style>
