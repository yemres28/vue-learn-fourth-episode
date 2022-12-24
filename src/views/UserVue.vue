<template>
  <div class="parent">
    <div class="parents">
      <h1>Parents Components</h1>
      <p>Burası parent component yani herşeyin import edildiği component</p>
      <button @click="changeName">Değiştir</button>
      <hr />
      <div class="childComponent">
        <user-detail :name="title" />
        <user-edit />
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
    };
  },
  methods: {
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
