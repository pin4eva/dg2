<template>
  <div>
    <h5 class="uk-text-center">Uikit</h5>
    <h5 class="text-center">Bootstrap text-center</h5>
    <div class="mx-auto container">
      <h2 class>Number: {{newNumber}}</h2>
      <button @click.prevent="newCrypto" class="btn btn-success d-block">Generate</button>
    </div>
  </div>
</template>

<script>
import crypto from "crypto";
export default {
  data() {
    return {
      newNumber: ""
    };
  },
  methods: {}
};
</script>

<style lang="stylus">
darkgreen = #285A39;
lightgreen = #50A637;
lightpurple = #D92980;
darkred = #731F1F;

.wrapper {
  display: flex;

  .shape {
    width: 300px;
    height: 300px;
  }

  .p1 {
    background-color: darkgreen;
  }

  .p2 {
    background-color: red;
  }

  .p3 {
    background-color: lightgreen;
  }

  .p4 {
    background-color: #17a2b8;
  }
}
</style>