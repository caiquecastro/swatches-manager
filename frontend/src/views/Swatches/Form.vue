<template>
  <div>
    <h1>{{ id ? "Edit Swatch" : "New Swatch" }}</h1>

    <error-display :error="error" />

    <form action="/swatches" @submit.prevent="saveForm" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" class="form-control" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input id="price" class="form-control" v-model="form.price" required />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <input
          id="image"
          type="text"
          class="form-control"
          v-model="form.image"
          required
        />
      </div>

      <div class="form-group">
        <label for="color">Color</label>
        <input
          type="color"
          class="form-control"
          id="color"
          v-model="form.color"
          required
        />
      </div>

      <button class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script>
import Api from "@/api";
import { getErrorMessage } from "@/utils";
import SwatchForm from "@/forms/SwatchForm";
import ErrorDisplay from "@/components/ErrorDisplay";

export default {
  components: {
    ErrorDisplay
  },
  props: {
    id: {}
  },
  data() {
    return {
      error: null,
      form: new SwatchForm()
    };
  },
  methods: {
    async loadForm() {
      if (!this.id) {
        return this.form.reset();
      }

      try {
        this.isLoading = true;
        const data = await Api.findOne(this.id);
        this.form.load(data);
      } catch (err) {
        this.error = getErrorMessage(err);
      } finally {
        this.isLoading = false;
      }
    },
    async saveForm() {
      try {
        await Api.save(this.form);

        this.$router.push("/swatches");
      } catch (err) {
        this.error = getErrorMessage(err);
      }
    }
  },
  watch: {
    id: {
      immediate: true,
      handler: "loadForm"
    }
  }
};
</script>
