//入口
import lotteryticket from "./lotteryticket.vue";

export default {
  install: function(Vue) {
    Vue.component("k-lotteryticket", lotteryticket);
  }
};
// 需要自行处理浏览器引入和模块引入的问题
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("k-lotteryticket", lotteryticket);
}