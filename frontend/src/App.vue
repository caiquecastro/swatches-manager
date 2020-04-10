<template>
  <div id="app" class="App">
    <swatch-navbar />
    <div class="container py-3 AppContainer">
      <router-view />
    </div>
    <swatch-footer />
  </div>
</template>

<script>
import SwatchNavbar from "@/components/Navbar";
import SwatchFooter from "@/components/Footer";

export default {
  components: {
    SwatchNavbar,
    SwatchFooter
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

html,
body,
.App {
  height: 100%;
}

.App {
  display: flex;
  flex-direction: column;
}

.AppContainer {
  flex: 1;
}
</style>
