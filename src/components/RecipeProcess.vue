<template>
  <li class="list-group-item">
  <!--div class="card">
    <div class="card-body"-->
      {{ process.volume }}gの{{ process.item }}を
      {{ process.time }}分{{ process.cook }}。
    <!--/div>
  </div-->
  </li>
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
  ol > li::before {
    font-weight: bold;
    content: counter(list-count) ".";
    counter-increment: list-count;
    margin: 3px;
  }
  li {
    margin: 10px auto;
    text-align: left;
    text-indent: -1.3em;
  }
</style>
