<template>
  <div v-if="user && user.role === 'admin'">
    <section class="ftco-section ftco-cart">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ftco-animate">
              <h3>مدیریت سایت</h3>
              

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>