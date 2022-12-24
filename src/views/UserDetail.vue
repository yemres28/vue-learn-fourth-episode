<template>
  <div class="deneme">
    <h2>Child Components</h2>
    <p>Ben UserDetail isimli parent component</p>
    <p>Kullanıcı Adı : {{ name }}</p>
    <p>Adımı tersten yaz : {{ switchName() }}</p>
    <button @click="sendToParent">Veriyi Parent'a Gönder</button>
  </div>
</template>
<script>
export default {
  name: "UserDetail",
  props: ["name"],
  methods: {
    switchName() {
      return this.name.split("").reverse().join("");
    },
    sendToParent() {
      //child tan parenta veri gönderme emit metodu kullanımı key ve value şeklinde ilk girilen değer key ikinci girilen değer ise
      //parentın okuyacağı value değeri
      this.$emit("data", "yunus emre çakır");
    },
  },
};
</script>

<style scoped>
.deneme {
  height: 200px;
  width: 45%;
  background-color: lightcoral;
  padding: 25px;
}
</style>
