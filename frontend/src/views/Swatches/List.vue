<template>
  <div>
    <h1>List of Swatches</h1>

    <loading-spin :visible="isLoading" />
    <error-display :error="error" />

    <card-grid :swatches="swatches" />
  </div>
</template>

<script>
import Api from "@/api";
import { getErrorMessage } from "@/utils";
import CardGrid from "@/components/CardGrid";
import LoadingSpin from "@/components/LoadingSpin";
import ErrorDisplay from "@/components/ErrorDisplay";

export default {
  components: {
    CardGrid,
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
  created() {
    return this.fetchList();
  },
  methods: {
    async fetchList() {
      try {
        this.swatches = [];
        this.isLoading = true;

        const swatches = await Api.findAll();
        this.swatches = swatches;
      } catch (err) {
        this.error = getErrorMessage(err);
      } finally {
        this.isLoading = false;
      }
    },
    async toggleActive(swatch) {
      await Api.toggleStatus(swatch);

      this.fetchList();
    }
  }
};
</script>
