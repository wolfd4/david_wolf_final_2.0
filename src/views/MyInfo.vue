<template>
  <div class="friends">
    <div class="jumbotron">
      <h1>Welcome {{state.myinfo.name}}</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Basic info</h2>
          <p>
            Age: {{state.myinfo.age}} years old
            <input type="number" v-model="Age">
            <button type="button" @click.pervent="changeAge()" class="btn btn-primary">Edit</button>
          </p>

          <p>
            Height: {{state.myinfo.height}} inches tall
            <input type="number" v-model="Height">
            <button type="button" @click.pervent="changeHeight()" class="btn btn-primary">Edit</button>
          </p>
          <p>
            Weight: {{state.myinfo.weight}} pounds
            <input type="number" v-model="Weight">
            <button type="button" @click.pervent="changeWeight()" class="btn btn-primary">Edit</button>
          </p>
        </div>
        <div class="col-md-6">
          <h2>
            Aggergated Data
            <button
              type="button"
              @click.pervent="AggergateData()"
              class="btn btn-primary"
            >Calculate</button>
          </h2>
          <p>Based on your BMI {{state.myinfo.UserBMI}}</p>
          <p>Based on your info, your BMR is {{state.myinfo.UserBMR}} calories</p>
          <p>Based on your info, your TDEE is {{state.myinfo.UserTDEE}} calories</p>
        </div>
      </div>
    </div>
    <table>
      <tr>
        <th>
          <div class="wrapper">
            Monday
            <button
              type="submit"
              @click.pervent="SetWork1()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </div>
        </th>
        <th>
          <div class="wrapper">
            Tuseday
            <button
              type="submit"
              @click.pervent="SetWork2()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </div>
        </th>
        <th>
          <div class="wrapper">
            Wednesday
            <button
              type="submit"
              @click.pervent="SetWork3()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </div>
        </th>
        <th>
          <div class="wrapper">
            Thursday
            <button
              type="submit"
              @click.pervent="SetWork4()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </div>
        </th>
        <th>
          <div class="wrapper">
            Friday
            <button
              type="submit"
              @click.pervent="SetWork5()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </div>
        </th>
        <th>
          <div class="wrapper">
            Saturday
            <button
              type="submit"
              @click.pervent="SetWork6()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </div>
        </th>
        <th>
          <div class="wrapper">
            Sunday
            <button
              type="submit"
              @click.pervent="SetWork7()"
              class="btn btn-primary buttonW"
            >Set Workout</button>
          </div>
        </th>
      </tr>
      <tr>
        <td>
          <form id="Monday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout1" placeholder="Enter Workout">
            </div>
          </form>
          <p>{{state.myinfo.workouts[0]}}</p>
        </td>
        <td>
          <form id="Tuesday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout2" placeholder="Enter Workout">
            </div>
          </form>
          <p>{{state.myinfo.workouts[1]}}</p>
        </td>
        <td>
          <form id="Wedensday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout3" placeholder="Enter Workout">
            </div>
          </form>
          <p>{{state.myinfo.workouts[2]}}</p>
        </td>
        <td>
          <form id="Thrusday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout4" placeholder="Enter Workout">
            </div>
          </form>
          <p>{{state.myinfo.workouts[3]}}</p>
        </td>
        <td>
          <form id="Friday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout5" placeholder="Enter Workout">
            </div>
          </form>
          <p>{{state.myinfo.workouts[4]}}</p>
        </td>
        <td>
          <form id="Saturday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout6" placeholder="Enter Workout">
            </div>
          </form>
          <p>{{state.myinfo.workouts[5]}}</p>
        </td>
        <td>
          <form id="Sunday" @click.pervent>
            <div class="form-group">
              <input type="text" v-model="workout7" placeholder="Enter Workout">
            </div>
          </form>
          <p>{{state.myinfo.workouts[6]}}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
.wrapper {
  text-align: right;
}
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
  border: 1px solid #000000;
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
      workout7: "",
      Age: {},
      Height: {},
      Weight: {}
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
    SetWork1() {
      api.SetWorkout(0, this.workout1);
    },
    SetWork2() {
      api.SetWorkout(1, this.workout2);
    },
    SetWork3() {
      api.SetWorkout(2, this.workout3);
    },
    SetWork4() {
      api.SetWorkout(3, this.workout4);
    },
    SetWork5() {
      api.SetWorkout(4, this.workout5);
    },
    SetWork6() {
      api.SetWorkout(5, this.workout6);
    },
    SetWork7() {
      api.SetWorkout(6, this.workout7);
    },
    changeAge() {
      api.editAge(this.Age);
      refresh();
    },
    changeHeight() {
      api.editHeight(this.Height);
      refresh();
    },
    changeWeight() {
      api.editWeight(this.Weight);
      refresh();
    }
  }
};
</script>