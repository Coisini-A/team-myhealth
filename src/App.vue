<template>
  <div id="app">
    <router-view />
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from "@/common/nav-bar";
export default {
  name: "App",
  components: {
    "nav-bar": NavBar
  }
};
</script>

<style>

</style>
