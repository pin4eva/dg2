<template>
  <div>
    <Notices :user="parent" />
  </div>
</template>

<script>
import Notices from "@/components/dashboard/shared/Notice";
import { mapGetters } from "vuex";
export default {
  name: "NoticePage",
  layout: "parent",
  computed: {
    ...mapGetters({
      parent: "parents/parent"
    })
  },
  components: { Notices }
};
</script>

<style>
</style>