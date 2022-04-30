<template>
  <html>
    <header>
      <h1 class="title">レシピクラッシャー</h1>
    </header>
    <div id="app">
      <router-view />
    </div>
    <footer>@jack</footer>
  </html>
</template>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app {
  min-height: 100vh;
  max-height: 100%;
}
header {
  position: sticky;
  top: 0;
  text-align: center;
  padding: 0.5rem;
  background-color: darkcyan;
  z-index: 100;
}

.title {
  margin: 0;
  color: white;
  vertical-align: middle;
}

.title::before {
  content: url("@/assets/exclamation-diamond-fill.svg");
  margin: 0.5rem;
}

.title::after {
  content: url("@/assets/exclamation-diamond-fill.svg");
  margin: 0.5rem;
}

.container {
  margin: 0;
  width: 100%;
}

footer {
  position: sticky;
  bottom: 0;
  background-color: darkcyan;
  height: 30px;
  color: white;
}
</style>
