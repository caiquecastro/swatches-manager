<template>
  <div>
    <h1>New Swatch</h1>

    <error-display :error="error" />

    <form action="/swatches" @submit.prevent="saveForm" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          class="form-control"
          v-model="form.name"
          required
        />
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input
          id="price"
          type="text"
          class="form-control"
          v-model="form.price"
          required
        />
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
import ErrorDisplay from "@/components/ErrorDisplay";

export default {
  components: {
    ErrorDisplay
  },
  data() {
    return {
      error: null,
      form: {
        name: "",
        price: "",
        image: "",
        color: ""
      }
    };
  },
  methods: {
    async saveForm() {
      try {
        await Api.create(this.form);

        this.$router.push("/swatches");
      } catch (err) {
        this.error = getErrorMessage(err);
      }
    }
  }
};
</script>
