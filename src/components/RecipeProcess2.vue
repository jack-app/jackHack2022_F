<template>
  <!--li class="list-group-item"-->
  <div class="card">
    <div class="card-body">
      <p class="card-text">
        {{ process.item }}{{ process.volume }}gを {{ process.time }}分{{
          process.cook
        }}。
      </p>
    </div>
  </div>
  <!--/li-->
</template>

<script>
export default {
  props: ["process"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 70%;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 1px 1px;
  background-color: #b4f49c;
}
</style>
