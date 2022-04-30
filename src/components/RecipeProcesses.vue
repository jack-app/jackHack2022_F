<template>
  <div>
    <ol
      class="list-group list-group-numbered list-group-flush"
      style="width: 70%; margin: auto"
    >
      <RecipeProcess
        v-for="(process, key) in mixProcesses"
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
  computed: {
    mixProcesses() {
      let query = Object.assign({}, this.$route.query);
      let processperm = Array.from(String(query.process)).map((i) =>
        parseInt(i, 16)
      );
      let array = this.recipe.slice();
      return array.map((_, i) => this.recipe[processperm[i]]);
    },
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
