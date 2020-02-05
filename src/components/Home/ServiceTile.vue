<template>
  <div class="col-md-3 text-center d-flex align-self-stretch ftco-animate">
    <div class="media block-6 services mb-md-0 mb-4">
      <div class="icon d-flex justify-content-center align-items-center mb-2" :class="bgClass">
        <span :class="iconClass"></span>
      </div>
      <div class="media-body">
        <h3 class="heading">{{line1}}</h3>
        <span>{{line2}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgClass: String,
    iconClass: String,
    line1: String,
    line2: String,
  },
};
</script>

<style lang="scss" scoped>
</style>