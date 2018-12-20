<template>
  <div class="final">
    <div>
      <h1 style="text-align: center;">Final Implementation</h1>

      <!-- You don't need it. this is for example purposes -->
      <switch-theme/>

      <p>Click in the search box and start typing to search though the list of users. Be sure to login a couple of users first, you only need to enter in their names when making a user to save time.</p>

      <b>Selected:</b>
      {{ selected || 'not chosen' }}.
      <br>
      <br>
      <div class="col-2">
        <cool-select v-model="selected" :items="items" placeholder="Select name"/>
      </div>
    </div>
  </div>
</template>

<script>
import { CoolSelect } from "vue-cool-select";
import * as api from "@/services/api_access";
let loopTimer = null;

export default {
  components: {
    CoolSelect
  },
  data() {
    return {
      selected: null,
      items: [],
      names: []
    };
  },

  created() {
    loopTimer = setInterval(this.refresh, 1000);
  },
  methods: {
    refresh() {
      api.GetUserNames().then(x => (this.items = x));
    }
  }
};
</script>

<style>
</style>
