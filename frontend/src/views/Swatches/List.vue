<template>
  <div>
    <h1>List of Swatches</h1>

    <div class="row">
      <div class="col-4" v-for="swatch in swatches" :key="swatch.id">
        <swatch-card :swatch="swatch" />
      </div>
    </div>
  </div>
</template>

<script>
import ky from "ky";
import SwatchCard from "@/components/Card";

export default {
  components: {
    SwatchCard
  },
  async created() {
    const data = await ky.get("/api/swatches").json();
    this.swatches = data;
  },
  data() {
    return {
      swatches: []
    };
  }
};
</script>
