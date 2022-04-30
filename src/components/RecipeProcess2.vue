<template>
  <!--li class="list-group-item"-->
  <div class="card">
    <div class="card-body">
      <p class="card-text">
      {{ process.item }}{{ process.volume }}gを
      {{ process.time }}分{{ process.cook }}。
      </p>
    </div>
  </div>
<!--/li-->
</template>

<script>
export default {
  data: () => ({
    process: {
      FoodGroup: "1",
      FoodNumber: "1088",
      RefNum: "93",
      item: "\u3053\u3081\u3000\uff3b\u6c34\u7a32\u3081\u3057\uff3d\u3000\u7cbe\u767d\u7c73\u3000\u3046\u308b\u3061\u7c73\u3000",
      volume: "120.0",
      cook: "\u306a\u3057",
      time: "0.0",
    },
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    width: 70%;
    margin: 20px auto;
    padding: 10px;
    box-shadow: 1px 1px;
    background-color: #b4f49c

  }
</style>
