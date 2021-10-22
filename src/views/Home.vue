<template>
  <div class="home">
    <char-card />
  </div>
</template>

<script>
// @ is an alias to /src

import CharCard from "@/components/CharCard";
export default {
  name: 'Home',
  components: {
    CharCard

  }
}
</script>
