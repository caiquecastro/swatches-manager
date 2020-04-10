<template>
  <div id="app">
    <swatch-navbar />
    <div class="container py-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import SwatchNavbar from "@/components/Navbar";

export default {
  components: {
    SwatchNavbar
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
