<template><navbar /> <router-view /></template>
<script>
import axios from "axios";
import navbar from "@/components/navbar";
export default {
  components: { navbar },
};
</script>

<style>
</style>
