<template>
  <div class="friends">
    <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <h5 class="card-header">Find a User</h5>
          <form id="loginForm" @click.pervent>
            <div class="form-group">
              <input type="number" class="form-control" v-model="UserID" placeholder="Enter ID#">
            </div>
            <button type="button" @click.pervent="SearchforUser()" class="btn btn-primary">Search</button>
          </form>
        </div>
        <p>{{user}}</p>
      </div>
      <dir class="col-sm-4">
        <h5>List of Users</h5>
        <ul>
          <li v-for="u in state">{{u.name}} - ID#: {{u.id}}</li>
        </ul>
      </dir>
    </div>
  </div>
</template>

<script>
import * as api from "@/services/api_access";
let loopTimer = null;

export default {
  data() {
    return {
      state: {
        users: []
      },
      user: [],
      UserID: null
    };
  },
  created() {
    loopTimer = setInterval(this.refresh, 1000);
  },
  methods: {
    refresh() {
      api.GetState().then(x => (this.state = x));
    },
    SearchforUser() {
      api.findUser(this.UserID).then(x => (this.user = x));
    }
  }
};
</script>