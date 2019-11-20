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
  layout: "parent",
  name: "AttendancePage",
  components: { AttendanceComp }
};
</script>

<style>
</style>