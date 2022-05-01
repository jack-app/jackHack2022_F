<template>
  <li class="list-group-item" style="{ 'transition-delay': `${index * 10}s` }">
    <!--div class="card">
    <div class="card-body"-->
    {{ process.volume }}gの{{ process.item }}を
    <span v-if="process.time != '0.0' && process.time != '0'">
      {{ process.time }}分
    </span>
    <span v-if="process.cook != 'なし'">{{ process.cook }}</span>
    <span v-else>入れる</span>。
    <!--/div>
  </div-->
  </li>
</template>

<script>
export default {
  props: ["process"],
  data() {
    return {
      selectedVoiceIndex: 0,
      voices: [],
      errorMessage: "",
    };
  },
  mounted: function () {
    if (
      typeof speechSynthesis !== "undefined" &&
      speechSynthesis.onvoiceschanged !== undefined
    ) {
      window.speechSynthesis.onvoiceschanged = () => this.onVoiceChanged();
    } else {
      this.onVoiceChanged();
    }
    //   if (typeof speechSynthesis === 'undefined') {
    //     this.$data.errorMessage = 'speechSynthesis is undefined';
    //     return;
    //   }
    //   const utterance = new SpeechSynthesisUtterance(
    //     `${this.$props.process.volume}gの${this.$props.process.item}を ${this.$props.process.time}分${this.$props.process.cook}。`
    //   );
    //   utterance.voice = this.$data.voices[this.$data.selectedVoiceIndex];
    //   speechSynthesis.speak(utterance);
  },
  methods: {
    onVoiceChanged() {
      if (typeof speechSynthesis === "undefined") {
        this.$data.errorMessage = "speechSynthesis is undefined";
        return;
      }

      const voices = speechSynthesis.getVoices();
      this.$data.voices = voices;
      this.$data.selectedVoiceIndex = 0;
    },
    onImgClick() {
      if (typeof speechSynthesis === "undefined") {
        this.$data.errorMessage = "speechSynthesis is undefined";
        return;
      }
      const utterance = new SpeechSynthesisUtterance(
        `${this.$props.process.volume}gの${this.$props.process.item}を ${this.$props.process.time}分${this.$props.process.cook}。`
      );
      utterance.voice = this.$data.voices[this.$data.selectedVoiceIndex];
      speechSynthesis.speak(utterance);
    },
  },
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
