<template>
  <div>
    材料
    <RecipeIngredients />
    手順
    <RecipeProcesses />
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
