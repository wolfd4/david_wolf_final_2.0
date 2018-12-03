<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <div class="card">
          <h5 class="card-header">Create a User</h5>
          <form id="loginForm" @click.pervent>
            <div class="form-group">
              <label for="Name">Name</label>
              <input type="text" class="form-control" v-model="name" placeholder="Enter name">
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input type="number" class="form-control" v-model="age" placeholder="Enter age">
            </div>
            <div class="form-group">
              <label for="height">Height</label>
              <input
                type="number"
                class="form-control"
                v-model="height"
                placeholder="Enter height in inches"
              >
            </div>
            <div class="form-group">
              <label for="weight">Weight</label>
              <input
                type="number"
                class="form-control"
                v-model="weight"
                placeholder="Enter weight in pounds"
              >
            </div>
            <div class="form-group">
              <label
                for="activity"
                title="Sedentary (little to no exercise) 1.2
Lightly Active (light exercise/sports 1-3 days/week) 1.375
Moderately Active (moderate exercise/sports 3-5 days/week) 1.55
Very Active (hard exercise/sports 6-7 days a week) 1.725
Extremely Active (very heavy exercise/ physical job/ training twice a day) 1.9"
              >Activity Level*</label>
              <input
                type="number"
                step="0.001"
                class="form-control"
                v-model="activity"
                placeholder="Enter activity level"
              >
            </div>
            <button type="submit" @click.pervent="login()" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div class="col-sm-4"></div>
    </div>
  </div>
</template>

<style>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>

<script>
import * as api from "@/services/api_access";
let loopTimer = null;

export default {
  data() {
    return {
      name: "",
      age: "",
      height: "",
      weight: "",
      activity: ""
    };
  },
  created() {
    loopTimer = setInterval(this.refresh, 1000);
  },
  methods: {
    login() {
      api.Login(this.name, this.age, this.height, this.weight, this.activity);
    }
  }
};
</script>
