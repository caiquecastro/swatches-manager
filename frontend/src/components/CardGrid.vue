<template>
  <div class="row">
    <div
      :key="swatch.id"
      v-for="swatch in swatches"
      class="col-12 col-md-4 col-lg-3"
    >
      <swatch-card :swatch="swatch" />
    </div>
  </div>
</template>

<script>
import SwatchCard from "@/components/Card";

export default {
  components: {
    SwatchCard
  },
  props: {
    swatches: {}
  }
};
</script>
