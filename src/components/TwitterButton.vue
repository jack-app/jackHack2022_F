<template>
  <div>
    <a
      class="btn btn-primary m-3"
      @click="twitterShare"
      target="_blank"
      rel="noopener"
      >twitter</a
    >
  </div>
</template>

<script>
export default {
  name: 'TwitterButton',
  methods: {
    twitterShare() {
      //シェアする画面を設定
      const url =
        'https://twitter.com/intent/tweet?text=' +
        `${this.$route.query.menu}のレシピをぐちゃぐちゃにしました\n` +
        '&url=' +
        `${process.env.VUE_APP_URL}${this.$route.fullPath}`; //TODO: 変更する
      window.open(url, '_blank');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a::before {
  content: url('@/assets/twitter.svg');
}
</style>
