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
          <form id="Monday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout1" placeholder="Enter Workout">
            </div>
            <button type="button" @click.pervent="SetWork()" class="btn btn-primary buttonW">Set Workout</button>
          </form>
        </td>
        <td>
          <form id="Tuesday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout2" placeholder="Enter Workout">
            </div>
            <button
              type="button"
              @click.pervent="AggergateData()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </form>
        </td>
        <td>
          <form id="Wedensday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout3" placeholder="Enter Workout">
            </div>
            <button
              type="button"
              @click.pervent="AggergateData()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </form>
        </td>
        <td>
          <form id="Thrusday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout4" placeholder="Enter Workout">
            </div>
            <button type="button" class="btn btn-primary buttonW">Set Workout</button>
          </form>
        </td>
        <td>
          <form id="Friday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout5" placeholder="Enter Workout">
            </div>
            <button
              type="button"
              @click.pervent="AggergateData()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </form>
        </td>
        <td>
          <form id="Saturday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout6" placeholder="Enter Workout">
            </div>
            <button
              type="button"
              @click.pervent="AggergateData()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </form>
        </td>
        <td>
          <form id="Sunday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout7" placeholder="Enter Workout">
            </div>
            <button
              type="button"
              @click.pervent="AggergateData()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </form>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
.buttonW {
  font-size: 10px;
}
.jumbotron {
  padding: 0.5em 0.6em;
  h1 {
    font-size: 2em;
  }
  p {
    font-size: 1.2em;
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
      },
      workout1: "",
      workout2: "",
      workout3: "",
      workout4: "",
      workout5: "",
      workout6: "",
      workout7: ""
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
    },
    SetWork() {
      api.SetWorkout();
    }
  }
};
</script>