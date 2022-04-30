<template>
  <div id="app">
    <SearchBox />
    <RecipeTemplate />
    <TwitterButton />
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';
import RecipeTemplate from '@/components/RecipeTemplate.vue';
import TwitterButton from '@/components/TwitterButton.vue';

export default {
  name: 'App',
  components: {
    RecipeTemplate,
    SearchBox,
    TwitterButton,
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
