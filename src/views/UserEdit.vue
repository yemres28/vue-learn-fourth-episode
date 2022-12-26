<template>
  <div class="child">
    <h2>Child Components</h2>
    <p>Ben UserEdit isimli parent component</p>
    <!-- <button @click="age = 25">Yaş Bilgisini Değiştir</button> -->
    <p>Yaş : {{ age }}</p>
    <button @click="changeAge">Yaş Değiştir</button>
  </div>
</template>
<script>
import { eventBus } from "@/main";

export default {
  name: "UserEdit",
  props: ["age", "setAge"],
  methods: {
    changeAge() {
      //eslint-disable-next-line
      this.age = 30;
      // this.$emit("ageWasEdites", this.age);
      // eventBus.$emit("ageWasEdited", this.age);
      eventBus.changeAge(this.age);
    },
  },
};
</script>

<style scoped>
.child {
  height: 200px;
  width: 45%;
  background-color: bisque;
  padding: 25px;
}
</style>
