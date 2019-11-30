<template>
    <div id="app">
      <router-view />
    <nav-bar v-if="$route.meta.isTabBar"></nav-bar>
    </div>
    <!-- <loading></loading> -->
</template>

<script>
import NavBar from "@/common/nav-bar";
import Loading from "@/common/loading";
export default {
  name: "App",
  components: {
    "nav-bar": NavBar,
    loading: Loading
  }
};
</script>

<style>
#app{
  height: 100%;
  /* overflow: hidden; */
  width: 100%;

}
</style>
