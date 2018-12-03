<template>
  <div class="home">
    <div class="row">
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
              <label for="Name">Height</label>
              <input type="number" class="form-control" v-model="height" placeholder="Enter height">
            </div>
            <div class="form-group">
              <label for="Name">Weight</label>
              <input type="number" class="form-control" v-model="weight" placeholder="Enter weight">
            </div>
            <div class="form-group">
              <label for="Name">Activity Level</label>
              <input
                type="number"
                class="form-control"
                v-model="activity"
                placeholder="Enter activity level"
              >
            </div>
            <button type="submit" @click.pervent="login()" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import * as api from "@/services/api_access";
let loopTimer = null;

export default {
  data() {
    return {
      state: {
        users: []
      }
    };
  },
  created() {
    loopTimer = setInterval(this.refresh, 1000);
  },
  methods: {
    refresh() {
      api.GetState().then(x => (this.state = x));
    },
    login() {
      api.Login(this.name, this.age, this.height, this.activity, this.weight);
    }
  }
};
</script>
