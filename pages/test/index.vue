<template>
  <div>
    <div class="text-center">
      <div>Result: {{week}}</div>
      <button class="btn btn-danger" @click.prevent="generate">Generate</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const moment = require("moment");

export default {
  name: "Test",
  layout: "dashboard",
  data() {
    return {
      numGen: ""
    };
  },
  computed: {
    ...mapGetters({
      week: "weekNumber"
    })
  },
  methods: {
    generate() {
      let d = moment();

      this.$store.commit("setWeek", 0);

      // console.log(d.format("MMMM"));
    }
  }
};
</script>

<style lang="stylus"></style>