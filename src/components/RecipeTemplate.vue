<template>
  <div>
    材料
    <RecipeIngredients :ingredients="recipe.ingredients" />
    手順
    <RecipeProcesses :recipe="recipe.ingredients" />
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
