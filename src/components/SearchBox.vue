<template>
  <form>
    <ul>
      <li><p id="foodSearch">食べ物を検索</p></li>
      <li>
        <input
          id="sbox1"
          v-model="menu"
          type="text"
          placeholder="料理名を入力"
        />
      </li>
      <li><input id="sbtn1" type="button" @click="getRecipe" value="GO!" /></li>
    </ul>
  </form>
</template>

<script>
export default {
  data: () => ({
    menu: "",
  }),
  methods: {
    getRecipe() {
      this.$emit("getRecipe", this.menu);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
form #form1 {
  max-width: 270px;
  margin-bottom: 15px;
  padding-top: 15%;
  padding-bottom: 4%;
}

form ul {
  list-style: none;
}

form ul li p#foodSearch {
  font-weight: bold;
}

form ul li input#sbox1 {
  left: 39%;
  outline: 0;
  height: 50px;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  background: #eee;
}

form ul li input#sbtn1 {
  left: 53%;
  width: 70px;
  height: 40px;
  border-radius: 4px;
  background: #3c0;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
}

form ul li input#sbtn1:hover {
  color: #000;
}
</style>
