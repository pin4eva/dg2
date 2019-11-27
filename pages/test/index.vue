<template>
  <div>
    <div class="text-center">
      <button class="btn btn-danger mt-4" @click.prevent>Generate</button>
    </div>
    <div class="container">
      <div>
        <table>
          <thead>
            <tr>
              <th>Subjects</th>
              <th>Subjects</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Axios from "axios";

const moment = require("moment");

export default {
  name: "Test",
  layout: "dashboard",
  data() {
    return {
      numGen: "",
      ass: []
    };
  },
  computed: {
    ...mapGetters({
      assessments: "assessments/assessments"
    })
  },
  methods: {},
  created() {
    this.$store.dispatch("assessments/getAssessments");
  }
};
</script>

<style lang="stylus"></style>