<template>
  <div class="container">
    <div class="form">
      <h3><span>食べ物を検索</span></h3>
      <input id="sbox1" v-model="menu" type="text" placeholder="料理名を入力" />
      <br />
      <input id="sbtn1" type="button" @click="getRecipe" value="GO！" />
      <RandomButton @setRecipe="setRecipe" />
    </div>
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
        <input type="text" style="display: none" />
      </li>
      <li><input id="sbtn1" type="button" @click="getRecipe" value="GO!" /></li>
    </ul>
  </form> -->
</template>

<script>
import RandomButton from "@/components/RandomButton.vue";
export default {
  components: {
    RandomButton,
  },
  data: () => ({
    menu: "",
  }),
  methods: {
    setRecipe(menu) {
      this.menu = menu;
      this.getRecipe();
    },
    getRecipe() {
      this.$emit("resetRecipe");
      this.$router.push(
        {
          path: "/",
          query: { menu: this.menu },
        },
        () => {}
      );
      this.$emit("getRecipe");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.container {
  margin: 0 auto;
}

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
h3 span {
  background: linear-gradient(transparent 70%, rgba(201, 67, 0, 0.6) 70%);
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
  background-color: rgb(212, 42, 42);
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin: 20px;
  z-index: 1000;
}

input#sbtn1:hover {
  color: #000;
}
</style>
