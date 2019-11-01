<template>
  <div>
    <div class="text-center">
      <div class="text-center bg-dark text-light">
        <p>Result: {{result}}</p>
      </div>
      <button class="btn btn-primary" @click="randomNo">Get Random</button>
    </div>
  </div>
</template>

<script>
// const tinygen = require("tinygen");

export default {
  data() {
    return {
      result: ""
    };
  },
  methods: {
    randomNo() {
      let result = Math.floor(Math.random() * 1000000 + 1);
      let result2 = tinygen(32);
      this.result = result2;
    }
  }
};
</script>

<style>
</style>