<template>
<div>
  <div id="app">
    <router-view />
  </div>
  <loading></loading>
</div>
  
</template>

<script>
import NavBar from "@/common/nav-bar";
import Loading from "@/common/loading"
export default {
  name: "App",
  components: {
    "nav-bar": NavBar,
    loading:Loading

  }
};
</script>

<style>

</style>
