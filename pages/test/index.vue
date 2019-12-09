<template>
  <div>
    <div class="text-center">
      <button class="btn btn-danger mt-4" @click.prevent>Generate</button>
    </div>
    <div class="container">
      <div>
        <ul>
          <li class="dropdownn">
            Test 1
            <ul class="dropdown-items">
              <li>Test 1 A</li>
              <li>Test 1 B</li>
            </ul>
          </li>
          <li class="dropdownn">
            Test 2
            <ul class="dropdown-items">
              <li>Test 2 A</li>
              <li>Test 2 B</li>
            </ul>
          </li>
          <li class="dropdownn">
            Test 3
            <ul class="dropdown-items">
              <li>Test 3 A</li>
              <li>Test 3 B</li>
            </ul>
          </li>
          <li class="dropdownn">
            Test 4
            <ul class="dropdown-items">
              <li>Test 4 A</li>
              <li>Test 4 B</li>
            </ul>
          </li>
          <li class="dropdownn">
            Test 5
            <ul class="dropdown-items">
              <li>Test 5 A</li>
              <li>Test 5 B</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import  "@/assets/js/test";
// import "@/plugins/test";
import { mapGetters } from "vuex";
import Axios from "axios";

const moment = require("moment");

export default {
  name: "Test",
  // layout: "dashboard",
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
  },
  mounted() {
    // import "@/assets/js/test";
  },
  head() {
    return {
      script: [{ src: "/js/test.js" }]
    };
    
  }
};
</script>

<style lang="stylus">
.dropdownn .dropdown-items {
  display: none;
}

.shows {
  display: block !important;
  color: purple !important;
  animation-name: fade;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
}

@keyframes fade {
  0% {
    color: blue;
    opacity: 0;
  }

  100% {
    color: red;
    opacity: 1;
  }
}
</style>