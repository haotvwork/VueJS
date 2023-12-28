<script setup>
import axios from "axios";
</script>
<script>
export default {
  data() {
    return {
      custom: null,
    };
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
  mounted() {
    console.log(this.name);
  },

  methods: {
    async handleFontFamily(event) {
      try {
        const response = await axios.put("http://localhost:1337/api/custom", {
          data: {
            id: 1,
            fontFamily: event.target.value,
          },
        });
        this.custom.fontFamily = response.data.data.attributes.fontFamily;
      } catch (error) {
        this.error = error;
        console.log(error);
      }
    },
    async handleFontColor(event) {
      try {
        const response = await axios.put("http://localhost:1337/api/custom", {
          data: {
            id: 1,
            fontColor: event.target.value,
          },
        });
        this.custom.fontColor = response.data.data.attributes.fontColor;
      } catch (error) {
        this.error = error;
        console.log(error);
      }
    },
    async handleFontSize(event) {
      try {
        const response = await axios.put("http://localhost:1337/api/custom", {
          data: {
            id: 1,
            fontSize: event.target.value,
          },
        });
        this.custom.fontSize = response.data.data.attributes.fontSize;
      } catch (error) {
        this.error = error;
        console.log(error);
      }
    },
  },
};
</script>


<template>
  <div>
    <h1 class="alert alert-dark">Setting </h1>
  </div>
  <!-- Font Family -->
  <div class="container">
    <p class="fw-bold">Font Family:</p>
    <div class="row">
      <div class="col-md-4 col-sm-12">
        <input
          class="form-check-input"
          type="radio"
          id="cursive"
          value="cursive"
          v-model="custom.fontFamily"
          @input="event => handleFontFamily(event)"
        />
        <label
          class="form-check-label"
          for="cursive"
        >
          Cursive
        </label>
      </div>
      <div class="col-md-4 col-sm-12">
        <input
          class="form-check-input"
          type="radio"
          id="monospace"
          value="monospace"
          v-model="custom.fontFamily"
          @input="event => handleFontFamily(event)"
        />
        <label
          class="form-check-label"
          for="monospace"
        >
          Monospace
        </label>
      </div>
      <div class="col-md-4 col-sm-12">
        <input
          class="form-check-input"
          type="radio"
          id="sans-serif"
          value="sans-serif"
          v-model="custom.fontFamily"
          @input="event => handleFontFamily(event)"
        />
        <label
          class="form-check-label"
          for="sans-serif"
        >
          Sans-serif
        </label>
      </div>

    </div>
  </div>
  <!-- Font Color -->
  <div class="container">
    <p class="fw-bold">Font Color:</p>
    <div class="row">
      <div class="col-md-4 col-sm-12">
        <input
          class="form-check-input me-2"
          type="radio"
          value="black"
          id="colorblack"
          v-model="custom.fontColor"
          @input="event => handleFontColor(event)"
        >
        <label
          class="form-check-label"
          for="colorblack"
        >
          Black
        </label>
      </div>
      <div class="col-md-4 col-sm-12 ">
        <input
          class="form-check-input me-2"
          type="radio"
          value="blue"
          id="colorBlue"
          v-model="custom.fontColor"
          @input="event => handleFontColor(event)"
        >
        <label
          class="form-check-label"
          for="colorBlue"
        >
          Blue
        </label>
      </div>

    </div>
  </div>
  <!-- Font Size -->
  <div class="container">
    <p class="fw-bold">Font Size:</p>
    <div class="row">
      <div class="col-md-4 col-sm-12">
        <input
          class="form-check-input me-2"
          type="radio"
          value="large"
          id="fontSizeLarge"
          v-model="custom.fontSize"
          @input="event => handleFontSize(event)"
        >
        <label
          class="form-check-label"
          for="fontSizeLarge"
        >
          Large
        </label>
      </div>
      <div class="col-md-4 col-sm-12 ">
        <input
          class="form-check-input me-2"
          type="radio"
          value="medium"
          id="fontSizeMedium"
          v-model="custom.fontSize"
          @input="event => handleFontSize(event)"
        >
        <label
          class="form-check-label"
          for="fontSizeMedium"
        >
          Medium
        </label>
      </div>

      <div class="col-md-4 col-sm-12 ">
        <input
          class="form-check-input me-2"
          type="radio"
          value="small"
          id="fontSizeSmall"
          v-model="custom.fontSize"
          @input="event => handleFontSize(event)"
        >
        <label
          class="form-check-label"
          for="fontSizeSmall"
        >
          Small
        </label>
      </div>

    </div>
  </div>
</template>


<style lang="scss">
</style>