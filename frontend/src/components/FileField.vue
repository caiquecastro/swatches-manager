<template>
  <div>
    <input :id="id" type="file" class="form-control" @change="changeFile" />
    <img :src="value" class="img-thumbnail" v-if="value" />
    <error-display :error="error" class="mt-2" />
  </div>
</template>

<script>
import ErrorDisplay from "@/components/ErrorDisplay";

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default {
  components: {
    ErrorDisplay
  },
  props: {
    id: {},
    value: {},
    error: null
  },
  methods: {
    async changeFile(e) {
      this.error = null;
      const file = e.target.files[0];

      try {
        const imageDataUrl = await readFile(file);

        this.$emit("input", imageDataUrl);
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 500px;
  margin-top: 1rem;
}
</style>
