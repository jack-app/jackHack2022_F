<template>
  <div class="container">
    <div
      class="row p-3"
      v-for="ingredient in ingredients"
      :key="ingredient.key"
    >
      <p class="col-9 m-0">{{ ingredient.item }}</p>
      <p class="col-3 m-0">
        {{ ingredient.servingVolume }}{{ ingredient.servingUnit }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    ingredients: [
      {
        item: '\u9d8f\u5375\u3000\u5168\u5375\u3000\u751f\u3000',
        servingVolume: 60,
        servingSize: '',
        servingUnit: 'g',
        key: 0,
      },
      {
        item: '\u3053\u3081\u3000\uff3b\u6c34\u7a32\u3081\u3057\uff3d\u3000\u7cbe\u767d\u7c73\u3000\u3046\u308b\u3061\u7c73\u3000',
        servingVolume: 150,
        servingSize: '',
        servingUnit: 'cc',
        key: 1,
      },
      {
        item: '\uff1c\u8abf\u5473\u6599\u985e\uff1e\uff08\u3057\u3087\u3046\u3086\u985e\uff09\u3060\u3057\u3057\u3087\u3046\u3086\u3000',
        servingVolume: 10,
        servingSize: '',
        servingUnit: 'ml',
        key: 2,
      },
    ],
  }),
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
