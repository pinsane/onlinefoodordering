<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div class="container">
      <b-navbar-brand to="/" class="navbar-brand">سفارش آنلاین غذا</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <b-navbar-nav class="navbar-nav ml-auto">
            <b-nav-item  v-if="user" @click="logout">( {{user.name}} ) خروج</b-nav-item>
            <b-nav-item v-else v-b-modal.modal-login>ورود</b-nav-item>

            <!-- <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item> -->

            <b-nav-item to="/product-list">لیست غذا</b-nav-item>
            <!-- <b-nav-item to="/checkout-page">Checkout</b-nav-item>
            <b-nav-item to="/product/1">Product</b-nav-item> -->

            <b-nav-item class="nav-item cta cta-colored" to="/cart">
              <span class="icon-shopping_cart"></span>[{{cartCount}}]
            </b-nav-item>
          </b-navbar-nav>
        </div>
      </b-collapse>
    </div>
    <login />
  </nav>
</template>


<script>
import login from "@/components/login.vue";
export default {
  components: {
    login
  },
  computed: {
    user() {
      return this.$store.getters.currentUser;
    },
    cartCount() {
      if(this.$store.getters.cart.items.length === 0) {
        return 0;
      }
      return this.$store.getters.cart.items.reduce((a, b) => a + b.quantity, 0);
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>