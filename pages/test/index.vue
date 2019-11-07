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
      let result = Math.ceil(Math.random() * 100);
      console.log(result);
    }
  }
};
</script>

<style lang="stylus"></style>