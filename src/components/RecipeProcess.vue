<template>
  <li class="list-group-item">
    <!--div class="card">
    <div class="card-body"-->
    {{ process.volume }}gの{{ process.item }}を
    <span v-if="process.time != '0.0'">{{ process.time }}分</span>
    <span v-if="process.cook != 'なし'">{{ process.cook }}</span>
    <span v-else>入れる</span>。
    <!--/div>
  </div-->
  </li>
</template>

<script>
export default {
  props: ["process"],
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
  margin: 10px 15%;
  text-align: left;
  text-indent: -1.3em;
}
</style>
