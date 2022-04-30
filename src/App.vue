<template>
  <html>
    <header>
      <h1 class="title">レシピクラッシャー</h1>
    </header>
    <body>
      <div id="app">
        <SearchBox @getRecipe="getRecipe" />
        <RecipeTemplate v-if="recipe" :recipe="recipe" />
        <TwitterButton />
      </div>
    </body>
    <footer>@jack</footer>
  </html>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';
import RecipeTemplate from '@/components/RecipeTemplate.vue';
import TwitterButton from '@/components/TwitterButton.vue';

import axios from 'axios';

export default {
  name: 'App',
  components: {
    RecipeTemplate,
    SearchBox,
    TwitterButton,
  },
  data: () => ({
    recipe: '',
  }),
  methods: {
    getRecipe(menu) {
      axios
        .get(`${process.env.VUE_APP_URL}/api?menu=${menu}`)
        .then((response) => {
          this.recipe = response.data;
        })
        .catch(() => alert('そんな食べ物はない！！！'));
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
  height: 100vh;
}
header {
  position: sticky;
  top: 0;
  text-align: center;
  padding: 0.5rem;
  background-color: darkcyan;
}

body {
  overflow-y: scroll;
}

.title {
  margin: 0;
  color: white;
  vertical-align: middle;
}

.title::before {
  content: url('@/assets/exclamation-diamond-fill.svg');
  margin: 0.5rem;
}

.title::after {
  content: url('@/assets/exclamation-diamond-fill.svg');
  margin: 0.5rem;
}

footer {
  position: sticky;
  bottom: 0;
  background-color: darkcyan;
  height: 30px;
  color: white;
}
</style>
