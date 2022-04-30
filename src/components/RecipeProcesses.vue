<template>
  <div>
    <ol
      class="list-group list-group-numbered list-group-flush"
      style="width: 70%; margin: auto"
    >
      <RecipeProcess
        v-for="(process, key) in recipe"
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol {
  counter-reset: list-count;
  list-style: none;
}
</style>
