<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div class="container">
      <b-navbar-brand to="/" class="navbar-brand">Online Food</b-navbar-brand>

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
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>

            <b-nav-item v-b-modal.modal-login>ورود</b-nav-item>
            <b-nav-item v-b-modal.modal-register>ثبت نام</b-nav-item>
            <b-nav-item to="/product-list">List</b-nav-item>
            <b-nav-item to="/checkout-page">Checkout</b-nav-item>
            <b-nav-item to="/product-page">Product</b-nav-item>
            
            <!-- <li class="nav-item active">
              <a href="index.html" class="nav-link">Home</a>
            </li> -->
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown04"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Shop</a>
              <div class="dropdown-menu" aria-labelledby="dropdown04">
                <a class="dropdown-item" href="shop.html">Shop</a>
                <a class="dropdown-item" href="wishlist.html">Wishlist</a>
                <a class="dropdown-item" href="product-single.html">Single Product</a>
                <a class="dropdown-item" href="cart.html">Cart</a>
                <a class="dropdown-item" href="checkout.html">Checkout</a>
              </div>
            </li>
            <li class="nav-item">
              <a href="about.html" class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <a href="blog.html" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link">Contact</a>
            </li> -->
            <b-nav-item class="nav-item cta cta-colored"  to="cart">
              <span class="icon-shopping_cart"></span>[0]
            </b-nav-item>
          </b-navbar-nav>
        </div>
        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-navbar-nav>
            <b-nav-item v-b-modal.modal-login>ورود</b-nav-item>
            <b-nav-item v-b-modal.modal-register>ثبت نام</b-nav-item>
          </b-navbar-nav>

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>-->
      </b-collapse>
    </div>
        <signup/>
    <login/>
  </nav>
</template>


<script>
import signup from "@/components/signup.vue";
import login from "@/components/login.vue";
export default {
  components: {
    signup,
    login
  }
};
</script>

<style lang="scss" scoped>
</style>