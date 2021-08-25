<!--  -->
<template>
  <div class="message-items">
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
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    };
  },
};
</script>

<style  scoped>
.message-items ul li {
  padding: 10px;
  margin-bottom: 1px;
  background-color: #fff;
}
</style>
