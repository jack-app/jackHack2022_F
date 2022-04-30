<template>
  <div>
    <h3><span>材料</span></h3>
    <RecipeIngredients :ingredients="mixIngredients" />
    <h3><span>手順</span></h3>
    <RecipeProcesses :recipe="mixIngredients" />
    <br />
    <br />
    <p>気に入ったレシピはtwitterで共有しよう！</p>
    <p>↓↓↓</p>
    <TwitterButton />
  </div>
</template>

<script>
import RecipeProcesses from "@/components/RecipeProcesses.vue";
import RecipeIngredients from "@/components/RecipeIngredients.vue";
import TwitterButton from "@/components/TwitterButton.vue";

export default {
  components: {
    RecipeProcesses,
    RecipeIngredients,
    TwitterButton,
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
<style scoped>
h3 span {
  background: linear-gradient(transparent 70%, rgba(0, 139, 139, 0.6) 70%);
}
</style>
