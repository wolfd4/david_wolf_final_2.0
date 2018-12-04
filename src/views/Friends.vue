<template>
  <div class="friends">
    <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <h5 class="card-header">Find a User</h5>
          <form id="FinUser" @click.pervent>
            <div class="form-group">
              <input type="number" class="form-control" v-model="UserID" placeholder="Enter ID#">
            </div>
            <button type="button" @click.pervent="SearchforUser()" class="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
      <div class="col-sm-8">
        <h5>User Information</h5>
        <p>{{user}}</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <h5 class="card-header">Add a Friend</h5>
        <form id="findFriend" @click.pervent>
          <div class="form-group">
            <input type="number" class="form-control" v-model="FriendID" placeholder="Enter ID#">
          </div>
          <button type="button" @click.pervent="Add_Friend()" class="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
    <dir class="col-sm-4">
      <h5>List of Friends</h5>
      <ul>
        <li v-for="u in state[0].friendsList">{{u.name}}</li>
      </ul>
    </dir>
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
      user: null,
      UserID: null,
      FriendID: null
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
    },
    Add_Friend(){
      api.addFriend(this.FriendID);
      refresh();
    }
  }
};
</script>