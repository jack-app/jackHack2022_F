<template>
  <div>
    材料
    <RecipeIngredients :ingredients="confusedingredients" />
    手順
    <RecipeProcesses v-if="confusedingredients" :recipe="confusedingredients" />
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
  data: () => ({
    confusedingredients: null,
  }),
  mounted() {
    let array = this.recipe.ingredients.slice();
    let volume = array.map((item) => item.volume);
    for (let i = volume.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [volume[i], volume[j]] = [volume[j], volume[i]];
    }
    this.confusedingredients = array.map((item, i) => ({
      ...item,
      volume: volume[i],
    }));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
