<template>
  <div id="app">
    <lotteryticket
      element-id='scratchWrap'
      :ratio=0.5
      :move-radius=50
    ></lotteryticket>
  </div>
</template>

<script>
import lotteryticket from "./components/lotteryticket";
export default {
  name: "app",
  components: {
    lotteryticket
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
