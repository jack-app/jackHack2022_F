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
        '変なレシピを作りました' +
        '&url=' +
        'https://github.com/jack-app/jackHack2022_F'; //TODO: 変更する
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
