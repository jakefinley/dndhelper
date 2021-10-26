<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
@import "assets/scss/variables";

* {
  box-sizing: border-box;
}

html {
  min-height: 100vh;
}

body {
  margin: 0;
  background: #333;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
  padding: 20px;

  // Fixes an issue with small images in the pan window
  .vue-pan-zoom-item,
  .vue-pan-zoom-scene {
      min-height: 730px;
  }
}
</style>
