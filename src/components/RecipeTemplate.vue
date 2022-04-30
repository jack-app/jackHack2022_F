<template>
  <div>
    <h3><span>材料</span></h3>
    <RecipeIngredients :ingredients="recipe.ingredients" />
    <h3><span>手順</span></h3>
    <RecipeProcesses :recipe="recipe.ingredients" />
    <br />
    <br />
    <p>気に入ったレシピはtwitterで共有しよう！</p>
    <p>↓↓↓</p>
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
<style scoped>
h3 span {
  background: linear-gradient(transparent 70%, rgba(0, 139, 139, 0.6) 70%);
}
</style>
