<template>
  <html>
    <header>
      <h1 class="title">レシピクラッシャー</h1>
    </header>
    <div id="app">
      <SearchBox @getRecipe="getRecipe" />
      <RecipeTemplate v-if="recipe" :recipe="recipe" />
    </div>
    <footer>@jack</footer>
  </html>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import RecipeTemplate from "@/components/RecipeTemplate.vue";

import axios from "axios";

export default {
  name: "App",
  components: {
    RecipeTemplate,
    SearchBox,
  },
  data: () => ({
    recipe: "",
  }),
  methods: {
    getRecipe(menu) {
      axios
        .get(`${process.env.VUE_APP_URL}/api?menu=${menu}`)
        .then((response) => {
          this.recipe = response.data;
        })
        .catch(() => alert("そんな食べ物はない！！！"));
    },
  },
};
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app {
  min-height: 100vh;
  max-height: 100%;
}
header {
  position: sticky;
  top: 0;
  text-align: center;
  padding: 0.5rem;
  background-color: darkcyan;
  z-index: 100;
}

.title {
  margin: 0;
  color: white;
  vertical-align: middle;
}

.title::before {
  content: url("@/assets/exclamation-diamond-fill.svg");
  margin: 0.5rem;
}

.title::after {
  content: url("@/assets/exclamation-diamond-fill.svg");
  margin: 0.5rem;
}

.container {
  margin: 0;
  width: 100%;
}

footer {
  position: sticky;
  bottom: 0;
  background-color: darkcyan;
  height: 30px;
  color: white;
}
</style>
