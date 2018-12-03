<template>
  <div class="friends">
    <div class="jumbotron">
      <h1>Welcome {{state.myinfo.name}}</h1>
    </div>
    <div class="container"></div>
    <div class="row">
      <div class="col-md-6">
        <h2>Basic info</h2>
        <p>Age: {{state.myinfo.age}} years old</p>
        <p>Height: {{state.myinfo.height}} inches tall</p>
        <p>Weight: {{state.myinfo.weight}} pounds</p>
      </div>
      <div class="col-md-6">
        <h2>Aggergated Data</h2>
        <button type="button" @click.pervent="CalBMI()" class="btn btn-primary">Calculate BMI</button>
        <p>BMI: {{state.myinfo.UserBMI}}</p>
      </div>
    </div>
    <div class="row">
      <h2>Plan a work week</h2>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-4"></div>
          <!-- this column empty -->
          <div class="col-md-4">Monday</div>
          <div class="col-md-4">Tuesday</div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="row">
          <div class="col-md-2">Wedensday</div>
          <div class="col-md-2">Thursday</div>
          <div class="col-md-2">Friday</div>
          <div class="col-md-2">Saturday</div>
          <div class="col-md-2">Sunday</div>
          <div class="col-md-2"></div>
          <!-- this column empty -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.jumbotron {
  padding: 0.5em 0.6em;
  h1 {
    font-size: 2em;
  }
  p {
    font-size: 1.2em;
    .btn {
      padding: 0.5em;
    }
  }
}
</style>

<script>
import * as api from "@/services/api_access";
let loopTimer = null;

export default {
  data() {
    return {
      state: {
        myinfo: []
      }
    };
  },
  created() {
    loopTimer = setInterval(this.refresh, 1000);
  },
  methods: {
    refresh() {
      api.GetCurrentUser().then(x => (this.state.myinfo = x));
    },
    CalBMI() {
      api.CalculateBMI();
    }
  }
};
</script>