<template>
  <div>
    <div>
      <AttendanceComp />
    </div>
  </div>
</template>

<script>
import AttendanceComp from "@/components/dashboard/shared/Attendance";

export default {
  name: "ViewRegister",
  layout: "teacher",
  components: { AttendanceComp }
};
</script>

<style>
</style>