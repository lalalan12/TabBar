<!--  -->
<template>
  <div class="message">
    <send-message />
    <message-items />
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from "../../components/content/FooterBar.vue";
import MessageItems from "./messagechild/MessageItems.vue";
import SendMessage from "./messagechild/SendMessage.vue";
export default {
  components: { SendMessage, MessageItems, FooterBar },
  data() {
    return {};
  },
};
</script>

<style  scoped>
.message {
  width: 800px;
  margin: 0 auto;
}
</style>
