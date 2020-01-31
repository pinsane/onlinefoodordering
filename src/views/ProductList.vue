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
          <div class="col-md-6 col-lg-3 ftco-animate" v-for="product in productList" :key="product.name">
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

export default {
  components: {
    Product
  },
  data() {
    return {
      productList: [
        {
          name: "غذای خوشمزه 8",
          price: 100,
          salePrice: 80,
          image: "images/product-1.jpg",
          discount: 30
        },
        {
          name: "غذای خوشمزه 7",
          salePrice: 80,
          image: "images/product-2.jpg",
          discount: 35
        },
        {
          name: "غذای خوشمزه 6",
          price: 10000,
          salePrice: 50,
          image: "images/product-3.jpg"
        },
        {
          name: "غذای خوشمزه 1",
          price: 2000,
          salePrice: 1000,
          image: "images/product-4.jpg",
          discount: 45
        },
        {
          name: "غذای خوشمزه 2",
          salePrice: 100,
          image: "images/product-5.jpg"
        },
        {
          name: "غذای خوشمزه 3",
          price: 200000,
          salePrice: 1000,
          image: "images/product-6.jpg"
        },
        {
          name: "غذای خوشمزه 4",
          price: 9999,
          salePrice: 666,
          image: "images/product-7.jpg"
        },
        {
          name: "غذای خوشمزه 5",
          salePrice: 1,
          image: "images/product-8.jpg"
        },
        {
          name: "غذای خوشمزه 9",
          salePrice: 1,
          image: "images/product-9.jpg"
        },
        {
          name: "غذای خوشمزه 10",
          salePrice: 1,
          image: "images/product-10.jpg"
        },
        {
          name: "غذای خوشمزه 11",
          salePrice: 1,
          image: "images/product-11.jpg"
        },
        {
          name: "غذای خوشمزه 12",
          salePrice: 1,
          image: "images/product-12.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>