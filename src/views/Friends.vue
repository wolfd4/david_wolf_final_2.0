<template>
  <div class="friends">
          <div class="col-sm-4">
        <ul>
          <li v-for="User in state">{{User.name}}</li>
        </ul>
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