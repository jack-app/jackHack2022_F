<template>
  <div>
    <ol
      class="list-group list-group-numbered list-group-flush"
      style="width: 70%; margin: auto"
    >
      <RecipeProcess
        v-for="(process, key) in confusedrecipe"
        :key="key"
        :process="process"
      />
    </ol>
  </div>
</template>

<script>
import RecipeProcess from "@/components/RecipeProcess.vue";

export default {
  components: {
    RecipeProcess,
  },
  props: ["recipe"],
  data: () => ({
    confusedrecipe: null,
  }),
  mounted() {
    let array = this.recipe.slice();
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.confusedrecipe = array;
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
