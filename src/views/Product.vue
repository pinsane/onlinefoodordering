<template>
  <div>
    <HeaderImage />
    <section class="ftco-section">
      <div class="container" v-if="product">
        <div class="row">
          <div class="col-lg-6 mb-5 ftco-animate">
            <a :href="product.image" class="image-popup">
              <img :src="product.image" class="img-fluid" alt="Colorlib Template" />
            </a>
          </div>
          <div class="col-lg-6 product-details pl-md-5 ftco-animate">
            <h3>{{product.name}}</h3>
            
            <p class="price">
              <span>{{product.salePrice}} ریال</span>
            </p>
            <p>{{product.description}}</p>
            <div class="row mt-4">
           
              <div class="w-100"></div>
              <div class="input-group col-md-6 d-flex mb-3">
                <span class="input-group-btn mr-2">
                  <button
                    type="button" class="quantity-left-minus btn" @click="quantity++">
                    <i class="ion-ios-add"></i>
                  </button>
                </span>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  readonly
                  class="form-control input-number"
                  v-model="quantity"
                  min="1"
                  max="100"
                />
                <span class="input-group-btn ml-2">
                  <button type="button" class="quantity-right-plus btn" @click="e=>quantity>1 && quantity--">
                    <i class="ion-ios-remove"></i>
                  </button>
                </span>
              </div>
              <div class="w-100"></div>

            </div>
            <p>
              <a @click="addToCart" class="btn btn-black py-3 px-5"> افزودن به سبد خرید</a>
            </p>
          </div>
        </div>
      </div>
    </section>
     <section class="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
      <div class="container py-4">
        <div class="row d-flex justify-content-center py-5">
          <div class="col-md-6">
            <h2 style="font-size: 22px;" class="mb-0">در خبرنامه ما عضو شوید</h2>
            <span>برای اطلاع از اخرین پیشهادات و خدمات ویژه 
            </span>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <form action="#" class="subscribe-form">
              <div class="form-group d-flex">
                <input type="text" class="form-control" placeholder="ایمیل خود را وارد کنید" />
                <input type="submit" value="تایید" class="submit px-3" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import productService from '@/services/product.service.js'
import HeaderImage from "@/components/HeaderImage.vue";
export default {
  components: {
    HeaderImage
  },
  data() {
    return {
      product: null,
      quantity:1
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', {product:this.product, quantity:this.quantity});
    }
  },
  mounted () {
    productService.getProduct(this.$route.params.id).then((result) => {
         this.product = result;
     });
  },
};
</script>

<style lang="scss" scoped>
</style>