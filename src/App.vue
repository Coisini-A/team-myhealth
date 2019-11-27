<template>
  <div>
    <div id="app">
      <router-view />
    </div>
    <nav-bar v-if="$route.meta.isTabBar"></nav-bar>
    <!-- <loading></loading> -->
  </div>
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
  width: 100%;
}
</style>
