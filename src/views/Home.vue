<template>
  <div class="home">
    <header>
      Character Card Generator
    </header>
    <main>
      <char-card />
      <char-controls />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import CharCard from "@/components/CharCard";
import CharControls from "@/components/CharControls";

export default {
  name: 'Home',
  components: {
    CharCard,
    CharControls
  }
}
</script>

<style scoped lang="scss">
  .home {
    max-width: 100%;
    padding: 20px;
    margin: auto;
    background: #888;
  }

  header {
    text-align: center;
    font-size: 200%;
    margin-bottom: 20px;
    color: #000;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 0;
  }
</style>