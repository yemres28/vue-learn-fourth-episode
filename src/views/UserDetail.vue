<template>
  <div class="deneme">
    <h2>Child Components</h2>
    <p>Ben UserDetail isimli parent component</p>
    <p>Kullanıcı Adı : {{ name }}</p>
    <p>Adımı tersten yaz : {{ switchName() }}</p>
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
  },
};
</script>

<style scoped>
.deneme {
  height: 150px;
  width: 45%;
  background-color: lightcoral;
  padding: 25px;
}
</style>
