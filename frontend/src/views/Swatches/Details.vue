<template>
  <div>
    <h1>Swatch Details</h1>

    <loading-spin :visible="isLoading" />
    <error-display :error="error" />

    <div class="row" v-if="swatch && !isLoading">
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

        <button class="btn btn-warning" @click="toggleStatus">
          {{ swatch.active ? "Inactivate" : "Activate" }}
        </button>
        <router-link :to="`/swatches/${id}/edit`" class="btn btn-info ml-2">
          Edit
        </router-link>
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
    await this.load();
  },
  methods: {
    async load() {
      try {
        this.isLoading = true;
        const data = await Api.findOne(this.id);
        this.swatch = data;
      } catch (err) {
        this.error = getErrorMessage(err);
      } finally {
        this.isLoading = false;
      }
    },
    async toggleStatus() {
      await Api.toggleStatus(this.swatch);

      await this.load();
    }
  }
};
</script>
