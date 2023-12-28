<script setup>
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
</script>
<script>
export default {
  data() {
    return {
      isClick: 1,
      custom: { fontColor: null, fontFamily: null, fontSize: null },
      error: null,
      color: "red",
    };
  },
  methods: {
    handleClick(number) {
      this.isClick = number;
    },
  },
  async beforeCreate() {
    try {
      const response = await axios.get("http://localhost:1337/api/custom");
      this.custom = response.data.data.attributes;
    } catch (error) {
      this.error = error;
      console.log(error);
    }
  },
};
</script>

<template>
  <div
    class="app"
    :style="{ color: custom.fontColor, fontSize: custom.fontSize , fontFamily: custom.fontFamily }"
  >

    <div class="text-center">

      <h1>Wellcome to My Exercises</h1>
      <h5>Tran Van Hao</h5>

      <nav>

        <RouterLink
          class="btn mx-2"
          :class="isClick === 1 ? 'btn-primary disabled' : 'btn-primary '"
          @click="handleClick(1)"
          to="/"
        >Task 1</RouterLink>

        <RouterLink
          class="btn mx-2"
          :class="isClick === 2 ? 'btn-success disabled' : 'btn-success '"
          @click="handleClick(2)"
          to="/task2"
        >Task 2</RouterLink>

        <router-link
          class="btn mx-2"
          :class="isClick === 3 ? 'btn-dark disabled' : 'btn-dark '"
          @click="handleClick(3)"
          :to="'setting'"
          :name="custom"
        >Setting</router-link>
      </nav>
    </div>
    <hr>

    <RouterView />
  </div>
</template>

<style >
</style>
