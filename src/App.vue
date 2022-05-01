<template>
  <html>
    <header>
      <h1 class="title">レシピクラッシャー</h1>
    </header>
    <div id="app">
      <router-view />
    </div>
    <div
      class="d-flex justify-content-between position-sticky bottom-0 m-2"
      style="z-index: 500"
    >
      <img
        class="left"
        src="@/assets/gorori.png"
        width="240px"
        height="320px"
      />
      <img
        class="right"
        src="@/assets/gorori.png"
        width="240px"
        height="320px"
      />
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
  position: relative;
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
  background-color: rgb(201, 67, 0);
  z-index: 100;
}

.title {
  margin: 0;
  color: white;
  vertical-align: middle;
}

.title::before {
  content: url('@/assets/exclamation-diamond-fill.svg');
  margin: 0.5rem;
}

.title::after {
  content: url('@/assets/exclamation-diamond-fill.svg');
  margin: 0.5rem;
}

.container {
  margin: 0;
  width: 100%;
}

footer {
  position: sticky;
  bottom: 0;
  background-color: rgb(201, 67, 0);
  height: 30px;
  color: white;
}

img .left {
  display: flex;
  flex-direction: row;
  position: sticky;
  bottom: 0;
  left: 2;
  z-index: 200;
  margin: 2rem;
  margin-left: 4rem;
  text-align: left;
}

img .right {
  display: flex;
  flex-direction: row;
  position: sticky;
  bottom: 0;
  right: 0;
  z-index: 200;
  margin: 2rem;
  margin: 4rem;
  text-align: right;
}
</style>
