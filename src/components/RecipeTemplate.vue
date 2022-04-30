<template>
  <div>
    材料
    <RecipeIngredients :ingredients="mixIngredients" />
    手順
    <RecipeProcesses :recipe="mixIngredients" />
  </div>
</template>

<script>
import RecipeProcesses from "@/components/RecipeProcesses.vue";
import RecipeIngredients from "@/components/RecipeIngredients.vue";

export default {
  components: {
    RecipeProcesses,
    RecipeIngredients,
  },
  props: ["recipe"],
  computed: {
    mixIngredients() {
      let query = Object.assign({}, this.$route.query);
      let volumeperm = Array.from(String(query.volume)).map((i) =>
        parseInt(i, 16)
      );
      let array = this.recipe.ingredients.slice();
      let volume = array.map((item) => item.volume);
      return array.map((item, i) => ({
        ...item,
        volume: volume[volumeperm[i]],
      }));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
