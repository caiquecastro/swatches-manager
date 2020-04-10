<template>
  <div>
    <h1>New Swatch</h1>

    <error-display :error="error" />

    <form action="/swatches" @submit.prevent="saveForm" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" />
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input
          id="price"
          type="text"
          class="form-control"
          v-model="form.price"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <input
          id="image"
          type="text"
          class="form-control"
          v-model="form.image"
        />
      </div>

      <div class="form-group">
        <label for="color">Color</label>
        <input
          type="text"
          class="form-control"
          id="color"
          v-model="form.color"
        />
      </div>

      <button class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script>
import api from "@/api";
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
        await api.post("swatches", { json: this.form }).json();

        this.$router.push("/swatches");
      } catch (err) {
        this.error = getErrorMessage(err);
      }
    }
  }
};
</script>
