<template>
  <div>
    <h3>材料</h3>
    <RecipeIngredients :ingredients="recipe.ingredients" />
    <h3>手順</h3>
    <RecipeProcesses :recipe="recipe.ingredients" />
    <TwitterButton />
  </div>
</template>

<script>
import RecipeProcesses from '@/components/RecipeProcesses.vue';
import RecipeIngredients from '@/components/RecipeIngredients.vue';
import TwitterButton from '@/components/TwitterButton.vue';

export default {
  components: {
    RecipeProcesses,
    RecipeIngredients,
    TwitterButton,
  },
  props: ['recipe'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
