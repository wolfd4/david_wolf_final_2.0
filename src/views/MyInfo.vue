<template>
  <div class="friends">
    <div class="jumbotron">
      <h1>Welcome {{state.myinfo.name}}</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Basic info</h2>
          <p>Age: {{state.myinfo.age}} years old</p>
          <p>Height: {{state.myinfo.height}} inches tall</p>
          <p>Weight: {{state.myinfo.weight}} pounds</p>
        </div>
        <div class="col-md-6">
          <h2>Aggergated Data</h2>
          <button type="button" @click.pervent="AggergateData()" class="btn btn-primary">Calculate</button>
          <p>Based on your BMI {{state.myinfo.UserBMI}}</p>
          <p>Based on your info, your BMR is {{state.myinfo.UserBMR}} calories</p>
          <p>Based on your info, your TDEE is {{state.myinfo.UserTDEE}} calories</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table>
          <tr>
            <th>Monday</th>
            <th>Tuseday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
          <tr>
            <td>
              <button
                type="button"
                @click.pervent="AggergateData()"
                class="btn btn-primary buttonW"
              >Set Workout</button>
            </td>
            <td>
              <button
                type="button"
                @click.pervent="AggergateData()"
                class="btn btn-primary buttonW"
              >Set Workout</button>
            </td>
            <td>
              <button
                type="button"
                @click.pervent="AggergateData()"
                class="btn btn-primary buttonW"
              >Set Workout</button>
            </td>
            <td>
              <button
                type="button"
                @click.pervent="AggergateData()"
                class="btn btn-primary buttonW"
              >Set Workout</button>
            </td>
            <td>
              <button
                type="button"
                @click.pervent="AggergateData()"
                class="btn btn-primary buttonW"
              >Set Workout</button>
            </td>
            <td>
              <button
                type="button"
                @click.pervent="AggergateData()"
                class="btn btn-primary buttonW"
              >Set Workout</button>
            </td>
            <td>
              <button
                type="button"
                @click.pervent="AggergateData()"
                class="btn btn-primary buttonW"
              >Set Workout</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.buttonW{font-size: 10px}
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
,
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
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
    AggergateData() {
      api.CalculateBMI();
      api.CalculateBMR_TDEE();
    }
  }
};
</script>