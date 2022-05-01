<template>
  <div>
    <h3>
      <span class="contenttitle">{{ recipeTitle }}のレシピ</span>
    </h3>
    <h3>
      <span class="contenttitle">材料</span>
      <span class="servingsize"
        >（分量：{{ recipe.ServingSize }}{{ recipe.ServingUnit }}）</span
      >
    </h3>
    <RecipeIngredients :ingredients="mixIngredients" />
    <h3><span class="contenttitle">手順</span></h3>
    <RecipeProcesses :recipe="mixIngredients" />
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
  computed: {
    mixIngredients() {
      let query = Object.assign({}, this.$route.query);
      let volumeperm = Array.from(String(query.volume)).map((i) =>
        parseInt(i, 16)
      );
      let array = this.recipe.ingredients.slice();
      let volume = array.map((ingredient) => ingredient.volume);
      let names = array.map((ingredient) => this.fixName(ingredient.item));
      return array.map((item, i) => ({
        ...item,
        volume: volume[volumeperm[i]],
        item: names[i],
      }));
    },
    recipeTitle() {
      return this.recipe.recipe.split('\u3000').join('');
    },
  },
  methods: {
    fixName(name) {
      let fixedname = name
        .split(/[\u3000＜＞（）]/)
        .filter(
          (item) =>
            item != '' &&
            item.slice(-1)[0] != '類' &&
            item != '加工品' &&
            item != '缶詰'
        );
      return fixedname[0];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contenttitle {
  background: linear-gradient(transparent 70%, rgba(201, 67, 0, 0.6) 70%);
}

.servingsize {
  font-size: 0.5em;
}
</style>
