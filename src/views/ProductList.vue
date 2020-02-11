<template>
  <div>
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 mb-5 text-center">
            <ul class="product-category">
              <li>
                <a href="#" class="active">لیست غذا</a>
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
                <li :class="currentPage>1?'hand':''" @click="e=>currentPage>1 && loadProducts(currentPage-1)" >
                  <span>&lt;</span>
                </li>
                 <li v-for="p in pageCount" :key="p" :class="getPagerClass(p)" @click="loadProducts(p)" >
                  <span>{{p}}</span>
                </li>
                <li :class="currentPage<pageCount ?'hand':''" @click="e=>currentPage<pageCount && loadProducts(currentPage+1)">
                  <span>&gt;</span>
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
      currentPage: 1,
    };
  },
  methods: {
    loadProducts(pi) {
      productService.getProducts(8, pi -1).then((result) => {
         this.productList = result;
         this.currentPage = pi;
     });
    },
      getPagerClass(p) {
      return this.currentPage === p ? 'active' : 'hand';
    }
  },
  computed: {
    pageCount() {
      if (this.productList.total) {
        return Math.floor(this.productList.total/8)
      }
      return 0;
    }
  },
  mounted () {
     productService.getProducts(8, 0).then((result) => {
         this.productList = result;
     });
  },
};
</script>

<style lang="scss" scoped>
.hand {
  cursor: pointer;
}
</style>