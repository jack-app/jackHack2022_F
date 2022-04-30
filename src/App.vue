<template>
  <div id="app">
    <SearchBox />
    <RecipeTemplate />
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import RecipeTemplate from "@/components/RecipeTemplate.vue";

export default {
  name: "App",
  components: {
    RecipeTemplate,
    SearchBox,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
