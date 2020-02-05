<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center mb-3 pb-3">
        <div class="col-md-12 heading-section text-center ftco-animate">
          <span class="subheading">Featured Products</span>
          <h2 class="mb-4">Our Products</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-lg-3 ftco-animate"
          v-for="product in productList.items"
          :key="product.id"
        >
          <Product :item="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Product from "@/components/Product.vue";
import productService from "@/services/product.service.js";

export default {
  components: {
    Product
  },
  data() {
    return {
      productList: {}
    };
  },
  mounted() {
    productService.getProducts(4, 1).then(result => {
      this.productList = result;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>