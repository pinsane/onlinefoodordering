<template>
  <div>
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 mb-5 text-center">
            <ul class="product-category">
              <li>
                <a href="#" class="active">All</a>
              </li>
              <li>
                <a href="#">Vegetables</a>
              </li>
              <li>
                <a href="#">Fruits</a>
              </li>
              <li>
                <a href="#">Juice</a>
              </li>
              <li>
                <a href="#">Dried</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 ftco-animate" v-for="product in productList.items" :key="product.id">
            <Product :item="product" />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col text-center">
            <div class="block-27">
              <ul>
                <li>
                  <a href="#">&lt;</a>
                </li>
                <li class="active">
                  <span>1</span>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">&gt;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import productService from '@/services/product.service.js'

export default {
  components: {
    Product
  },
  data() {
    return {
      productList: {},
    };
  },
  mounted () {
     productService.getProducts(8, 0).then((result) => {
         this.productList = result;
     });
  },
};
</script>

<style lang="scss" scoped>
</style>