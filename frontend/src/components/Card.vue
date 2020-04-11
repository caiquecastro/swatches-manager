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
        <status-bullet :status="swatch.active" />
      </p>
      <router-link
        :to="`/swatches/${swatch.id}`"
        class="btn btn-primary btn-sm"
      >
        Details
      </router-link>
    </div>
  </div>
</template>

<script>
import StatusBullet from "@/components/StatusBullet";

export default {
  components: {
    StatusBullet
  },
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
