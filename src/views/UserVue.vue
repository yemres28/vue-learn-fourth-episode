<template>
  <div class="parent">
    <div class="parents">
      <h1>Parents Components</h1>
      <p>Burası parent component yani herşeyin import edildiği component</p>
      <button @click="changeName">Değiştir</button>
      <p>Child Component üzerinden gelen veri : {{ childData }}</p>
      <hr />
      <div class="childComponent">
        <!-- child componentte value olarak gönderilen veri bu kısımda $event olarak okunuyor !!!  -->
        <!-- prop olarak veri gönderirken v-on @ değil v-bind : olarak ggöndericeksin :D  -->
        <user-detail :name="title" @data="childData = $event" :age="age" />
        <user-edit :age="age" :setAge="setAge" @ageWasEdited="age = $event" />
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  name: "HomeView",
  components: {
    UserDetail,
    UserEdit,
  },
  data() {
    return {
      title: "Yunus",
      childData: "",
      age: 23,
    };
  },
  methods: {
    setAge(age) {
      this.age = age;
    },
    changeName() {
      this.title = "Hidayet";
    },
  },
};
</script>

<style>
.parent {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 25px;
}
.parents {
  width: 75%;
  background-color: aquamarine;
  padding: 25px;
}
.childComponent {
  width: 100%;
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
}
</style>
