<template>
  <div class="spinner-border d-block m-auto" role="status" v-if="visible">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.spinner-border {
  width: 15rem;
  height: 15rem;
}
</style>
