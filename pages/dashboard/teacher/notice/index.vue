<template>
  <div>
    <Notices :user="teacher" />
  </div>
</template>

<script>
import Notices from "@/components/dashboard/shared/Notice";
import { mapGetters } from "vuex";
export default {
  name: "notice",
  layout: "teacher",
  computed: {
    ...mapGetters({
      teacher: "teachers/teacher"
    })
  },
  components: { Notices }
};
</script>

<style>
</style>