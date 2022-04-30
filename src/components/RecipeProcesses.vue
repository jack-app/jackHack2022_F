<template>
  <div>
    <ol class="list-group list-group-numbered list-group-flush"
        style="width: 70%; margin: auto;">
    <RecipeProcess v-for="i in 8" :key="i" />
    </ol>
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
<style scoped>
  ol {
  counter-reset: list-count;
  list-style: none;
}
</style>
