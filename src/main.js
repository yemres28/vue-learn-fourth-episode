import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageWasEdited", age);
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
