<template>
  <div>
    <div id="dashboard">
      <Navbar :profile="parent.profile" pageHome="/dashboard/parent" />
      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/dashboard/Admin/Navbar";
export default {
  name: "ParentsLayout",
  components: { Navbar },
  computed: {
    ...mapGetters({
      parent: "parents/parent"
    })
  }
};
</script>

<style lang="stylus">
@import '~/static/dashboard/fonts/flaticon.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.0/css/all.css';
@import '../assets/stylus/dashboard';

.btn {
  border-radius: 0;
}
</style>