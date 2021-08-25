<!--  -->
<template>
  <div class="home-all-items">
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>

<style  scoped>
.home-all-items ul li {
  height: 200px;
  margin: 15px 0;
  border-radius: 5px;
  background-color: #fff;
}
</style>
