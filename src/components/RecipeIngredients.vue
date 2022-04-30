<template>
  <div class="container">
    <div class="row p-2" v-for="(ingredient, key) in ingredients" :key="key">
      <p class="col-9 m-0">{{ ingredient.item }}</p>
      <p class="col-3 m-0">
        {{ ingredient.servingVolume }}{{ ingredient.servingUnit }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ingredients"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 50%;
  text-align: center;
}
.row {
  text-align: left;
  border-bottom: 1px solid #ff8a00;
}
</style>
