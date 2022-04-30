<template>
  <div>
    <SearchBox @getRecipe="getRecipe" />
    <RecipeTemplate v-if="recipe" :recipe="recipe" />
  </div>
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
  mounted() {
    let query = Object.assign({}, this.$route.query);
    if (query.menu && query.volume && query.process) {
      this.getRecipe();
    } else {
      this.$router.push({
        path: "/",
      });
    }
  },
  methods: {
    getRecipe() {
      let query = Object.assign({}, this.$route.query);
      let menu = query.menu;
      axios
        .get(`${process.env.VUE_APP_URL}/api?menu=${menu}`)
        .then((response) => {
          let num = response.data.ingredients.length;
          let volume = [...Array(num)].map((_, i) => i);
          for (let i = volume.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [volume[i], volume[j]] = [volume[j], volume[i]];
          }
          let volumeperm = volume.map((i) => i.toString(16)).join("");
          let process = [...Array(num)].map((_, i) => i);
          for (let i = process.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [process[i], process[j]] = [process[j], process[i]];
          }
          let processperm = process.map((i) => i.toString(16)).join("");
          this.recipe = response.data;
          query = Object.assign(
            { menu: menu, volume: volumeperm, process: processperm },
            this.$route.query
          );
          this.$router.push({
            path: "/",
            query: query,
          });
        });
    },
  },
};
</script>
