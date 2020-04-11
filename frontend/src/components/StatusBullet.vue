<template>
  <div class="d-flex align-items-center">
    <span class="Bullet" :class="statusClass"></span>
    <span>{{ status ? "Active" : "Inactive" }}</span>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    statusClass() {
      return this.status ? "Bullet--active" : "Bullet--inactive";
    }
  }
};
</script>

<style lang="scss" scoped>
.Bullet {
  display: block;
  width: 10px;
  height: 10px;
  margin-right: 1rem;
  border-radius: 100%;
}

.Bullet--active {
  background-color: #0f0;
}

.Bullet--inactive {
  background-color: #f00;
}
</style>
