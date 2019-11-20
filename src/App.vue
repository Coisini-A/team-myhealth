<template>
  <div id="app">
		<nav-bar></nav-bar>
    <router-view />
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
