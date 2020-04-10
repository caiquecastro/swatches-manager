<template>
  <div>
    <h1>List of Swatches</h1>

    <loading-spin :visible="isLoading" />
    <error-display :error="error" />

    <div class="row">
      <div class="col-4" v-for="swatch in swatches" :key="swatch.id">
        <swatch-card :swatch="swatch" />
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/api";
import { getErrorMessage } from "@/utils";
import SwatchCard from "@/components/Card";
import LoadingSpin from "@/components/LoadingSpin";
import ErrorDisplay from "@/components/ErrorDisplay";

export default {
  components: {
    SwatchCard,
    LoadingSpin,
    ErrorDisplay
  },
  data() {
    return {
      error: null,
      isLoading: false,
      swatches: []
    };
  },
  async created() {
    try {
      this.isLoading = true;

      const swatches = await Api.findAll();
      this.swatches = swatches;
    } catch (err) {
      this.error = getErrorMessage(err);
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
