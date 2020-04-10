<template>
  <div>
    <h1>Swatch Details</h1>

    <loading-spin :visible="isLoading" />
    <error-display :error="error" />

    <div class="row" v-if="swatch">
      <div class="col-8">
        <img :src="swatch.image" alt="" class="img-thumbnail" />
      </div>
      <div class="col-4">
        <dl>
          <dt>Name:</dt>
          <dd>{{ swatch.name }}</dd>

          <dt>Price:</dt>
          <dd>{{ swatch.price }}</dd>

          <dt>Color:</dt>
          <dd>{{ swatch.color }}</dd>

          <dt>Active</dt>
          <dd>{{ swatch.active }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/api";
import { getErrorMessage } from "@/utils";
import LoadingSpin from "@/components/LoadingSpin";
import ErrorDisplay from "@/components/ErrorDisplay";

export default {
  props: {
    id: {}
  },
  components: {
    LoadingSpin,
    ErrorDisplay
  },
  data() {
    return {
      error: null,
      isLoading: false,
      swatch: null
    };
  },
  async created() {
    try {
      this.isLoading = true;
      const data = await Api.findOne(this.id);
      this.swatch = data;
    } catch (err) {
      this.error = getErrorMessage(err);
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
