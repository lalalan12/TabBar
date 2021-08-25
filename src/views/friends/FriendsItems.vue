<!--  -->
<template>
  <div class="friends-items">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style  scoped>
.friends-items {
  margin-top: 80px;
}
.friends-items ul {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}
.friends-items ul li {
  width: 250px;
  height: 200px;
  margin: 8px;
  background-color: pink;
}
</style>
