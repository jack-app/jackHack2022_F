<template>
  <div>
    <transition-group
      tag="ol"
      appear
      name="list"
      class="list-group list-group-numbered list-group-flush"
      style="width: 70%; margin: auto"
    >
      <RecipeProcess
        v-for="(process, key) in mixProcesses"
        :key="key"
        :process="process"
      />
    </transition-group>
  </div>
</template>

<script>
import RecipeProcess from '@/components/RecipeProcess.vue';

export default {
  components: {
    RecipeProcess,
  },
  props: ['recipe'],
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

.list-enter-active {
  transition: all 0.3s ease;
}
/* アイテムが追加されアニメーションが始まる最初だけ付与される */
.list-enter {
  transform: translateX(10px);
  opacity: 0;
}
</style>
