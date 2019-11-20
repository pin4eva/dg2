<template>
  <div>
    <div>
      <AccountComp />
    </div>
  </div>
</template>

<script>
import AccountComp from "@/components/dashboard/shared/Account";
export default {
  layout: "parent",
  name: "AccountPage",
  components: { AccountComp }
};
</script>

<style>
</style>