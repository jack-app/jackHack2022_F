<template>
  <div>
    <RecipeProcess v-for="i in 8" :key="i" />
  </div>
</template>

<script>
import RecipeProcess from "@/components/RecipeProcess.vue";

export default {
  components: {
    RecipeProcess,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
