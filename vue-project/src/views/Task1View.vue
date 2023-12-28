
<script setup>
import draggable from "vuedraggable";
</script>

<script>
export default {
  components: {
    draggable,
  },
  data() {
    return {
      datas: [
        {
          id: 1,
          name: "Jack",
          time: "2023-12-11",
          description: "Go to the gym",
        },
        { id: 2, name: "Hunter", time: "2023-10-11", description: "Fishing" },
        {
          id: 3,
          name: "Adam",
          time: "2024-1-11",
          description: "Play video games",
        },
        { id: 4, name: "Leo", time: "2023-9-11", description: "Swimming" },
      ],
      input: null,
      drag: false,
      finished: [],
      canceled: [],
      section1Visible: true,
      section2Visible: true,
      section3Visible: true,
      section4Visible: true,
    };
  },
  methods: {
    handleSubmit() {
      const maxId = Math.max(...this.datas.map((item) => item.id));

      const newId = maxId + 1;

      const newEntry = {
        id: newId,
        name: this.input.name,
        time: this.input.time,
        description: this.input.description,
      };

      this.datas.push(newEntry);

      // Log the updated data
      console.log(this.datas);
    },
    handleChange(event) {
      this.input = { ...this.input, [event.target.id]: event.target.value };
    },
    toggleSectionVisibility(section) {
      this[section] = !this[section];
    },
  },
};
</script>


<template>
  <div class="task-1">
    <div class="alert alert-primary">
      <h1>Dynamic FE Component </h1>
      <div class="text-center">
        <button
          v-if="!section1Visible"
          class="btn btn-primary m-2"
          @click="toggleSectionVisibility('section1Visible')"
        >Input Schedule</button>
        <button
          v-if="!section2Visible"
          class="btn btn-primary m-2"
          @click="toggleSectionVisibility('section2Visible')"
        >Schedule List</button>
        <button
          v-if="!section3Visible"
          class="btn btn-primary  m-2"
          @click="toggleSectionVisibility('section3Visible')"
        >Finished</button>
        <button
          v-if="!section4Visible"
          class="btn btn-primary m-2"
          @click="toggleSectionVisibility('section4Visible')"
        >Canceled</button>
      </div>

    </div>
    <div class="container ">
      <div class="row ">
        <!-- Section 1: Input To Do App -->
        <div
          v-if="section1Visible"
          class="col-md-6 col-sm-12 my-2 section-1 "
        >
          <section class=" border h-100">
            <div class="d-flex align-items-center justify-content-center">
              <h1 class="text-center my-5 mx-1">Input Schedule</h1>
              <button
                v-if="section1Visible"
                class="btn btn-secondary"
                @click="toggleSectionVisibility('section1Visible')"
              >-</button>
            </div>

            <div class=" container ">
              <div class="mb-3 row">
                <label
                  for="name"
                  class="col-sm-2 col-form-label"
                >Name:</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    @input="event => handleChange(event)"
                    placeholder="i.e., Tran Van Hao"
                  >
                </div>
              </div>
              <div class="mb-3 row">
                <label
                  for="date"
                  class="col-sm-2 col-form-label"
                >Time:</label>
                <div class="col-sm-10">
                  <input
                    type="date"
                    class="form-control"
                    id="date"
                    @change="event => handleChange(event)"
                  >
                </div>
              </div>
              <div class="mb-3 row">
                <label
                  for="description"
                  class="col-sm-2 col-form-label"
                >Description: </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="description"
                    @input="event => handleChange(event)"
                  >
                </div>
              </div>
              <div class="text-center my-2">
                <button
                  class="btn btn-primary"
                  @click="handleSubmit()"
                >Submit</button>
              </div>
            </div>
          </section>
        </div>
        <!-- Section 2: List To Do App -->

        <div
          v-if="section2Visible"
          class="col-md-6 col-sm-12 my-2 section-2 "
        >
          <section class="  border h-100">
            <div class="d-flex align-items-center justify-content-center">
              <h1 class="text-center my-5 mx-1"> Schedule List</h1>
              <button
                v-if="section2Visible"
                class="btn btn-secondary"
                @click="toggleSectionVisibility('section2Visible')"
              >-</button>
            </div>
            <draggable
              v-model="datas"
              group="people"
              @start="drag=true"
              @end="drag=false"
              item-key="id"
            >
              <template #item="{element}">
                <div class="card">
                  <div class="container card-header text-start">
                    <h5 class="">{{ element.name }} </h5>
                    <p class=" ">Time: {{ element.time }}</p>
                  </div>
                  <div class="card-body">
                    <textarea
                      class="form-control bg-white my-2"
                      disabled
                      v-model="element.description"
                    ></textarea>
                  </div>
                </div>
              </template>
            </draggable>

          </section>
        </div>

        <!-- Section 3: Schedule Finished -->
        <div
          v-if="section3Visible"
          class="col-md-6 col-sm-12 my-2 section-3 "
        >
          <section class=" border h-100">
            <div class="d-flex align-items-center justify-content-center">
              <h1 class="text-center my-5 mx-1"> Finished</h1>
              <button
                v-if="section3Visible"
                class="btn btn-secondary"
                @click="toggleSectionVisibility('section3Visible')"
              >-</button>
            </div>
            <draggable
              v-model="finished"
              group="people"
              @start="drag=true"
              @end="drag=false"
              item-key="id"
            >
              <template #item="{element}">
                <div class="card">
                  <div class="container card-header text-start bg-success text-white">
                    <h5 class="">{{ element.name }} </h5>
                    <p class=" ">Time: {{ element.time }}</p>
                  </div>
                  <div class="card-body">
                    <textarea
                      class="form-control bg-white my-2"
                      disabled
                      v-model="element.description"
                    ></textarea>
                  </div>
                </div>
              </template>
            </draggable>

          </section>
        </div>
        <div
          v-if="section4Visible"
          class="col-md-6 col-sm-12 my-2 section-4 "
        >
          <section class=" border h-100">
            <div class="d-flex align-items-center justify-content-center">
              <h1 class="text-center my-5 mx-1"> Canceled</h1>
              <button
                v-if="section4Visible"
                class="btn btn-secondary"
                @click="toggleSectionVisibility('section4Visible')"
              >-</button>
            </div>
            <draggable
              v-model="canceled"
              group="people"
              @start="drag=true"
              @end="drag=false"
              item-key="id"
            >
              <template #item="{element}">
                <div class="card">
                  <div class="container card-header text-start bg-danger text-white">
                    <h5 class="">{{ element.name }} </h5>
                    <p class=" ">Time: {{ element.time }}</p>

                  </div>
                  <div class="card-body">
                    <textarea
                      class="form-control bg-white my-2"
                      disabled
                      v-model="element.description"
                    ></textarea>
                  </div>
                </div>
              </template>
            </draggable>

          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.task-1 {
  section {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    overflow-y: auto;
  }
  .section-1 {
    height: 400px;
  }
  .section-2 {
    height: 400px;
  }
  .section-3 {
    height: 400px;
  }
  .section-4 {
    height: 400px;
  }
}
</style>