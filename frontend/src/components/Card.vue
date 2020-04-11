<template>
  <div class="card mb-2">
    <img
      :src="swatch.image"
      class="card-img-top"
      :alt="`${swatch.name} Swatch Image`"
    />
    <div class="card-body">
      <h5 class="card-title">{{ swatch.name }}</h5>
      <p class="card-text">
        Color: {{ swatch.color }} <br />
        Price: {{ swatch.price }}
      </p>
      <router-link
        :to="`/swatches/${swatch.id}`"
        class="btn btn-primary btn-sm"
      >
        Details
      </router-link>

      <button
        type="button"
        class="btn btn-sm ml-2"
        :class="statusButtonClass"
        @click="$emit('toggleActive')"
      >
        {{ swatch.active ? "Deactivate" : "Activate" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    swatch: {}
  },
  computed: {
    statusButtonClass() {
      return this.swatch.active ? "btn-warning" : "btn-success";
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 200px;
  object-fit: cover;
}
</style>
