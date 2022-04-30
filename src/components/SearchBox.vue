<template>
  <div class="form">
    <h3>食べ物を検索</h3>
    <input id="sbox1" v-model="menu" type="text" placeholder="料理名を入力" />
    <input id="sbtn1" type="button" @click="getRecipe" value="GO！" />
  </div>

  <!-- <form>
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
  </form> -->
</template>

<script>
export default {
  data: () => ({
    menu: '',
  }),
  methods: {
    getRecipe() {
      this.$emit('getRecipe', this.menu);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.form {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
form #form1 {
  max-width: 270px;
  margin-bottom: 15px;
  padding-top: 15%;
  padding-bottom: 4%;
}

/* form ul {
  list-style: none;
} */

/* h3#foodSearch {
  font-weight: bold;
} */

input#sbox1 {
  outline: 0;
  height: 50px;
  padding: 0 10px;
  margin-top: 2rem;
  border: none;
  border-radius: 4px;
  background: #eee;
}

input#sbtn1 {
  width: 70px;
  height: 40px;
  border-radius: 4px;
  background: darkorchid;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin: 20px;
}

input#sbtn1:hover {
  color: #000;
}
</style>
