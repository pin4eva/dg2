<template>
  <div>
    <div class="text-center">
      <div>Result: {{numGen}}</div>
      <button class="btn btn-danger" @click.prevent="generate">Generate</button>
    </div>
  </div>
</template>

<script>
// const uniqueKeygen = require("unique-keygen");

export default {
  name: "Test",
  layout: "dashboard",
  data() {
    return {
      numGen: ""
    };
  },
  methods: {
    generate() {
      let str = 5;
      let str1 = str.toString();
      let result = str1.padStart(3, "00");
      console.log(result);
    }
  }
};
</script>

<style lang="stylus"></style>